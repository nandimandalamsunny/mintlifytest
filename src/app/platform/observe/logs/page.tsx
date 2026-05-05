import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { LOGS_OVERVIEW_CONTENT } from "@/constants/pages/logsOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Logs",
  description:
    "Search, filter, and stream stdout and stderr from every build and deployment in real time.",
  path: "/platform/observe/logs",
  category: "Observe",
  keywords: [
    "deployment logs",
    "application logs",
    "real-time logs",
    "stdout stderr",
  ],
});

export default function LogsPage() {
  return <DocsRenderer content={LOGS_OVERVIEW_CONTENT} />;
}
