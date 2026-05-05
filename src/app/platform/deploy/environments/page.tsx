import "./environments.css";
import Link from "next/link";
import { BadgeCheck, Eye, FlaskConical, Globe2, Rocket, Zap } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Environments",
  description:
    "Configure preview, QA, staging, and production environments for controlled application releases.",
  path: "/platform/deploy/environments",
  category: "Deploy",
  keywords: [
    "deployment environments",
    "staging environment",
    "production environment",
    "preview environment",
  ],
});

const stages = [
  {
    title: "Preview",
    desc: "Test changes instantly in isolated environments before merging.",
    color: "#8B5CF6",
    Icon: Eye
  },
  {
    title: "QA",
    desc: "Validate functionality and catch issues in a controlled setup.",
    color: "#06B6D4",
    Icon: FlaskConical
  },
  {
    title: "Staging",
    desc: "Verify production readiness in a real-world environment.",
    color: "#F59E0B",
    Icon: BadgeCheck
  },
  {
    title: "Production",
    desc: "Deliver stable, validated features to real users.",
    color: "#10B981",
    Icon: Globe2
  }
];

const envTypes = [
  {
    title: "Preview",
    badge: "EPHEMERAL",
    badgeColor: "#8B5CF6",
    desc: "Instant environments created for every change or pull request. Perfect for safely testing features and validating UI.",
    metadata: [
      { label: "LIFETIME", val: "Short-lived" },
      { label: "VISIBILITY", val: "Team / Stakeholders" }
    ],
    color: "#8B5CF6"
  },
  {
    title: "QA",
    badge: "TESTING",
    badgeColor: "#06B6D4",
    desc: "A controlled testing environment where teams validate functionality and ensure stability before release.",
    metadata: [
      { label: "LIFETIME", val: "Long-lived" },
      { label: "VISIBILITY", val: "Internal" }
    ],
    color: "#06B6D4"
  },
  {
    title: "Staging",
    badge: "PRE-PRODUCTION",
    badgeColor: "#F59E0B",
    desc: "A near-production environment that mirrors real conditions for final validation and performance checks.",
    metadata: [
      { label: "LIFETIME", val: "Long-lived" },
      { label: "VISIBILITY", val: "Internal" }
    ],
    color: "#F59E0B"
  },
  {
    title: "Production",
    badge: "LIVE",
    badgeColor: "#10B981",
    desc: "The live environment serving real users. Only fully validated and approved changes reach this stage.",
    metadata: [
      { label: "LIFETIME", val: "Long-lived" },
      { label: "VISIBILITY", val: "Public" }
    ],
    color: "#10B981"
  }
];

export default function EnvironmentsPage() {
  return (
    <div className="env-page">
      <div className="env-container">
        <h1 className="env-title">Environments</h1>

        <p className="env-subtitle">
          Define structured environments that give your team superpowers — build safely, track
          changes clearly, and deploy with confidence across every stage of your application
          lifecycle.
        </p>

        {/* WHAT ARE ENVIRONMENTS */}
        <section className="env-section">
          <h2 id="what-are-environments" className="env-heading">What are environments</h2>

          <p className="env-text">
            Environments let you control how your application evolves — from testing ideas to
            releasing them safely to users.
          </p>

          <p className="env-text">
            Each environment acts as a checkpoint where you can validate, track, and manage changes
            without risk.
          </p>

          {/* STAGES */}
          <div className="env-stages">
            {stages.map(({ Icon, ...stage }) => (
              <div key={stage.title} className="env-stage">
                <div
                  className="env-stage-icon"
                  style={{ borderColor: stage.color, color: stage.color }}
                >
                  <Icon size={20} strokeWidth={2.25} />
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* SUPER POWERS */}
          <div className="env-benefits">
            <div className="env-benefit">
              <div className="env-benefit-title">
                <span className="env-benefit-icon" aria-hidden="true">
                  <Zap size={18} strokeWidth={2.4} />
                </span>
                <h4>Easy to use</h4>
              </div>
              <p>No complex setup — environments are structured and ready out of the box.</p>
            </div>

            <div className="env-benefit">
              <div className="env-benefit-title">
                <span className="env-benefit-icon" aria-hidden="true">
                  <Eye size={18} strokeWidth={2.4} />
                </span>
                <h4>Easy to track</h4>
              </div>
              <p>Clearly see what is deployed, where it is running, and what changed.</p>
            </div>

            <div className="env-benefit">
              <div className="env-benefit-title">
                <span className="env-benefit-icon" aria-hidden="true">
                  <Rocket size={18} strokeWidth={2.4} />
                </span>
                <h4>Easy to deploy</h4>
              </div>
              <p>Move from testing to production seamlessly with controlled releases.</p>
            </div>
          </div>
        </section>

        {/* ENV TYPES */}
        <section className="env-section">
          <h2 id="environment-types" className="env-heading">Environment types</h2>

          <div className="env-table">
            {envTypes.map((env) => (
              <div key={env.title} className="env-row">
                <div className="env-main">
                  <div className="env-icon" style={{ borderColor: env.color, color: env.color }}>
                    ●
                  </div>

                  <div>
                    <div className="env-title-row">
                      <h3>{env.title}</h3>
                      <span className="env-badge" style={{ color: env.badgeColor }}>
                        {env.badge}
                      </span>
                    </div>

                    <p className="env-desc">{env.desc}</p>
                  </div>
                </div>

                <div className="env-meta">
                  {env.metadata.map((m) => (
                    <div key={m.label}>
                      <span className="env-meta-label">{m.label}</span>
                      <span className="env-meta-val">{m.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="env-cta">
          <div>
            <h3>Next steps</h3>
            <p>
              Start building your environment pipeline — structure your workflow, control
              deployments, and ship faster with confidence.
            </p>
          </div>

          <Link href="/platform/deploy/deploy-your-system" className="env-btn">
            Get started →
          </Link>
        </section>
      </div>
    </div>
  );
}
