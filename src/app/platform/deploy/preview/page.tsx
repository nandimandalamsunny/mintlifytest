import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { PREVIEW_OVERVIEW_CONTENT } from "@/constants/pages/previewOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Preview",
  description:
    "Instantly spin up temporary, isolated environments for testing and validation.",
  path: "/platform/deploy/preview",
  category: "Deploy",
  keywords: [
    "preview deployments",
    "temporary environments",
    "pull request preview",
    "testing environments",
  ],
});

export default function PreviewPage() {
  return <DocsRenderer content={PREVIEW_OVERVIEW_CONTENT} />;
}

