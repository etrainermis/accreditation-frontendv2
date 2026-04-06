"use client";

import { useState } from "react";
import { 
  ArrowLeft, 
  Search, 
  Blocks, 
  Hexagon, 
  Briefcase, 
  FileText, 
  Users, 
  Plus
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Trade Selection",
    subtitle: "Select the trade(s) you are applying for",
    icon: Blocks,
    isActive: true,
  },
  {
    id: 2,
    title: "Competencies",
    subtitle: "Specify the competencies offered under the selected trade",
    icon: Hexagon,
    isActive: false,
  },
  {
    id: 3,
    title: "Equipment and Facilities",
    subtitle: "List available equipment and upload proof",
    icon: Briefcase,
    isActive: false,
  },
  {
    id: 4,
    title: "Curriculum Documents",
    subtitle: "Upload curriculum and training materials",
    icon: FileText,
    isActive: false,
  },
  {
    id: 5,
    title: "Staff Allocation",
    subtitle: "Indicate staff availability for the selected trade",
    icon: Users,
    isActive: false,
  },
];

const trades = [
  { id: "1", name: "Masonry" },
  { id: "2", name: "Masonry" },
  { id: "3", name: "Masonry" },
  { id: "4", name: "Software Engineering & Embedded Systems" },
  { id: "5", name: "Software Engineering & Embedded Systems" },
  { id: "6", name: "Masonry" },
  { id: "7", name: "Masonry" },
];

export default function ApplicantApplicationsPage() {
  const [search, setSearch] = useState("");
  
  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-start justify-between pb-4">
        <div>
          <h1 className="text-[17px] font-semibold text-slate-900">
            Apply For Short Course
          </h1>
          <p className="mt-0.5 text-[13px] text-slate-500">
            Create and manage your accreditation applications for the selected trades.
          </p>
        </div>
        <button className="flex h-[38px] items-center justify-center gap-1.5 rounded-lg bg-[#0A77FF] px-4 text-[13px] font-medium text-white transition-colors hover:bg-blue-600">
          New Application
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
      </div>

      <div className="mb-4 h-[1px] w-full shrink-0 bg-slate-100" />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden rounded-2xl bg-white border border-slate-100">
        {/* Wizard Sidebar */}
        <div className="w-[300px] shrink-0 bg-[#FAFAFA] p-8">
          <h2 className="mb-10 text-[15px] font-semibold text-slate-700">
            Short Course Application
          </h2>
          <button className="mb-12 flex items-center gap-2 text-[13px] font-medium text-[#0A77FF]">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Quit
          </button>

          {/* Stepper */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute bottom-[20px] left-[23px] top-[20px] w-[#E4E7EC] border-l border-slate-200" />
            
            <div className="flex flex-col gap-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.id} className="relative z-10 flex gap-4">
                    <div className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-white text-slate-400 ${step.isActive ? "ring-1 ring-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)]" : "ring-1 ring-slate-100"}`}>
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col justify-center pt-0.5">
                      <p className={`text-[13px] ${step.isActive ? "font-semibold text-slate-900" : "font-medium text-slate-400"}`}>
                        {step.title}
                      </p>
                      <p className={`mt-0.5 text-[11px] leading-[1.6] text-slate-400 ${step.isActive ? "" : "opacity-60"}`}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wizard Content */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-white px-[100px] py-14">
          <div className="mx-auto flex w-full max-w-[600px] flex-col">
            {/* Step Header */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
                <Blocks className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
              </div>
              <h2 className="text-[17px] font-semibold text-slate-900">Trade Selection</h2>
              <p className="mt-1.5 text-[13px] text-slate-500">
                Select the trade you are applying for accreditation in.
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-3 text-[12px] text-slate-500">
                24 trades available for you to choose
              </p>
              
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                />
              </div>

              {/* Radio Grid */}
              <div className="mb-10 grid grid-cols-2 gap-3">
                {trades.map((trade, idx) => (
                  <label key={idx} className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 p-3.5 transition-colors hover:border-[#0A77FF]">
                    <div className="flex items-center gap-3">
                      <Blocks className="h-[15px] w-[15px] text-[#0A77FF]" strokeWidth={2} />
                      <span className="text-[12px] font-medium text-slate-600 line-clamp-1">{trade.name}</span>
                    </div>
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white">
                      {/* Active inner circle would go here */}
                    </div>
                  </label>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="flex w-full gap-3">
                <button className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                  Back
                </button>
                <button className="flex flex-1 items-center justify-center rounded-xl bg-[#0A77FF] py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#0864d6]">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
