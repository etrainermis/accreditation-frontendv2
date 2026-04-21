"use client";

import { useState } from "react";
import { Check, ChevronRight, CheckCircle2, AlertTriangle, Clock } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { ApplicationDTO } from "@/lib/api/application-api";

interface DashboardFilledStateProps {
  applications: ApplicationDTO[];
}

const details = [
  { id: 1, title: "Training Program(s) Selection Completed", description: "Successfully selected trades and verified curriculum parameters.", completed: true },
  { id: 2, title: "Competencies Selected", description: "All required competencies and modules have been mapped.", completed: true },
  { id: 3, title: "Equipment and Facilities Added with Proofs", description: "Infrastructure compliance checks validated.", completed: true },
  { id: 4, title: "Curriculum Documents", description: "All mandatory PDF documentation uploaded and structured.", completed: true },
  { id: 5, title: "Staff Allocation", description: "Technical and administrative staff bound to application.", completed: true },
];

export function DashboardFilledState({ applications }: DashboardFilledStateProps) {
  const [selectedApp, setSelectedApp] = useState<ApplicationDTO | null>(applications[0] || null);

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'APPROVED': return <Check className="h-3 w-3" strokeWidth={3} />;
      case 'REJECTED': return <AlertTriangle className="h-3 w-3" strokeWidth={3} />;
      default: return <Clock className="h-3 w-3" strokeWidth={3} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'APPROVED': return "border-emerald-100 bg-emerald-50/50 text-emerald-600";
      case 'REJECTED': return "border-red-100 bg-red-50/50 text-red-600";
      default: return "border-amber-100 bg-amber-50/50 text-amber-600";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Left Column: Your Applications */}
      <div>
        <div className="mb-6">
          <h2 className="text-[15px]  text-slate-800">Your Applications</h2>
          <p className="text-[12px] text-slate-500 mt-1">Select an application below to view detailed tracking parameters.</p>
        </div>

        <div className="space-y-4">
          {applications.map((app, index) => {
            const isActive = selectedApp?.id === app.id;
            return (
              <div 
                key={app.id || `app-${index}`}
                onClick={() => setSelectedApp(app)}
                className={cn(
                  "p-5 rounded-xl border transition-all cursor-pointer",
                  isActive 
                    ? "border-[#0A77FF] bg-blue-50/10 ring-1 ring-[#0A77FF]/10 shadow-[0_4px_12px_rgba(10,119,255,0.05)]" 
                    : "border-slate-100 bg-white hover:border-slate-200 shadow-sm"
                )}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-[14px]  text-[#0A77FF]">{app.tradeName}</h3>
                  <div className={cn("flex items-center gap-1.5 px-2.5 py-1 rounded-sm border", getStatusColor(app.status))}>
                    {getStatusIcon(app.status)}
                    <span className="text-[10px] font-bold uppercase tracking-wider">{app.status.replace(/_/g, ' ')}</span>
                  </div>
                </div>
                
                <p className="text-[11px] text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  Applying for accreditation evaluation regarding the {app.competenceName} compentence branch.
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-slate-50/80 px-2 py-1.5 rounded-sm border border-slate-100/50">
                    <span className="text-[10px] text-slate-400 font-medium">Trade</span>
                    <ChevronRight className="h-3 w-3 text-slate-300" />
                    <span className="text-[10px] text-[#0A77FF] font-medium">{app.tradeName}</span>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400 font-bold">{app.submissionDate}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Application Details */}
      {selectedApp && (
        <div className="bg-white/50 rounded-2xl p-2">
          <div className="flex justify-between items-center mb-6 px-2">
            <div>
              <h2 className="text-[14px]  text-[#0A77FF]">{selectedApp.tradeName}</h2>
              <p className="text-[11px] text-slate-500 mt-1">Breakdown of the application submission checkpoints.</p>
            </div>
            <button className="flex items-center gap-1.5 text-[12px]  text-[#0A77FF] hover:opacity-80 transition-opacity">
              View Evidence
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {details.map((item) => (
              <div 
                key={item.id}
                className="group flex items-start gap-4 p-4 rounded-xl border border-slate-100 bg-white shadow-sm hover:border-slate-200 transition-all cursor-pointer"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-100">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="text-[13px]  text-slate-700">{item.title}</h4>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
