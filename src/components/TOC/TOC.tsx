"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import "./TOC.css";

import { Compass } from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function TOC() {
  const pathname = usePathname();
  const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, (value) => value / 3);

  const shouldExcludeHeading = (element: Element) => {
    return Boolean(
      element.classList.contains("doc-card-title") ||
        element.classList.contains("wycb-card-title") ||
        element.classList.contains("icon-list-title") ||
        element.closest(".env-stage") ||
        element.closest(".env-title-row") ||
        element.closest(".env-cta")
    );
  };

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const els = Array.from(document.querySelectorAll(".layout-article h1, .layout-article h2, .layout-article h3"))
        .filter((el) => !shouldExcludeHeading(el));
      
      const items = els.map((el) => {
        if (!el.id) {
          el.id = slugify(el.textContent || "heading");
        }
        return {
          id: el.id,
          text: el.textContent || "",
          level: parseInt(el.tagName[1]),
        };
      });

      setHeadings(items);
      if (items.length > 0) {
        setActiveId(items[0].id);
      }

      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          const visible = entries.filter((e) => e.isIntersecting);
          if (visible.length > 0) {
            const sorted = visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            setActiveId(sorted[0].target.id);
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
      );

      els.forEach((el) => observerRef.current?.observe(el));
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  if (headings.length === 0) return null;

  return (
    <aside className="toc-wrapper" aria-label="Table of contents">
      <div className="toc-header">
        <motion.div style={{ rotate }} className="flex items-center justify-center">
          <Compass 
            size={15} 
            className="toc-header-icon" 
            strokeWidth={2.2} 
          />
        </motion.div>
        <p className="toc-label">On this page</p>
      </div>
      <ul className="toc-list">
        {headings.map((h, i) => (
          <li key={`${h.id}-${i}`}>
            <a
              href={`#${h.id}`}
              className={`toc-link ${h.level === 3 ? "toc-link--nested" : ""} ${
                activeId === h.id ? "toc-link--active" : ""
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
