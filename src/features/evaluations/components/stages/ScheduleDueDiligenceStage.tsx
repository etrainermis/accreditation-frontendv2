"use client";

import React from "react";
import { CheckCircle2, Clock, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";

interface ScheduleDueDiligenceStageProps {
  role: "super-admin" | "evaluator" | "supervisor";
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  assignedScheduledPrincipal: string | null;
  assignedScheduledSecondary1: string | null;
  assignedScheduledSecondary2: string | null;
  assignedScheduledPrincipalStatus: 'pending' | 'accepted' | null;
  assignedScheduledSecondary1Status: 'pending' | 'accepted' | null;
  assignedScheduledSecondary2Status: 'pending' | 'accepted' | null;
  setPendingEvaluatorRole: (role: string) => void;
  setActiveMajorStep: (step: number) => void;
  setShowInitialReview: (show: boolean) => void;
}

export const ScheduleDueDiligenceStage: React.FC<ScheduleDueDiligenceStageProps> = ({
  role,
  dateRange,
  setDateRange,
  assignedScheduledPrincipal,
  assignedScheduledSecondary1,
  assignedScheduledSecondary2,
  assignedScheduledPrincipalStatus,
  assignedScheduledSecondary1Status,
  assignedScheduledSecondary2Status,
  setPendingEvaluatorRole,
  setActiveMajorStep,
  setShowInitialReview,
}) => {
  const isProceedDisabled = role === "super-admin" && (!assignedScheduledPrincipal || !assignedScheduledSecondary1 || !assignedScheduledSecondary2);

  return (
    <div className="w-full py-8 px-0 flex flex-col items-start">
      <div className="w-full flex gap-12 px-6 text-left">
        {/* Left Column: Institution Location */}
        <div className="flex-1 max-w-lg">
          <div className="mb-6">
            <h2 className="text-md text-slate-900">Institution Location</h2>
            <p className="text-sm text-slate-500">Consider the location while scheduling the Due Diligence</p>
          </div>

          <div className="grid mt-10 grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] mt-2 text-slate-700">Province</label>
                <input readOnly defaultValue="Western" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] mt-2 text-slate-700">District</label>
                <input readOnly defaultValue="Nyabihu" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] mt-2 text-slate-700">Sector</label>
                <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] mt-2 text-slate-700">Cell</label>
                <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[13px] mt-2 text-slate-700">Village</label>
                <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[13px] mt-2 text-slate-700">City</label>
                <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] mt-2 text-slate-700">Address Line</label>
              <input readOnly defaultValue="Mukamira Road" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
            </div>
          </div>
        </div>

        {/* Right Column: Date Selection and Evaluator Assignment */}
        <div className="flex-1 flex flex-col w-[50%]">
          <div className="space-y-3">
            <label className="text-sm text-slate-700">Date Selection</label>
            <DateRangePicker
              value={dateRange}
              onChange={setDateRange}
              className="w-full"
            />
          </div>

          {role === "super-admin" && (
            <div className="space-y-3 mt-4">
              <h4 className="text-sm text-slate-700">Assign Evaluating Team</h4>

              {/* Principal Evaluator Card */}
              <div
                className={cn(
                  "border rounded-sm p-3 w-full transition-colors cursor-pointer group",
                  assignedScheduledPrincipal ? "border-[var(--primary)] bg-blue-50/10" : "border-slate-200 bg-slate-50/50 hover:border-[#0A77FF]/50"
                )}
                onClick={() => setPendingEvaluatorRole("Scheduled Principal")}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#0A77FF] transition-colors shrink-0">
                    {assignedScheduledPrincipal ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <UserPlus className="h-4 w-4 text-[#0A77FF]" />
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm text-slate-900">{assignedScheduledPrincipal || "Principal Evaluator"}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">Lead evaluator & decision maker</p>
                  </div>
                </div>
              </div>

              {/* Secondary Evaluator 1 Card */}
              <div
                className={cn(
                  "border border-dashed rounded-sm p-4 w-full transition-colors cursor-pointer group",
                  assignedScheduledSecondary1 ? "border-solid border-[var(--primary)] bg-blue-50/10" : "border-slate-200 hover:bg-slate-50"
                )}
                onClick={() => setPendingEvaluatorRole("Scheduled Secondary 1")}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                    {assignedScheduledSecondary1 ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <UserPlus className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] text-slate-900">{assignedScheduledSecondary1 || "Secondary Evaluator 1"}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
                  </div>
                </div>
              </div>

              {/* Secondary Evaluator 2 Card */}
              <div
                className={cn(
                  "border border-dashed rounded-sm p-4 w-full transition-colors cursor-pointer group",
                  assignedScheduledSecondary2 ? "border-solid border-[var(--primary)] bg-blue-50/10" : "border-slate-200 hover:bg-slate-50"
                )}
                onClick={() => setPendingEvaluatorRole("Scheduled Secondary 2")}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                    {assignedScheduledSecondary2 ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <UserPlus className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                  <div className="text-left flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[13px] text-slate-900">{assignedScheduledSecondary2 || "Secondary Evaluator 2"}</h4>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mt-auto pt-6">
            <button
              onClick={() => {
                setActiveMajorStep(0);
                setShowInitialReview(false);
              }}
              className="flex-1 py-3 px-4 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={() => setActiveMajorStep(2)}
              disabled={isProceedDisabled}
              className={cn(
                "flex-[2] py-3 px-4 bg-[#0A77FF] text-white rounded-sm text-sm transition-all cursor-pointer shadow-sm",
                isProceedDisabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 active:scale-[0.98]"
              )}
            >
              Schedule Due Diligence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
