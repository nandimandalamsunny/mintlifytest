"use client";

import React, { useState } from "react";
import "./CodeBlock.css";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const fallbackCopy = (value: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = value;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "-9999px";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    textArea.setSelectionRange(0, value.length);

    const copiedWithFallback = document.execCommand("copy");
    document.body.removeChild(textArea);

    if (!copiedWithFallback) {
      throw new Error("Fallback copy failed");
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(code);
      } else {
        fallbackCopy(code);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      try {
        fallbackCopy(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackError) {
        console.error("Failed to copy!", fallbackError || err);
      }
    }
  };

  return (
    <div className="code-block-container group">
      {language && <div className="code-block-lang">{language}</div>}
      <button 
        type="button"
        onClick={handleCopy}
        className="code-block-copy-btn"
        aria-label="Copy code"
      >
        {copied ? (
          <span className="flex items-center gap-1.5 text-emerald-400">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied
          </span>
        ) : (
          <span className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            Copy
          </span>
        )}
      </button>
      <pre className="code-block-content">
        <code>{code}</code>
      </pre>
    </div>
  );
}
