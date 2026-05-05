import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { CREATE_FIRST_FEATURE_CONTENT } from "@/constants/pages/createFirstFeature";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Create your first feature",
  description:
    "Learn how to go from a natural-language requirement to a production-ready pull request in minutes.",
  path: "/platform/build/create-your-first-feature",
  category: "Build",
  keywords: [
    "first feature",
    "feature generation",
    "pull request automation",
    "natural language requirements",
  ],
});

export default function CreateFirstFeaturePage() {
  return <DocsRenderer content={CREATE_FIRST_FEATURE_CONTENT} />;
}
