import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getRecommendationsFromGemini } from '../lib/geminiService';
import { products } from '../lib/products';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
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

    // Verify GEMINI_API_KEY exists at runtime
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing from environment variables.");
      return response.status(500).json({
        error: "Configuration Error",
        details: "GEMINI_API_KEY environment variable is missing on the Vercel server. Please configure it in your Vercel Project Settings."
      });
    }

    const { query } = request.body || {};
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
    console.error("CRITICAL VERCEL SERVERLESS FUNCTION ERROR:", error);
    return response.status(500).json({
      error: "Unhandled Runtime Exception",
      message: error?.message || "No error message",
      stack: error?.stack || "No stack trace available",
      env: {
        has_gemini_key: !!process.env.GEMINI_API_KEY,
        node_env: process.env.NODE_ENV,
      }
    });
  }
}
