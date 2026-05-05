import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createContentBlock,
  createImageBlock,
  createLabelBlock,
  createListBlock
} from "@/constants/docs";

export const DEPLOYMENT_ACTIVITY_CONTENT: MainContentProps = {
  title: "Deployment activity",
  description:
    "Follow deployment events in sequence, from build initiation to release completion, with timestamps and actor context for each step.",
  sections: [
    {
      id: "overview",
      blocks: [
        createContentBlock(
          "Deployment Activity provides a timeline of deployment events for a release. It shows how a deployment progressed across each stage, in the order events occurred, so teams can confirm lifecycle progress without parsing raw output."
        ),
        createContentBlock(
          "Use this view to understand when key deployment actions happened, which stage completed successfully, and whether a user or system triggered the workflow."
        ),
        createImageBlock("/images/deployment/deployment-activity.png", undefined, "800px", "400px"),
        createLabelBlock("Key capabilities"),
        createListBlock("list", [
          "End-to-end deployment lifecycle visibility",
          "Chronological event tracking",
          "Stage-level insights from build through deployment",
          "Actor tracking for user- and system-triggered actions"
        ]),
        createCalloutBlock(
          "Use Deployment Activity when you need to verify that a deployment progressed as expected, audit who triggered a release-related action, or perform a quick status check without reviewing detailed logs."
        ),
        createLabelBlock("Comparison"),
        createListBlock("list", [
          "**Deployment Activity:** What happened.",
          "**Deployment Logs:** How it happened.",
          "**Past Deployments:** What changed."
        ])
      ]
    }
  ]
};
