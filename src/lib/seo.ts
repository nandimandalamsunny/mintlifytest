import type { Metadata, MetadataRoute } from "next";

const SITE_NAME = "Revolte Docs";

const DEFAULT_KEYWORDS = [
  "Revolte",
  "Revolte Docs",
  "developer platform",
  "software delivery",
  "deployment automation",
  "platform documentation",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  category?: string;
  type?: "article" | "website";
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  category,
  type = "article",
}: PageMetadataInput): Metadata {
  const uniqueKeywords = Array.from(
    new Set([...DEFAULT_KEYWORDS, ...(category ? [category] : []), ...keywords])
  );

  return {
    title,
    description,
    keywords: uniqueKeywords,
    category,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}


