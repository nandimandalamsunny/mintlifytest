import React from "react";
import "./IndicatorCircle.css";

interface IndicatorCircleProps {
  number: number | string;
  className?: string;
}

export default function IndicatorCircle({ number, className = "" }: IndicatorCircleProps) {
  return (
    <div className={`indicator-circle ${className}`}>
      {number}
    </div>
  );
}
