"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SubNavBar.css";

const platformSubLinks = [
  { label: "Build", href: "/platform/build" },
  { label: "Deploy", href: "/platform/deploy" },
  { label: "Observe", href: "/platform/observe" },
  { label: "Control", href: "/platform/control" },
  { label: "Troubleshooting", href: "/platform/troubleshooting" }
];


export default function SubNavBar() {
  const pathname = usePathname();

  // show only on platform routes
  if (!pathname.startsWith("/platform")) return null;

  return (
    <div className="subnav-bar">
      <div className="subnav-inner">
        {platformSubLinks.map((link) => {
          const isActive =
            link.href === "/platform/build"
              ? pathname === "/platform" || pathname.startsWith("/platform/build")
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.label}
              href={link.href}
              className={`subnav-link ${isActive ? "active" : ""}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
