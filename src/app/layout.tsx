import type { Metadata } from "next";
import SearchModal from "@/components/Search/SearchModal";
import { SearchProvider } from "@/hooks/useSearch";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://docs.revolte.ai"),
  title: {
    default: "Revolte Docs",
    template: "%s | Revolte Docs"
  },
  description:
    "Comprehensive documentation for the Revolte platform. Learn how to automate your software delivery lifecycle.",
  keywords: [
    "Revolte",
    "Documentation",
    "API",
    "CI/CD",
    "Automation",
    "Software Delivery",
    "AI Pipeline"
  ],
  openGraph: {
    title: "Revolte Docs",
    description: "Comprehensive documentation for the Revolte platform.",
    url: "https://docs.revolte.ai",
    siteName: "Revolte Docs",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Revolte Docs",
    description: "Comprehensive documentation for the Revolte platform."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: '/images/revolte-fav-icon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          {children}
          <SearchModal />
        </SearchProvider>
      </body>
    </html>
  );
}
