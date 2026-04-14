"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils/cn";
import { Check, Clock, MessageSquare, AlertCircle, FileText, ChevronDown, HelpCircle } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { mockApplications } from "@/lib/utils/application-utils";

interface ApplicantEvaluationsViewProps {
  // Empty for now, can accept application ID later
}

const HorizontalStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: "Initial Review", sub: "Documents Review" },
    { label: "Schedule Due Diligence", sub: "Website and location" },
    { label: "Perform Due Diligence", sub: "Start collaborating" },
    { label: "Final Review", sub: "Start collaborating" },
    { label: "Decision Making", sub: "Outcome shared" },
  ];

  return (
    <div className="w-full overflow-x-auto pb-4 no-scrollbar">
      <div className="flex items-start justify-between min-w-[750px] my-6 px-1 pt-2 relative overflow-visible">
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        const isCompleted = idx < currentStep;

        return (
          <div key={idx} className="flex flex-col items-start text-start relative flex-1 min-w-[130px]">
            {/* Connector Line Segments */}
            {idx > 0 && (
              <div
                className={cn(
                  "absolute top-[12px] left-[-100%] right-[calc(100%-12px)] ml-[12px] h-[1px] z-0",
                  idx <= currentStep ? "bg-[#0A77FF] h-[1.5px]" : "bg-slate-200"
                )}
              />
            )}

            <div className={cn(
              "h-6 w-6 rounded-full border flex items-center justify-center mb-3 transition-all duration-300 shrink-0 relative z-10",
              isActive ? "border-[#0A77FF] bg-[#0A77FF]" :
                isCompleted ? "border-[#0A77FF] bg-[#0A77FF]" : "border-slate-200 bg-white"
            )}>
              {isCompleted ? (
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              ) : isActive ? (
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              ) : (
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
              )}
            </div>
            <span className={cn(
              "text-[12px] font-bold block mb-0.5 whitespace-nowrap",
              idx <= currentStep ? "text-slate-900" : "text-slate-400"
            )}>
              {step.label}
            </span>
            <span className="text-[10px] text-slate-400 whitespace-nowrap font-medium">{step.sub}</span>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export function ApplicantEvaluationsView({}: ApplicantEvaluationsViewProps) {
  const application = mockApplications[1]; // Using the 2nd one which is "Due Diligence Scheduled"
  const currentStep = 1; // Maps to "Schedule Due Diligence" roughly
  const [selectedAppId, setSelectedAppId] = useState(application.id);

  const mockFeedback = [
    {
      id: "1",
      date: "12 Apr 2026, 10:30 AM",
      type: "action_required",
      author: "Evaluator Team",
      message: "Please upload the revised CV for your lead instructor position. The document provided was blurred.",
      icon: AlertCircle,
      iconColor: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      id: "2",
      date: "10 Apr 2026, 02:15 PM",
      type: "update",
      author: "System",
      message: "Initial Review completed successfully. Your application has proceeded to Due Diligence scheduling.",
      icon: Check,
      iconColor: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      id: "3",
      date: "08 Apr 2026, 09:00 AM",
      type: "comment",
      author: "Evaluator Team",
      message: "We have received your application and will begin the initial document verification shortly.",
      icon: MessageSquare,
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50",
    }
  ];

  return (
    <div className="flex flex-col gap-6 w-full xl:max-w-7xl lg:max-w-6xl max-w-5xl">
      {/* Application Selector */}
      <div className="bg-white border text-left border-slate-200 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">Selected Application</h2>
          <div className="flex items-center gap-3">
            <span className="text-[16px] font-medium text-slate-900">{application.trade.name}</span>
            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[11px] font-bold uppercase tracking-wider">{application.trade.category}</span>
          </div>
        </div>
        <div className="relative min-w-[200px]">
          <select 
            value={selectedAppId}
            onChange={(e) => setSelectedAppId(e.target.value)}
            className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 text-[13px] font-medium py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#0A77FF]"
          >
            {mockApplications.map(app => (
              <option key={app.id} value={app.id}>{app.trade.name} - {app.trade.category}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
        {/* Left Column: Timeline & Progress */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Progress Card */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl">
            <h3 className="text-[16px] font-bold text-slate-800 mb-2">Evaluation Progress</h3>
            <p className="text-[13px] text-slate-500 mb-8">Track the status of your accreditation application through the evaluation stages.</p>
            
            <HorizontalStepper currentStep={currentStep} />
          </div>

          {/* Feedback Timeline */}
          <div className="bg-white border border-slate-200 p-8 rounded-2xl">
            <h3 className="text-[16px] font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Recent Feedback & Activity</h3>
            
            <div className="relative">
              {/* Vertical line connecting timeline items */}
              <div className="absolute left-[19px] top-4 bottom-4 w-px bg-slate-100" />
              
              <div className="flex flex-col gap-8 relative">
                {mockFeedback.map((feedback) => (
                  <div key={feedback.id} className="flex gap-4">
                    <div className={cn("relative z-10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-white ring-4 ring-white", feedback.bgColor)}>
                      <feedback.icon className={cn("h-4 w-4", feedback.iconColor)} />
                    </div>
                    <div className="flex flex-col pt-2 pb-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[13px] font-bold text-slate-800">{feedback.author}</span>
                        <span className="text-[11px] font-medium text-slate-400">• {feedback.date}</span>
                      </div>
                      <p className="text-[13px] text-slate-600 leading-relaxed font-medium bg-slate-50/50 p-4 rounded-xl border border-slate-100 mt-2">
                        {feedback.message}
                      </p>
                      
                      {feedback.type === 'action_required' && (
                        <div className="mt-3">
                           <PrimaryButton label="Upload Document" icon={FileText} className="py-2 px-4 shadow-none" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Status Summary */}
        <div className="flex flex-col gap-6">
          <div className="bg-white border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-[14px] font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Current Status</h3>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-start gap-3">
                 <div className="mt-0.5"><Clock className="h-4 w-4 text-[#0A77FF]" /></div>
                 <div>
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Stage</p>
                   <p className="text-[13px] font-bold text-slate-800">{application.stage}</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-3">
                 <div className="mt-0.5"><Check className="h-4 w-4 text-emerald-500" /></div>
                 <div>
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Application ID</p>
                   <p className="text-[13px] font-bold text-slate-800">APP-2026-04-{application.id.padStart(3, '0')}</p>
                 </div>
               </div>

               <div className="flex items-start gap-3">
                 <div className="mt-0.5"><FileText className="h-4 w-4 text-slate-400" /></div>
                 <div>
                   <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Submitted On</p>
                   <p className="text-[13px] font-bold text-slate-800">{application.submittedOn}</p>
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-[#0A77FF]/5 border border-[#0A77FF]/10 p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-2 text-[#0A77FF]">
               <HelpCircle className="h-5 w-5" />
               <h3 className="text-[14px] font-bold">Need Help?</h3>
            </div>
            <p className="text-[12px] font-medium text-slate-600 mb-4 leading-relaxed">
              If you have any questions regarding the evaluation process or need to appeal a decision, please contact our support team.
            </p>
            <button className="text-[12px] font-bold text-[#0A77FF] hover:underline">Contact Support &rarr;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
