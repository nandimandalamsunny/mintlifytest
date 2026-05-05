"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import SubNavBar from "@/components/SubNavBar/SubNavBar";
import Sidebar from "@/components/Sidebar/Sidebar";
import TOC from "@/components/TOC/TOC";
import Pagination from "@/components/Pagination/Pagination";
import "./DocsLayout.css";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const hasSubNav = pathname.startsWith("/platform");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);


  return (
    <div className={`layout-container ${hasSubNav ? "layout-container--has-subnav" : ""}`}>
      <Navbar onToggleMenu={() => setMenuOpen((p) => !p)} />
      <SubNavBar />
      <div className="layout-content-wrapper">
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        <main className="layout-main docs-main-scroll">
          <div className="layout-grid">
            <article className="layout-article">
              {children}
              <Pagination />
            </article>
            <TOC />
          </div>
        </main>
      </div>
    </div>
  );
}
