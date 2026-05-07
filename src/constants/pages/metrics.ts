import { MainContentProps } from "@/types/docs";
import {
  createContentBlock,
  createListBlock,
  createCardGridBlock,
  createCalloutBlock,
  createIconListBlock,
  createImageBlock
} from "@/constants/docs";

export const METRICS_CONTENT: MainContentProps = {
  title: "Metrics",
  description:
    "Track performance, resource usage, and system health across your global deployments in near real-time.",

  sections: [
    // =============================
    // INTRO
    // =============================
    {
      id: "introduction",
      blocks: [
        createContentBlock(
          "Metrics form the backbone of observability in Revolte, transforming raw system activity into structured, time-series data that helps teams understand performance, detect regressions, and make informed engineering decisions."
        ),
        createContentBlock(
          "Use Past Deployments to correlate metrics with specific releases."
        ),

        createCalloutBlock(
          "Metrics help answer critical questions: Is the system healthy? Did a deployment introduce regressions? Where are performance bottlenecks? How is the system trending over time?",
          false
        ),

        createCalloutBlock(
          "Metrics are collected automatically from every deployment—no manual instrumentation required.",
          true
        )
      ]
    },

    // =============================
    // DASHBOARD
    // =============================
    {
      id: "understanding-dashboard",
      title: "Understanding the metrics dashboard",
      blocks: [
        createContentBlock(
          "The metrics dashboard provides a real-time and historical view of system behavior, surfacing critical telemetry data from your infrastructure and applications."
        ),

        createImageBlock("/images/docs/doc-info-1.png"),

        createListBlock("list", [
          "**Resource Utilization:** Monitor CPU, memory, and disk I/O to identify bottlenecks early.",
          "**Network Throughput:** Track traffic patterns to detect latency spikes or anomalies.",
          "**Deployment Correlation:** Align performance changes with deployment timelines.",
          "**Anomaly Detection:** Identify abnormal patterns versus expected system behavior."
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
          "Focus on the most relevant signals by adjusting filters, time ranges, and service context to isolate issues faster."
        ),

        createImageBlock("/images/docs/doc-info-2.png"),

        createIconListBlock([
          {
            iconName: "server",
            title: "Service & Instance Selection",
            description:
              "Isolate backend services, databases, or specific components for targeted debugging."
          },
          {
            iconName: "clock",
            title: "Dynamic Time Ranges",
            description: "Analyze recent incidents or long-term trends for capacity planning."
          },
          {
            iconName: "target",
            title: "Interactive Inspection",
            description: "Hover over graphs to inspect exact values at specific timestamps."
          },
          {
            iconName: "download",
            title: "Export Data",
            description: "Download raw metrics as CSV for reporting or deeper analysis."
          }
        ])
      ]
    },

    // =============================
    // DORA METRICS
    // =============================
    {
      id: "engineering-insights",
      title: "Engineering insights (DORA metrics)",
      blocks: [
        createContentBlock(
          "Measure your team's delivery performance using industry-standard DORA metrics. These indicators help balance speed and system reliability."
        ),

        createImageBlock("/images/docs/doc-info-3.png"),

        createListBlock("list", [
          "**Deployment Frequency:** How often code is successfully released.",
          "**Lead Time for Changes:** Time from commit to production.",
          "**Change Failure Rate:** Percentage of deployments causing failures.",
          "**Mean Time to Recovery (MTTR):** Time taken to restore service after incidents."
        ]),

        createCalloutBlock(
          "High-performing teams continuously improve by increasing deployment frequency while reducing failure rate and recovery time.",
          false
        )
      ]
    },

    // =============================
    // EXTENDED INSIGHTS (NEW)
    // =============================
    {
      id: "extended-insights",
      title: "Beyond DORA: extended engineering insights",
      blocks: [
        createContentBlock(
          "Revolte extends beyond traditional metrics by providing deeper insights into system quality, security posture, and engineering productivity."
        ),

        createCardGridBlock([
          {
            title: "Security",
            desc: "Identify vulnerabilities and risk exposure across deployments.",
            href: "#",
            cta: "Coming soon"
          },
          {
            title: "Maintainability",
            desc: "Evaluate code quality, technical debt, and long-term sustainability.",
            href: "#",
            cta: "Coming soon"
          },
          {
            title: "Productivity",
            desc: "Measure engineering throughput and delivery efficiency.",
            href: "#",
            cta: "Coming soon"
          }
        ])
      ]
    },

    // =============================
    // DECISION FLOW
    // =============================
    {
      id: "decision-flow",
      title: "From logs to metrics to decisions",
      blocks: [
        createContentBlock(
          "Metrics become valuable when combined with logs and insights—enabling a structured workflow from detection to resolution."
        ),

        createListBlock("step", [
          "**Logs → Identify Issues:** Pinpoint the exact failure point.",
          "**Metrics → Detect Trends:** Understand system-wide impact.",
          "**Insights → Make Decisions:** Decide whether to rollback, scale, or optimize."
        ])
      ]
    },

    // =============================
    // ACCESS
    // =============================
    {
      id: "accessing-metrics",
      title: "Accessing metrics",
      blocks: [
        createListBlock("step", [
          "Navigate to your Workspace Dashboard after deployment.",
          "Select your Project and open the Application.",
          "Click on **Insights** from the top navigation."
        ])
      ]
    },

    // =============================
    // EMPTY STATE (NEW)
    // =============================
    {
      id: "empty-state",
      blocks: [
        createCalloutBlock(
          "No metrics yet? Data will automatically populate once your application starts receiving traffic or executing workloads.",
          true
        )
      ]
    }
  ]
};
