import { MainContentProps } from "@/types/docs";
import {
  createContentBlock,
  createListBlock,
  createImageBlock,
  createTableBlock,
  createCalloutBlock
} from "@/constants/docs";

export const LOGS_OVERVIEW_CONTENT: MainContentProps = {
  title: "Logs",
  description:
    "Inspect everything from deployment execution to live application behavior. Logs in Revolte give you precise, real-time visibility across the entire delivery lifecycle.",

  sections: [
    {
      id: "types-of-logs",
      title: "Types of logs",
      blocks: [
        createContentBlock(
          "Logs in Revolte are structured based on where they originate in the lifecycle. This separation ensures you always debug in the right context—whether you're fixing a failed deployment or diagnosing a live issue."
        ),
        createListBlock("list", [
          "**Deployment Logs:** Capture everything that happens during infrastructure setup, build, and deployment.",
          "**Application Logs:** Capture runtime behavior after your application is live."
        ]),
        createCalloutBlock(
          "Start with the right log type: deployment issues belong in Deployment Logs, while runtime issues belong in Application Logs.",
          false
        )
      ]
    },

    {
      id: "deployment-logs",
      title: "Deployment logs",
      blocks: [
        createContentBlock(
          "Deployment logs provide a step-by-step view of your delivery pipeline—from provisioning infrastructure to publishing artifacts. They are designed to help you understand exactly where and why a deployment failed or slowed down."
        ),

        createImageBlock(
          "/images/docs/doc-info-3.png",
          "Deployment logs visualizing provisioning, build stages, and execution timeline."
        ),

        createContentBlock(
          "Each deployment is broken down into structured, time-tracked stages for quick inspection:"
        ),

        createListBlock("list", [
          "**Stages:** High-level phases like **Provision** (infrastructure setup) and **Build** (code compilation and artifact generation).",
          "**Sub-steps:** Detailed execution units such as 'Code Pull', 'App Service setup', and 'Publish Artifact'.",
          "**Execution Time:** Every step displays duration, making it easy to detect bottlenecks or regressions."
        ]),

        createCalloutBlock(
          "Use deployment logs when builds fail, deployments hang, or infrastructure behaves unexpectedly.",
          true
        )
      ]
    },

    {
      id: "application-logs",
      title: "Application logs",
      blocks: [
        createContentBlock(
          "Application logs capture everything that happens after deployment. They provide real-time visibility into how your system behaves under actual usage."
        ),

        createImageBlock(
          "/images/docs/doc-info-1.png",
          "Application logs dashboard showing request flow, severity filtering, and real-time streaming."
        ),

        createListBlock("list", [
          "**Request & Response Flow:** Track incoming API calls, responses, and system-level events.",
          "**Severity Levels:** Filter logs by levels like Info, Warning, or Error to quickly isolate issues.",
          "**Search & Traceability:** Locate specific requests, errors, or identifiers across large datasets."
        ]),

        createCalloutBlock(
          "Use application logs to debug runtime failures such as API errors, unexpected responses, or performance issues.",
          true
        )
      ]
    },

    {
      id: "comparison",
      title: "Deployment vs. application logs",
      blocks: [
        createTableBlock(
          ["Aspect", "Deployment Logs", "Application Logs"],
          [
            ["**Scope**", "Pipeline & infrastructure", "Runtime behavior"],
            ["**Lifecycle Stage**", "Before application is live", "After deployment"],
            ["**Primary Use**", "Fix build/deploy issues", "Debug production issues"],
            ["**Data Source**", "Build agents & infra", "Running application instances"]
          ]
        )
      ]
    },

    {
      id: "debugging-flow",
      title: "How to debug effectively",
      blocks: [
        createContentBlock(
          "Debugging is most effective when you move between deployment and application logs in sequence."
        ),
        createContentBlock(
          "If a deployment fails, use Past Deployments to revert to a stable version."
        ),
        createListBlock("step", [
          "**Step 1 — Check Deployment Logs:** Confirm the system was built and deployed correctly.",
          "**Step 2 — Check Application Logs:** Identify runtime failures or unexpected behavior.",
          "**Step 3 — Correlate Events:** Map deployment changes to runtime issues to find root causes."
        ]),
        createCalloutBlock(
          "If an issue appears right after a deployment, always trace back to the corresponding deployment logs.",
          false
        )
      ]
    }
  ]
};
