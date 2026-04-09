"use client";

import { Check, ChevronRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const applications = [
  {
    id: "1",
    title: "Javascript Short Course Application",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.",
    tags: ["Software Engineering & Embedded S...", "JavaScript"],
    status: "Evaluated",
    date: "21/07/2025",
    active: true,
  },
  {
    id: "2",
    title: "Software Engineering Short Course Application",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.",
    tags: ["Software Engineering & Embedded S...", "JavaScript"],
    status: "Evaluated",
    date: "21/07/2025",
    active: false,
  },
  {
    id: "3",
    title: "Software Engineering Short Course Application",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.",
    tags: ["Software Engineering & Embedded S...", "JavaScript"],
    status: "Evaluated",
    date: "21/07/2025",
    active: false,
  },
];

const details = [
  { id: 1, title: "Trade Selection Completed", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.", completed: true },
  { id: 2, title: "Competencies Selected", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.", completed: true },
  { id: 3, title: "Equipment and Facilities Added with Proofs", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.", completed: true },
  { id: 4, title: "Curriculum Documents", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.", completed: true },
  { id: 5, title: "Staff Allocation", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.", completed: true },
];

export function DashboardFilledState() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Left Column: Your Applications */}
      <div>
        <div className="mb-6">
          <h2 className="text-[15px]  text-slate-800">Your Applications</h2>
          <p className="text-[12px] text-slate-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>
        </div>

        <div className="space-y-4">
          {applications.map((app) => (
            <div 
              key={app.id}
              className={cn(
                "p-5 rounded-xl border transition-all cursor-pointer",
                app.active 
                  ? "border-[#0A77FF] bg-blue-50/10 ring-1 ring-[#0A77FF]/10 shadow-[0_4px_12px_rgba(10,119,255,0.05)]" 
                  : "border-slate-100 bg-white hover:border-slate-200 shadow-sm"
              )}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-[14px]  text-[#0A77FF]">{app.title}</h3>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-emerald-100 bg-emerald-50/50 text-emerald-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                  <span className="text-[10px] font-bold uppercase tracking-wider">{app.status}</span>
                </div>
              </div>
              
              <p className="text-[11px] text-slate-500 leading-relaxed mb-4 line-clamp-2">
                {app.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 bg-slate-50/80 px-2 py-1.5 rounded-sm border border-slate-100/50">
                  <span className="text-[10px] text-slate-400 font-medium">{app.tags[0]}</span>
                  <ChevronRight className="h-3 w-3 text-slate-300" />
                  <span className="text-[10px] text-[#0A77FF] font-medium">{app.tags[1]}</span>
                </div>
                <span className="text-[10px] font-medium text-slate-400 font-bold">{app.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Application Details */}
      <div className="bg-white/50 rounded-2xl p-2">
        <div className="flex justify-between items-center mb-6 px-2">
          <div>
            <h2 className="text-[14px]  text-[#0A77FF]">Javascript Short Course Application</h2>
            <p className="text-[11px] text-slate-500 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor.</p>
          </div>
          <button className="flex items-center gap-1.5 text-[12px]  text-[#0A77FF] hover:opacity-80 transition-opacity">
            View Details
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
    </div>
  );
}
