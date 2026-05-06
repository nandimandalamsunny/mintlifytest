(function () {
  const NORMALIZE_RE = /\s+/g;
  const COPY_LABEL = "copy page";
  const SUCCESS_MESSAGE = "Page copied";

  function normalizeText(value) {
    return (value || "").replace(NORMALIZE_RE, " ").trim().toLowerCase();
  }

  function getLabel(node) {
    if (!(node instanceof HTMLElement)) return "";
    return normalizeText(
      node.getAttribute("aria-label") ||
        node.getAttribute("title") ||
        node.innerText ||
        node.textContent ||
        ""
    );
  }

  function isCopyTrigger(node) {
    if (!(node instanceof HTMLElement)) return false;
    const candidate = node.closest("button, a, [role='menuitem'], [role='button']");
    if (!(candidate instanceof HTMLElement)) return false;
    return getLabel(candidate) === COPY_LABEL;
  }

  function selectArticleRoot() {
    return (
      document.querySelector("article") ||
      document.querySelector("main") ||
      document.body
    );
  }

  function stripUnwantedNodes(root) {
    root.querySelectorAll("button, nav, aside, footer, dialog, script, style").forEach((node) => {
      node.remove();
    });

    root
      .querySelectorAll("[aria-label='Navigate to header'], [aria-label='Open search'], [aria-label='More actions']")
      .forEach((node) => node.remove());
  }

  function extractFromAiLinks() {
    const links = Array.from(document.querySelectorAll("a[href]"));
    const candidates = [];

    for (const link of links) {
      const href = link.getAttribute("href") || "";
      if (!/chatgpt|claude|perplexity/i.test(href)) continue;

      try {
        const url = new URL(href, window.location.origin);
        for (const value of url.searchParams.values()) {
          const decoded = decodeURIComponent(value);
          if (decoded.length > 400) {
            candidates.push(decoded);
          }
        }
      } catch {
        // Ignore malformed URLs and continue.
      }
    }

    return candidates.sort((a, b) => b.length - a.length)[0] || "";
  }

  function inlineText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent || "";
    }

    if (!(node instanceof HTMLElement)) return "";

    if (node.tagName === "A") {
      const text = node.textContent?.trim() || "";
      const href = node.getAttribute("href") || "";
      return text && href ? `[${text}](${href})` : text;
    }

    if (node.tagName === "CODE" && node.parentElement?.tagName !== "PRE") {
      return "`" + (node.textContent || "").trim() + "`";
    }

    return Array.from(node.childNodes).map(inlineText).join("");
  }

  function blockToMarkdown(node, depth) {
    if (!(node instanceof HTMLElement)) return "";

    const text = inlineText(node).replace(NORMALIZE_RE, " ").trim();
    if (!text && node.tagName !== "IMG" && node.tagName !== "PRE" && node.tagName !== "TABLE") {
      return "";
    }

    switch (node.tagName) {
      case "H1":
      case "H2":
      case "H3":
      case "H4":
      case "H5":
      case "H6": {
        const level = Number(node.tagName[1]);
        return `${"#".repeat(level)} ${text}\n\n`;
      }
      case "P":
        return `${text}\n\n`;
      case "BLOCKQUOTE":
        return text
          .split("\n")
          .map((line) => `> ${line}`)
          .join("\n")
          .concat("\n\n");
      case "PRE":
        return `\`\`\`\n${node.textContent?.trim() || ""}\n\`\`\`\n\n`;
      case "UL":
        return Array.from(node.children)
          .map((child) => blockToMarkdown(child, depth))
          .join("")
          .concat("\n");
      case "OL":
        return Array.from(node.children)
          .map((child, index) => blockToMarkdown(child, depth, index + 1))
          .join("")
          .concat("\n");
      case "LI": {
        const prefix = `${"  ".repeat(depth)}- `;
        const childText = Array.from(node.childNodes)
          .map((child) => inlineText(child))
          .join("")
          .replace(NORMALIZE_RE, " ")
          .trim();
        return `${prefix}${childText}\n`;
      }
      case "IMG": {
        const alt = node.getAttribute("alt") || "image";
        const src = node.getAttribute("src") || "";
        return `![${alt}](${src})\n\n`;
      }
      case "TABLE": {
        const rows = Array.from(node.querySelectorAll("tr"));
        const values = rows.map((row) =>
          Array.from(row.querySelectorAll("th, td")).map((cell) =>
            inlineText(cell).replace(/\|/g, "\\|").trim()
          )
        );
        if (!values.length) return "";
        const header = `| ${values[0].join(" | ")} |`;
        const divider = `| ${values[0].map(() => "---").join(" | ")} |`;
        const body = values.slice(1).map((row) => `| ${row.join(" | ")} |`).join("\n");
        return [header, divider, body].filter(Boolean).join("\n") + "\n\n";
      }
      default:
        return "";
    }
  }

  function articleToMarkdown() {
    const root = selectArticleRoot();
    const clone = root.cloneNode(true);
    if (!(clone instanceof HTMLElement)) return document.title;

    stripUnwantedNodes(clone);

    const blocks = Array.from(
      clone.querySelectorAll("h1, h2, h3, h4, h5, h6, p, blockquote, pre, ul, ol, img, table")
    );

    const markdown = blocks
      .map((node) => blockToMarkdown(node, 0))
      .join("")
      .replace(/\n{3,}/g, "\n\n")
      .trim();

    return markdown || document.title;
  }

  async function writeClipboard(text) {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    textarea.style.pointerEvents = "none";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  }

  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "24px";
    toast.style.right = "24px";
    toast.style.zIndex = "9999";
    toast.style.padding = "10px 14px";
    toast.style.borderRadius = "10px";
    toast.style.background = "rgba(17, 18, 23, 0.96)";
    toast.style.border = "1px solid rgba(139, 92, 246, 0.35)";
    toast.style.color = "#f9fafb";
    toast.style.fontSize = "13px";
    toast.style.boxShadow = "0 12px 32px rgba(0, 0, 0, 0.28)";
    document.body.appendChild(toast);
    window.setTimeout(() => toast.remove(), 1800);
  }

  async function handleCopy(event) {
    const trigger = event.target;
    if (!(trigger instanceof HTMLElement) || !isCopyTrigger(trigger)) return;

    event.preventDefault();
    event.stopPropagation();

    try {
      const content = extractFromAiLinks() || articleToMarkdown();
      await writeClipboard(content);
      showToast(SUCCESS_MESSAGE);
    } catch {
      // Let the native handler continue if the fallback fails.
    }
  }

  document.addEventListener("click", handleCopy, true);
})();
