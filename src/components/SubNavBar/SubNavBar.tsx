"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Cpu, 
  Rocket, 
  Activity, 
  Shield, 
  LifeBuoy
} from "lucide-react";
import "./SubNavBar.css";
import { motion, AnimatePresence } from "framer-motion";

const platformSubLinks = [
  { 
    label: "Build", 
    href: "/platform/build",
    icon: Cpu
  },
  { 
    label: "Deploy", 
    href: "/platform/deploy",
    icon: Rocket
  },
  { 
    label: "Observe", 
    href: "/platform/observe",
    icon: Activity
  },
  { 
    label: "Control", 
    href: "/platform/control",
    icon: Shield
  },
  { 
    label: "Troubleshooting", 
    href: "/platform/troubleshooting",
    icon: LifeBuoy
  }
];


export default function SubNavBar() {
  const pathname = usePathname();

  // show only on platform routes
  const isPlatform = pathname.startsWith("/platform");

  return (
    <AnimatePresence mode="wait">
      {isPlatform && (
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="subnav-bar"
        >
          <div className="subnav-inner">
            {platformSubLinks.map((link) => {
              const isActive =
                link.href === "/platform/build"
                  ? pathname === "/platform" || pathname.startsWith("/platform/build")
                  : pathname.startsWith(link.href);

              const Icon = link.icon;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`subnav-link ${isActive ? "active" : ""}`}
                >
                  <Icon size={14} strokeWidth={isActive ? 2.5 : 2} className="subnav-icon" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
