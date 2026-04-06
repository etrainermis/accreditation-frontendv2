"use client";

import { evaluatorEvaluationsHeader } from "@/features/evaluations/constants";

export function EvaluatorEvaluationsHeader() {
  return (
    <div className="mb-4 flex flex-col gap-2 lg:mb-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="mb-1 text-sm font-medium text-[#101828] font-sans" style={{ fontSize: 14, lineHeight: "20px" }}>
          {evaluatorEvaluationsHeader.title}
        </h1>
        <p className="text-sm font-medium text-[#475467] font-sans" style={{ fontSize: 14, lineHeight: "20px" }}>
          {evaluatorEvaluationsHeader.description}
        </p>
      </div>
      <button className="h-11 rounded-xl bg-[#0A77FF] px-6 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#0059c9]">
        {evaluatorEvaluationsHeader.ctaLabel}
      </button>
    </div>
  );
}
