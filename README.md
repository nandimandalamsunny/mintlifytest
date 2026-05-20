# Revolte Documentation

Welcome to the official developer documentation repository for Revolte, an AI-native software delivery platform. This repository is built as a pure **Mintlify** documentation workspace.

---

## 🧭 Repository Structure

- **`docs/`** — Mintlify MDX page content, including guides, reference material, and workflows.
- **`docs.json`** — Core Mintlify configuration file defining navigation, branding, styling, and search options.
- **`images/`** — Static asset directory housing figures, logos, and illustrations referenced by MDX pages.
- **`style.css`** — Global CSS stylesheet for custom Mintlify overrides.
- **`llms-links.js`** — Extension script injects linkages for LLM-readable `.txt` variations.

---

## 🚀 Local Development

To preview and work on the documentation locally, you should use the official **Mintlify CLI**.

### 1. Install Mintlify CLI
Install the Mintlify CLI globally using `npm`:

```bash
npm install -g mintlify
```

### 2. Run the Development Server
Navigate to the root directory and start the preview server:

```bash
mint dev
```

The preview will be served locally at [http://localhost:3000](http://localhost:3000).

---

## 📚 Writing & Validation Standards

Before contributing or merging modifications to the repository, please align with the following rules:

### Terminology & Style
- **Clarity & Outcomes First** — Focus on what the user accomplishes. Avoid generic templates, filler content, or excessive jargon.
- **Neutral Aesthetics** — Rely on clean spacing and clear heading hierarchy. Do not insert inline complex styled React blocks or JSX templates.
- **Scannable Layouts** — Use standard Markdown tables, bold headers, list definitions, and premium warning/note callouts where appropriate.

### References & Asset Linking
- **Documentation Hyperlinks** — Use relative, clean page routing (e.g. `/docs/quick-start`).
- **Images & Diagrams** — Store visuals in `/images/` and use path references (e.g. `/images/quickstart/visual.png`). All interactive visuals must use absolute paths from root.
