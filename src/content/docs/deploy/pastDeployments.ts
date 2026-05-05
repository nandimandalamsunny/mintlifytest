import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createContentBlock,
  createImageBlock,
  createLabelBlock,
  createListBlock,
  createTableBlock,
} from "@/constants/docs";

export const PAST_DEPLOYMENTS_CONTENT: MainContentProps = {
  title: "Past Deployments",

  description:
    "Inspect deployment history with commit-level context, release timing, actor details, and rollback options so teams can trace changes and restore a trusted version when needed.",

  sections: [
    {
      id: "what-this-page-is-for",
      title: "What This Page Is For",
      blocks: [
        createContentBlock(
          "Past Deployments is the release ledger for an application. It gives engineering and operations teams a single place to inspect what shipped, when it shipped, who triggered it, how long it took, and which earlier version is safe to restore."
        ),
        createContentBlock(
          "Use this page during release review, incident response, post-deployment verification, and rollback workflows when you need precise release history rather than raw deployment logs."
        ),
        createImageBlock(
          "/images/deployment/pastdeployment.png",
          "The Past Deployments table showing commit history, deployment time, duration, initiator, status, and rollback actions.",
          "800px",
          "450px"
        ),
        createCalloutBlock(
          "Start from the newest successful row and work backward. In most investigations, that is the fastest way to confirm what version is live and whether the latest release introduced the issue."
        ),
      ],
    },
    {
      id: "what-you-can-learn",
      title: "What You Can Learn From The Table",
      blocks: [
        createContentBlock(
          "Each row represents one deployment attempt. Together, the columns give you both source-control context and operational context for the release."
        ),
        createTableBlock(
          ["Column", "What it tells you", "Why it matters"],
          [
            ["Commit", "The code revision that was deployed", "Lets you map runtime behavior back to source control"],
            ["Commit Message", "The merge or change summary for the release", "Helps you understand release intent without opening Git first"],
            ["Deployment Time", "When the deployment ran", "Useful when correlating incidents, alerts, or support reports"],
            ["Duration", "How long the deployment took", "Helps surface unusually slow rollouts or infrastructure instability"],
            ["Initiated By", "The user or automation that triggered the release", "Important for audits and incident review"],
            ["Status", "Whether the deployment succeeded, failed, is in progress, or was rolled back", "Gives the outcome at a glance"],
          ]
        ),
        createLabelBlock("Questions this page answers"),
        createListBlock("list", [
          "Which commit is currently live in this environment?",
          "When did the latest release happen?",
          "Was the release successful or partial?",
          "Did deployment duration look normal?",
          "Which earlier version should we restore if this release caused a regression?",
        ]),
      ],
    },
    {
      id: "how-to-read-the-history",
      title: "How To Read The History",
      blocks: [
        createContentBlock(
          "The page is most useful when you treat it as a decision tool instead of a static archive."
        ),
        createListBlock("step", [
          "**Identify the current release:** Look for the most recent successful row to confirm the latest deployed version.",
          "**Use the commit message for context:** Determine whether the release was a feature merge, branch promotion, or hotfix.",
          "**Correlate timing:** Compare deployment time with the first monitoring alert, support report, or regression report.",
          "**Check duration:** Longer-than-usual deployments often point to rollout friction, build instability, or environment issues.",
          "**Choose the next action:** Decide whether to inspect Activity Timeline, open logs, compare to a prior version, or start rollback.",
        ]),
      ],
    },
    {
      id: "investigation-workflow",
      title: "Investigation Workflow",
      blocks: [
        createContentBlock(
          "When a release may be related to a runtime issue, Past Deployments should usually be the first operational checkpoint after alerts or logs."
        ),
        createListBlock("step", [
          "**Find the suspected deployment window:** Use Deployment Time to narrow the release that most likely introduced the problem.",
          "**Inspect the release intent:** Read the commit message and commit identifier to understand what changed.",
          "**Open supporting signals:** Cross-check the same time window in Deployment Activity, application logs, and metrics.",
          "**Decide whether the issue is release-related:** If the prior version was healthy and the timing aligns, move toward rollback or a fast follow-up fix.",
        ]),
        createContentBlock(
          "Example: if error rate rises at 03:55 pm and the latest successful deployment completed at 03:50 pm, this page tells you which commit shipped, what kind of change it was, and which previous deployment is the strongest recovery candidate."
        ),
      ],
    },
    {
      id: "rollback-workflow",
      title: "Rollback Workflow",
      blocks: [
        createContentBlock(
          "Rollback should restore a known stable version and remain fully traceable in the release history."
        ),
        createListBlock("step", [
          "**Locate a trusted target:** Find the most recent deployment that completed successfully and is known to be healthy.",
          "**Review the failing release:** Check supporting timeline, logs, and metrics so you understand why rollback is necessary.",
          "**Trigger rollback:** Use the rollback action from the target deployment row.",
          "**Confirm the target version:** Verify the commit and expected application state before proceeding.",
          "**Validate after restoration:** Treat the rollback as a new deployment and confirm health with logs and metrics.",
        ]),
        createCalloutBlock(
          "Roll back to the most recent version you trust, not simply the row immediately before the current deployment. A recent release can complete successfully and still be operationally unsafe."
        ),
      ],
    },
    {
      id: "release-review-checklist",
      title: "Release Review Checklist",
      blocks: [
        createListBlock("list", [
          "Confirm the expected commit is present in the target environment",
          "Verify the deployment completed with a healthy status",
          "Check whether deployment duration falls within a normal range",
          "Confirm the right user or automation triggered the release",
          "Validate post-release behavior in logs and metrics",
        ]),
      ],
    },
    {
      id: "best-practices",
      title: "Best Practices",
      blocks: [
        createListBlock("list", [
          "Treat Past Deployments as the canonical release timeline for the environment",
          "Use commit identifiers here to coordinate discussions between engineering, QA, and support",
          "Review Activity Timeline before rollback if the deployment path looks unusual",
          "Confirm environment variables and external dependencies still match the restored version",
          "Treat every rollback as a new release event that must be validated end to end",
        ]),
        createCalloutBlock(
          "Past Deployments is where release history becomes operationally useful. It helps teams move from suspicion to evidence quickly, especially during production regressions."
        ),
      ],
    },
  ],
};
