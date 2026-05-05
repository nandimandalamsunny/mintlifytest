"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Sidebar.css";

interface SidebarItem {
  title: string;
  href?: string;
  type: "link" | "group";
  children?: SidebarItem[];
}

const sidebarSections: Record<string, { label: string; items: SidebarItem[] }[]> = {
  home: [
    {
      label: "HOME",
      items: [
        { title: "Welcome", href: "/home", type: "link" },
        { title: "What you can build", href: "/home/what-you-can-build", type: "link" },
        { title: "Quick Start", href: "/home/quickstart", type: "link" },
        {
          title: "Choose your path",
          type: "group",
          children: [
            { title: "CLI", href: "/platform/build/cli-workflow", type: "link" },
            { title: "Webflow", href: "/platform/build/web-workflow", type: "link" }
          ]
        }
      ]
    }
  ],
  "platform/build": [
    {
      label: "BUILD",
      items: [
        { title: "Overview", href: "/platform/build", type: "link" },
        {
          title: "Create your first feature",
          href: "/platform/build/create-your-first-feature",
          type: "link"
        },
        { title: "CLI workflow", href: "/platform/build/cli-workflow", type: "link" },
        { title: "Web workflow", href: "/platform/build/web-workflow", type: "link" },
        { title: "Review output", href: "/platform/build/review-output", type: "link" }
      ]
    }
  ],
  "platform/deploy": [
    {
      label: "DEPLOY",
      items: [
        { title: "Overview", href: "/platform/deploy", type: "link" },
        { title: "Deploy your system", href: "/platform/deploy/deploy-your-system", type: "link" },
        { title: "Preview", href: "/platform/deploy/preview", type: "link" },
        {
          title: "Environments",
          type: "group",
          children: [
            { title: "Overview", href: "/platform/deploy/environments", type: "link" },
            {
              title: "Environment Variables",
              href: "/platform/deploy/environments/environment-variables",
              type: "link"
            }
          ]
        },
        { title: "Past deployments", href: "/platform/deploy/past-deployments", type: "link" },
        { title: "Deployment Activity", href: "/platform/deploy/deployment-activity", type: "link" }
      ]
    }
  ],
  "platform/observe": [
    {
      label: "OBSERVE",
      items: [
        { title: "Overview", href: "/platform/observe", type: "link" },
        { title: "Logs", href: "/platform/observe/logs", type: "link" },
        { title: "Metrics", href: "/platform/observe/metrics", type: "link" }
      ]
    }
  ],
  "platform/control": [
    {
      label: "CONTROL",
      items: [
        { title: "Overview", href: "/platform/control", type: "link" },
        { title: "Users & Roles", href: "/platform/control/users-roles", type: "link" },
        { title: "Services", href: "/platform/control/services", type: "link" }
      ]
    }
  ],
  "platform/troubleshooting": [
    {
      label: "TROUBLESHOOTING",
      items: [
        { title: "Overview", href: "/platform/troubleshooting", type: "link" },
        { title: "Error Reference", href: "/platform/troubleshooting/errors", type: "link" }
      ]
    }
  ]
};

function getSidebarKey(pathname: string): string {
  if (pathname.startsWith("/platform/build")) return "platform/build";
  if (pathname.startsWith("/platform/deploy")) return "platform/deploy";
  if (pathname.startsWith("/platform/observe")) return "platform/observe";
  if (pathname.startsWith("/platform/control")) return "platform/control";
  if (pathname.startsWith("/platform/troubleshooting")) return "platform/troubleshooting";
  if (pathname.startsWith("/home")) return "home";
  return "home";
}

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const sectionKey = getSidebarKey(pathname);
  const sections = sidebarSections[sectionKey] ?? sidebarSections.home;
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const isLinkActive = (href?: string): boolean => {
    if (!href) return false;
    const [baseHref] = href.split("#");
    return pathname === baseHref;
  };

  const isGroupActive = (item: SidebarItem): boolean =>
    item.children?.some((child) => isLinkActive(child.href)) ?? false;

  const toggleGroup = (title: string) => {
    setOpenGroups((current) => ({
      ...current,
      [title]: !current[title]
    }));
  };

  return (
    <aside
      className={`sidebar-container ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div className="sidebar-inner">
        {sections.map((section) => (
          <div key={section.label} className="sidebar-section">
            <p className="sidebar-label">{section.label}</p>

            <div className="sidebar-links">
              {section.items.map((item) => {
                if (item.type === "group") {
                  const isActiveGroup = isGroupActive(item);
                  const isOpenGroup = openGroups[item.title] ?? isActiveGroup;

                  return (
                    <div
                      key={item.title}
                      className={`sidebar-group ${isActiveGroup ? "active" : ""}`}
                    >
                      <button
                        type="button"
                        className={`sidebar-link sidebar-link--group ${
                          isActiveGroup ? "active" : ""
                        }`}
                        onClick={() => toggleGroup(item.title)}
                        aria-expanded={isOpenGroup}
                      >
                        <span className="sidebar-indicator" />
                        <span>{item.title}</span>
                        <span
                          className={`sidebar-group-chevron ${
                            isOpenGroup ? "sidebar-group-chevron--open" : ""
                          }`}
                          aria-hidden="true"
                        >
                          ›
                        </span>
                      </button>

                      {isOpenGroup ? (
                        <div className="sidebar-children">
                          {item.children?.map((child) => {
                            const isChildActive = isLinkActive(child.href);

                            return (
                              <Link
                                key={child.href}
                                href={child.href ?? "#"}
                                onClick={onClose}
                                className={`sidebar-link sidebar-link--child ${
                                  isChildActive ? "active" : ""
                                }`}
                              >
                                <span className="sidebar-indicator" />
                                {child.title}
                              </Link>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                }

                const isActive = isLinkActive(item.href);

                return (
                  <Link
                    key={item.href ?? item.title}
                    href={item.href ?? "#"}
                    onClick={onClose}
                    className={`sidebar-link ${isActive ? "active" : ""}`}
                  >
                    <span className="sidebar-indicator" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
