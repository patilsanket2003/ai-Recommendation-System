/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Sparkles, ArrowRight, Smartphone, Laptop, Headphones, Watch, ShoppingBag } from "lucide-react";
import ProductList from "./components/ProductList";
import RecommendationList from "./components/RecommendationList";
import { Product } from "../api/data/products";

export interface AIAnalysis {
  budget_detected: string;
  category_detected: string;
  user_need: string;
}

export interface RecommendedProduct {
  product: Product;
  reason: string;
  match_score: number;
}

export default function App() {
  const [queryInput, setQueryInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Recommendations states
  const [userQuery, setUserQuery] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [recommendations, setRecommendations] = useState<RecommendedProduct[]>([]);

  // Predefined example button triggers with premium subtle icons
  const promptExamples = [
    { text: "I want a phone under ₹30,000", icon: <Smartphone className="w-3 h-3 text-black" /> },
    { text: "Recommend a laptop for coding", icon: <Laptop className="w-3 h-3 text-black" /> },
    { text: "Suggest affordable headphones", icon: <Headphones className="w-3 h-3 text-black" /> },
    { text: "Best smartwatch for fitness", icon: <Watch className="w-3 h-3 text-black" /> },
  ];

  // Fetches AI recommendations from our backend server endpoint proxy
  const fetchRecommendations = async (customQuery?: string) => {
    const targetQuery = (customQuery || queryInput).trim();
    
    if (!targetQuery) {
      setError("Please describe what criteria or targets you are looking for first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setUserQuery(targetQuery);

    try {
      const response = await fetch("/api/recommendations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: targetQuery }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An unexpected error occurred while communicating with the server.");
      }

      setAnalysis(data.analysis || null);
      setRecommendations(data.recommendations || []);
    } catch (err: any) {
      console.error("Error retrieving recommendations:", err);
      setError(err?.message || "Failed to fetch AI recommendations. Please check your server or API configuration.");
      setAnalysis(null);
      setRecommendations([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Safe handler to submit input form
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetchRecommendations();
  };

  // Fills prompt input and submits instantly
  const handleExampleClick = (exampleText: string) => {
    setQueryInput(exampleText);
    fetchRecommendations(exampleText);
  };

  // Ask AI about a specific item
  const handleAskAIAboutProduct = (productName: string) => {
    const promptText = `Provide dynamic advantages of choosing "${productName}" or suggest alternatives.`;
    setQueryInput(promptText);
    fetchRecommendations(promptText);
    
    // Smoothly scroll to AI input box
    const element = document.getElementById("ai-search-card");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Clear query and recomendations state
  const handleClear = () => {
    setQueryInput("");
    setError(null);
    setUserQuery(null);
    setAnalysis(null);
    setRecommendations([]);
  };

  // Map product IDs currently matching recommendation for list matching indicator
  const recommendedProductIds = recommendations.map((r) => r.product.id);

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-black antialiased relative selection:bg-black selection:text-[#F8F6F0]" id="app-root-container">
      {/* Background Dotted Grid Pattern across the page */}
      <div className="dotted-grid absolute inset-0 z-0" />

      {/* Visual Header inspired by high end research labs */}
      <header className="sticky top-0 z-40 w-full border-b border-black/10 bg-[#F8F6F0]/90 backdrop-blur-md" id="app-header">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-[#F8F6F0] border border-black">
              <span className="font-mono font-bold text-xs">AI</span>
            </div>
            <div>
              <h1 className="text-sm font-display font-bold tracking-tight text-black flex items-center gap-1.5 leading-none">
                AI Product Recommendation System
              </h1>
              <p className="text-[9px] font-mono font-semibold text-[#7E7C75] tracking-widest mt-1 uppercase">
                MODEL: GEMINI-2.5-FLASH // RESEARCH DEPLOY
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-black font-semibold bg-[#EFECE6] px-3 py-1.5 rounded-lg border border-black/5">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>CATALOG_ITEMS_INDEX: 20 DEVS</span>
          </div>
        </div>
      </header>

      {/* Main Container Dashboard */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12 relative z-10" id="app-main-content">
        
        {/* Stark Hero Section Inspired by Rumik.ai Startup Page */}
        <div className="text-center max-w-3xl mx-auto space-y-6 py-4" id="hero-banner">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EFECE6] border border-black/10 px-3.5 py-1 text-[10px] font-mono font-bold text-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-black" /> Natural Language Hardware Decider
          </span>
          
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-black tracking-tighter leading-tight">
            Find hardware tools using <br />
            conversational AI indexing.
          </h2>
          
          <p className="text-xs sm:text-sm text-[#7E7C75] max-w-xl mx-auto leading-relaxed font-sans">
            Input category preferences, custom target pricing, or engineering goals. The AI system is trained to isolate corresponding assets from our verified offline product index.
          </p>

          {/* Prompt AI input area inside a clean rounded black-bordered card */}
          <div className="max-w-2xl mx-auto pt-6 text-left" id="ai-search-card">
            <div className="rounded-2xl border border-black/15 bg-white p-5 shadow-xs">
              <form onSubmit={handleFormSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-grow">
                  <input
                    id="user-preference-input"
                    type="text"
                    value={queryInput}
                    onChange={(e) => setQueryInput(e.target.value)}
                    placeholder="Describe budget/specs (e.g. phones under ₹30,000)"
                    disabled={isLoading}
                    className="w-full rounded-xl border border-black/15 bg-white py-3.5 pl-4 pr-12 text-xs font-mono text-black placeholder-black/35 outline-none transition duration-150 focus:border-black focus:ring-2 focus:ring-black/5"
                  />
                  {queryInput && (
                    <button
                      type="button"
                      onClick={() => setQueryInput("")}
                      className="absolute right-3.5 top-3.5 text-black/50 hover:text-black font-mono text-[10px] font-bold cursor-pointer"
                    >
                      CLEAR
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  id="btn-get-recommendations"
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-black px-6 py-3.5 text-xs font-mono font-bold text-[#F8F6F0] hover:bg-black/90 active:scale-[0.98] transition-all duration-150 disabled:opacity-40 cursor-pointer"
                >
                  <span>RUN QUERY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick Trigger Preset Prompts */}
              <div className="mt-5 border-t border-black/5 pt-4" id="prompts-pre-fills">
                <p className="text-[10px] font-mono font-bold text-[#7E7C75] uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
                  <span>SELECT PRESET QUERY DIRECTIVES:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {promptExamples.map((example, i) => (
                    <button
                      key={i}
                      type="button"
                      id={`example-prompt-${i}`}
                      onClick={() => handleExampleClick(example.text)}
                      disabled={isLoading}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-mono font-medium text-black bg-[#F8F6F0] hover:bg-[#EFECE6] border border-black/10 rounded-lg transition cursor-pointer"
                    >
                      {example.icon}
                      <span>{example.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommendations Results Display */}
        <div id="ai-results-zone" className="pt-4 max-w-7xl mx-auto">
          <RecommendationList
            isLoading={isLoading}
            error={error}
            recommendations={recommendations}
            analysis={analysis}
            userQuery={userQuery}
            onAskAI={handleAskAIAboutProduct}
            onClear={handleClear}
          />
        </div>

        {/* Full Interactive Product Catalog Display */}
        <div id="product-list-zone" className="pt-6">
          <ProductList
            onSelectProductQuery={handleAskAIAboutProduct}
            recommendedProductIds={recommendedProductIds}
          />
        </div>

      </main>


    </div>
  );
}

