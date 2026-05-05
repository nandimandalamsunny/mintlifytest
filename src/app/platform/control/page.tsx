import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { CONTROL_OVERVIEW_CONTENT } from "@/constants/pages/controlOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Control Overview",
  description: "Manage access, policies, and governance across your workspace.",
  path: "/platform/control",
  category: "Control",
  keywords: [
    "access control",
    "governance",
    "role-based permissions",
    "workspace policies",
  ],
});

export default function ControlOverviewPage() {
  return <DocsRenderer content={CONTROL_OVERVIEW_CONTENT} />;
}
