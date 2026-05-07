# Revolte Documentation

Customer-facing documentation for Revolte, including the Mintlify docs source and the local Next.js documentation preview.

## Repository Structure

- `docs/` contains the Mintlify MDX pages.
- `docs.json` defines Mintlify navigation, branding, and global settings.
- `images/` contains Mintlify assets referenced by MDX pages.
- `src/` contains the Next.js documentation preview experience.
- `public/` contains static assets used by the Next.js app.

## Local Development

Install dependencies:

```bash
npm install
```

Run the Next.js preview:

```bash
npm run dev
```

Run the Mintlify preview:

```bash
npm run docs
```

## Validation Checklist

Before publishing documentation changes:

- Run `npm run lint`.
- Run `npm run build`.
- Confirm all internal MDX links and image references resolve.
- Review changed pages for prerequisites, clear next steps, and customer-safe wording.

## Documentation Standards

- Use concise, customer-facing language.
- Add a `description` to every MDX page for better search and previews.
- Prefer absolute docs links such as `/docs/build/quick-start`.
- Use absolute image paths such as `/images/quickstart/quick-start-1.png`.
- Avoid placeholder content, unsupported claims, and links to unrelated vendors.
