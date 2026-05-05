import { ReactNode } from "react";

export interface DocsSession {
  id: string;
  title: string;
  categories: DocsCategory[];
}

export interface DocsCategory {
  id: string;
  title: string;
  items: DocsItem[];
  hasSubmenu?: boolean;
}

export interface DocsItem {
  id: string;
  title: string;
}

export type ListType = "list" | "step" | "alpha";

export interface ImageBlock {
  type: "image";
  data: string;
  caption?: string;
  maxWidth?: string;
  maxHeight?: string;
}


export interface CodeBlock {
  code: string;
  language?: string;
}

export interface ListItem {
  text: string;
  subItems?: (ListItem | ImageBlock)[];
}

export interface List {
  type: ListType;
  items: (string | ListItem | ImageBlock)[];
}

export interface Table {
  headers: string[];
  rows: string[][];
}

export interface CollapsibleBlock {
  title: string;
  content: ContentBlock[];
  defaultExpanded?: boolean;
}

export interface StepperBlock {
  steps: { title: string }[];
}

export interface FlowBlockData {
  steps: string[];
}

export interface CalloutBlock {
  text: string;
}

export interface CardGridItem {
  title: string;
  desc: string;
  href: string;
  cta: string;
}

export interface CardGridBlock {
  cards: CardGridItem[];
}

export interface FeatureGridItem {
  iconName: string;
  title: string;
  desc: string;
}

export interface FeatureGridBlock {
  features: FeatureGridItem[];
}

export interface LabelBlock {
  text: string;
}

export interface IconListItem {
  iconName: string;
  title: string;
  description?: string;
  subItems?: string[];
}

export interface IconListBlock {
  items: IconListItem[];
}

export interface CustomBlock {
  component: ReactNode;
}

export interface ContentBlock {
  type: 
    | "content" 
    | "list" 
    | "table" 
    | "image" 
    | "codeBlock" 
    | "collapsible"
    | "stepper"
    | "flowBlock"
    | "callout"
    | "cardGrid"
    | "featureGrid"
    | "label"
    | "iconList"
    | "custom";
  data: 
    | string 
    | List 
    | Table 
    | CodeBlock 
    | CollapsibleBlock
    | StepperBlock
    | FlowBlockData
    | CalloutBlock
    | CardGridBlock
    | FeatureGridBlock
    | LabelBlock
    | IconListBlock
    | CustomBlock;
  isSpaced?: boolean;
}

export interface SubSection {
  id: string;
  title: string;
  blocks: ContentBlock[];
  subSections?: SubSection[];
}

export interface ContentSection {
  id: string;
  title?: string;
  description?: string; 
  blocks: ContentBlock[];
  subSections?: SubSection[];
}

export interface MainContentProps {
  title: string;

  description: string;
  sections: ContentSection[];
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
  hasSubmenu?: boolean;
}
