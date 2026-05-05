import { MainContentProps } from "@/types/docs";
import {
  createListBlock,
  createContentBlock,
  createLabelBlock,
  createCalloutBlock,
  createLabelBlock as createLabel
} from "@/constants/docs";

export const REVIEW_OUTPUT_CONTENT: MainContentProps = {
  title: "Review Output",
  description: "Understand the artifacts Revolte generates and how to safely validate them before production deployment.",
  sections: [
    {
      id: "introduction",
      blocks: [
        createContentBlock(
          "Every build in Revolte is a controlled engineering lifecycle. This page outlines the specific artifacts produced and provides a structured methodology for reviewing them, ensuring that every automated implementation meets your project's quality and safety standards."
        ),
        createCalloutBlock(
          "Revolte follows a human-in-the-loop philosophy. No code is merged or deployed without your explicit review and approval.",
          true
        )
      ]
    },
    {
      id: "summary",
      title: "What you get after a build",
      blocks: [
        createContentBlock("Upon completion of a requirement build, Revolte delivers four primary artifacts:"),
        createListBlock("list", [
          "**Source Code:** Optimized implementation aligned with your existing design patterns.",
          "**Test Suite:** Automated unit and integration tests covering the new functionality.",
          "**Documentation:** Updated READMEs and internal docstrings explaining the changes.",
          "**Pull Request:** A centralized delivery vehicle for review and iteration."
        ])
      ]
    },
    {
      id: "generated-artifacts",
      title: "Generated Artifacts",
      blocks: [
        createLabel("Source Code"),
        createContentBlock("Revolte generates clean, idiomatic code that respects your project's languages, frameworks, and linting rules. It doesn't just provide snippets; it provides full, context-aware implementations."),
        createLabel("Test Suite"),
        createContentBlock("Every build automatically includes a set of tests. The system executes these tests in an isolated environment to verify that the implementation works as intended and doesn't introduce regressions."),
        createLabel("Documentation"),
        createContentBlock("Revolte updates your technical documentation to reflect the new changes, ensuring that your system's source of truth remains accurate without manual effort.")
      ]
    },
    {
      id: "pull-request",
      title: "The Revolte Pull Request",
      blocks: [
        createContentBlock("The Pull Request is your primary interface for review. It is structured to provide full visibility into the platform's autonomous decisions:"),
        createListBlock("list", [
          "**Requirement Traceability:** Direct links to the original natural-language prompt.",
          "**Implementation Summary:** A high-level technical breakdown of the architectural changes.",
          "**Test Evidence:** Verified logs and coverage reports from the automated test run.",
          "**Infra/Config Changes:** Clear visibility into any new environment variables or resource updates."
        ])
      ]
    },
    {
      id: "review-workflow",
      title: "Structured Review Workflow",
      blocks: [
        createListBlock("list", [
          "1. **Inspect the Diff:** Review the source code for logic accuracy and architectural alignment.",
          "2. **Validate Tests:** Ensure the automated test cases cover the edge cases relevant to your requirement.",
          "3. **Check Integrations:** Verify that any cross-service or database changes align with your global system state."
        ])
      ]
    },
    {
      id: "iteration",
      title: "Iterative Refinement",
      blocks: [
        createContentBlock("If the output requires adjustment, you can refine it instantly through the Revolte CLI or Dashboard. Provide feedback in plain English (e.g., \"Use the async/await pattern instead of promises\"), and the system will automatically update the Pull Request. No manual rework is needed."),
      ]
    },
    {
      id: "production-readiness",
      title: "Production Readiness Checklist",
      blocks: [
        createContentBlock("Before merging a Revolte PR, ensure it passes these critical production checks:"),
        createListBlock("list", [
          "**Code Quality:** Does the implementation follow your team's style and performance guidelines?",
          "**Test Coverage:** Are all critical paths and error states validated?",
          "**Side Effects:** Does the change interact safely with existing upstream or downstream services?",
          "**Config Validation:** Are all required secrets and environment variables accounted for?"
        ]),
        createCalloutBlock(
          "Once you approve the PR, Revolte's Deploy module takes over to orchestrate the rollout across your lifecycle environments.",
          true
        )
      ]
    }
  ]
};

