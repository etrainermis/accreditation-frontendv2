"use client";

import React, { useState } from "react";
import { mockApplications } from "@/lib/utils/application-utils";
import { FileText, Download, CheckCircle, XCircle, RotateCcw, MessageSquare, ArrowLeft } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/cn";

export function CurriculumReviewView({ id }: { id: string }) {
  const router = useRouter();
  const application = mockApplications.find(app => app.id === id) || mockApplications[0];
  const [status, setStatus] = useState<"approve" | "reject" | "revert" | null>(null);
  const [comment, setComment] = useState("");

  const documents = [
    { name: "Trade Course Outline.pdf", size: "2.4 MB", type: "Curriculum Outline" },
    { name: "Syllabus_2026_Final.pdf", size: "1.8 MB", type: "Teaching Syllabus" },
    { name: "Practical_Workshop_Manual.pdf", size: "5.6 MB", type: "Student Manual" },
    { name: "Assessment_Guidelines.pdf", size: "1.2 MB", type: "Assessment Tool" },
  ];

  return (
    <div className="flex flex-col gap-8 w-full xl:max-w-7xl lg:max-w-6xl max-w-5xl text-left">
      {/* Back Button */}
      <button 
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors w-fit group font-medium cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Applications
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        {/* Left Column: List of Documents */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden p-8">
            <h3 className="text-[18px] font-bold text-slate-900 mb-6">Curriculum Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-10 bg-white rounded shadow-sm flex items-center justify-center border border-slate-100">
                      <FileText className="h-6 w-6 text-[#0A77FF]" />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-slate-800 truncate max-w-[150px]">{doc.name}</p>
                      <p className="text-[11px] font-medium text-slate-400 mt-0.5">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <button className="h-10 w-10 flex items-center justify-center rounded-full text-slate-400 hover:bg-white hover:text-[#0A77FF] hover:shadow-sm transition-all cursor-pointer">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
               <FileText className="h-5 w-5 text-[#0A77FF]" />
               <h3 className="text-[18px] font-bold text-slate-900">Curriculum Description</h3>
            </div>
            <p className="text-[14px] leading-relaxed text-slate-600 font-medium whitespace-pre-line">
              This curriculum follows the standard guidelines for {application.trade.name} accreditation. 
              The package includes a comprehensive syllabus, practical workshop manuals for hands-on exercises, 
              and assessment guidelines aligned with national standards.
              {"\n\n"}
              The primary focus is on core competency development and practical application of theoretical knowledge. Evaluators should focus on the alignment between documented modules and the required skill levels.
            </p>
          </div>
        </div>

        {/* Right Column: Review Decisions */}
        <div className="space-y-6 lg:sticky lg:top-6 h-fit">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-[16px] font-bold text-slate-900 mb-6">Evaluation Decision</h3>
            
            <div className="flex flex-col gap-3 mb-8">
              <button 
                onClick={() => setStatus("approve")}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border transition-all text-left cursor-pointer",
                  status === "approve" ? "border-emerald-500 bg-emerald-50 text-emerald-700 font-bold" : "border-slate-100 hover:bg-slate-50 text-slate-600 font-medium"
                )}
              >
                <CheckCircle className={cn("h-5 w-5", status === "approve" ? "text-emerald-500" : "text-slate-400")} />
                <span className="text-[14px]">Approve Curriculum</span>
              </button>

              <button 
                onClick={() => setStatus("revert")}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border transition-all text-left cursor-pointer",
                  status === "revert" ? "border-orange-500 bg-orange-50 text-orange-700 font-bold" : "border-slate-100 hover:bg-slate-50 text-slate-600 font-medium"
                )}
              >
                <RotateCcw className={cn("h-5 w-5", status === "revert" ? "text-orange-500" : "text-slate-400")} />
                <span className="text-[14px]">Revert for Correction</span>
              </button>

              <button 
                onClick={() => setStatus("reject")}
                className={cn(
                  "flex items-center gap-3 p-4 rounded-xl border transition-all text-left cursor-pointer",
                  status === "reject" ? "border-red-500 bg-red-50 text-red-700 font-bold" : "border-slate-100 hover:bg-slate-50 text-slate-600 font-medium"
                )}
              >
                <XCircle className={cn("h-5 w-5", status === "reject" ? "text-red-500" : "text-slate-400")} />
                <span className="text-[14px]">Reject Application</span>
              </button>
            </div>

            {(status === "revert" || status === "reject") && (
              <div className="mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Evaluator Remarks (Required)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-slate-400" />
                  <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={status === "revert" ? "Explain what needs correction..." : "Explain grounds for rejection..."}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 pl-12 text-[13px] font-medium min-h-[120px] focus:outline-none focus:border-[#0A77FF] transition-all"
                  />
                </div>
              </div>
            )}

            <PrimaryButton 
              label={status ? `Confirm ${status.charAt(0).toUpperCase() + status.slice(1)}` : "Select Decision"}
              className="w-full py-4 text-[14px] transition-all rounded-xl"
              hideIcon={true}
              disabled={!status || ((status === "revert" || status === "reject") && !comment)}
              onClick={() => {
                alert(`Decision submitted: ${status}\nComment: ${comment}`);
                router.push("/curriculum-evaluator/applications");
              }}
            />
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-white">
            <h3 className="text-[14px] font-bold mb-4 opacity-80 uppercase tracking-widest">Application Info</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-wider mb-1">Institution</p>
                <p className="text-[14px] font-bold">{application.institution.name}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-wider mb-1">Trade Program</p>
                <p className="text-[14px] font-bold">{application.trade.name} ({application.trade.category})</p>
              </div>
              <div>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-wider mb-1">Applicant</p>
                <p className="text-[14px] font-bold">{application.applicant.name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
