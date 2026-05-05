import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { OBSERVE_OVERVIEW_CONTENT } from "@/constants/pages/observeOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Observe",
  description:
    "Know what happened, when it happened, and why. Understand system behavior across builds and deployments.",
  path: "/platform/observe",
  category: "Observe",
  keywords: [
    "observability",
    "system visibility",
    "build visibility",
    "deployment visibility",
  ],
});

export default function ObserveOverviewPage() {
  return <DocsRenderer content={OBSERVE_OVERVIEW_CONTENT} />;
}
