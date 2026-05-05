import { MainContentProps } from "@/types/docs";
import {
  createListBlock,
  createContentBlock,
  createLabelBlock,
  createCalloutBlock,
  createCodeBlock
} from "@/constants/docs";
import React from "react";

export const CLI_WORKFLOW_CONTENT: MainContentProps = {
  title: "CLI Workflow",
  description: "Build, modify, and ship software directly from your terminal using natural language.",
  sections: [
    {
      id: "introduction",
      blocks: [
        createContentBlock(
          "The Revolte CLI provides a conversational development interface that replaces traditional build, test, and automation workflows with a single interactive session."
        )
      ]
    },
    {
      id: "get-started",
      title: "Get started",
      blocks: [
        createLabelBlock("Install"),
        createContentBlock("Install the CLI globally:"),
        createCodeBlock("npm install -g @revolte/cli", "bash"),
        createLabelBlock("Authenticate"),
        createCodeBlock("revolte login", "bash"),
        createContentBlock("Opens a secure browser-based login and connects your local environment to your Revolte workspace."),
        createLabelBlock("Start a session"),
        createCodeBlock("revolte chat", "bash"),
        createContentBlock("Launches an interactive AI development session in your current repository."),
        createLabelBlock("Resume a session"),
        createCodeBlock("revolte chat --continue <threadId>", "bash"),
        createContentBlock("Continue an existing workflow or revisit previous changes.")
      ]

    },
    {
      id: "how-it-works",
      title: "How it works",
      blocks: [
        createContentBlock("Revolte CLI is conversational — you don’t need to memorize commands. Instead, describe what you want:"),
        createCalloutBlock("\"Build a REST API for user profiles with JWT authentication\"", true),
        createLabelBlock("Revolte will:"),
        createListBlock("list", [
          "Understand your repository structure",
          "Plan implementation steps",
          "Generate and modify code",
          "Execute required commands",
          "Guide you through approvals"
        ])
      ]
    },
    {
      id: "real-world-usage",
      title: "Real-world usage",
      blocks: [
        createContentBlock("Inside a `revolte chat` session, you can:"),
        createCalloutBlock("Fix the failing unit tests in the auth service\nRefactor the navigation component using Tailwind grid\nAdd pagination to the orders API", false),
        createContentBlock("Each request is executed as a structured workflow — not just text generation.")
      ]
    },
    {
      id: "behind-the-scenes",
      title: "What happens behind the scenes",
      blocks: [
        createContentBlock("Every request triggers a controlled execution pipeline:"),
        createListBlock("list", [
          "**Repository analysis:** Detects frameworks, languages, and project structure",
          "**Workflow planning:** Breaks down your request into executable steps",
          "**Step streaming:** Streams progress in real time",
          "**Tool execution:** Reads files, writes code, edits existing logic, and runs commands"
        ])
      ]
    },
    {
      id: "capabilities",
      title: "Capabilities",
      blocks: [
        createContentBlock("Within a single session, Revolte can:"),
        createListBlock("list", [
          "Generate production-ready features",
          "Modify and refactor existing code",
          "Fix bugs and failing tests",
          "Execute shell commands",
          "Search and analyze your codebase"
        ])
      ]
    },
    {
      id: "safe-execution",
      title: "Safe execution",
      blocks: [
        createContentBlock("Revolte ensures full control over every action:"),
        createListBlock("list", [
          "**Approval prompts:** Every file write or command execution requires confirmation",
          "**Granular control:** Approve once, always allow, or reject",
          "**Validation checks:** Ensures system stability after each step"
        ])
      ]
    },
    {
      id: "typical-workflow",
      title: "Typical workflow",
      blocks: [
        createListBlock("list", [
          "1. Navigate to your project",
          "2. Run `revolte chat`",
          "3. Describe your task in plain English",
          "4. Review proposed actions",
          "5. Approve execution",
          "6. Receive working code and updates"
        ]),
        createContentBlock("Revolte CLI turns your terminal into an intelligent development environment — eliminating manual setup, scripting, and repetitive workflows.")
      ]
    }
  ]
};


