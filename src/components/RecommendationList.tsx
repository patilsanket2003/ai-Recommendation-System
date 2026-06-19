/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, RefreshCw, AlertCircle, HelpCircle, ShoppingBag } from "lucide-react";
import ProductCard from "./ProductCard.tsx";
import { Product, products } from "../data/products.ts";
import { AIAnalysis, RecommendedProduct } from "../App.tsx";

interface RecommendationListProps {
  isLoading: boolean;
  error: string | null;
  recommendations: RecommendedProduct[];
  analysis: AIAnalysis | null;
  userQuery: string | null;
  onAskAI: (productName: string) => void;
  onClear: () => void;
}

export default function RecommendationList({
  isLoading,
  error,
  recommendations,
  analysis,
  userQuery,
  onAskAI,
  onClear,
}: RecommendationListProps) {
  // Step indicator sequence text array
  const loadingSteps = [
    "Analyzing your shopping requirements...",
    "Searching matching products catalog...",
    "Generating AI recommendations..."
  ];
  const [loadingStepIndex, setLoadingStepIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      setLoadingStepIndex(0);
      interval = setInterval(() => {
        setLoadingStepIndex((prev) => (prev + 1) % loadingSteps.length);
      }, 1500);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isLoading]);

  // Extract top rated products as default alternative recommendations in empty/fallback state
  const topRatedProducts = useMemo(() => {
    return [...products].sort((a, b) => b.rating - a.rating).slice(0, 4);
  }, []);

  // Simple check to identify initial/idle state
  if (!isLoading && !error && !userQuery && recommendations.length === 0) {
    return (
      <div id="recommendation-intro" className="rounded-2xl border border-black/10 bg-white p-8 text-center max-w-2xl mx-auto space-y-4">
        <div className="mx-auto w-12 h-12 rounded-full bg-[#EFECE6] border border-black/5 flex items-center justify-center text-black">
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-display font-bold text-black uppercase tracking-tight">AI MATCHMAKER IDLE</h3>
          <p className="text-xs text-[#7E7C75] max-w-sm mx-auto leading-relaxed font-sans">
            Submit a query describing your requirements above, or click one of our preset example prompts to trigger the recommendation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="ai-recommendations-container" className="space-y-6">
      {/* Container Header */}
      <div className="flex items-center justify-between border-b border-black/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-black text-[#F8F6F0] border border-black">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-lg font-display font-bold text-black uppercase tracking-tight">
              AI Shopping Assistant
            </h2>
            {userQuery && (
              <p className="text-xs text-[#7E7C75] font-mono mt-0.5 max-w-xs md:max-w-lg truncate">
                PROMPT: "{userQuery}"
              </p>
            )}
          </div>
        </div>

        {/* Clear Button */}
        {(userQuery || error || recommendations.length > 0) && !isLoading && (
          <button
            id="btn-clear-recommendations"
            onClick={onClear}
            className="text-[10px] font-mono font-bold text-black border border-black bg-white hover:bg-[#EFECE6] rounded-xl px-3.5 py-2 transition duration-150 cursor-pointer"
          >
            CLEAR RESULTS
          </button>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* State 1: Loading Spinner / AI processing */}
        {isLoading && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-black bg-white"
            id="recommendation-loader"
          >
            <div className="relative flex items-center justify-center mb-5">
              <span className="absolute inline-flex h-14 w-14 rounded-full bg-black/5 animate-ping"></span>
              <div className="p-3.5 bg-black border border-black rounded-xl text-[#F8F6F0]">
                <RefreshCw className="w-5 h-5 animate-spin" />
              </div>
            </div>
            <h4 className="text-xs font-mono font-bold text-black tracking-wider uppercase mb-1">SECURE NEURAL PARSING ACTIVE</h4>
            <p className="text-sm font-display font-semibold text-black animate-pulse" id="loading-step-text">
              {loadingSteps[loadingStepIndex]}
            </p>
          </motion.div>
        )}

        {/* State 2: Error Notification */}
        {error && !isLoading && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="rounded-2xl border border-black bg-[#EFECE6]/50 p-6"
            id="recommendation-error"
          >
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold uppercase text-black">RECOMMENDATION FAULT</h4>
                <p className="text-xs text-[#7E7C75] leading-relaxed font-mono">{error}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* State 3: Complete Results */}
        {!isLoading && !error && userQuery && (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* AI Analysis Panel */}
            {analysis && (
              <div className="rounded-2xl border border-black bg-white p-6 font-sans text-black relative overflow-hidden" id="ai-analysis-panel">
                <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-black" />
                    <span className="font-mono font-bold text-xs uppercase tracking-wider text-black">AI Analysis & Understanding</span>
                  </div>
                  <span className="text-[10px] font-mono text-black/60 bg-[#EFECE6] px-2.5 py-0.5 rounded-md border border-black/5">GROUNDING: ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#7E7C75] uppercase tracking-wider block">DETECTED BUDGET</span>
                    <p className="text-sm font-mono font-bold text-black">{analysis.budget_detected || "Not specified"}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#7E7C75] uppercase tracking-wider block">DETECTED CATEGORY</span>
                    <p className="text-sm font-mono font-bold text-black">{analysis.category_detected || "Not specified"}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#7E7C75] uppercase tracking-wider block">AI UNDERSTANDING</span>
                    <p className="text-xs font-sans text-black/80 font-medium leading-relaxed">{analysis.user_need}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-black/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[11px] font-mono text-[#7E7C75]">
                  <span>USER INSTRUCTIONS INDEXED SECURELY</span>
                  <span className="text-black font-bold uppercase">Found {recommendations.length} matching products</span>
                </div>
              </div>
            )}

            {/* Recommendations Grid */}
            {recommendations.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-black/60 uppercase tracking-widest">
                  <span>RESOLVED MATCHES ({recommendations.length})</span>
                </div>

                {/* Grid listing the recommended cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="recommended-products-grid">
                  {recommendations.map((rec) => (
                    <ProductCard
                      key={rec.product.id}
                      product={rec.product}
                      onAskAI={onAskAI}
                      isRecommendation={true}
                      reason={rec.reason}
                      matchScore={rec.match_score}
                    />
                  ))}
                </div>
              </div>
            ) : (
              // State 4: Empty matching products - Show "No matching products found" and suggest popular alternatives
              <div className="space-y-8" id="recommendation-no-matches-container">
                <div
                  id="recommendation-no-matches"
                  className="flex flex-col items-center justify-center py-16 text-center rounded-2xl border border-black/10 bg-white"
                >
                  <HelpCircle className="w-10 h-10 text-black mb-3" />
                  <h4 className="text-xs font-mono font-bold text-black uppercase">No matching products found.</h4>
                  <p className="text-xs text-[#7E7C75] mt-1.5 max-w-sm font-sans leading-relaxed">
                    We couldn't find items that match all criteria in our current offline catalog index. Take a look at these popular options instead.
                  </p>
                </div>

                {/* Suggested Alternatives */}
                <div className="space-y-6" id="suggested-alternatives-zone">
                  <div className="flex items-center gap-2 border-b border-black/10 pb-4">
                    <ShoppingBag className="w-4.5 h-4.5 text-black" />
                    <h3 className="text-xs font-mono font-bold text-black uppercase tracking-wider">
                      Suggested Popular Alternatives
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {topRatedProducts.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onAskAI={onAskAI}
                        isRecommendation={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
