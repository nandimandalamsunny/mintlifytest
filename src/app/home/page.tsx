import DocsRenderer from "@/components/DocsRenderer/DocsRenderer";
import { HOME_CONTENT } from "@/constants/pages/home";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Welcome",
  description: "Understand what Revolte does in seconds.",
  path: "/home",
  category: "Home",
  keywords: [
    "Revolte platform",
    "developer platform overview",
    "software delivery docs",
    "platform introduction",
  ],
});

export default function WelcomePage() {
  return <DocsRenderer content={HOME_CONTENT} />;
}
