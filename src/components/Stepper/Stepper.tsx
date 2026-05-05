import IndicatorCircle from "@/components/IndicatorCircle/IndicatorCircle";
import "./Stepper.css";

interface StepperStep {
  title: string;
}

interface StepperProps {
  steps: StepperStep[];
}

export default function Stepper({ steps }: StepperProps) {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={index} className="stepper__item">
          <IndicatorCircle number={index + 1} />
          <p className="stepper__title">{step.title}</p>
        </div>
      ))}
    </div>
  );
}
