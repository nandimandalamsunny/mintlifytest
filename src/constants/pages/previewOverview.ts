import { MainContentProps } from "@/types/docs";
import {
  createContentBlock,
  createLabelBlock,
  createCalloutBlock,
  createStepperBlock,
  createListBlock,
  createCardGridBlock,
} from "@/constants/docs";

export const PREVIEW_OVERVIEW_CONTENT: MainContentProps = {
  title: "Preview",
  description: "Instantly spin up temporary, isolated environments for testing and validation without impacting production.",
  sections: [
    {
      id: "how-it-works",
      title: "How it works",
      blocks: [
        createContentBlock(
          "Preview deployments provide a frictionless way to validate changes in a production-like environment. Whether you're testing a new feature or debugging a configuration, previews ensure that your production system remains stable while you iterate."
        ),
        createStepperBlock([
          { title: "Trigger" },
          { title: "Build" },
          { title: "Provision" },
          { title: "Review" },
        ]),
        createListBlock("step", [
          "**Trigger:** Initiate a preview deployment manually through the dashboard or automatically via a CI/CD workflow.",
          "**Build:** The system packages your application code and dependencies into a deployable artifact.",
          "**Provision:** Revolte creates a temporary, isolated environment with its own unique infrastructure.",
          "**Review:** Access your changes via a secure, auto-generated preview URL for collaborative feedback."
        ])
      ]
    },
    {
      id: "why-it-matters",
      title: "Why it matters",
      blocks: [
        createListBlock("list", [
          "**Safe Isolation:** Test everything from UI changes to database migrations without touching your production data.",
          "**Faster Iteration:** Move quickly by validating changes in a real-world environment as you develop.",
          "**Reduced Risk:** Catch edge cases and integration issues early in the delivery cycle, before they reach production users."
        ])
      ]
    },
    {
      id: "key-capabilities",
      title: "Key capabilities",
      blocks: [
        createContentBlock(
          "Revolte previews are designed for flexibility and depth, offering features that go beyond simple static site previews."
        ),
        createListBlock("list", [
          "**Trigger Anywhere:** Launch previews from pull requests, manual dashboard actions, or automated testing suites.",
          "**Temporary URLs:** Every preview gets a secure, shareable URL that is deleted once the preview is decommissioned.",
          "**Environment Parity:** Preview environments mirror your production configuration, including environment variables and secrets.",
          "**Access Control:** Optionally restrict preview URLs to specific organization members or team roles."
        ]),
        createCalloutBlock(
          "Preview environments are ephemeral by design. They are not intended for long-term use or production traffic.",
          true
        )
      ]
    },
    {
      id: "best-practices",
      title: "Best practices",
      blocks: [
        createListBlock("list", [
          "**Quick Validation:** Use previews as a 'sandboxed' version of your app for rapid UI and logic checks.",
          "**Collaboration:** Share preview links with designers, product managers, and stakeholders to gather immediate feedback.",
          "**Hygiene:** Clean up unused previews once validation is complete to maintain an organized environment list.",
          "**No Persistence:** Avoid relying on previews for permanent data storage or persistent system states."
        ])
      ]
    },
    {
      id: "next-steps",
      title: "Next steps",
      blocks: [
        createCardGridBlock([
          {
            title: "Configure Domains",
            desc: "Set up custom subdomains for your preview deployments to match your brand.",
            href: "/platform/deploy/domains",
            cta: "Configure"
          },
          {
            title: "Security Settings",
            desc: "Learn how to restrict preview access to specific team members or roles.",
            href: "/platform/control/security",
            cta: "Manage access"
          }
        ])
      ]
    }
  ]
};
