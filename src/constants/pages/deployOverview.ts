import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createContentBlock,
  createLabelBlock,
  createCardGridBlock,
  createFlowBlock,
  createListBlock,
} from "@/constants/docs";

export const DEPLOY_OVERVIEW_CONTENT: MainContentProps = {
  title: "Deploy",

  description: "Ship with confidence, every time. Deploy moves approved code from pull request to production — with environment management, preview deployments, and full rollback control built in.",
  sections: [
    {
      id: "overview",
      blocks: [
        createCalloutBlock("Deployments can be triggered automatically on merge or manually from the dashboard.", true),
        createContentBlock("Once deployed, you can track and manage releases from the Past Deployments view."),
        createLabelBlock("Get started in seconds"),
        createCardGridBlock([
          { title: "Deploy your system", desc: "Set up your first deployment pipeline", href: "/platform/deploy/deploy-your-system", cta: "Start deploying" },
          { title: "Environments", desc: "Configure staging, production, and custom environments", href: "/platform/deploy/environments", cta: "Manage environments" },
          { title: "Preview", desc: "Generate live preview URLs for every pull request", href: "/platform/deploy/preview", cta: "Set up previews" },
        ], true),
        createFlowBlock(["Merge PR", "Build Artifact", "Deploy", "Verify"], true),
      ],
    },
    {
      id: "what-deploy-brings",
      title: "From merge to production, automated.",
      blocks: [
        createLabelBlock("What Deploy brings to your workflow"),
        createListBlock("list", [
          "**Zero-config deployments:** Deploy without writing pipeline scripts or managing infrastructure",
          "**Environment isolation:** Separate staging, production, and custom environments with independent configs",
          "**Preview deployments:** Every pull request gets a live preview URL for team review",
          "**Instant rollbacks:** Roll back to any previous deployment in one click",
        ]),
      ],
    },
    {
      id: "next-steps",
      blocks: [
        createLabelBlock("Next steps"),
        createCardGridBlock([
          { title: "Deploy your system", desc: "Set up your first deployment", href: "/platform/deploy/deploy-your-system", cta: "Get started" },
          { title: "Environments", desc: "Configure and manage deployment targets", href: "/platform/deploy/environments", cta: "Configure" },
        ]),
      ],
    },
  ],
};
