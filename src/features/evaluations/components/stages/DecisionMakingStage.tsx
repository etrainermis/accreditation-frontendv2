"use client";

import React from "react";
import { CheckCircle2, CheckCheck, Search, X, RefreshCw, PlusSquare, User } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";

interface DecisionMakingStageProps {
  role: "super-admin" | "evaluator" | "supervisor";
  application: any;
  assignedPrincipal: string | null;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  setActiveMajorStep: (step: number) => void;
}

export const DecisionMakingStage: React.FC<DecisionMakingStageProps> = ({
  role,
  application,
  assignedPrincipal,
  dateRange,
  setDateRange,
  setActiveMajorStep,
}) => {
  return (
    <div className="w-full py-8 px-0 flex flex-col items-start">
      {role === "supervisor" ? (
        // Supervisor View - Certificate Granting
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Evaluation Complete</h2>
            <p className="text-sm text-slate-500">Review the evaluation results and grant certificate access</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Application Status</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                <CheckCheck className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-600">Approved</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs text-slate-500">Institution</span>
                <p className="text-sm text-slate-900">{application.institution.name}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500">Trade</span>
                <p className="text-sm text-slate-900">{application.trade.name}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500">Evaluation Date</span>
                <p className="text-sm text-slate-900">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500">Principal Evaluator</span>
                <p className="text-sm text-slate-900">{assignedPrincipal || "Not Assigned"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Certificate Access Control</h3>
            <p className="text-sm text-slate-600">Grant the applicant access to download their accreditation certificate.</p>
            
            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={() => alert("Certificate access granted successfully!")}
                className="flex-1 py-3 bg-blue-600 text-white rounded-sm text-sm hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4" />
                Grant Certificate Access
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Back to Applications
            </button>
          </div>
        </div>
      ) : (
        // Super-Admin/Evaluator View - Decision Making
        <div className="w-full flex gap-12 text-left">
          {/* Left Column */}
          <div className="w-[450px] shrink-0 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">24 equipment</span>
            </div>
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
              <input placeholder="Search" className="w-full pl-11 pr-4 py-3 rounded-sm border border-slate-200 text-sm focus:outline-none focus:border-[#0A77FF]" />
            </div>

            {/* Decision Radio Badges */}
            <div className="flex gap-4">
              <label className="flex-1 flex items-center justify-between p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-[#0A77FF] group transition-colors">
                <div className="flex items-center gap-2">
                  <CheckCheck className="h-4 w-4 text-[#0A77FF]" />
                  <span className="text-sm text-slate-700">Approved</span>
                </div>
                <input type="radio" name="decision" className="h-4 w-4 text-[#0A77FF] focus:ring-[#0A77FF] cursor-pointer" />
              </label>
              <label className="flex-1 flex items-center justify-between p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-[#0A77FF] group transition-colors">
                <div className="flex items-center gap-2">
                  <X className="h-4 w-4 text-[#0A77FF]" />
                  <span className="text-sm text-slate-700">Rejected</span>
                </div>
                <input type="radio" name="decision" className="h-4 w-4 text-[#0A77FF] focus:ring-[#0A77FF] cursor-pointer" />
              </label>
              <label className="flex-1 flex items-center justify-between p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-[#0A77FF] group transition-colors">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-4 w-4 text-[#0A77FF]" />
                  <span className="text-sm text-slate-700">Reverted</span>
                </div>
                <input type="radio" name="decision" className="h-4 w-4 text-[#0A77FF] focus:ring-[#0A77FF] cursor-pointer" />
              </label>
            </div>

            {/* Confirm / Cancel Buttons */}
            <div className="flex items-center gap-4 w-full mt-2">
              <button onClick={() => setActiveMajorStep(3)} className="flex-1 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
              <button onClick={() => alert("Confirm decision")} className="flex-1 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer">Confirm</button>
            </div>

            {/* Comment Box */}
            <div className="space-y-4 mt-2">
              <h4 className="text-sm text-slate-700">Any addition comment?</h4>
              <div className="relative">
                <textarea placeholder="Text..." className="w-full border border-slate-200 rounded-sm p-4 min-h-[100px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none no-scrollbar" />
                <div className="absolute bottom-[-24px] left-0 text-[11px] text-slate-400">275 characters left</div>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-all cursor-pointer mt-8">
                Add Note
                <PlusSquare className="h-4 w-4 text-white/70" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <label className="text-[13px] text-slate-700">Date Selection</label>
                <div className="relative">
                  <DateRangePicker value={dateRange} onChange={setDateRange} className="w-full" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[13px] text-slate-700">Visit Hour</label>
                <div className="relative">
                  <input defaultValue="Western" className="w-full px-4 py-[10px] rounded-sm border border-slate-200 text-[13px] text-slate-700 bg-white focus:outline-none focus:border-[#0A77FF]" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 bg-transparent rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                  <img src="https://ui-avatars.com/api/?name=Command+R&background=FF8A65&color=fff&rounded=true" alt="logo" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-slate-900 leading-tight">Command+R</span>
                  <span className="text-[11px] text-slate-500">cmdr.ai</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200">
                  <User className="h-4 w-4 text-slate-400 stroke-2" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-500 leading-tight">Submitted by</span>
                  <span className="text-[13px] text-slate-900 leading-tight">John Smith</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
