import Fuse from "fuse.js";
import type { IFuseOptions } from "fuse.js";
import { searchIndex, type SearchResult } from "@/data/docs-index";

export type { SearchResult } from "@/data/docs-index";

const options: IFuseOptions<SearchResult> = {
  keys: [
    { name: "title", weight: 0.42 },
    { name: "keywords", weight: 0.34 },
    { name: "category", weight: 0.14 },
    { name: "description", weight: 0.1 },
  ],
  threshold: 0.38,
  ignoreLocation: true,
  minMatchCharLength: 2,
  shouldSort: true,
};

const fuse = new Fuse<SearchResult>(searchIndex, options);

export const performSearch = (query: string, limit = 8): SearchResult[] => {
  const trimmedQuery = query.trim();

  if (trimmedQuery.length < 2) {
    return [];
  }

  return fuse.search(trimmedQuery, { limit }).map((result) => result.item);
};
