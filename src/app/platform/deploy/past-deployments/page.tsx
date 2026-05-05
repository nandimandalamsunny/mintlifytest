import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { PAST_DEPLOYMENTS_CONTENT } from "@/content/docs/deploy/pastDeployments";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Past Deployments",
  description:
    "Review deployment history, inspect release metadata, and safely revert to previous stable versions.",
  path: "/platform/deploy/past-deployments",
  category: "Deploy",
  keywords: [
    "deployment history",
    "release history",
    "rollback",
    "previous deployments",
  ],
});

export default function PastDeploymentsPage() {
  return <DocsRenderer content={PAST_DEPLOYMENTS_CONTENT} />;
}
