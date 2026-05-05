"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useDeferredValue,
  useEffect,
  useState,
} from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { SearchResult } from "@/utils/search";

interface SearchContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  query: string;
  setQuery: (query: string) => void;
  results: SearchResult[];
  isSearching: boolean;
  selectedIndex: number;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const deferredQuery = useDeferredValue(query);

  const openSearch = useCallback(() => {
    setIsOpen(true);
    setSelectedIndex(0);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
    setIsSearching(false);
    setSelectedIndex(0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }

      if (isOpen && e.key === "Escape") {
        closeSearch();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeSearch, isOpen, openSearch]);

  useEffect(() => {
    const trimmedQuery = deferredQuery.trim();
    let isActive = true;

    if (trimmedQuery.length < 2) {
      startTransition(() => {
        setResults([]);
        setIsSearching(false);
        setSelectedIndex(0);
      });

      return;
    }

    startTransition(() => {
      setIsSearching(true);
    });

    void import("@/utils/search")
      .then(({ performSearch }) => {
        if (!isActive) return;

        const searchResults = performSearch(trimmedQuery);

        startTransition(() => {
          setResults(searchResults);
          setIsSearching(false);
          setSelectedIndex(0);
        });
      })
      .catch(() => {
        if (!isActive) return;

        startTransition(() => {
          setResults([]);
          setIsSearching(false);
          setSelectedIndex(0);
        });
      });

    return () => {
      isActive = false;
    };
  }, [deferredQuery]);

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        setIsOpen,
        query,
        setQuery,
        results,
        isSearching,
        selectedIndex,
        setSelectedIndex,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
