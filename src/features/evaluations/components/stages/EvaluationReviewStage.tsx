"use client";

import React from "react";
import { Users, FileText, CheckCircle2, Clock, AlertTriangle, Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface EvaluationReviewStageProps {
  activeInternalStep: number;
  setActiveInternalStep: (step: number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isEvaluating: boolean;
  setIsEvaluating: (evaluating: boolean) => void;
  staffAllocationList: any[];
  documentList: any[];
  equipmentList: any[];
  completedSteps: number[];
  setCompletedSteps: React.Dispatch<React.SetStateAction<number[]>>;
  activeMajorStep: number;
  setActiveMajorStep: (step: number) => void;
  handleNext: () => void;
}

export const EvaluationReviewStage: React.FC<EvaluationReviewStageProps> = ({
  activeInternalStep,
  setActiveInternalStep,
  activeTab,
  setActiveTab,
  isEvaluating,
  setIsEvaluating,
  staffAllocationList,
  documentList,
  equipmentList,
  completedSteps,
  setCompletedSteps,
  activeMajorStep,
  handleNext,
}) => {
  const tabs = ["General", "Address", "Personnel", "About"];

  return (
    <div className="w-full max-w-4xl py-12 px-10">
      {activeInternalStep === 0 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-slate-900">Institution Details</h2>
            {!isEvaluating && (
              <button 
                onClick={() => setIsEvaluating(true)}
                className="px-6 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer flex items-center gap-2"
              >
                Start Evaluation
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>

          <p className="text-sm text-slate-500 max-w-2xl">
            Review the institution's registration details, legal certificates, and basic information to ensure they meet the minimum accreditation prerequisites.
          </p>

          <div className="flex gap-8 border-b border-slate-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "pb-4 text-sm transition-all relative",
                  activeTab === tab ? "text-[#0A77FF] font-medium" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0A77FF]" />}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 py-4">
            <div className="space-y-1.5">
              <label className="text-[13px] text-slate-400">Institution Name</label>
              <p className="text-sm text-slate-700">ETrainer Academy</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] text-slate-400">Registration Number</label>
              <p className="text-sm text-slate-700">RCA/2024/00129</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] text-slate-400">Type of Institution</label>
              <p className="text-sm text-slate-700">Private Vocational Center</p>
            </div>
            <div className="space-y-1.5">
              <label className="text-[13px] text-slate-400">Year Established</label>
              <p className="text-sm text-slate-700">2018</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full pt-10 border-t border-slate-50">
            <button className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Back</button>
            <button 
              onClick={handleNext}
              className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {activeInternalStep === 1 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-slate-900">Trade & Competency</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-6 border border-slate-200 rounded-sm bg-slate-50/30">
              <h3 className="text-sm font-medium text-slate-900 mb-2">Automotive Mechanics</h3>
              <p className="text-[13px] text-slate-500">Level 3 - Diploma in Automotive Engineering and Vehicle Maintenance.</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-sm bg-slate-50/30">
              <h3 className="text-sm font-medium text-slate-900 mb-2">Plumbing & Welding</h3>
              <p className="text-[13px] text-slate-500">Level 4 - Advanced Certificate in Industrial Plumbing Systems.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full pt-10">
            <button onClick={() => setActiveInternalStep(0)} className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Back</button>
            <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer">Continue</button>
          </div>
        </div>
      )}

      {activeInternalStep === 2 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-slate-900">Equipment and Facilities</h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {equipmentList.map((item) => (
              <div key={item.id} className="p-4 border border-slate-100 rounded-sm flex items-center justify-between hover:border-slate-200 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-sm bg-slate-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-900">{item.name}</h4>
                    <p className="text-[11px] text-slate-400">{item.quantity}</p>
                  </div>
                </div>
                <button className="text-[12px] text-[#0A77FF] hover:underline cursor-pointer">View Proof</button>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full pt-10">
            <button onClick={() => setActiveInternalStep(1)} className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Back</button>
            <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer">Continue</button>
          </div>
        </div>
      )}

      {activeInternalStep === 3 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-slate-900">Curriculum Documents</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {documentList.map((doc) => (
              <div key={doc.id} className="p-4 border border-slate-100 rounded-sm flex items-center gap-3 hover:border-slate-200 transition-colors group">
                <div className="h-10 w-10 rounded-sm bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors">
                  <FileText className="h-5 w-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-[13px] text-slate-900 truncate">{doc.name}</h4>
                  <p className="text-[11px] text-slate-400">{doc.size}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full pt-10">
            <button onClick={() => setActiveInternalStep(2)} className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Back</button>
            <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer">Continue</button>
          </div>
        </div>
      )}

      {activeInternalStep === 4 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-slate-900">Staff Allocation</h2>
          </div>

          <div className="flex items-center gap-4 w-full mb-10">
            <button onClick={() => setActiveInternalStep(3)} className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
            <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm hover:opacity-90 transition-opacity">
              {activeMajorStep === 3 ? "Proceed to Decision" : "Continue"}
            </button>
          </div>

          <div className="w-full border border-slate-100 rounded-sm overflow-hidden bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="w-10 p-4 text-center">
                    <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                  </th>
                  <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400">Position & Qualification</th>
                  <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400">Count</th>
                  <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {staffAllocationList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/30 transition-colors group">
                    <td className="w-10 p-4 text-center">
                      <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                          <Users className="h-4 w-4 text-slate-500" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm text-slate-900">{item.position}</span>
                          <span className="text-[11px] text-slate-400">{item.qualification}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-sm text-slate-600">{item.count}</td>
                    <td className="px-3 py-4">
                      {item.status === "Approved" && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-green-100 text-[10px] text-green-600">
                          Approved
                          <Check className="h-2.5 w-2.5" />
                        </div>
                      )}
                      {item.status === "Pending" && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-blue-100 text-[10px] text-blue-600">
                          Pending
                          <Clock className="h-2.5 w-2.5" />
                        </div>
                      )}
                      {item.status === "Rejected" && (
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-red-100 text-[10px] text-red-600">
                          Rejected
                          <AlertTriangle className="h-2.5 w-2.5" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
