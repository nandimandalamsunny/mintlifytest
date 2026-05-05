import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createLabelBlock,
  createCardGridBlock,
  createFlowBlock,
  createListBlock,
  createContentBlock
} from "@/constants/docs";

export const BUILD_OVERVIEW_CONTENT: MainContentProps = {
  title: "Build Overview",
  description: "Transform natural-language requirements into production-ready implementation, tests, and documentation automatically.",
  sections: [
    {
      id: "overview",
      blocks: [
        createContentBlock(
          "Revolte's Build module acts as an autonomous implementation engine. It takes your high-level requirements and produces a complete technical solution, including the underlying logic, validation suites, and infrastructure configuration updates."
        ),
        createCalloutBlock("Every build produces a reviewable Pull Request — nothing enters your production environment without explicit human approval.", true),
        createLabelBlock("The Build Lifecycle"),
        createFlowBlock(["Describe", "Generate", "Test", "Review", "Merge"], true),
      ],
    },
    {
      id: "capabilities",
      title: "How Build works",
      blocks: [
        createListBlock("list", [
          "**Requirement Analysis:** The system decomposes your plain English prompt into a technical specification aligned with your existing codebase.",
          "**Autonomous Implementation:** Revolte generates clean, performant source code across all layers of your stack.",
          "**Automated Validation:** Every line of code is instantly verified through unit and integration tests generated alongside the implementation.",
          "**PR Delivery:** Results are delivered as standard pull requests for your final review and merge."
        ]),
      ],
    },
    {
      id: "get-started",
      title: "Get started",
      blocks: [
        createCardGridBlock([
          { title: "Create your first feature", desc: "Submit a requirement and get working code", href: "/platform/build/create-your-first-feature", cta: "Start building" },
          { title: "Review output", desc: "Understand what Build produces", href: "/platform/build/review-output", cta: "Learn more" },
        ], true),
      ],
    },
    {
      id: "workflows",
      title: "Supported Workflows",
      blocks: [
        createCardGridBlock([
          { title: "CLI workflow", desc: "Build from your terminal", href: "/platform/build/cli-workflow", cta: "Use the CLI" },
          { title: "Web workflow", desc: "Build from the dashboard", href: "/platform/build/web-workflow", cta: "Open dashboard" },
        ], true),
      ],
    },
  ],
};

