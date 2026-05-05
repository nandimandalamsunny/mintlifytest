import React from "react";
import Link from "next/link";
import {
  MainContentProps,
  ContentSection,
  ContentBlock,
  List,
  ListItem,
  ImageBlock,
  CalloutBlock,
  Table,
  CardGridBlock,
  FeatureGridBlock,
  LabelBlock,
  FlowBlockData,
  StepperBlock,
  CustomBlock
} from "@/types/docs";
import FlowBlockComponent from "@/components/FlowBlock/FlowBlock";
import PageHeader from "@/components/PageHeader/PageHeader";

import StepperComponent from "@/components/Stepper/Stepper";
import CodeBlock from "@/components/CodeBlock/CodeBlock";
import IconList from "@/components/IconList/IconList";
import { IconListBlock as IconListType } from "@/types/docs";

export default function DocsRenderer({ content }: { content: MainContentProps }) {
  return (
    <div className="page-container">
      <PageHeader title={content.title} description={content.description} />

      {content.sections.map((section, idx) => (
        <SectionRenderer key={section.id || idx} section={section} />
      ))}
    </div>
  );
}

function SectionRenderer({ section }: { section: ContentSection }) {
  return (
    <section className="docs-section">
      {section.title && (
        <h2
          id={section.id}
          className="feature-section-title"
        >
          {section.title}
        </h2>
      )}
      {section.description && <p className="page-description">{section.description}</p>}
      <div className="docs-section-blocks">
        {section.blocks.map((block, idx) => (
          <BlockRenderer key={idx} block={block} />
        ))}
      </div>
    </section>
  );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
  const spacedClass = block.isSpaced ? "docs-block docs-block--spaced" : "docs-block";

  switch (block.type) {
    case "content":
      return <p className={`page-description ${spacedClass}`}>{block.data as string}</p>;

    case "list": {
      const listData = block.data as List;
      if (listData.type === "step") {
        return (
          <ol className={`space-y-4 list-decimal list-inside text-muted ${spacedClass}`}>
            {listData.items.map((item, i) => (
              <ListItemRenderer key={i} item={item} />
            ))}
          </ol>
        );
      }
      return (
        <ul className={`feature-list ${spacedClass}`}>
          {listData.items.map((item, i) => (
            <ListItemRenderer key={i} item={item} />
          ))}
        </ul>
      );
    }

    case "image": {
      const imgData = block?.data as unknown as ImageBlock;
      const src = typeof imgData === "string" ? imgData : imgData.data;
      const caption = typeof imgData === "object" ? imgData.caption : null;
      const maxWidth = typeof imgData === "object" ? imgData.maxWidth : null;
      const maxHeight = typeof imgData === "object" ? imgData.maxHeight : null;

      return (
        <figure className={`docs-figure ${spacedClass}`}>
          <div 
            className="docs-image-wrapper"
            style={{ 
              maxWidth: maxWidth || undefined, 
              maxHeight: maxHeight || undefined,
              overflow: maxHeight ? "hidden" : undefined
            }}
          >
            <img 
              src={src} 
              alt={caption || "Documentation Image"} 
              className="docs-image" 
              style={maxHeight ? { height: "100%", width: "100%", objectFit: "cover" } : undefined}
            />
          </div>
          {caption && <figcaption className="docs-image-caption">{caption}</figcaption>}
        </figure>
      );
    }

    case "table": {
      const tableData = block.data as Table;
      return (
        <div className={`docs-table-wrapper ${spacedClass}`}>
          <table className="docs-table">
            <thead>
              <tr>
                {tableData.headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case "callout": {
      const calloutData = block.data as CalloutBlock;
      return (
        <div className={`info-banner ${spacedClass}`}>
          <svg
            className="text-[#8B5CF6]/80 shrink-0"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <p className="info-banner-text">{calloutData.text}</p>
        </div>
      );
    }

    case "flowBlock": {
      const flowData = block.data as FlowBlockData;
      return (
        <div className={spacedClass}>
          <FlowBlockComponent steps={flowData.steps} />
        </div>
      );
    }

    case "stepper": {
      const stepperData = block.data as StepperBlock;
      return (
        <div className={spacedClass}>
          <StepperComponent steps={stepperData.steps} />
        </div>
      );
    }

    case "codeBlock": {
      const codeData = block.data as { code: string; language?: string };
      return (
        <div className={spacedClass}>
          <CodeBlock code={codeData.code} language={codeData.language} />
        </div>
      );
    }

    case "label": {
      const labelData = block.data as LabelBlock;
      return (
        <p className="docs-label-block">
          {labelData.text}
        </p>
      );
    }

    case "iconList": {
      const iconListData = block.data as IconListType;
      return (
        <div className={spacedClass}>
          <IconList items={iconListData.items} />
        </div>
      );
    }

    case "cardGrid": {
      const cardGridData = block.data as CardGridBlock;
      const isTwoCards = cardGridData.cards.length === 2;
      const gridClass = isTwoCards ? "card-grid-2" : "card-grid-3";

      return (
        <div className={`${gridClass} ${spacedClass}`}>
          {cardGridData.cards.map((card, i) => (
            <div
              key={i}
              className="doc-card"
              style={isTwoCards ? { padding: "1.5rem" } : undefined}
            >
              <h3 className="doc-card-title" style={isTwoCards ? { fontSize: "17px" } : undefined}>
                {card.title}
              </h3>
              <p
                className="doc-card-description"
                style={isTwoCards ? { fontSize: "14.5px", lineHeight: "24px" } : undefined}
              >
                {card.desc}
              </p>
              <Link
                href={card.href}
                className="doc-card-link"
                style={isTwoCards ? { fontSize: "14px" } : undefined}
              >
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      );
    }

    case "featureGrid": {
      const featureGridData = block.data as FeatureGridBlock;
      return (
        <div className={`wycb-grid ${spacedClass}`}>
          {featureGridData.features.map((cap, i) => (
            <div key={i} className="wycb-card">
              <div className="wycb-card-inner">
                <div className="wycb-icon">
                  <IconRenderer name={cap.iconName} />
                </div>
                <div>
                  <h3 className="wycb-card-title">{cap.title}</h3>
                  <p className="wycb-card-desc">{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    case "custom": {
      return <div className={spacedClass}>{(block.data as CustomBlock).component}</div>;
    }

    default:
      return null;
  }
}

function ListItemRenderer({ item }: { item: string | ListItem | ImageBlock }) {
  if (typeof item === "string") {
    // Parse bold text like "**Label:** text"
    const boldMatch = item.match(/^\*\*(.*?)\*\*(.*)/);
    if (boldMatch) {
      return (
        <li className="feature-item">
          <span className="feature-icon-wrapper">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
          <span className="feature-text">
            <strong className="feature-label">{boldMatch[1]}</strong>
            {boldMatch[2]}
          </span>
        </li>
      );
    }

    // Fallback for simple items (e.g. why-teams-use-control)
    return (
      <li className="flex gap-3 items-start text-sm text-muted leading-relaxed">
        <span className="text-accent font-bold shrink-0">→</span>
        {item}
      </li>
    );
  }

  if ("type" in item && item.type === "image") {
    return (
      <img src={item.data} className="my-2 rounded border border-border w-full max-w-lg h-auto" />
    );
  }

  const liItem = item as ListItem;
  return (
    <li className="feature-item">
      <span className="feature-icon-wrapper">
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#8B5CF6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <span className="feature-text">{liItem.text}</span>
      {liItem.subItems && (
        <ul className="list-circle list-inside ml-6 mt-2 space-y-2">
          {liItem.subItems.map((subItem, i) => (
            <ListItemRenderer key={i} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

function IconRenderer({ name }: { name: string }) {
  switch (name) {
    case "build":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "ship":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case "validate":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "deliver":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      );
    case "deploy":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "fix":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );
    default:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      );
  }
}
