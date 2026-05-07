# Revolte Mintlify Docs

This directory contains the MDX pages for the Mintlify version of the Revolte documentation.

The Mintlify configuration file lives at the repository root:

```txt
../docs.json
```

This is intentional. The hosted Mintlify integration validates from the connected repository root and expects `docs.json` or `mint.json` there.

## Run Locally

Run Mintlify from the repository root because `docs.json` lives there.

```bash
npm run docs
```

You can also run the Mintlify CLI directly:

```bash
npx -p node@20 -p mintlify mint dev
```

The preview starts at `http://localhost:3000`. If that port is already in use, Mintlify will try the next available port. To choose a port:

```bash
npx -p node@20 -p mintlify mint dev --port 3333
```

## Validate before publishing

```bash
cd /Users/nandimandalamsunny/Desktop/mintlify/revolte-docs-v2
npx -p node@20 -p mintlify mint validate
```

## Where files go

- Page content lives in module folders such as `docs/build/`, `docs/deploy/`, `docs/observe/`, `docs/control/`, and `docs/troubleshooting/`.
- Navigation lives in the root `docs.json`.
- Add new pages as `.mdx` files, then add their root-relative path to the relevant `navigation.groups[].pages` array without the `.mdx` extension.

## Current documentation structure

```txt
docs/
  agents/
  build/
  control/
  deploy/
  enterprise/
  guides/
  integrations/
  observe/
  platform/
  troubleshooting/
```
