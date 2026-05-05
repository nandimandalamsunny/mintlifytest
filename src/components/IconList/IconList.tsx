import React from "react";
import "./IconList.css";

interface IconListItem {
  iconName: string;
  title: string;
  description?: string;
  subItems?: string[];
}

interface IconListProps {
  items: IconListItem[];
}

export default function IconList({ items }: IconListProps) {
  return (
    <div className="icon-list">
      {items.map((item, idx) => (
        <div key={idx} className="icon-list-item">
          <div className="icon-list-left">
            <div className="icon-list-circle">
              <IconRenderer name={item.iconName} />
            </div>
          </div>
          <div className="icon-list-content">
            <h3 className="icon-list-title">{item.title}</h3>
            {item.description && <p className="icon-list-desc">{item.description}</p>}
            {item.subItems && item.subItems.length > 0 && (
              <ul className="icon-list-sub">
                {item.subItems.map((sub, sIdx) => (
                  <li key={sIdx}>{sub}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function IconRenderer({ name }: { name: string }) {
  switch (name) {
    case "server":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>;
    case "clock":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
    case "target":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" /></svg>;
    case "download":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
    default:
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>;
  }
}
