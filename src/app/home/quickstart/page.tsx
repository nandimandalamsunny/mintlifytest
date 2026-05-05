import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { QUICK_START_CONTENT } from "@/constants/pages/quickStart";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Quick Start",
  description: "Get from requirement to deployed code in under 5 minutes.",
  path: "/home/quickstart",
  category: "Home",
  keywords: [
    "quick start",
    "getting started",
    "developer onboarding",
    "first deployment",
  ],
});

export default function QuickStartPage() {
  return <DocsRenderer content={QUICK_START_CONTENT} />;
}
