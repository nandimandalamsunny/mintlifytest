"use client";

import "./Card.css";

export default function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="doc-card">
      <p className="doc-card__title">{title}</p>
      <div className="doc-card__desc">{children}</div>
    </div>
  );
}
