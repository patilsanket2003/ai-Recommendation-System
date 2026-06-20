/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { products } from "./products";

/**
 * Initializes the official Google Gen AI Client.
 * Note: Under the full-stack architecture, this client is instantiated on the server
 * where process.env.GEMINI_API_KEY is available. It is never exposed to the client.
 */
let aiClient: GoogleGenAI | null = null;

export function getGenAIClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing on the server.");
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

export interface AIRecommendationResult {
  analysis: {
    budget_detected: string;
    category_detected: string;
    user_need: string;
  };
  recommendations: Array<{
    name: string;
    reason: string;
    match_score: number;
  }>;
}

/**
 * Sends the user query and product catalog to Gemini and gets structured recommendations.
 */
export async function getRecommendationsFromGemini(userQuery: string): Promise<AIRecommendationResult> {
  try {
    const ai = getGenAIClient();
    
    const prompt = `You are a product recommendation assistant.
    
Recommend products ONLY from the provided product list.

PRODUCTS:
${JSON.stringify(products.map(p => ({ name: p.name, category: p.category, price: p.price, description: p.description, specs: p.specs })))}

USER REQUEST:
${userQuery}

Rules:
1. Recommend only products that exist in the product list.
2. Match category, budget, and user requirements.
3. For each recommended product, provide a specific, detailed reason explaining why it is a good match based on its specifications, price, and category relative to the user query.
4. Calculate an integer match score from 0 to 100 representing how well the product aligns with the user's intent.
5. In the analysis object, identify the user's budget (e.g. ₹30,000 or 'Not specified'), the category (e.g. Phones, Laptops, Headphones, Smartwatches), and the user_need summary.
6. Return valid JSON only.

Format:
{
  "analysis": {
    "budget_detected": "₹30,000",
    "category_detected": "Phones",
    "user_need": "Best performance phone"
  },
  "recommendations": [
    {
      "name": "OnePlus 12",
      "reason": "Flagship performance, excellent battery life and fits within your budget.",
      "match_score": 95
    }
  ]
}`;

    let response;
    let attempts = 0;
    const maxAttempts = 3;
    let delay = 1000; // start with 1 second delay

    while (attempts < maxAttempts) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
          config: {
            systemInstruction: "You are an assistant that analyzes user shopping preferences and selects matching items from a catalog.",
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                analysis: {
                  type: Type.OBJECT,
                  properties: {
                    budget_detected: {
                      type: Type.STRING,
                      description: "The budget limit detected in user request, e.g. '₹30,000' or 'Under ₹30,000' or 'Not specified'",
                    },
                    category_detected: {
                      type: Type.STRING,
                      description: "The product category detected, e.g. 'Phones', 'Laptops', 'Headphones', 'Smartwatches'",
                    },
                    user_need: {
                      type: Type.STRING,
                      description: "A summary of user's core shopping need or requirements, e.g. 'Best performance phone'",
                    },
                  },
                  required: ["budget_detected", "category_detected", "user_need"],
                },
                recommendations: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      name: {
                        type: Type.STRING,
                        description: "The exact name of the product matching the catalog product list.",
                      },
                      reason: {
                        type: Type.STRING,
                        description: "A detailed explanation of why this product fits the user requirements, including performance, pricing, or specifications.",
                      },
                      match_score: {
                        type: Type.INTEGER,
                        description: "An integer match score (0-100) representing how well the product fits the user needs.",
                      },
                    },
                    required: ["name", "reason", "match_score"],
                  },
                  description: "A list of recommended products with reasons and match scores.",
                },
              },
              required: ["analysis", "recommendations"],
            },
          },
        });
        break; // Success! Break out of the loop.
      } catch (err: any) {
        attempts++;
        // Check if the error status is 503 (service unavailable/high demand) or 429 (rate limit)
        const status = err.status || (err.message && err.message.includes("503") ? 503 : err.message && err.message.includes("429") ? 429 : 0);
        const isRetryable = status === 503 || status === 429;
        
        if (attempts >= maxAttempts || !isRetryable) {
          console.error(`Gemini API error (attempt ${attempts}/${maxAttempts}), non-retryable or max retries reached:`, err);
          throw err;
        }

        console.warn(`Gemini API call failed with status ${status} (attempt ${attempts}/${maxAttempts}). Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2; // Exponential backoff
      }
    }

    if (!response) {
      throw new Error("Failed to get response from Gemini API after retries.");
    }

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Empty response from Gemini API.");
    }

    const data = JSON.parse(responseText.trim()) as AIRecommendationResult;
    if (data && data.analysis && Array.isArray(data.recommendations)) {
      return data;
    }
    
    throw new Error("Invalid response format from Gemini API.");
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
}
