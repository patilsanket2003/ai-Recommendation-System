/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Trash2 } from "lucide-react";
import ProductCard from "./ProductCard.tsx";
import { Product, products } from "../data/products.ts";

interface ProductListProps {
  onSelectProductQuery: (productName: string) => void;
  recommendedProductIds: string[];
}

export default function ProductList({
  onSelectProductQuery,
  recommendedProductIds,
}: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("default");

  const categories = ["All", "Phones", "Laptops", "Headphones", "Smartwatches"];

  // Search, filter, and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.specs.some((spec) => spec.toLowerCase().includes(term))
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sorting logic
    if (sortBy === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-desc") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSortBy("default");
  };

  return (
    <div id="product-catalog-section" className="space-y-8 py-4">
      {/* Catalog Title and Filtering Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-black/10 pb-6">
        <div>
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#7E7C75] uppercase block mb-1">
            EXPLORE THE STACK
          </span>
          <h2 className="text-2xl font-display font-bold text-black tracking-tight flex items-center gap-2">
            Predefined Hardware Catalog
          </h2>
          <p className="text-sm text-[#7E7C75] mt-1 font-sans">
            Browse through 100 handcrafted premium devices or run real-time conversational recommendation queries.
          </p>
        </div>

        {/* Counter */}
        <div className="text-xs font-mono font-semibold text-black bg-[#EFECE6] border border-black/15 px-3 py-1.5 rounded-lg self-start">
          INDEXED: {filteredAndSortedProducts.length} ARTICLES
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div id="catalog-controls" className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Search Input */}
        <div className="relative lg:col-span-4" id="catalog-search-container">
          <Search className="absolute left-3.5 top-3 h-4 w-4 text-black/50" />
          <input
            id="catalog-search-input"
            type="text"
            placeholder="Search catalog products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs font-mono rounded-xl border border-black/15 bg-white text-black outline-none transition-all duration-150 placeholder-black/40 focus:border-black focus:ring-2 focus:ring-black/5 hover:border-black/35"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 lg:col-span-5 no-scrollbar" id="category-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`tab-category-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3.5 py-2.5 text-[11px] font-mono font-bold uppercase tracking-tight transition-all duration-150 cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-black text-[#F8F6F0] border-black shadow-xs"
                  : "bg-white hover:bg-[#EFECE6] text-black border-black/10 hover:border-black/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="lg:col-span-3 flex gap-2" id="catalog-sort-container">
          <select
            id="catalog-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2.5 text-xs font-mono rounded-xl border border-black/15 bg-white text-black outline-none transition-all duration-150 focus:border-black focus:ring-2 focus:ring-black/5 cursor-pointer hover:border-black/35"
          >
            <option value="default">SORT: RELEVANCY</option>
            <option value="price-asc">PRICE: LOW TO HIGH</option>
            <option value="price-desc">PRICE: HIGH TO LOW</option>
            <option value="rating-desc">RATING: HIGHEST</option>
          </select>

          {/* Reset button if any filter is active */}
          {(searchTerm || selectedCategory !== "All" || sortBy !== "default") && (
            <button
              id="btn-reset-filters"
              onClick={resetFilters}
              title="Reset Filters"
              className="p-2.5 border border-black bg-white rounded-xl hover:bg-black hover:text-[#F8F6F0] text-black transition duration-150 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Grid of Product Cards */}
      {filteredAndSortedProducts.length > 0 ? (
        <div
          id="product-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredAndSortedProducts.map((product) => {
            const isMatch = recommendedProductIds.includes(product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAskAI={onSelectProductQuery}
                isRecommendation={isMatch}
              />
            );
          })}
        </div>
      ) : (
        <div
          id="catalog-empty-state"
          className="flex flex-col items-center justify-center py-20 text-center border border-black/10 rounded-2xl bg-white"
        >
          <SlidersHorizontal className="w-10 h-10 text-black/40 stroke-[1.5] mb-4" />
          <h3 className="text-sm font-mono font-bold text-black">NO CATALOG RESULTS</h3>
          <p className="text-xs text-[#7E7C75] mt-1.5 max-w-xs font-sans">
            No items match your active filters. Click reset query below to restore the catalog.
          </p>
          <button
            id="btn-empty-reset"
            onClick={resetFilters}
            className="mt-5 text-xs font-mono font-bold text-[#F8F6F0] bg-black border border-black px-4 py-2.5 rounded-xl shadow-xs hover:opacity-90 transition cursor-pointer"
          >
            RESET CATALOG FILTERS
          </button>
        </div>
      )}
    </div>
  );
}

