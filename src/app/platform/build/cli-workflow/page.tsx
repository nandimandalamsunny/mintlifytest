import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { CLI_WORKFLOW_CONTENT } from "@/constants/pages/cliWorkflow";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "CLI Workflow",
  description:
    "Trigger builds, manage features, and review output directly from your terminal.",
  path: "/platform/build/cli-workflow",
  category: "Build",
  keywords: [
    "CLI workflow",
    "terminal workflow",
    "command line build",
    "developer CLI",
  ],
});

export default function CLIWorkflowPage() {
  return <DocsRenderer content={CLI_WORKFLOW_CONTENT} />;
}
