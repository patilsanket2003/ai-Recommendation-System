/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Smartphone, Laptop, Headphones, Watch, Star, ArrowUpRight } from "lucide-react";
import { Product } from "../../api/data/products";

interface ProductCardProps {
  product: Product;
  onAskAI?: (productName: string) => void;
  isRecommendation?: boolean;
  reason?: string;
  matchScore?: number;
  key?: string | number;
}

export default function ProductCard({
  product,
  onAskAI,
  isRecommendation = false,
  reason,
  matchScore,
}: ProductCardProps) {
  // Select icon based on category
  const getCategoryIcon = () => {
    switch (product.category) {
      case "Phones":
        return <Smartphone className="w-4 h-4" />;
      case "Laptops":
        return <Laptop className="w-4 h-4" />;
      case "Headphones":
        return <Headphones className="w-4 h-4" />;
      case "Smartwatches":
        return <Watch className="w-4 h-4" />;
    }
  };

  return (
    <motion.div
      id={`product-card-${product.id}`}
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white transition-all duration-300 ${
        isRecommendation
          ? "border-2 border-black ring-4 ring-black/5"
          : "border border-black/10 hover:border-black/30"
      }`}
    >
      {/* Category Indicator Badge and Recommendation Label */}
      <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-1.5">
        <span
          id={`category-badge-${product.id}`}
          className="flex items-center gap-1.5 rounded-full border border-black/80 bg-[#F8F6F0] px-2.5 py-0.5 text-[11px] font-mono font-medium tracking-tight text-black"
        >
          {getCategoryIcon()}
          {product.category}
        </span>

        {isRecommendation && (
          <span
            id={`rec-match-badge-${product.id}`}
            className="flex items-center gap-1.5 rounded-full bg-black px-2.5 py-0.5 text-[11px] font-mono font-bold text-[#F8F6F0]"
          >
            AI RECOMMENDATION
          </span>
        )}

        {matchScore !== undefined && (
          <span
            id={`match-score-badge-${product.id}`}
            className="flex items-center gap-1.5 rounded-full bg-[#EFECE6] border border-black px-2.5 py-0.5 text-[11px] font-mono font-bold text-black"
          >
            Match Score: {matchScore}%
          </span>
        )}
      </div>

      {/* Visual Header / Micro-Grid Card Preview */}
      <div
        id={`product-img-${product.id}`}
        className="h-44 w-full bg-[#EFECE6] border-b border-black/10 select-none relative group overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Soft overlay gradient style */}
        <div className="absolute inset-0 bg-linear-to-t from-black/25 to-transparent pointer-events-none"></div>
      </div>

      {/* Product Information Body */}
      <div className="flex flex-col flex-grow p-5" id={`product-info-${product.id}`}>
        
        {/* Title and Pricing with clean alignment spacing */}
        <div className="flex items-start justify-between gap-2.5 mb-1.5">
          <h3 className="font-display font-bold text-black tracking-tight line-clamp-1 text-base group-hover:underline" title={product.name}>
            {product.name}
          </h3>
          <span className="text-base font-display font-bold text-black bg-black/5 px-2 py-0.5 rounded-md text-nowrap" id={`price-${product.id}`}>
            ₹{product.price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Rating Meter (Monochrome design styled to look premium) */}
        <div className="flex items-center gap-1.5 mb-3" id={`rating-${product.id}`}>
          <div className="flex text-black">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-black text-black"
                    : "text-black/20"
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] font-mono text-black/60 font-semibold">{product.rating}</span>
        </div>

        {/* Shortened target description block */}
        <p className="text-xs text-black/70 line-clamp-3 mb-4 leading-relaxed font-sans">
          {product.description}
        </p>

        {/* AI Reason for Recommendation */}
        {reason && (
          <div className="mb-4 p-3 bg-[#EFECE6]/50 border border-black/10 rounded-xl font-sans text-xs text-black/90" id={`reason-${product.id}`}>
            <span className="font-mono font-bold text-[9px] tracking-wider text-black block mb-1 uppercase">Recommended because:</span>
            {reason}
          </div>
        )}

        {/* Specifications Pill List */}
        <div className="flex flex-wrap gap-1 mb-5" id={`specs-${product.id}`}>
          {product.specs.map((spec, index) => (
            <span
              key={index}
              className="rounded-md bg-[#F8F6F0] border border-black/5 px-2 py-0.5 text-[10px] font-mono font-medium text-black/80"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Inquiry Trigger Handler */}
        {onAskAI && (
          <button
            id={`btn-ask-ai-${product.id}`}
            onClick={() => onAskAI(product.name)}
            className={`w-full flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-4 text-xs font-mono font-semibold tracking-tight transition-all duration-150 cursor-pointer ${
              isRecommendation
                ? "bg-black text-[#F8F6F0] hover:bg-black/90 shadow-sm"
                : "bg-transparent border border-black text-black hover:bg-black hover:text-[#F8F6F0]"
            }`}
          >
            <span>Inquire AI Assistant</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </motion.div>
  );
}

