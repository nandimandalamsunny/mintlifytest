import {
  ContentBlock,
  ListType,
  ListItem,
  ImageBlock,
  DocsSession,
  CardGridItem,
  FeatureGridItem,
} from "@/types/docs";

export const createContentBlock = (
  content: string,
  isSpaced: boolean = false
): ContentBlock => ({
  type: "content",
  data: content,
  isSpaced,
});

export const createListBlock = (
  type: ListType,
  items: (string | ListItem | ImageBlock)[]
): ContentBlock => ({
  type: "list",
  data: { type, items },
});

export const createTableBlock = (
  headers: string[],
  rows: string[][]
): ContentBlock => ({
  type: "table",
  data: { headers, rows },
});

export const createImageBlock = (
  imagePath: string,
  caption?: string,
  maxWidth?: string,
  maxHeight?: string
): ImageBlock => ({
  type: "image",
  data: imagePath,
  caption,
  maxWidth,
  maxHeight,
});


export const createCodeBlock = (
  code: string,
  language?: string,
  isSpaced: boolean = false
): ContentBlock => ({
  type: "codeBlock",
  data: { code, language },
  isSpaced,
});

export const createCollapsibleBlock = (
  title: string,
  content: ContentBlock[],
  defaultExpanded: boolean = false,
  isSpaced: boolean = false
): ContentBlock => ({
  type: "collapsible",
  data: { title, content, defaultExpanded },
  isSpaced,
});

export const createStepperBlock = (
  steps: { title: string }[],
  isSpaced: boolean = false
): ContentBlock => ({
  type: "stepper",
  data: { steps },
  isSpaced,
});

export const createFlowBlock = (
  steps: string[],
  isSpaced: boolean = false
): ContentBlock => ({
  type: "flowBlock",
  data: { steps },
  isSpaced,
});

export const createCalloutBlock = (
  text: string,
  isSpaced: boolean = false
): ContentBlock => ({
  type: "callout",
  data: { text },
  isSpaced,
});

export const createCardGridBlock = (
  cards: CardGridItem[],
  isSpaced: boolean = false
): ContentBlock => ({
  type: "cardGrid",
  data: { cards },
  isSpaced,
});

export const createFeatureGridBlock = (
  features: FeatureGridItem[],
  isSpaced: boolean = false
): ContentBlock => ({
  type: "featureGrid",
  data: { features },
  isSpaced,
});

export const createLabelBlock = (
  text: string,
  isSpaced: boolean = false
): ContentBlock => ({
  type: "label",
  data: { text },
  isSpaced,
});

export const createIconListBlock = (
  items: { iconName: string; title: string; description?: string; subItems?: string[] }[],
  isSpaced: boolean = false
): ContentBlock => ({
  type: "iconList",
  data: { items },
  isSpaced,
});


export const CategoryList = [
  "quick-start",
  "capabilities",
  "faq",
  "revolte-yaml-basics",
  "cron",
  "frontend",
  "backend",
  "logs-observability",
  "errors",
  "shared-responsibility-model",
] as const;

export type CategoryKey = (typeof CategoryList)[number];

export const DOCS_SESSIONS: DocsSession[] = [
  {
    id: "home",
    title: "Home",
    categories: [
      {
        id: "quick-start",
        title: "Quick Start",
        items: [],
      },
    ],
  },
  {
    id: "overview",
    title: "Overview",
    categories: [
      {
        id: "capabilities",
        title: "Capabilities",
        items: [],
      },
      {
        id: "revolte-yaml-basics",
        title: "Revolte Yaml Basics",
        items: [],
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    categories: [
      {
        id: "faq",
        title: "Frequently Asked Questions",
        items: [],
      },
    ],
  },
  {
    id: "guides",
    title: "Guides",
    categories: [
      {
        id: "cron",
        title: "CRON",
        items: [],
      },
      {
        id: "frontend",
        title: "Frontend",
        items: [],
      },
      {
        id: "backend",
        title: "Backend",
        items: [],
      },
    ],
  },
  {
    id: "references",
    title: "References",
    categories: [
      {
        id: "errors",
        title: "Errors",
        items: [],
      },
      {
        id: "logs-observability",
        title: "Logs & Observability",
        items: [],
      },
    ],
  },
  {
    id: "compliance",
    title: "Compliance",
    categories: [
      {
        id: "shared-responsibility-model",
        title: "Shared Responsibility Model",
        items: [],
      },
    ],
  },
];
