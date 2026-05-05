"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { searchIndex } from "@/data/docs-index";
import "./Pagination.css";

function normalizePath(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
}

export default function Pagination() {
  const pathname = normalizePath(usePathname());
  const currentIndex = searchIndex.findIndex((item) => normalizePath(item.url) === pathname);
  const prev = currentIndex > 0 ? searchIndex[currentIndex - 1] : undefined;
  const next =
    currentIndex >= 0 && currentIndex < searchIndex.length - 1
      ? searchIndex[currentIndex + 1]
      : undefined;

  if (!prev && !next) {
    return null;
  }

  return (
    <nav className="docs-pagination" aria-label="Docs pagination">
      {prev ? (
        <Link href={prev.url} className="docs-pagination-card docs-pagination-card--prev">
          <span className="docs-pagination-title">{prev.title}</span>
          <span className="docs-pagination-direction" aria-hidden="true">
            <ChevronLeft className="docs-pagination-arrow" size={18} strokeWidth={2.4} />
            Previous
          </span>
        </Link>
      ) : (
        <div className="docs-pagination-card docs-pagination-card--empty" aria-hidden="true" />
      )}

      {next ? (
        <Link href={next.url} className="docs-pagination-card docs-pagination-card--next">
          <span className="docs-pagination-title">{next.title}</span>
          <span className="docs-pagination-direction" aria-hidden="true">
            Next
            <ChevronRight className="docs-pagination-arrow" size={18} strokeWidth={2.4} />
          </span>
        </Link>
      ) : (
        <div className="docs-pagination-card docs-pagination-card--empty" aria-hidden="true" />
      )}
    </nav>
  );
}
