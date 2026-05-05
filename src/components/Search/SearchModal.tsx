"use client";

import { useCallback, useEffect, useRef } from "react";
import type { KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FileText, CornerDownLeft, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/hooks/useSearch";
import { suggestedSearchResults } from "@/data/docs-index";
import "./SearchModal.css";

export default function SearchModal() {
  const router = useRouter();
  const {
    isOpen,
    query,
    setQuery,
    results,
    isSearching,
    selectedIndex,
    setSelectedIndex,
    closeSearch,
  } = useSearch();

  const inputRef = useRef<HTMLInputElement>(null);
  const trimmedQuery = query.trim();
  const visibleResults = trimmedQuery.length === 0 ? suggestedSearchResults : results;
  const showSuggestedResults = trimmedQuery.length === 0;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isOpen]);

  const goToResult = useCallback(
    (url: string) => {
      router.push(url);
      closeSearch();
    },
    [closeSearch, router]
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (visibleResults.length === 0) return;
      setSelectedIndex((prev) => (prev + 1) % visibleResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (visibleResults.length === 0) return;
      setSelectedIndex((prev) => (prev - 1 + visibleResults.length) % visibleResults.length);
    } else if (e.key === "Enter") {
      if (visibleResults[selectedIndex]) {
        goToResult(visibleResults[selectedIndex].url);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="search-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Search documentation"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="search-header">
              <Search className="search-icon" size={20} />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search documentation..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="search-input"
                aria-label="Search documentation"
              />
              <button
                type="button"
                className="search-close"
                onClick={closeSearch}
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </div>

            <div className="search-results custom-scrollbar">
              {isSearching ? (
                <div className="search-empty">Searching...</div>
              ) : visibleResults.length > 0 ? (
                <>
                  {showSuggestedResults && (
                    <div className="search-section-label">Suggested</div>
                  )}
                  {visibleResults.map((result, index) => (
                    <button
                      key={result.url}
                      type="button"
                      className={`search-item ${index === selectedIndex ? "active" : ""}`}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => goToResult(result.url)}
                    >
                      <div className="search-item-icon">
                        <FileText size={18} />
                      </div>
                      <div className="search-item-content">
                        <div className="search-item-title">{result.title}</div>
                        <div className="search-item-description">
                          {result.description}
                        </div>
                      </div>
                      {index === selectedIndex && (
                        <div className="search-item-enter" aria-hidden="true">
                          <CornerDownLeft size={14} />
                        </div>
                      )}
                    </button>
                  ))}
                </>
              ) : trimmedQuery.length >= 2 ? (
                <div className="search-empty">
                  No results found for <strong>{trimmedQuery}</strong>
                </div>
              ) : trimmedQuery ? (
                <div className="search-empty">
                  Keep typing to search documentation...
                </div>
              ) : null}
            </div>

            <div className="search-footer">
              <div className="footer-left">
                <span className="footer-label">Search by</span>
                <span className="footer-brand">Revolte Engine</span>
              </div>
              <div className="footer-right">
                <div className="kbd-hint">
                  <kbd>ESC</kbd> <span>Close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
