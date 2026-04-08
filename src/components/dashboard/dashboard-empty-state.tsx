"use client";

import { FilePlus } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";

export function DashboardEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 pt-0 -mt-10 px-4">
      {/* Concentric Circles Graphic */}
      <div className="relative flex items-center justify-center mb-8 h-[240px] w-full max-w-[500px]">
        {/* Outer Circles */}
        <div className="absolute h-[320px] w-[320px] rounded-full border border-slate-100/50" />
        <div className="absolute h-[240px] w-[240px] rounded-full border border-slate-100/60" />
        <div className="absolute h-[160px] w-[160px] rounded-full border border-slate-100/70" />
        <div className="absolute h-[80px] w-[80px] rounded-full border border-[#F2F4F7]" />
        
        {/* Icon Container - Positioned at the bottom pole of the circles */}
        <div className="absolute bottom-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.02)] ring-1 ring-slate-200/60 transition-transform hover:scale-105">
          <FilePlus className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-[440px] mx-auto mb-8">
        <h3 className="text-[17px] font-semibold text-slate-900 mb-2">
          No Applications Yet!
        </h3>
        <p className="text-[13px] leading-relaxed text-slate-500">
          You haven&apos;t started any applications. Explore opportunities and 
          begin your first application to track your progress here.
        </p>
      </div>

      {/* Action Button */}
      <PrimaryButton 
        label="Start Application" 
        href="/applicant/applications"
        className="px-8"
      />
    </div>
  );
}
