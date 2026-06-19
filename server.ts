/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { getRecommendationsFromGemini } from "./src/services/geminiService.ts";
import { products } from "./src/data/products.ts";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parsing middleware
  app.use(express.json());

  // API endpoints
  app.post("/api/recommendations", async (req, res) => {
    try {
      const { query } = req.body;
      if (!query || typeof query !== "string" || !query.trim()) {
        return res.status(400).json({ error: "Product preference query is required and must be a string." });
      }

      console.log(`Received preference query: "${query}"`);

      // Invoke the Gemini recommendation logic securely on the server
      const geminiResult = await getRecommendationsFromGemini(query);
      console.log("Gemini structured result:", JSON.stringify(geminiResult, null, 2));

      // Match the recommended product names against the local product catalog
      // We perform robust, lowercased, and trimmed exact matching or substring clean matches
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

      console.log(`Matched ${matchedRecommendations.length} recommendations from catalog.`);

      return res.json({
        query,
        analysis: geminiResult.analysis,
        recommendations: matchedRecommendations
      });
    } catch (error: any) {
      console.error("Express API error in recommendations:", error);
      
      const errorMessage = error?.message || "";
      const status = error?.status || 500;
      
      let friendlyError = "Failed to fetch AI recommendations.";
      if (status === 503 || errorMessage.includes("503") || errorMessage.includes("high demand") || errorMessage.includes("UNAVAILABLE")) {
        friendlyError = "The Gemini AI model is currently experiencing high demand. Please try again in a few seconds.";
      } else if (status === 429 || errorMessage.includes("429") || errorMessage.includes("quota") || errorMessage.includes("RESOURCE_EXHAUSTED")) {
        friendlyError = "The AI rate limit or quota has been exceeded. Please wait a moment before trying again.";
      }

      return res.status(status === 503 || status === 429 ? status : 500).json({
        error: friendlyError,
        details: error?.message || "Internal server error"
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", time: new Date() });
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite live compiler...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AI Recommendation Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
