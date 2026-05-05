import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { REVIEW_OUTPUT_CONTENT } from "@/constants/pages/reviewOutput";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Review Output",
  description:
    "Understand the artifacts Revolte generates and how to validate them for production readiness.",
  path: "/platform/build/review-output",
  category: "Build",
  keywords: [
    "review output",
    "generated artifacts",
    "production readiness",
    "documentation review",
  ],
});

export default function ReviewOutputPage() {
  return <DocsRenderer content={REVIEW_OUTPUT_CONTENT} />;
}
