export interface SearchResult {
  title: string;
  url: string;
  description: string;
  category: string;
  keywords: string[];
}

export const searchIndex: SearchResult[] = [
  {
    title: "Welcome",
    url: "/home",
    description: "Understand what Revolte does in seconds.",
    category: "Home",
    keywords: ["intro", "overview", "revolte", "docs", "documentation", "what is revolte"]
  },
  {
    title: "What you can build",
    url: "/home/what-you-can-build",
    description: "Go from requirement to production without manual implementation.",
    category: "Home",
    keywords: [
      "capabilities",
      "features",
      "use cases",
      "what can i build",
      "automate",
      "software delivery"
    ]
  },
  {
    title: "Quick Start",
    url: "/home/quickstart",
    description: "Get from requirement to deployed code in under 5 minutes.",
    category: "Home",
    keywords: [
      "quickstart",
      "getting started",
      "start",
      "setup",
      "onboarding",
      "first project",
      "5 minutes"
    ]
  },
  {
    title: "Build Overview",
    url: "/platform/build",
    description:
      "Transform natural-language requirements into production-ready implementation, tests, and documentation automatically.",
    category: "Build",
    keywords: [
      "build",
      "generate code",
      "requirements",
      "natural language",
      "implementation",
      "tests",
      "automation"
    ]
  },
  {
    title: "Create your first feature",
    url: "/platform/build/create-your-first-feature",
    description:
      "Learn how to go from a natural-language requirement to a production-ready pull request in minutes.",
    category: "Build",
    keywords: [
      "first feature",
      "create feature",
      "new feature",
      "pull request",
      "pr",
      "requirement",
      "ship feature"
    ]
  },
  {
    title: "CLI Workflow",
    url: "/platform/build/cli-workflow",
    description: "Trigger builds, manage features, and review output directly from your terminal.",
    category: "Build",
    keywords: [
      "cli",
      "terminal",
      "command line",
      "commands",
      "local",
      "developer workflow",
      "shell"
    ]
  },
  {
    title: "Web Workflow",
    url: "/platform/build/web-workflow",
    description: "Manage your entire software delivery pipeline from the Revolte Dashboard.",
    category: "Build",
    keywords: ["web", "dashboard", "ui", "browser", "console", "workspace", "pipeline"]
  },
  {
    title: "Review Output",
    url: "/platform/build/review-output",
    description:
      "Understand the artifacts Revolte generates and how to validate them for production readiness.",
    category: "Build",
    keywords: [
      "review",
      "output",
      "artifacts",
      "generated code",
      "validation",
      "checklist",
      "production readiness"
    ]
  },
  {
    title: "Deploy Overview",
    url: "/platform/deploy",
    description:
      "Ship code to any environment with automated deployments, previews, and rollbacks.",
    category: "Deploy",
    keywords: ["deploy", "deployment", "release", "ship", "production", "rollback", "pipeline"]
  },
  {
    title: "Deploy your system",
    url: "/platform/deploy/deploy-your-system",
    description: "Set up your first deployment pipeline in minutes.",
    category: "Deploy",
    keywords: [
      "deploy system",
      "first deploy",
      "deployment setup",
      "pipeline setup",
      "ship to production",
      "production deploy"
    ]
  },
  {
    title: "Preview",
    url: "/platform/deploy/preview",
    description: "Instantly spin up temporary, isolated environments for testing and validation.",
    category: "Deploy",
    keywords: [
      "preview",
      "preview deployment",
      "temporary environment",
      "pull request preview",
      "validation",
      "testing"
    ]
  },
  {
    title: "Environments",
    url: "/platform/deploy/environments",
    description: "Configure staging, production, preview, QA, and custom deployment environments.",
    category: "Deploy",
    keywords: [
      "environment",
      "environments",
      "env",
      "staging",
      "production",
      "qa",
      "preview",
      "configuration"
    ]
  },
  {
    title: "Environment Variables",
    url: "/platform/deploy/environments/environment-variables",
    description:
      "Manage environment-specific variables and secrets for preview, QA, staging, and production.",
    category: "Deploy",
    keywords: [
      "environment variables",
      "env vars",
      "secrets",
      "runtime configuration",
      "deployment configuration",
      "api keys"
    ]
  },
  {
    title: "Past Deployments",
    url: "/platform/deploy/past-deployments",
    description:
      "Review deployment history, inspect release metadata, and revert to previous stable versions.",
    category: "Deploy",
    keywords: [
      "past deployments",
      "deployment history",
      "release history",
      "rollback",
      "revert",
      "previous deployment",
      "commit history",
      "deployment metadata",
      "audit trail",
      "status",
      "duration",
      "initiated by"
    ]
  },
  {
    title: "Deployment Activity",
    url: "/platform/deploy/deployment-activity",
    description:
      "Review deployment events in chronological order with stage, timestamp, and actor context.",
    category: "Deploy",
    keywords: [
      "deployment activity",
      "activity timeline",
      "deployment timeline",
      "build initiated",
      "build success",
      "deployment started",
      "deployment success",
      "timestamp",
      "triggered by",
      "actor",
      "release audit"
    ]
  },
  {
    title: "Observe Overview",
    url: "/platform/observe",
    description:
      "Gain deep visibility into application performance, health, logs, and engineering metrics.",
    category: "Observe",
    keywords: [
      "observe",
      "observability",
      "monitoring",
      "health",
      "performance",
      "debugging",
      "visibility"
    ]
  },
  {
    title: "Logs",
    url: "/platform/observe/logs",
    description:
      "Search, filter, and stream stdout and stderr from every build and deployment in real time.",
    category: "Observe",
    keywords: [
      "logs",
      "logging",
      "stdout",
      "stderr",
      "trace",
      "debug",
      "filter logs",
      "runtime logs",
      "build logs"
    ]
  },
  {
    title: "Metrics",
    url: "/platform/observe/metrics",
    description:
      "Track performance, resource usage, DORA metrics, and system health across deployments.",
    category: "Observe",
    keywords: [
      "metrics",
      "dora",
      "performance",
      "resource usage",
      "latency",
      "health",
      "dashboard",
      "insights"
    ]
  },
  {
    title: "Control Overview",
    url: "/platform/control",
    description: "Manage access, policies, governance, role-based permissions, and audit trails.",
    category: "Control",
    keywords: [
      "control",
      "access",
      "permissions",
      "roles",
      "rbac",
      "governance",
      "audit",
      "security",
      "policies"
    ]
  },
  {
    title: "Users & Roles",
    url: "/platform/control/users-roles",
    description:
      "Invite workspace members, assign roles, and manage access with lightweight role-based controls.",
    category: "Control",
    keywords: [
      "users",
      "roles",
      "permissions",
      "invite users",
      "workspace members",
      "access control",
      "user management",
      "admin",
      "developer",
      "viewer"
    ]
  },
  {
    title: "Services",
    url: "/platform/control/services",
    description:
      "Configure managed runtime services such as storage buckets, cron jobs, and secrets.",
    category: "Control",
    keywords: [
      "services",
      "buckets",
      "storage",
      "cron jobs",
      "scheduled tasks",
      "secrets",
      "environment variables",
      "credentials",
      "runtime services",
      "application services"
    ]
  },
  {
    title: "Troubleshooting",
    url: "/platform/troubleshooting",
    description: "Diagnose and resolve issues across builds, deployments, and runtime systems.",
    category: "Troubleshooting",
    keywords: [
      "troubleshooting",
      "debug",
      "fix",
      "issues",
      "problems",
      "failures",
      "errors",
      "diagnose"
    ]
  },
  {
    title: "Error Reference",
    url: "/platform/troubleshooting/errors",
    description: "Comprehensive guide to common platform errors and resolution steps.",
    category: "Troubleshooting",
    keywords: [
      "error",
      "errors",
      "reference",
      "failure",
      "timeout",
      "missing env",
      "environment variable",
      "auth failed",
      "out of memory"
    ]
  }
];

const suggestedUrls = new Set([
  "/home/quickstart",
  "/platform/build/create-your-first-feature",
  "/platform/build",
  "/platform/deploy/deploy-your-system",
  "/platform/observe/logs"
]);

export const suggestedSearchResults = searchIndex.filter((item) => suggestedUrls.has(item.url));
