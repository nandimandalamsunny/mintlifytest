import React from "react";
import "./PageHeader.css";

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const id = title.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="docs-page-header-container">
      <h1 id={id} className="docs-page-title">
        {title}
      </h1>
      {description && (
        <p className="docs-page-description">
          {description}
        </p>
      )}
    </div>
  );
}
