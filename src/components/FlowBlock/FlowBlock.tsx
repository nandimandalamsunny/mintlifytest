import IndicatorCircle from "@/components/IndicatorCircle/IndicatorCircle";
import "./FlowBlock.css";

export default function FlowBlock({ steps }: { steps: string[] }) {
  return (
    <div className="flow-block mt-10 flex items-center gap-6 overflow-x-auto no-scrollbar">
      {steps.map((step, index) => (
        <div key={index} className="flex shrink-0 items-center gap-6">
          <div className="flex items-center gap-3">
            <IndicatorCircle number={index + 1} />
            <span className="text-base font-medium text-[#e5e7eb]">{step}</span>
          </div>

          {index < steps.length - 1 ? (
            <span className="text-[1.125rem] leading-none text-[#6b7280]">-&gt;</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
