"use client";

import Image from "next/image";
import IndicatorCircle from "@/components/IndicatorCircle/IndicatorCircle";
import "./QuickStartTimeline.css";

type QuickStartStep = {
  step: number;
  heading: string;
  description: string;
  code?: string;
};

const defaultSteps: QuickStartStep[] = [
  {
    step: 1,
    heading: "Account Creation",
    description: "Create your Revolte account to begin. This centralized identity manages your organizations, clusters, and automated pipelines across all environments."
  },
  {
    step: 2,
    heading: "Define Organization Workspace",
    description: "Establish your team's centralized workspace. Revolte uses these details to partition resources and secure your environment from the start."
  },
  {
    step: 3,
    heading: "Target Cloud Infrastructure",
    description: "Choose your deployment target. Revolte automatically orchestrates the underlying provider services, eliminating manual cluster or instance setup."
  },
  {
    step: 4,
    heading: "Connect Source Control",
    description: "Link your GitHub or GitLab repositories. This establishes the foundation for your automated CI/CD pipeline and feature generation."
  },
  {
    step: 5,
    heading: "Integrate Product Management",
    description: "Connect tools like Jira or Linear. Revolte uses this data to translate requirements directly into production-ready code."
  },
  {
    step: 6,
    heading: "Orchestrate Project Settings",
    description: "Finalize your project's high-level configurations. The platform prepares the cross-tool integrations required for autonomous builds."
  },
  {
    step: 7,
    heading: "Initialize Application",
    description: "Define your application's identity. Revolte creates the underlying repository structures and initializes the base system architecture."
  },
  {
    step: 8,
    heading: "Automate Pipeline Workflows",
    description: "Define your environment strategy. The platform automatically generates your CI/CD YAMLs and rollout rules for Preview and Production stages."
  },
  {
    step: 9,
    heading: "Validate and Launch",
    description: "Review the automated configuration. Once confirmed, Revolte activates your global pipeline, and your application goes live instantly."
  }
];

import CodeBlock from "@/components/CodeBlock/CodeBlock";

function getImagePath(step: number) {
  // Account creation (step 1) has no image.
  // Other steps use images 1-8.
  return `/images/quickstart/quick-start-${step - 1}.png`;
}


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
        const hasMedia = item.code || item.step > 1;

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
                      src={getImagePath(item.step)}
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
