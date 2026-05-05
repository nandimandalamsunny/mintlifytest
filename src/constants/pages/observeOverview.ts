import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createLabelBlock,
  createCardGridBlock,
  createListBlock,
  createIconListBlock,
  createContentBlock,
  createImageBlock
} from "@/constants/docs";

export const OBSERVE_OVERVIEW_CONTENT: MainContentProps = {
  title: "Observe",

  description:
    "Know what happened, when it happened, and why. Observe acts as the intelligence layer of your system—capturing logs, aggregating metrics, and surfacing insights to help you debug faster and make confident decisions.",

  sections: [
    // =============================
    // OVERVIEW
    // =============================
    {
      id: "overview",
      blocks: [
        createContentBlock(
          "Observe continuously captures system activity across your build and deployment pipeline, transforming raw events into actionable insights without requiring any manual instrumentation."
        ),

        createCalloutBlock(
          "Observability is enabled by default. Every build and deployment generates logs and metrics automatically.",
          true
        )
      ]
    },

    // =============================
    // HOW IT WORKS
    // =============================
    {
      id: "how-it-works",
      title: "How observability works",
      blocks: [
        createContentBlock(
          "Every stage in your delivery lifecycle emits structured data. Revolte captures and correlates this data in real-time to provide a unified view of system behavior."
        ),

        createImageBlock("/images/docs/doc-info-1.png"),

        createListBlock("list", [
          "**Provisioning Data:** Capture infrastructure events during resource setup.",
          "**Build-time Logs:** Stream execution logs from build agents in real-time.",
          "**Deployment Metrics:** Track rollout success rates and performance.",
          "**Unified Context:** Automatically correlate logs, metrics, and deployments."
        ])
      ]
    },

    // =============================
    // DECISION FLOW
    // =============================
    {
      id: "observability-workflow",
      title: "From logs to metrics to decisions",
      blocks: [
        createContentBlock(
          "Observability is not just about visibility—it’s about enabling faster, more confident decisions."
        ),

        createListBlock("step", [
          "**Logs → Identify Issues:** Pinpoint failures instantly with structured logs.",
          "**Metrics → Detect Trends:** Understand impact across your system over time.",
          "**Insights → Make Decisions:** Use performance and delivery data to decide whether to fix, scale, or rollback."
        ])
      ]
    },

    // =============================
    // INSIGHTS LAYER (🔥 NEW)
    // =============================
    {
      id: "insights-layer",
      title: "Engineering insights layer",
      blocks: [
        createContentBlock(
          "Beyond raw logs and metrics, Revolte provides higher-level insights that help teams evaluate system performance, reliability, and engineering efficiency."
        ),

        createCardGridBlock([
          {
            title: "DORA metrics",
            desc: "Measure deployment frequency, lead time, failure rate, and recovery time.",
            href: "/platform/observe/metrics",
            cta: "View metrics"
          },
          {
            title: "Security",
            desc: "Identify vulnerabilities and risk exposure across your applications.",
            href: "#",
            cta: "Coming soon"
          },
          {
            title: "Maintainability",
            desc: "Understand code quality and long-term sustainability.",
            href: "#",
            cta: "Coming soon"
          },
          {
            title: "Productivity",
            desc: "Measure engineering output and delivery efficiency.",
            href: "#",
            cta: "Coming soon"
          }
        ])
      ]
    },

    // =============================
    // WHAT THIS ENABLES
    // =============================
    {
      id: "what-observe-enables",
      title: "Visibility that drives action",
      blocks: [
        createLabelBlock("What this enables"),

        createListBlock("list", [
          "**Faster debugging:** Pinpoint failures with searchable logs",
          "**Trend awareness:** Detect regressions early using metrics",
          "**Proactive alerts:** Identify issues before they impact users",
          "**Single source of truth:** Logs, metrics, and events in one place"
        ])
      ]
    },

    // =============================
    // CUSTOMIZATION
    // =============================
    {
      id: "customizing-view",
      title: "Customizing your view",
      blocks: [
        createContentBlock(
          "Customize your observability view to isolate issues faster and focus on the most relevant signals."
        ),

        createIconListBlock([
          {
            iconName: "server",
            title: "Service & instance selection",
            subItems: [
              "Backend services and APIs",
              "Databases and storage systems",
              "Not applicable for static sites"
            ]
          },
          {
            iconName: "clock",
            title: "Time range filtering",
            subItems: [
              "View last 5 minutes, 1 hour, or historical trends",
              "Auto-refresh based on selected duration"
            ]
          },
          {
            iconName: "target",
            title: "Interactive inspection",
            subItems: ["Hover over graphs to inspect exact values"]
          },
          {
            iconName: "download",
            title: "Export data",
            subItems: ["Download charts as CSV for deeper analysis"]
          }
        ])
      ]
    },

    // =============================
    // NEXT STEPS
    // =============================
    {
      id: "next-steps",
      blocks: [
        createLabelBlock("Next steps"),

        createCardGridBlock([
          {
            title: "Explore Logs",
            desc: "Search and filter build output",
            href: "/platform/observe/logs",
            cta: "Open logs"
          },
          {
            title: "Review Metrics",
            desc: "Track trends and system performance",
            href: "/platform/observe/metrics",
            cta: "View dashboard"
          }
        ])
      ]
    }
  ]
};
