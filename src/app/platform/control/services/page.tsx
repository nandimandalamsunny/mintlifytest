import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { SERVICES_CONTENT } from "@/content/docs/control/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Configure managed runtime services for your application, including storage buckets and cron jobs.",
  path: "/platform/control/services",
  category: "Control",
  keywords: [
    "Revolte Services",
    "application services",
    "runtime services",
    "storage buckets",
    "file storage",
    "cron jobs",
    "scheduled tasks",
    "background jobs",
    "Control module",
  ],
});

export default function ServicesPage() {
  return <DocsRenderer content={SERVICES_CONTENT} />;
}
