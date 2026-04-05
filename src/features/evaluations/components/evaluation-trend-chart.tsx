"use client";

import { useState } from "react";
import { ExternalLink, MoreHorizontal } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

const timeRanges = ["12 Months", "30 Days", "7 Days", "24 Hours"];

const data = [
  { month: "Jan", pending: 6, approved: 4, rejected: 2 },
  { month: "Feb", pending: 8, approved: 6, rejected: 3 },
  { month: "Mar", pending: 4, approved: 3, rejected: 2 },
  { month: "Apr", pending: 10, approved: 7, rejected: 4 },
  { month: "May", pending: 6, approved: 4, rejected: 2 },
  { month: "Jun", pending: 8, approved: 12, rejected: 4 },
  { month: "Jul", pending: 0, approved: 0, rejected: 0 },
  { month: "Aug", pending: 12, approved: 10, rejected: 6 },
  { month: "Sep", pending: 6, approved: 4, rejected: 2 },
  { month: "Oct", pending: 8, approved: 6, rejected: 3 },
  { month: "Nov", pending: 10, approved: 8, rejected: 4 },
  { month: "Dec", pending: 6, approved: 4, rejected: 2 },
];

export function EvaluationTrendChart() {
  const [activeRange, setActiveRange] = useState("12 Months");
  const maxVal = 20;

  return (
    <Card className="overflow-hidden rounded-2xl border-slate-100 shadow-xl shadow-slate-200/10">
      <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 pb-5 pt-5 sm:px-6 lg:px-8">
        <CardTitle className="text-sm font-medium tracking-tight text-slate-800 sm:text-base">Your Evaluation Trend</CardTitle>
        <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-50 hover:text-slate-600">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>

      <div className="overflow-x-auto border-b border-slate-100 bg-slate-50/30 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex w-max min-w-full rounded-xl bg-slate-100/60 p-1.5">
          {timeRanges.map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={cn(
                "rounded-lg px-4 py-2 text-[11px] font-medium tracking-wide transition-all duration-300 sm:px-5",
                activeRange === range
                  ? "bg-white text-slate-900 shadow-md ring-1 ring-slate-200/50"
                  : "text-slate-400 hover:text-slate-600",
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <CardContent className="relative px-4 pb-6 pt-6 sm:px-6 sm:pb-8 lg:px-8 lg:pb-10">
        <div className="mb-4 flex flex-wrap items-center gap-4 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 sm:justify-end">
          <div className="flex cursor-default items-center gap-2.5 transition-all hover:scale-105">
            <div className="h-2 w-2 rounded-full border border-slate-100 bg-[#E7F1FF]" />
            <span>Pending</span>
          </div>
          <div className="flex cursor-default items-center gap-2.5 transition-all hover:scale-105">
            <div className="h-2 w-2 rounded-full border border-blue-100 bg-[#5BA4FF]" />
            <span>Approved</span>
          </div>
          <div className="flex cursor-default items-center gap-2.5 transition-all hover:scale-105">
            <div className="h-2 w-2 rounded-full border border-blue-300 bg-[#0A77FF]" />
            <span>Rejected</span>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1 top-1/2 hidden -translate-y-1/2 -rotate-90 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em] text-slate-300 sm:block">
            Tasks
          </div>

          <div className="overflow-x-auto pb-10">
            <div className="relative ml-0 h-[320px] min-w-[640px] sm:ml-10">
              <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between">
                {[20, 16, 12, 8, 4, 0].map((label) => (
                  <div key={label} className="flex h-0 w-full items-center gap-4 sm:gap-6">
                    <span className="w-6 text-right text-[11px] font-medium tabular-nums text-slate-300">{label}</span>
                    <div className="h-[1px] flex-1 border-t border-slate-100/60" />
                  </div>
                ))}
              </div>

              <div className="absolute inset-y-0 left-10 right-2 flex items-end justify-between pt-4 sm:left-12 sm:right-6">
                {data.map((item) => (
                  <div key={item.month} className="group relative mx-2 flex h-full flex-1 flex-col items-center justify-end sm:mx-3">
                    <span className="absolute -bottom-8 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400 transition-all group-hover:scale-110 group-hover:text-slate-900">
                      {item.month}
                    </span>

                    <div className="flex w-full min-w-[32px] max-w-[42px] flex-col-reverse items-center overflow-hidden rounded-t-lg transition-all duration-500 group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-[#0A77FF]/5">
                      <div
                        className="w-full bg-[#0A77FF] shadow-[inset_0_-1px_0_rgba(0,0,0,0.1)] transition-all duration-1000"
                        style={{ height: `${(item.rejected / maxVal) * 320}px` }}
                      />
                      <div
                        className="w-full bg-[#5BA4FF] shadow-[inset_0_-1px_0_rgba(0,0,0,0.05)] transition-all duration-1000 delay-75"
                        style={{ height: `${(item.approved / maxVal) * 320}px` }}
                      />
                      <div
                        className="w-full bg-[#E7F1FF] transition-all duration-1000 delay-150"
                        style={{ height: `${(item.pending / maxVal) * 320}px` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-[10px] font-medium uppercase tracking-[0.3em] text-slate-300">
                Timeline (12M)
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <span className="w-fit rounded-lg bg-slate-50 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Performance Analytics
          </span>
          <button className="group flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-[#0A77FF] transition-all hover:bg-blue-50 sm:px-5">
            Open Detailed Analytics
            <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
