import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { USERS_CONTENT } from "@/content/docs/control/users";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Users & Roles",
  description:
    "Manage workspace members with lightweight, role-based access control.",
  path: "/platform/control/users-roles",
  category: "Control",
  keywords: [
    "users and roles",
    "workspace members",
    "invite users",
    "role-based access control",
  ],
});

export default function UsersRolesPage() {
  return <DocsRenderer content={USERS_CONTENT} />;
}
