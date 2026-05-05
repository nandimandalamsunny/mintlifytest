import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { WHAT_YOU_CAN_BUILD_CONTENT } from "@/constants/pages/whatYouCanBuild";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "What you can build",
  description: "Go from requirement to production without manual implementation.",
  path: "/home/what-you-can-build",
  category: "Home",
  keywords: [
    "platform capabilities",
    "use cases",
    "application development automation",
    "feature delivery",
  ],
});

export default function WhatYouCanBuildPage() {
  return <DocsRenderer content={WHAT_YOU_CAN_BUILD_CONTENT} />;
}
