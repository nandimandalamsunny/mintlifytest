import Link from "next/link";

import "./styles.css";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Troubleshooting",
  description:
    "Diagnose and resolve issues across builds, deployments, and runtime systems.",
  path: "/platform/troubleshooting",
  category: "Troubleshooting",
  keywords: [
    "troubleshooting",
    "debugging guide",
    "platform issues",
    "error diagnosis",
  ],
});

export default function TroubleshootingPage() {
  return (
    <div className="page-container">
      <span className="section-label">PLATFORM</span>

      <h1 id="troubleshooting" className="page-title">
        Troubleshooting
      </h1>

      <p className="page-subtitle">Identify issues quickly and resolve them with confidence.</p>

      <p className="page-description">
        Revolte automates your build and deployment workflows, but when something fails, this guide
        helps you pinpoint the issue, understand the root cause, and take corrective action.
      </p>

      {/* WHERE ISSUES OCCUR */}
      <div className="section-block">
        <h2 id="common-issues" className="section-title">
          Where issues typically occur
        </h2>

        <div className="card-grid-3">
          {[
            {
              title: "Build failures",
              desc: "Dependency issues, invalid configurations, or failed build commands.",
              href: "/platform/build",
              cta: "View Build"
            },
            {
              title: "Deployment errors",
              desc: "Service misconfiguration, port mismatch, or infrastructure limits.",
              href: "/platform/deploy",
              cta: "View Deploy"
            },
            {
              title: "Runtime issues",
              desc: "Application crashes, failed requests, or unexpected behavior in production.",
              href: "/platform/observe/logs",
              cta: "View Logs"
            }
          ].map((item, i) => (
            <div key={i} className="doc-card">
              <h3 className="doc-card-title">{item.title}</h3>
              <p className="doc-card-description">{item.desc}</p>
              <Link href={item.href} className="doc-card-link">
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* HOW TO DEBUG */}
      <div className="section-block">
        <h2 className="section-title">How to approach debugging</h2>

        <ul className="feature-list">
          <li className="feature-item">
            <span className="feature-icon-wrapper" />
            <span>
              <strong>Check logs first:</strong> Identify the exact error message or failure point.
            </span>
          </li>

          <li className="feature-item">
            <span className="feature-icon-wrapper" />
            <span>
              <strong>Validate configuration:</strong> Ensure ports, environment variables, and
              services are aligned.
            </span>
          </li>

          <li className="feature-item">
            <span className="feature-icon-wrapper" />
            <span>
              <strong>Review recent changes:</strong> Most issues are introduced by recent commits
              or config updates.
            </span>
          </li>

          <li className="feature-item">
            <span className="feature-icon-wrapper" />
            <span>
              <strong>Use metrics:</strong> Identify patterns such as spikes, failures, or degraded
              performance.
            </span>
          </li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div className="info-banner">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>

        <p className="info-banner-text">
          Enterprise plans include priority support with fast response times for critical incidents.
          You can access support options directly from your workspace.
        </p>
      </div>

      {/* NEXT STEPS */}
      <div className="section-block border-top">
        <p id="next-steps" className="section-eyebrow">
          NEXT STEPS
        </p>

        <div className="card-grid-2">
          {[
            {
              title: "Error reference",
              desc: "Detailed explanations of common errors and step-by-step fixes.",
              href: "/platform/troubleshooting/errors",
              cta: "View errors"
            },
            {
              title: "System status",
              desc: "Check platform-wide incidents and service availability.",
              href: "https://status.revolte.com",
              cta: "View status"
            }
          ].map((card, i) => (
            <div key={i} className="doc-card large">
              <h3 className="doc-card-title">{card.title}</h3>
              <p className="doc-card-description">{card.desc}</p>

              <Link
                href={card.href}
                className="doc-card-link"
                target={card.href.startsWith("http") ? "_blank" : undefined}
              >
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
