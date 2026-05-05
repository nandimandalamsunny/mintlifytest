import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { DEPLOY_OVERVIEW_CONTENT } from "@/constants/pages/deployOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Deploy Overview",
  description:
    "Ship code to any environment with automated deployments, previews, and rollbacks.",
  path: "/platform/deploy",
  category: "Deploy",
  keywords: [
    "deployments",
    "release management",
    "preview deployments",
    "rollbacks",
  ],
});

export default function DeployOverviewPage() {
  return <DocsRenderer content={DEPLOY_OVERVIEW_CONTENT} />;
}
