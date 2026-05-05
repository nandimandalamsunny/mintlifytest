import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createContentBlock,
  createImageBlock,
  createListBlock,
} from "@/constants/docs";

export const SERVICES_CONTENT: MainContentProps = {
  title: "Services",
  description:
    "Services provide the essential building blocks required to run and scale your application without manual infrastructure setup.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        createContentBlock(
          "Services are application-level infrastructure components that support runtime behavior inside a workspace. They give teams a managed way to configure storage, scheduled tasks, and sensitive configuration without provisioning or maintaining the underlying infrastructure directly."
        ),
        createContentBlock(
          "Use Services when your application needs persistent files, background automation, or secure runtime credentials."
        ),
      ],
    },
    {
      id: "storage-buckets",
      title: "Storage (Buckets)",
      blocks: [
        createContentBlock(
          "Buckets provide managed object storage for files and application assets. They are useful when your application needs durable storage that remains available across requests and deployments."
        ),
        createContentBlock(
          "Storage is provisioned and managed by the platform, so you can use it without manual infrastructure setup."
        ),
        createImageBlock("/images/services/services-1.png"),
        createListBlock("list", [
          "File storage",
          "Media handling",
          "Persistent storage",
        ]),
      ],
    },
    {
      id: "cron-jobs",
      title: "Cron Jobs (Scheduled tasks)",
      blocks: [
        createContentBlock(
          "Cron Jobs let you run scheduled work in the background on a defined cadence. They are a good fit for recurring tasks that should happen automatically without depending on incoming requests."
        ),
        createContentBlock(
          "Common uses include cleanup routines, data synchronization, retry workflows, and other operational automation."
        ),
        createImageBlock("/images/services/services-2.png"),
        createListBlock("list", [
          "Runs independently of requests",
          "Supports scheduled background work",
          "Useful for automation and recurring maintenance",
        ]),
      ],
    },
    {
      id: "best-practices",
      title: "Best practices",
      blocks: [
        createListBlock("list", [
          "Use cron jobs for async and background work",
          "Use buckets for scalable storage",
          "Store runtime configuration in environment variables by deployment stage",
        ]),
        createCalloutBlock(
          "Services are automatically integrated into your application runtime and require no manual infrastructure configuration."
        ),
      ],
    },
  ],
};
