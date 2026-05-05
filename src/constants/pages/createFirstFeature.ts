import { MainContentProps } from "@/types/docs";
import {
  createListBlock,
  createContentBlock,
  createLabelBlock,
  createCalloutBlock,
  createImageBlock,
} from "@/constants/docs";

export const CREATE_FIRST_FEATURE_CONTENT: MainContentProps = {
  title: "Create your first feature",
  description: "A zero-to-one guide to setting up your project and shipping your first automated implementation.",
  sections: [
    {
      id: "introduction",
      blocks: [
        createContentBlock(
          "This walkthrough guides you through the complete onboarding journey—from initial account setup to merging your first AI-generated pull request. Follow these steps to go from a blank slate to a deployed feature in minutes."
        ),
      ]
    },
    // =============================
    // PHASE 1: SETUP
    // =============================
    {
      id: "phase-1-setup",
      title: "Phase 1: Project Setup",
      blocks: [
        createLabelBlock("01. Create Workspace"),
        createContentBlock(
          "Start by creating your Revolte account. You'll be prompted to name your primary workspace, which serves as the organizational hub for all your projects, team members, and cloud integrations."
        ),

        createLabelBlock("02. Initialize Project"),
        createContentBlock(
          "Within your workspace, create a new project. A project acts as a container for related applications (e.g., a frontend, a backend, and a worker) that share the same product context."
        ),
        createImageBlock(
          "/images/first-application/first-application-1.png",
          "Naming your project in the Revolte dashboard."
        ),

        createLabelBlock("03. Connect Repository"),
        createContentBlock(
          "Link your GitHub or GitLab account and select the repository where you want Revolte to commit code. Name your application (e.g., 'sample-api') to identify it within the project."
        ),
        createImageBlock(
          "/images/first-application/first-application-2.png",
          "Selecting a repository and naming the application."
        ),
      ]
    },

    // =============================
    // PHASE 2: CONFIGURATION
    // =============================
    {
      id: "phase-2-configuration",
      title: "Phase 2: Environment Configuration",
      blocks: [
        createLabelBlock("04. Framework & Branch Mapping"),
        createContentBlock(
          "Revolte detects your tech stack or lets you specify it manually. Map your Git branches to environments (e.g., 'main' to Production) so the platform knows where to deploy."
        ),
        createImageBlock(
          "/images/first-application/first-application-3.png",
          "Mapping branches to environments and confirming the framework."
        ),

        createLabelBlock("05. Choose Architecture Presets"),
        createContentBlock(
          "Select a preset that matches your application's architecture. Presets pre-configure the infrastructure, build steps, and deployment rules for common patterns like Webapps or Microservices."
        ),
        createImageBlock(
          "/images/first-application/first-application-4.png",
          "Selecting a preset like 'Webapp' or 'Webservice + Database'."
        ),

        createLabelBlock("06. Commit Configuration"),
        createContentBlock(
          "Revolte generates a `revolte.yml` file based on your selections. Commit this file to your repository to finalize the setup. This file serves as the source of truth for your application's lifecycle."
        ),
        createImageBlock(
          "/images/first-application/first-application-5.png",
          "Committing the revolte.yml file to finalize the project setup."
        ),
      ]
    },

    // =============================
    // PHASE 3: FIRST BUILD
    // =============================
    {
      id: "phase-3-build",
      title: "Phase 3: The First Build",
      blocks: [
        createLabelBlock("07. Define the Requirement"),
        createContentBlock(
          "In the Build module, describe the feature you want to add in plain English. For example: 'Add a user profile page that displays the user's bio and profile picture from the database.'"
        ),
        createCalloutBlock(
          "Be specific about business logic. Revolte uses your existing codebase as context to ensure the new feature fits perfectly.",
          true
        ),

        createLabelBlock("08. Review & Merge"),
        createContentBlock(
          "Revolte triggers a build, analyzes your requirement, and generates a Pull Request. Review the implementation, automated tests, and documentation updates. Once approved, merge the PR to trigger an automatic deployment."
        ),
      ]
    },

    // =============================
    // EXAMPLE TRANSFORMATION
    // =============================
    {
      id: "example",
      title: "Example transformation",
      blocks: [
        createLabelBlock("Requirement Input"),
        createCalloutBlock(
          "\"Add a GET /users/:id/activity endpoint that returns a paginated list of the user's last 50 actions.\"",
          true
        ),
        createLabelBlock("Generated Output"),
        createListBlock("list", [
          "**Implementation:** Node.js controller, service layer logic, and database query optimization.",
          "**Validation:** Unit and integration tests for pagination and API response format.",
          "**Delivery:** A clean Pull Request ready for review and deployment."
        ])
      ]
    },

    // =============================
    // BEHIND THE SCENES
    // =============================
    {
      id: "behind-the-scenes",
      title: "Behind the scenes",
      blocks: [
        createContentBlock(
          "Revolte performs multi-step orchestration for every build: it analyzes your architecture, drafts implementation paths, generates self-correcting code, and runs isolated test suites before delivering the final PR."
        )
      ]
    },

    // =============================
    // FINAL OUTCOME
    // =============================
    {
      id: "what-you-get",
      title: "What you get",
      blocks: [
        createListBlock("list", [
          "**Working Feature:** Production-ready code delivered directly to your repository.",
          "**Automated Tests:** Comprehensive test coverage generated alongside the implementation.",
          "**Pull Request:** A standard PR for team review and auditing.",
          "**Instant Deployment:** Automatic rollout to your environment upon merge."
        ]),
        createCalloutBlock(
          "You have successfully moved from zero setup to a deployed feature in one sitting.",
          true
        )
      ]
    }
  ]
};
