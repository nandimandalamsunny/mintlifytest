import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { WEB_WORKFLOW_CONTENT } from "@/constants/pages/webWorkflow";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Web Workflow",
  description:
    "Manage your entire software delivery pipeline from the Revolte Dashboard.",
  path: "/platform/build/web-workflow",
  category: "Build",
  keywords: [
    "web workflow",
    "dashboard workflow",
    "browser-based workflow",
    "platform dashboard",
  ],
});

export default function WebWorkflowPage() {
  return <DocsRenderer content={WEB_WORKFLOW_CONTENT} />;
}
