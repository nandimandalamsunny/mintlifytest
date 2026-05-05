import { MainContentProps } from "@/types/docs";
import {
  createStepperBlock,
  createFeatureGridBlock,
  createCalloutBlock,
  createContentBlock,
  createLabelBlock,
  createListBlock
} from "@/constants/docs";

export const WHAT_YOU_CAN_BUILD_CONTENT: MainContentProps = {
  title: "Build and Ship with Revolte",
  description:
    "Automate the entire software delivery lifecycle, from requirement to production deployment.",
  sections: [
    {
      id: "overview",
      blocks: [
        createContentBlock(
          "Revolte replaces manual implementation, infrastructure setup, and CI/CD maintenance with an autonomous, AI-driven pipeline. Build full-scale applications, ship production-ready systems, and eliminate the overhead of disconnected tools."
        ),
        createLabelBlock("The automated lifecycle"),
        createContentBlock(
          "Revolte orchestrates every stage of development. The platform analyzes your requirements, generates validated code, and manages the progression across your environments automatically."
        ),
        createStepperBlock(
          [{ title: "Requirement" }, { title: "Build" }, { title: "Review" }, { title: "Deploy" }],
          true
        )
      ]
    },
    {
      id: "capabilities",
      title: "Core Capabilities",
      blocks: [
        createFeatureGridBlock(
          [
            {
              iconName: "build",
              title: "Autonomous Feature Generation",
              desc: "Transform natural language requirements into fully implemented, production-grade features automatically."
            },
            {
              iconName: "ship",
              title: "Full-Stack System Architecture",
              desc: "Generate complete UI components, API endpoints, and database schemas that align with your existing system."
            },
            {
              iconName: "validate",
              title: "Automated Quality Assurance",
              desc: "The platform generates and executes unit and integration tests alongside every feature to ensure 100% reliability."
            },
            {
              iconName: "deliver",
              title: "Controlled Pull Request Delivery",
              desc: "All changes are delivered as standard pull requests, maintaining your team's existing review and approval culture."
            },
            {
              iconName: "deploy",
              title: "Multi-Environment Orchestration",
              desc: "Manage zero-downtime deployments across Preview, Staging, and Production environments without manual configuration."
            },
            {
              iconName: "fix",
              title: "Continuous Feedback Iteration",
              desc: "Describe bugs or refinements — the system analyzes the root cause and delivers the fix directly to your pipeline."
            }
          ],
          true
        )
      ]
    },
    {
      id: "who-it-is-for",
      title: "Who Revolte is for",
      blocks: [
        createListBlock("list", [
          "**Product Teams:** Ship high-impact features in hours instead of weeks by automating implementation overhead.",
          "**Engineering Leads:** Standardize code quality and testing patterns across the entire organization automatically.",
          "**Founders:** Build and scale production-ready systems from day one without hiring a massive infrastructure team."
        ])
      ]
    },
    {
      id: "what-it-replaces",
      title: "What Revolte replaces",
      blocks: [
        createListBlock("list", [
          "**Manual Coding Workflows:** Eliminate the need for repetitive boilerplate and manual scaffolding.",
          "**Disconnected CI/CD Setup:** Replace fragmented build scripts and deployment pipelines with a unified system.",
          "**Infrastructure Management:** Stop managing servers and clusters — Revolte handles the underlying orchestration.",
          "**Manual Test Writing:** Shift from writing tests to reviewing automatically generated high-coverage test suites."
        ])
      ]
    },
    {
      id: "trust-and-safety",
      title: "Trust and Safety",
      blocks: [
        createCalloutBlock(
          "Safety is built into the core of Revolte. No code is merged or deployed without human approval, and the platform enforces rigorous validation through automated testing before every release.",
          true
        )
      ]
    }
  ]
};
