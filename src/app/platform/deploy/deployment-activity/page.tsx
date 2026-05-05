import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { DEPLOYMENT_ACTIVITY_CONTENT } from "@/content/docs/deploy/deploymentActivity";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Deployment Activity",
  description:
    "Track deployment events in chronological order with timestamps and actor context.",
  path: "/platform/deploy/deployment-activity",
  category: "Deploy",
  keywords: [
    "deployment activity",
    "deployment timeline",
    "build and deploy events",
    "release audit",
  ],
});

export default function DeploymentActivityPage() {
  return <DocsRenderer content={DEPLOYMENT_ACTIVITY_CONTENT} />;
}
