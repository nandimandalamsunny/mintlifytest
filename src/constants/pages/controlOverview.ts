import { MainContentProps } from "@/types/docs";
import {
  createCalloutBlock,
  createFlowBlock,
  createListBlock,
  createLabelBlock,
} from "@/constants/docs";

export const CONTROL_OVERVIEW_CONTENT: MainContentProps = {
  title: "Control",

  description: "Govern every workload across your team. Control gives you centralized access management, role-based policies, and a full audit trail — so your team moves fast without compromising security.",
  sections: [
    {
      id: "overview",
      blocks: [
        createCalloutBlock("Control policies apply across all builds and deployments in your workspace.", true),
        createFlowBlock(["Define Policy", "Assign Roles", "Enforce", "Audit"], true),
      ],
    },
    {
      id: "what-control-brings",
      title: "Security and speed, together.",
      blocks: [
        createLabelBlock("What Control brings to your workflow"),
        createListBlock("list", [
          "**Role-based access:** Assign granular permissions per team, project, or environment",
          "**Approval workflows:** Require reviews and sign-offs before code ships to production",
          "**Branch protection:** Enforce rules on which branches can be targeted for builds",
          "**Complete audit trail:** Every build, deployment, and config change is logged and traceable",
        ]),
      ],
    },
    {
      id: "why-teams-use-control",
      blocks: [
        createLabelBlock("Why teams use Control"),
        createListBlock("list", [
          "Prevent unauthorized changes with role-based permissions",
          "Meet compliance requirements with built-in audit logging",
          "Reduce risk with mandatory approval workflows",
          "Scale governance as your team grows",
        ]),
      ],
    },
  ],
};
