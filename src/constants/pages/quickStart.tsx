import { MainContentProps } from "@/types/docs";
import {
  createListBlock,
  createContentBlock,
  createLabelBlock,
  createCalloutBlock
} from "@/constants/docs";
import React from "react";
import QuickStartTimeline from "@/components/QuickStartTimeline/QuickStartTimeline";

export const QUICK_START_CONTENT: MainContentProps = {
  title: "Quick Start",
  description: "Go from zero setup to a deployed application in under 5 minutes.",
  sections: [
    {
      id: "introduction",
      blocks: [
        createContentBlock(
          "This guide walks through the onboarding flow from sign-up to launch. Revolte handles the heavy lifting across cloud setup, repository integration, and pipeline configuration so your team can focus on the product."
        ),
        createCalloutBlock(
          "Start by signing up, then follow the guided setup screens in order. Each step below maps directly to the screenshots from the onboarding flow.",
          true
        )
      ]
    },
    {
      id: "setup-timeline",
      blocks: [
        createLabelBlock("Guided Onboarding"),
        {
          type: "custom",
          data: { component: <QuickStartTimeline /> }
        }
      ]
    },
    {
      id: "post-setup",
      title: "What you get after setup",
      blocks: [
        createContentBlock(
          "Once the onboarding is complete, Revolte initializes a production-ready environment tailored to your application's specific requirements:"
        ),
        createListBlock("list", [
          "**Live Application:** Your app is instantly accessible through a secure, SSL-encrypted public URL.",
          "**Automated CI/CD:** A fully configured deployment pipeline that handles builds and rollouts automatically.",
          "**Lifecycle Environments:** Isolated Preview, Staging, and Production environments ready for your first feature.",
          "**Native Observability:** Real-time logging and performance metrics enabled without any instrumentation code."
        ]),
        createCalloutBlock(
          "Next step: Start building features using natural language in the Build module.",
          true
        )
      ]
    }
  ],
};
