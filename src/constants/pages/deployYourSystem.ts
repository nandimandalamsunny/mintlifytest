import { MainContentProps } from "@/types/docs";
import {
  createContentBlock,
  createLabelBlock,
  createImageBlock,
  createCardGridBlock,
  createCalloutBlock
} from "@/constants/docs";

export const DEPLOY_YOUR_SYSTEM_CONTENT: MainContentProps = {
  title: "Deploy your system",
  description: "Ship your code to production in minutes. A streamlined, automated pipeline that handles the heavy lifting of deployment for you.",

  sections: [
    {
      id: "step-by-step",
      title: "Step-by-step setup",
      blocks: [
        createCalloutBlock(
          "Deployment in Revolte is fully automated. Once configured, every commit can trigger a consistent, production-ready pipeline without manual intervention.",
          true
        ),

        // =============================
        // STEP 1
        // =============================
        createLabelBlock("Step 1 — Create or Select Application"),
        createContentBlock(
          "Start from the Applications dashboard, where all your deployable systems are organized. You can either select an existing application or create a new one to begin configuring its deployment lifecycle."
        ),
        createContentBlock(
          "Each application represents an isolated unit with its own services, environments, and deployment pipeline."
        ),
        createImageBlock(
          "/images/deployment/deployment-1.png",
          "Applications dashboard showing existing apps and the option to create a new application.",
          "800px"
        ),

        // =============================
        // STEP 2
        // =============================
        createLabelBlock("Step 2 — Configure Application"),
        createContentBlock(
          "Define how your application should be built and deployed. Revolte automatically generates a `revolte.yml` configuration based on your selections."
        ),
        createContentBlock(
          "Configure your framework, map branches to environments (Production, Staging, QA), and enable workflows such as automated code review, testing, and build pipelines."
        ),
        createImageBlock(
          "/images/deployment/deployment-2.png",
          "Configuration interface for framework selection, workflow setup, and branch-to-environment mapping.",
          "800px"
        ),

        // =============================
        // STEP 3
        // =============================
        createLabelBlock("Step 3 — Commit or Deploy Configuration"),
        createContentBlock(
          "Once your configuration is ready, you can either commit the generated `revolte.yml` file to your repository or proceed directly with deployment."
        ),
        createContentBlock(
          "Committing ensures your setup is version-controlled and reusable. Alternatively, you can skip committing and trigger an immediate deployment using the current configuration."
        ),
        createImageBlock(
          "/images/deployment/deployment-3.png",
          "Commit the configuration or skip and deploy instantly from the UI.",
          "800px"
        ),
        createCalloutBlock(
          "Tip: Commit the configuration for long-term, reproducible deployments. Use 'Skip & Deploy' for quick testing or one-time runs.",
          false
        ),

        // =============================
        // STEP 4
        // =============================
        createLabelBlock("Step 4 — Automated Deployment Trigger"),
        createContentBlock(
          "After committing or skipping, Revolte automatically starts the deployment pipeline. The system provisions infrastructure, builds your application, and deploys it to the configured environments."
        ),
        createContentBlock(
          "You can monitor progress in real-time through deployment logs and metrics, ensuring full visibility into every stage of the release lifecycle."
        ),
        createCalloutBlock(
          "All deployments are observable by default — logs and metrics are automatically captured for debugging and performance analysis.",
          false
        )
      ]
    },

    // =============================
    // NEXT STEPS
    // =============================
    {
      id: "next-steps",
      title: "Next Steps",
      blocks: [
        createContentBlock(
          "Once your first deployment is complete, you can extend and refine your delivery pipeline with advanced capabilities:"
        ),
        createCardGridBlock([
          {
            title: "Manage Environments",
            desc: "Define staging, production, and custom environments with granular deployment controls and approval rules.",
            href: "/platform/deploy/environments",
            cta: "Configure environments"
          },
          {
            title: "Preview Deployments",
            desc: "Enable ephemeral preview environments for pull requests to validate changes before merging.",
            href: "/platform/deploy/preview",
            cta: "Set up previews"
          }
        ])
      ]
    }
  ]
};
