# Revolte Mintlify docs

This directory contains the MDX pages for the Mintlify version of the Revolte documentation.

The Mintlify configuration file lives at the repository root:

```txt
../docs.json
```

This is intentional. The hosted Mintlify integration validates from the connected repository root and expects `docs.json` or `mint.json` there.

## Install Mintlify

Mintlify's current CLI is `mint`.

```bash
npm i -g mint
```

You can also run the preview without a global install:

```bash
npx mint dev
```

## Run locally

Run Mintlify from the repository root because `docs.json` lives there.

```bash
cd /Users/nandimandalamsunny/Desktop/mintlify/revolte-docs-v2
mint dev
```

The preview starts at `http://localhost:3000`. If that port is already in use, Mintlify will try the next available port. To choose a port:

```bash
mint dev --port 3333
```

## Validate before publishing

```bash
cd /Users/nandimandalamsunny/Desktop/mintlify/revolte-docs-v2
mint validate
```

## Where files go

- Page content lives in module folders such as `docs/build/`, `docs/deploy/`, `docs/observe/`, `docs/control/`, and `docs/troubleshooting/`.
- Navigation lives in the root `docs.json`.
- Add new pages as `.mdx` files, then add their root-relative path to the relevant `navigation.groups[].pages` array without the `.mdx` extension.

## Current documentation structure

```txt
docs/
  build/
  deploy/
  observe/
  control/
  troubleshooting/
```
