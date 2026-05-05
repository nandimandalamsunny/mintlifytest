"use client";

import Image from "next/image";
import IndicatorCircle from "@/components/IndicatorCircle/IndicatorCircle";
import "./QuickStartTimeline.css";

type QuickStartStep = {
  step: number;
  heading: string;
  description: string;
  image?: string;
  code?: string;
};

const defaultSteps: QuickStartStep[] = [
  {
    step: 1,
    heading: "Sign up",
    description: "Create your Revolte account to start the onboarding flow. This gives you access to the workspace, project, and deployment setup that follows."
  },
  {
    step: 2,
    heading: "Complete workspace details",
    description: "Add your organization details so Revolte can create the right workspace context for your team and applications.",
    image: "/images/quickstart/quick-start-1.png",
  },
  {
    step: 3,
    heading: "Select a cloud target",
    description: "Choose where Revolte should run and manage your application infrastructure.",
    image: "/images/quickstart/quick-start-2.png",
  },
  {
    step: 4,
    heading: "Connect source control",
    description: "Connect the Git provider that contains the repository Revolte will use for generated pull requests and delivery workflows.",
    image: "/images/quickstart/quick-start-3.png",
  },
  {
    step: 5,
    heading: "Connect project management",
    description: "Optionally connect tools like Jira so requirements and delivery workflows can stay linked.",
    image: "/images/quickstart/quick-start-4.png",
  },
  {
    step: 6,
    heading: "Create the project",
    description: "Create or select the project that will group related applications under the same product context.",
    image: "/images/quickstart/quick-start-5.png",
  },
  {
    step: 7,
    heading: "Create the application",
    description: "Name the application and choose the repository Revolte should manage.",
    image: "/images/quickstart/quick-start-6.png",
  },
  {
    step: 8,
    heading: "Configure the pipeline",
    description: "Review the framework, branch mapping, workflow toggles, and generated pipeline configuration.",
    image: "/images/quickstart/quick-start-7.png",
  },
  {
    step: 9,
    heading: "Launch the application",
    description: "Confirm the final checklist and start the first deployment workflow for the application.",
    image: "/images/quickstart/quick-start-8.png",
  }
];

import CodeBlock from "@/components/CodeBlock/CodeBlock";

function getStepId(step: QuickStartStep) {
  return step.heading
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

interface QuickStartTimelineProps {
  steps?: QuickStartStep[];
}

export default function QuickStartTimeline({ steps }: QuickStartTimelineProps) {
  const displaySteps = steps || defaultSteps;

  return (
    <section className="qs-container">
      {displaySteps.map((item, index) => {
        const isLast = index === displaySteps.length - 1;
        const stepId = getStepId(item);
        const hasMedia = Boolean(item.code || item.image);

        return (
          <article key={item.step} className="qs-step">
            {/* LEFT: timeline */}
            <div className="qs-left">
              <IndicatorCircle number={item.step} />
              {!isLast && <div className="qs-line" />}
            </div>

            {/* RIGHT: content */}
            <div className="qs-content">
              <h2 id={stepId} className="qs-heading">
                {item.heading}
              </h2>

              <p className="qs-desc">{item.description}</p>

              {hasMedia && (
                <div className="qs-image">
                  {item.code ? (
                    <CodeBlock code={item.code} language="bash" />
                  ) : (
                    <Image
                      src={item.image!}
                      alt={item.heading}
                      width={1600}
                      height={900}
                      priority={index < 2}
                    />
                  )}
                </div>
              )}

            </div>
          </article>
        );
      })}
    </section>
  );
}
