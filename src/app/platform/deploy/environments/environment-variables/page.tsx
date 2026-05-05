import Link from "next/link";
import {
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  RefreshCcw,
  ShieldCheck
} from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import "../environments.css";

export const metadata = createPageMetadata({
  title: "Environment Variables",
  description:
    "Manage environment-specific variables and secrets for preview, QA, staging, and production.",
  path: "/platform/deploy/environments/environment-variables",
  category: "Deploy",
  keywords: [
    "environment variables",
    "env vars",
    "secrets",
    "runtime configuration",
    "deployment configuration"
  ],
});

const practices = [
  {
    title: "Scope per environment",
    desc: "Keep preview, QA, staging, and production isolated so each deployment runs with the right credentials and endpoints.",
    color: "#8B5CF6",
    Icon: Layers3
  },
  {
    title: "Protect sensitive values",
    desc: "Store API keys, tokens, and private URLs as secrets with restricted access and clear ownership.",
    color: "#06B6D4",
    Icon: LockKeyhole
  },
  {
    title: "Roll out safely",
    desc: "Promote changes through lower-risk environments first so config issues show up before production.",
    color: "#10B981",
    Icon: ShieldCheck
  }
];

const variableGroups = [
  {
    title: "Runtime secrets",
    badge: "SENSITIVE",
    badgeColor: "#EF4444",
    desc: "Database passwords, private API keys, signing secrets, and webhook credentials used only at runtime.",
    metadata: [
      { label: "VISIBILITY", val: "Restricted" },
      { label: "ROTATION", val: "Regularly scheduled" }
    ],
    color: "#EF4444"
  },
  {
    title: "Public config",
    badge: "SAFE TO EXPOSE",
    badgeColor: "#F59E0B",
    desc: "Non-sensitive values such as public app URLs, analytics identifiers, and feature flags meant for the client.",
    metadata: [
      { label: "VISIBILITY", val: "Client / Server" },
      { label: "ROTATION", val: "As needed" }
    ],
    color: "#F59E0B"
  },
  {
    title: "Service endpoints",
    badge: "ENV-SPECIFIC",
    badgeColor: "#8B5CF6",
    desc: "Base URLs, storage endpoints, and integration hosts that differ between preview, staging, and production.",
    metadata: [
      { label: "VISIBILITY", val: "Team managed" },
      { label: "ROTATION", val: "On environment change" }
    ],
    color: "#8B5CF6"
  }
];

export default function EnvironmentVariablesPage() {
  return (
    <div className="env-page">
      <div className="env-container">
        <h1 className="env-title">Environment Variables</h1>

        <p className="env-subtitle">
          Configure secrets and runtime settings per environment so every deployment behaves
          predictably from preview through production.
        </p>

        <section className="env-section">
          <h2 className="env-heading">What they are</h2>

          <p className="env-text">
            Environment variables hold the values your application needs at build time and runtime,
            such as API keys, service endpoints, feature flags, and region-specific settings.
          </p>

          <p className="env-text">
            Keeping them tied to each environment gives you a clean way to test safely, promote
            changes gradually, and avoid leaking production settings into lower environments.
          </p>

          <div className="env-stages">
            {practices.map(({ Icon, ...item }) => (
              <div key={item.title} className="env-stage">
                <div
                  className="env-stage-icon"
                  style={{ borderColor: item.color, color: item.color }}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="env-section">
          <h2 className="env-heading">Secrets and secure values</h2>

          <p className="env-text">
            Secrets are the sensitive subset of environment variables: credentials, tokens, signing
            keys, and external service secrets that should never be committed to source control.
          </p>

          <p className="env-text">
            These values should stay masked in the interface and be injected into the runtime only
            where they are needed, so teams can manage configuration safely as the application
            evolves.
          </p>
        </section>

        <section className="env-section">
          <h2 className="env-heading">What to store here</h2>

          <div className="env-table">
            {variableGroups.map((group) => (
              <div key={group.title} className="env-row">
                <div className="env-main">
                  <div className="env-icon" style={{ borderColor: group.color, color: group.color }}>
                    <KeyRound size={18} strokeWidth={2.2} />
                  </div>

                  <div>
                    <div className="env-title-row">
                      <h3>{group.title}</h3>
                      <span className="env-badge" style={{ color: group.badgeColor }}>
                        {group.badge}
                      </span>
                    </div>

                    <p className="env-desc">{group.desc}</p>
                  </div>
                </div>

                <div className="env-meta">
                  {group.metadata.map((item) => (
                    <div key={item.label}>
                      <span className="env-meta-label">{item.label}</span>
                      <span className="env-meta-val">{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="env-section">
          <h2 className="env-heading">How teams usually manage them</h2>

          <div className="env-benefits">
            <div className="env-benefit">
              <div className="env-benefit-title">
                <span className="env-benefit-icon" aria-hidden="true">
                  <Globe2 size={18} strokeWidth={2.4} />
                </span>
                <h4>Match each environment</h4>
              </div>
              <p>Use different values for domains, APIs, and backing services in each stage.</p>
            </div>

            <div className="env-benefit">
              <div className="env-benefit-title">
                <span className="env-benefit-icon" aria-hidden="true">
                  <RefreshCcw size={18} strokeWidth={2.4} />
                </span>
                <h4>Rotate without downtime</h4>
              </div>
              <p>Update secrets in a controlled way so integrations keep working across releases.</p>
            </div>

            <div className="env-benefit">
              <div className="env-benefit-title">
                <span className="env-benefit-icon" aria-hidden="true">
                  <ShieldCheck size={18} strokeWidth={2.4} />
                </span>
                <h4>Limit who can edit</h4>
              </div>
              <p>Restrict sensitive changes to owners so configuration stays auditable and safe.</p>
            </div>
          </div>
        </section>

        <section className="env-cta">
          <div>
            <h3>Back to environments</h3>
            <p>
              Review the full environment lifecycle, then come back here when you need to define
              or update configuration per stage.
            </p>
          </div>

          <Link href="/platform/deploy/environments" className="env-btn">
            View overview →
          </Link>
        </section>
      </div>
    </div>
  );
}
