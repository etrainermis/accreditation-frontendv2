"use client";

import { useState } from "react";
import { FileText, Clock, CheckCircle2, AlertTriangle, ChevronRight, ChevronDown, ChevronUp, Check } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";

const stats = [
  {
    label: "Applications",
    value: "2",
    icon: FileText,
    iconBg: "border border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    label: "Pending",
    value: "6",
    icon: Clock,
    iconBg: "border border-orange-100",
    iconColor: "text-orange-400",
  },
  {
    label: "Approved",
    value: "6",
    icon: CheckCircle2,
    iconBg: "border border-green-100",
    iconColor: "text-green-500",
  },
  {
    label: "Rejected",
    value: "12",
    icon: AlertTriangle,
    iconBg: "border border-red-100",
    iconColor: "text-red-400",
  },
];

export default function ApplicantDashboardPage() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <div className="flex flex-1 flex-col space-y-4">
      {/* Welcome header + New Application button */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div>
          <h1 className="text-[16px] font-[500] text-[#101828]">
            Welcome, John
          </h1>
          <p className="mt-0.5 text-[12px] font-[300] text-[#475467]">
            View &amp; manage active orders and requests
          </p>
        </div>
        <PrimaryButton label="New Application" href="/applicant/applications" iconPosition="right" />
      </div>

      <div className="h-[1px] w-full shrink-0 bg-slate-100" />

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 shrink-0">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-white p-5"
            >
              <div
                className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
              <p className="mb-1 text-[13px] text-slate-400">{item.label}</p>
              <p className="text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-6 pt-4 items-start pb-8">
        {/* Left Column: Your Applications */}
        <div className="flex flex-col">
          <h2 className="text-[13px] font-semibold text-slate-900">Your Applications</h2>
          <p className="text-[11px] text-slate-400 mb-4 mt-0.5 line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>

          <div className="flex flex-col gap-3">
            {/* Card 1 (Active) */}
            <div className="rounded-xl border border-[#0A77FF] bg-white p-4 shadow-[0_2px_8px_rgba(10,119,255,0.08)] relative overflow-hidden">
               <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 sm:gap-0">
                 <div className="pr-4 w-full">
                   <h3 className="text-[13px] font-semibold text-slate-800 mb-1.5">Javascript Short Course Application</h3>
                   <p className="text-[11px] text-slate-400 mb-3 leading-relaxed w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>
                   <div className="flex flex-wrap items-center gap-2">
                     <span className="text-[10px] font-medium text-[#0A77FF]">Software Engineering & Embedded S...</span>
                     <ChevronRight className="h-3 w-3 text-slate-300" strokeWidth={2} />
                     <span className="text-[10px] font-medium text-[#0A77FF]">JavaScript</span>
                   </div>
                 </div>
                 <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-2.5 shrink-0">
                   <div className="flex items-center gap-1.5 rounded-md border border-green-200 bg-white px-2 py-1 shadow-sm">
                     <Check className="h-3 w-3 text-green-500" strokeWidth={3} />
                     <span className="text-[10px] font-semibold text-green-500 uppercase tracking-wide">Evaluated</span>
                   </div>
                   <span className="text-[10px] font-medium text-slate-500 mr-0.5">21/07/2026</span>
                 </div>
               </div>
            </div>

            {/* Card 2 (Inactive) */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors shadow-sm cursor-pointer">
               <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 sm:gap-0">
                 <div className="pr-4 w-full">
                   <h3 className="text-[13px] font-semibold text-slate-800 mb-1.5">Software Engineering Short Course Application</h3>
                   <p className="text-[11px] text-slate-400 mb-3 leading-relaxed w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>
                   <div className="flex flex-wrap items-center gap-2">
                     <span className="text-[10px] font-medium text-[#0A77FF]">Software Engineering & Embedded S...</span>
                     <ChevronRight className="h-3 w-3 text-slate-300" strokeWidth={2} />
                     <span className="text-[10px] font-medium text-[#0A77FF]">JavaScript</span>
                   </div>
                 </div>
                 <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-2.5 shrink-0">
                   <div className="flex items-center gap-1.5 rounded-md border border-green-200 bg-white px-2 py-1 shadow-sm">
                     <Check className="h-3 w-3 text-green-500" strokeWidth={3} />
                     <span className="text-[10px] font-semibold text-green-500 uppercase tracking-wide">Evaluated</span>
                   </div>
                   <span className="text-[10px] font-medium text-slate-500 mr-0.5">21/07/2026</span>
                 </div>
               </div>
            </div>

            {/* Card 3 (Inactive) */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300 transition-colors shadow-sm cursor-pointer">
               <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4 sm:gap-0">
                 <div className="pr-4 w-full">
                   <h3 className="text-[13px] font-semibold text-slate-800 mb-1.5">Software Engineering Short Course Application</h3>
                   <p className="text-[11px] text-slate-400 mb-3 leading-relaxed w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>
                   <div className="flex flex-wrap items-center gap-2">
                     <span className="text-[10px] font-medium text-[#0A77FF]">Software Engineering & Embedded S...</span>
                     <ChevronRight className="h-3 w-3 text-slate-300" strokeWidth={2} />
                     <span className="text-[10px] font-medium text-[#0A77FF]">JavaScript</span>
                   </div>
                 </div>
                 <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start w-full sm:w-auto gap-2.5 shrink-0">
                   <div className="flex items-center gap-1.5 rounded-md border border-green-200 bg-white px-2 py-1 shadow-sm">
                     <Check className="h-3 w-3 text-green-500" strokeWidth={3} />
                     <span className="text-[10px] font-semibold text-green-500 uppercase tracking-wide">Evaluated</span>
                   </div>
                   <span className="text-[10px] font-medium text-slate-500 mr-0.5">21/07/2026</span>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-4">
             <div>
               <h2 className="text-[13px] font-semibold text-slate-900">Javascript Short Course Application</h2>
               <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>
             </div>
             <button className="text-[12px] font-semibold text-[#0A77FF] flex items-center gap-1 hover:text-blue-700 transition-colors shrink-0 pt-0.5">
               View Details <ChevronRight className="h-3.5 w-3.5" />
             </button>
          </div>

          <div className="flex flex-col gap-3">
             {[
               { id: 1, title: "Trade Selection Completed", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
               { id: 2, title: "Competencies Selected", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
               { id: 3, title: "Equipment and Facilities Added with Proofs", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
               { id: 4, title: "Curriculum Documents", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
               { id: 5, title: "Staff Allocation", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
             ].map((section) => {
               const isExpanded = expandedSection === section.id;
               return (
                 <div key={section.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-sm">
                   <button
                     onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                     className="flex w-full items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors"
                   >
                     <div className="flex gap-4 items-center w-full pr-4">
                       <div className="flex items-center justify-center rounded-full bg-emerald-50 h-9 w-9 shrink-0 ring-1 ring-emerald-100">
                         <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
                       </div>
                       <div className="flex flex-col items-start text-left">
                         <p className="text-[13px] font-semibold text-slate-800">{section.title}</p>
                         <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 w-full">{section.desc}</p>
                       </div>
                     </div>
                     <div className="pl-2 shrink-0">
                       {isExpanded ? (
                         <ChevronUp className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
                       ) : (
                         <ChevronDown className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
                       )}
                     </div>
                   </button>
                   
                   {isExpanded && (
                     <div className="border-t border-slate-100 bg-slate-50/50 p-6">
                        <p className="text-[12px] text-slate-500 italic">No detailed records found for this section.</p>
                     </div>
                   )}
                 </div>
               );
             })}
          </div>
        </div>
      </div>
    </div>
  );
}
