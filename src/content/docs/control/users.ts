import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createContentBlock,
  createImageBlock,
  createTableBlock,
} from "@/constants/docs";

export const USERS_CONTENT: MainContentProps = {
  title: "Users & roles",
  description:
    "A lightweight, role-based access system designed for fast team onboarding and controlled workspace access.",
  sections: [
    {
      id: "overview",
      title: "Overview",
      blocks: [
        createContentBlock(
          "Users & roles manages who can access a workspace and what actions they can perform. It gives teams a single place to invite members, assign roles, and maintain predictable access across the workspace."
        ),
        createContentBlock(
          "Use this feature when you need simple, workspace-level access control without adding operational overhead."
        ),
      ],
    },
    {
      id: "invite-users",
      title: "Invite users",
      blocks: [
        createContentBlock(
          "Invite new members directly from the workspace and assign a role as part of the invite flow. This makes it possible to onboard users with the right level of access from the start."
        ),
        createContentBlock(
          "Each invitation is tied to a workspace role, so access is defined before the user joins."
        ),
        createImageBlock("/images/docs/doc-info-users-invite.png"),
      ],
    },
    {
      id: "manage-users",
      title: "Manage users",
      blocks: [
        createContentBlock(
          "The users list provides a centralized view of workspace members, including name, email, role, and joined date. This makes it easy to review who has access and confirm that permissions remain aligned with team responsibilities."
        ),
        createContentBlock(
          "Use this page for routine access review, role updates, and day-to-day workspace administration."
        ),
        createImageBlock("/images/docs/doc-info-users-table.png"),
      ],
    },
    {
      id: "roles-and-permissions",
      title: "Roles & permissions",
      blocks: [
        createContentBlock(
          "Access is managed through simple workspace roles. Each role is designed to keep permissions clear and predictable as your team grows."
        ),
        createTableBlock(
          ["Role", "Access"],
          [
            ["Admin", "Full access"],
            ["Developer", "Build & deploy"],
            ["Viewer", "Read-only"],
          ]
        ),
        createCalloutBlock(
          "Roles are applied at the workspace level and affect access across applications, deployments, and settings."
        ),
      ],
    },
  ],
};
