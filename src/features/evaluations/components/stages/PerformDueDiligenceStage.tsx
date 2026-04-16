"use client";

import React from "react";
import { Search, Eye, Check, User, UserPlus, PlusSquare } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";

interface PerformDueDiligenceStageProps {
  role: "super-admin" | "evaluator" | "supervisor";
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  evaluationNote: string;
  setEvaluationNote: (note: string) => void;
  dueDiligenceEquipment: { id: number; name: string; quantity: string; found: boolean; image: string }[];
  setActiveMajorStep: (step: number) => void;
  setActiveInternalStep: (step: number) => void;
  setActiveTab: (tab: string) => void;
  setIsEvaluating: (evaluating: boolean) => void;
}

export const PerformDueDiligenceStage: React.FC<PerformDueDiligenceStageProps> = ({
  role,
  dateRange,
  setDateRange,
  evaluationNote,
  setEvaluationNote,
  dueDiligenceEquipment,
  setActiveMajorStep,
  setActiveInternalStep,
  setActiveTab,
  setIsEvaluating,
}) => {
  return (
    <div className="w-full py-8 px-0 flex flex-col items-start">
      <div className="w-full flex gap-12 text-left">
        {/* Left Column: Date, Hour, Evaluator, Notes */}
        <div className="w-[450px] shrink-0 flex flex-col gap-4">
     <div className="flex gap-2">
           <div className="space-y-3">
            <label className="text-sm text-slate-700">Date Selection</label>
            <DateRangePicker value={dateRange} onChange={setDateRange} className="w-full mt-5" />
          </div>

          <div className="space-y-3">
            <label className="text-sm text-slate-700">Visit Hour</label>
            <div className="relative">
              <input defaultValue="Western" className="w-full mt-5 px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white" />
            </div>
          </div>
     </div>

          {role === "super-admin" && (
            <div className="space-y-4">
              <h4 className="text-sm text-slate-700">Due Diligence Consensus</h4>

              <div className="border border-slate-200 rounded-sm p-4 flex w-full flex-col gap-3 bg-white">
                <div className="flex items-start gap-3 w-full">
                  <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[13px] font-bold text-slate-900">Principal Evaluator</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-50 px-2 py-0.5 rounded-sm border border-green-100">Accept</span>
                    </div>
                    <p className="text-[12px] text-slate-600 mt-1">Infrastructure meets all minimum requirements. Validated the networking lab.</p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-100 rounded-sm p-4 flex w-full flex-col gap-3 bg-slate-50/50">
                <div className="flex items-start gap-3 w-full">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200">
                    <User className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[12px] font-bold text-slate-700">Secondary Evaluator 1</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-50 px-2 py-0.5 rounded-sm border border-green-100">Accept</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Confirmed all PC models match invoices.</p>
                  </div>
                </div>
              </div>

              <div className="border border-slate-100 rounded-sm p-4 flex w-full flex-col gap-3 bg-slate-50/50">
                <div className="flex items-start gap-3 w-full">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200">
                    <User className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-[12px] font-bold text-slate-700">Secondary Evaluator 2</h4>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">Comment</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">Building ventilation needs slight improvement.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {role === "super-admin" && (
            <div className="border border-dashed border-slate-200 rounded-sm p-4 h-fit flex w-full items-center justify-left gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <UserPlus className="h-5 w-5 text-slate-400" />
              </div>
              <div className="text-left">
                <h4 className="text-sm text-slate-900">Assign Evaluator</h4>
                <p className="text-[11px] text-slate-400">Click to select evaluator</p>
              </div>
            </div>
          )}

          {role !== "super-admin" && (
            <div className="space-y-4">
              <h4 className="text-sm text-slate-700">Addition Evaluation Note?</h4>
              <div className="relative">
                <textarea
                  placeholder="Text..."
                  value={evaluationNote}
                  onChange={(e) => setEvaluationNote(e.target.value)}
                  className="w-full border border-slate-200 rounded-sm p-4 min-h-[140px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none no-scrollbar"
                />
                <div className="absolute bottom-4 right-4 text-[11px] text-slate-400">{275 - evaluationNote.length} characters left</div>
              </div>
              <button className="flex items-center gap-2 px-8 py-3 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-all cursor-pointer">
                Add Note
                <PlusSquare className="h-4 w-4 text-white/70" strokeWidth={1.5} />
              </button>
            </div>
          )}
                {/* Footer Actions */}
      <div className="flex items-center gap-4 w-full">
        <button
          onClick={() => setActiveMajorStep(1)}
          className="flex-1 py-3 px-4 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Back
        </button>
        <button
          onClick={() => {
            setActiveMajorStep(3);
            setActiveInternalStep(0);
            setActiveTab("General");
            setIsEvaluating(false);
          }}
          className="flex-[2] py-3 px-4 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer"
        >
          Complete Due Diligence
        </button>
      </div>
        </div>

        {/* Right Column: Equipment Verification */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500">{dueDiligenceEquipment.length} equipment</span>
          </div>
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
            <input placeholder="Search" className="w-full pl-11 pr-4 py-3 rounded-sm border border-slate-200 text-sm focus:outline-none focus:border-[#0A77FF]" />
          </div>

          <div className="flex flex-col gap-3 overflow-y-auto no-scrollbar max-h-[600px] max-w-xl">
            {dueDiligenceEquipment.map((item) => (
              <div key={item.id} className="border border-slate-100 rounded-sm p-4 bg-white flex items-center gap-4 group hover:border-slate-200 transition-colors">
                <div className="h-20 w-32 rounded-sm overflow-hidden bg-slate-100 shrink-0 relative">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm text-slate-900">{item.name}</h4>
                    <div className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[10px] text-slate-500 transition-colors">
                      Found at Site
                      <div className={cn("h-4 w-4 rounded-sm border border-slate-200 flex items-center justify-center transition-all", item.found ? "bg-green-500 border-green-500" : "bg-white")}>
                        {item.found && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400">Quantity: {item.quantity}</p>
                  <div className="flex justify-end mt-2">
                    <button className="h-7 w-7 rounded-sm border border-slate-100 flex items-center justify-center hover:bg-slate-50 text-blue-500 transition-colors cursor-pointer">
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};
