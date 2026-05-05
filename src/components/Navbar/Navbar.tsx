"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { useSearch } from "@/hooks/useSearch";
import "./Navbar.css";
import { motion } from "framer-motion";

interface NavbarProps {
  onToggleMenu?: () => void;
}

const navLinks = [
  { label: "Overview", href: "/", matchPath: "/" },
  { label: "Platform", href: "/platform/build", matchPath: "/platform" },
  { label: "Enterprise", href: "#", matchPath: "#" },
  { label: "Integrations", href: "#", matchPath: "#" },
  { label: "API", href: "#", matchPath: "#" },
  { label: "Release Notes", href: "#", matchPath: "#" }
];

export default function Navbar({ onToggleMenu }: NavbarProps) {
  const pathname = usePathname();
  const { openSearch } = useSearch();

  const isNavLinkActive = (matchPath: string) => {
    if (matchPath === "#") return false;
    if (matchPath === "/") return pathname === "/" || pathname.startsWith("/home");
    return pathname.startsWith(matchPath);
  };

  const arrowVariants = {
    initial: { rotate: 0, x: 0, y: 0 },
    hover: { 
      rotate: -45, 
      x: 2, 
      y: -2 
    }
  };

  const buttonVariants = {
    initial: { 
      backgroundColor: "#FFFFFF", 
      color: "#000000",
      borderColor: "rgba(255, 255, 255, 0)"
    },
    hover: { 
      backgroundColor: "#08080F", 
      color: "#FFFFFF",
      borderColor: "rgba(139, 92, 246, 0.5)",
      boxShadow: "0 0 20px rgba(139, 92, 246, 0.15)"
    }
  };

  return (
    <nav className="navbar-sticky sticky top-0 z-[110] h-[var(--navbar-height)] w-full border-b border-white/8 bg-[#08080F]/75 backdrop-blur-md px-4 nav-container">
      <div className="navbar-inner flex h-full w-full items-center gap-0 px-7 xl:px-8">
        <Link href="/" className="navbar-brand flex items-center shrink-0 group">
          <Image
            src="/images/revolte-logo.svg"
            alt="Revolte Logo"
            width={114}
            height={20}
            className="h-[22px] w-auto"
            priority
          />
        </Link>
        <div className="navbar-divider hidden md:block h-7 w-px shrink-0 bg-white/12" />
        <div className="navbar-links hidden md:flex items-stretch h-full gap-0 flex-1">
          {navLinks.map((link) => {
            const isActive = isNavLinkActive(link.matchPath);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`navbar-link flex h-full items-center whitespace-nowrap text-[15px] font-medium transition-all duration-150 ${
                  isActive
                    ? "navbar-link--active text-foreground"
                    : "text-foreground/82 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="navbar-actions ml-auto flex items-center">
          <button
            type="button"
            onClick={openSearch}
            aria-label="Open documentation search"
            aria-haspopup="dialog"
            className="navbar-search hidden md:flex items-center justify-between border border-white/8 bg-white/[0.03] text-[13px] text-muted/60 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/15 rounded-lg focus-within:ring-1 focus-within:ring-[#8B5CF6]/50 focus-within:border-[#8B5CF6]/50 outline-none"
          >
            <span className="navbar-search-copy flex items-center gap-3">
              <Search className="shrink-0 text-muted/40" size={15} strokeWidth={2.4} />
              <span className="navbar-search-label">Search documentation...</span>
            </span>
            <span className="navbar-search-shortcut rounded-[6px] border border-white/10 px-1.5 py-0.5 bg-white/5">
              <span>⌘</span>K
            </span>
          </button>
          <motion.a
            href="https://console.revolte.ai/"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            transition={{ duration: 0.3 }}
            className="navbar-cta hidden md:flex items-center text-[14px] font-bold rounded-lg border px-4 py-2"
          >
            <span>Get Started</span>
            <motion.div 
              variants={arrowVariants}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex items-center justify-center ml-1"
            >
              <ArrowRight
                size={15}
                strokeWidth={2.2}
              />
            </motion.div>
          </motion.a>
          <button
            type="button"
            onClick={onToggleMenu}
            className="md:hidden p-2 text-foreground hover:bg-secondary-surface rounded-md transition-colors"
            aria-label="Toggle Menu"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
