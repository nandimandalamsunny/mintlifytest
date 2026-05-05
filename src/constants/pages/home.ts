import { MainContentProps } from "@/types/docs";
import { createContentBlock } from "@/constants/docs";

export const HOME_CONTENT: MainContentProps = {
  title: "Welcome",
  description: "Understand what Revolte does in seconds.",
  sections: [
    {
      id: "welcome",
      blocks: [createContentBlock("Coming soon")],
    },
  ],
};
