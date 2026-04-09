"use client";

import React, { useState } from "react";
import { ExternalLink, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

export interface ChartDataItem {
  label: string;
  rejected: number;
  approved: number;
  pending: number;
}

export interface StackedAnalyticsChartProps {
  data: Record<string, ChartDataItem[]>;
}

export function StackedAnalyticsChart({ data }: StackedAnalyticsChartProps) {
  const [activeTab, setActiveTab] = useState("12 Months");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  let currentData = data[activeTab] || [];
  
  // Filter for better measurement in high-density views
  if (activeTab === "30 Days" || activeTab === "24 Hours") {
    currentData = currentData.filter((_, index) => index % 2 === 0);
  }

  // Calculate dynamic Y-axis values
  const actualMax = currentData.length > 0 
    ? Math.max(...currentData.map(d => d.rejected + d.approved + d.pending), 1)
    : 20;
  
  // Round up to nearest multiple of 4 for clean intervals
  const maxValue = Math.ceil(actualMax / 4) * 4;
  const dynamicYAxis = Array.from({ length: 6 }, (_, i) => Math.round(maxValue * (1 - i / 5)));

  return (
    <Card className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden text-[#101828] animate-slide-up">
      <div className="flex items-center justify-between px-6 py-4">
        <h3 className="text-base font-semibold">Applications Trend</h3>
        <MoreHorizontal className="h-5 w-5 text-slate-400 cursor-pointer" />
      </div>

      {/* Header with Filters and Legend */}
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between pt-0 pb-2">
        <div className="flex items-center gap-1 p-1  rounded-md w-fit">
          {["12 Months", "30 Days", "7 Days", "24 Hours"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setHoveredIndex(null);
              }}
              className={cn(
                "px-3 py-1.5 text-xs font-medium rounded-[6px] cursor-pointer transition-all",
                activeTab === tab
                  ? "bg-[#F8F9FB] text-[#323539] border border-[#E5E5E7]"
                  : "text-slate-500 hover:text-slate-800"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#E0EFFF]" />
            <span>Pending</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#59A8FF]" />
            <span>Approved</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#0A77FF]" />
            <span>Rejected</span>
          </div>
        </div>
      </div>

      <CardContent className="pt-2 overflow-x-auto no-scrollbar">
        <div className="relative flex flex-col h-56 min-w-[600px]">
          {/* Y-Axis and Grid Lines */}
          <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between">
            {dynamicYAxis.map((val) => (
              <div key={val} className="flex items-center gap-4 w-full h-[18%]">
                <span className="w-4 text-[10px] text-slate-400 font-medium text-right">{val}</span>
                <div className="flex-1 border-t border-slate-100" />
              </div>
            ))}
          </div>

          {/* X-Axis and Bars Area */}
          <div className="relative ml-10 flex-1 flex items-end justify-between pr-4 h-full" onMouseLeave={() => setHoveredIndex(null)}>
            {currentData.map((d, index) => {
              const rejectedHeightPct = (d.rejected / maxValue) * 100;
              const totalVal = d.rejected + d.approved + d.pending;
              const totalHeightPct = (totalVal / maxValue) * 100;

              return (
                <div 
                  key={`${d.label}-${index}`} 
                  className="group relative flex flex-col items-center mb-1 flex-1 h-full justify-end cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  {/* Tooltip - Exactly above Rejected bar segment */}
                  {hoveredIndex === index && (
                    <div 
                      className="absolute z-50 bg-[#101828] text-white p-3 rounded-lg shadow-xl text-[10px] min-w-[120px] pointer-events-none animate-in fade-in zoom-in duration-200"
                      style={{
                        bottom: `${rejectedHeightPct}%`,
                        transform: 'translateY(-12px)',
                        marginBottom: '8px'
                      }}
                    >
                      <p className="font-bold mb-2 border-b border-white/10 pb-1.5 flex justify-between">
                        <span>{d.label} {activeTab === "30 Days" ? "Day" : ""}</span>
                        <span className="text-slate-500 font-normal underline decoration-slate-600">{activeTab}</span>
                      </p>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#0A77FF]" />
                            <span className="text-slate-400">Rejected</span>
                          </div>
                          <span className="font-semibold text-white">{d.rejected}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#59A8FF]" />
                            <span className="text-slate-400">Approved</span>
                          </div>
                          <span className="font-semibold text-white">{d.approved}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#E0EFFF]" />
                            <span className="text-slate-400">Pending</span>
                          </div>
                          <span className="font-semibold text-white">{d.pending}</span>
                        </div>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#101828] rotate-45" />
                    </div>
                  )}

                  {/* Stacked Bar Container - Layered Approach */}
                  <div className={cn(
                    "w-8 relative overflow-hidden rounded-t-[6px] bg-transparent h-36 transition-all duration-300",
                    hoveredIndex === index ? "opacity-100 scale-x-105" : hoveredIndex !== null ? "opacity-40" : "opacity-100"
                  )}>
                    {/* Pending (Lightest) */}
                    <div
                      className="absolute inset-x-0 bottom-0 bg-[#E0EFFF] transition-all duration-500 rounded-t-[6px]"
                      style={{ height: `${(totalVal / maxValue) * 100}%` }}
                    />
                    {/* Approved (Medium) */}
                    <div
                      className="absolute inset-x-0 bottom-0 bg-[#59A8FF] transition-all duration-500 rounded-t-[6px]"
                      style={{ height: `${((d.rejected + d.approved) / maxValue) * 100}%` }}
                    />
                    {/* Rejected (Darkest) */}
                    <div
                      className="absolute inset-x-0 bottom-0 bg-[#0A77FF] transition-all duration-500 rounded-t-[6px]"
                      style={{ height: `${(d.rejected / maxValue) * 100}%` }}
                    />
                  </div>
                  {/* X-Axis Label */}
                  <div className="h-4 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400 font-medium">{d.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-100 px-6 py-4 bg-slate-50/30">
        <span className="text-xs font-medium text-slate-400">Data graph</span>
        <button className="flex cursor-pointer items-center gap-1.5 text-xs font-medium text-[var(--primary)] hover:underline">
          Open
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>
    </Card>
  );
}
