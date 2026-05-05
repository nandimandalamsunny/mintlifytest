import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { BUILD_OVERVIEW_CONTENT } from "@/constants/pages/buildOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Build Overview",
  description:
    "Transform natural-language requirements into production-ready implementation, tests, and documentation automatically.",
  path: "/platform/build",
  category: "Build",
  keywords: [
    "build automation",
    "natural language to code",
    "AI software delivery",
    "implementation generation",
  ],
});

export default function BuildOverviewPage() {
  return <DocsRenderer content={BUILD_OVERVIEW_CONTENT} />;
}
