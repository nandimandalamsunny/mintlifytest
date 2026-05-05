import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { METRICS_CONTENT } from "@/constants/pages/metrics";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Metrics",
  description:
    "Track performance, resource usage, and system health across your deployments.",
  path: "/platform/observe/metrics",
  category: "Observe",
  keywords: [
    "performance metrics",
    "resource usage",
    "system health",
    "deployment metrics",
  ],
});

export default function MetricsPage() {
  return <DocsRenderer content={METRICS_CONTENT} />;
}
