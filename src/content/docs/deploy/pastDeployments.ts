import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createContentBlock,
  createImageBlock,
  createListBlock,
} from "@/constants/docs";

export const PAST_DEPLOYMENTS_CONTENT: MainContentProps = {
  title: "Past Deployments",

  description:
    "Review deployment history with commit-level context, status, and timing information. Use this view to maintain an auditable release trail and safely revert to a known stable version when needed.",

  sections: [
    {
      id: "introduction",
      title: "Introduction",
      blocks: [
        createContentBlock(
          "Past Deployments provides a table view of previous releases for an application. It helps teams inspect what changed, when it was deployed, who initiated it, and whether the release completed successfully."
        ),
        createContentBlock(
          "Use this page during release review, incident response, or rollback workflows when you need precise deployment lifecycle context."
        ),
        createImageBlock(
          "/images/deployment/past-deployment.png",
          "The Past Deployments table showing commit history, status, duration, and rollback actions.",
          "800px",
          "450px"
        ),
      ],
    },
    {
      id: "overview",
      title: "Overview",
      blocks: [
        createContentBlock(
          "The deployments table summarizes each release using metadata that is useful for operations and audit review."
        ),
        createListBlock("list", [
          "**Commit:** The source commit deployed for that release.",
          "**Commit message:** The change summary associated with the commit.",
          "**Deployment time:** When the deployment was started or completed.",
          "**Duration:** How long the deployment took to finish.",
          "**Initiated by:** The user or automation that triggered the deployment.",
          "**Status:** The final deployment state, such as successful, failed, or in progress.",
        ]),
      ],
    },
    {
      id: "key-capabilities",
      title: "Key Capabilities",
      blocks: [
        createListBlock("list", [
          "Track deployment history",
          "Analyze release performance",
          "Identify failures quickly",
          "Maintain audit trail",
          "Revert to stable versions",
        ]),
      ],
    },
    {
      id: "reverting-to-a-previous-deployment",
      title: "Reverting to a Previous Deployment",
      blocks: [
        createContentBlock(
          "Rollback should be deliberate and traceable. Use Past Deployments to restore a stable version when the latest release introduces a production issue."
        ),
        createListBlock("step", [
          "**Locate deployment:** Find the last known stable deployment in the table.",
          "**Click revert icon (↺):** Start the rollback action from that deployment row.",
          "**Confirm action:** Review the target version and confirm the revert.",
        ]),
        createContentBlock(
          "Reverting triggers a new deployment that restores the selected previous version. The rollback itself becomes part of deployment history, preserving the release audit trail."
        ),
      ],
    },
    {
      id: "when-to-use-this",
      title: "When to Use This",
      blocks: [
        createListBlock("list", [
          "Rollback failed release",
          "Investigate regressions",
          "Audit deployment activity",
          "Validate release history",
        ]),
      ],
    },
    {
      id: "best-practices",
      title: "Best Practices",
      blocks: [
        createListBlock("list", [
          "Revert only stable deployments",
          "Check logs before rollback",
          "Validate system after revert",
        ]),
        createCalloutBlock(
          "Past Deployments act as your safety net — allowing instant recovery from failed releases."
        ),
      ],
    },
  ],
};
