import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getRecommendationsFromGemini } from './services/geminiService';
import { products } from './data/products';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // CORS Headers
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS preflight requests
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { query } = request.body;
    if (!query || typeof query !== 'string' || !query.trim()) {
      return response.status(400).json({ error: 'Product preference query is required and must be a string.' });
    }

    console.log(`Vercel function received query: "${query}"`);

    // Call Gemini recommendation service
    const geminiResult = await getRecommendationsFromGemini(query);

    // Match recommended names against catalog
    const matchedRecommendations = geminiResult.recommendations.map(rec => {
      const matchedProduct = products.find(product => {
        const normRec = rec.name.toLowerCase().replace(/[^a-z0-9]/g, "");
        const normProd = product.name.toLowerCase().replace(/[^a-z0-9]/g, "");
        return normRec === normProd || normProd.includes(normRec) || normRec.includes(normProd);
      });

      if (matchedProduct) {
        return {
          product: matchedProduct,
          reason: rec.reason,
          match_score: rec.match_score
        };
      }
      return null;
    }).filter((item): item is NonNullable<typeof item> => item !== null);

    console.log(`Matched ${matchedRecommendations.length} recommendations in serverless function.`);

    return response.status(200).json({
      query,
      analysis: geminiResult.analysis,
      recommendations: matchedRecommendations
    });
  } catch (error: any) {
    console.error("Vercel Serverless Function Error:", error);
    
    const errorMessage = error?.message || "";
    const status = error?.status || 500;
    
    let friendlyError = "Failed to fetch AI recommendations.";
    if (status === 503 || errorMessage.includes("503") || errorMessage.includes("high demand") || errorMessage.includes("UNAVAILABLE")) {
      friendlyError = "The Gemini AI model is currently experiencing high demand. Please try again in a few seconds.";
    } else if (status === 429 || errorMessage.includes("429") || errorMessage.includes("quota") || errorMessage.includes("RESOURCE_EXHAUSTED")) {
      friendlyError = "The AI rate limit or quota has been exceeded. Please wait a moment before trying again.";
    }

    return response.status(status === 503 || status === 429 ? status : 500).json({
      error: friendlyError,
      details: error?.message || "Internal server error"
    });
  }
}
