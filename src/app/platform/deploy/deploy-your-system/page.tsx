import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { DEPLOY_YOUR_SYSTEM_CONTENT } from "@/constants/pages/deployYourSystem";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Deploy your system",
  description: "Set up your first deployment pipeline in minutes.",
  path: "/platform/deploy/deploy-your-system",
  category: "Deploy",
  keywords: [
    "deployment setup",
    "deployment pipeline",
    "first deployment",
    "ship to production",
  ],
});

export default function DeploySystemPage() {
  return <DocsRenderer content={DEPLOY_YOUR_SYSTEM_CONTENT} />;
}
