"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2, Clock, Eye, Filter, Search, Trash2, X } from "lucide-react";

import avatar from "@/components/evaluator/assets/avatar-2.png";
import companyLogo from "@/components/evaluator/assets/rtb-icon.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils/cn";

const applications = [
  {
    id: 1,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Pending",
    stage: "Initial Review",
    submittedOn: "19/12/2025 2:00 PM",
  },
  {
    id: 2,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Pending",
    stage: "Due Diligence Scheduled",
    submittedOn: "19/12/2025 2:00 PM",
  },
  {
    id: 3,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Rejected",
    stage: "Due Diligence Completed",
    submittedOn: "19/12/2025 2:00 PM",
  },
  {
    id: 4,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Pending",
    stage: "Final Review",
    submittedOn: "19/12/2025 2:00 PM",
  },
  {
    id: 5,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Rejected",
    stage: "Rejected",
    submittedOn: "19/12/2025 2:00 PM",
  },
  {
    id: 6,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Approved",
    stage: "Certified",
    submittedOn: "19/12/2025 2:00 PM",
  },
  {
    id: 7,
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", type: "SPE" },
    status: "Pending",
    stage: "Initial Review",
    submittedOn: "19/12/2025 2:00 PM",
  },
];

export function ApplicationsDataTable() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 stroke-[2]" />
          <Input
            placeholder="Search..."
            className="h-11 rounded-xl border-slate-200 pl-10 text-sm shadow-sm transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-[#0A77FF]/50 focus:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="outline" size="sm" className="group h-11 gap-2 rounded-xl border-slate-200 px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50 sm:px-5">
            All time <X className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-600" />
          </Button>
          <Button variant="outline" size="sm" className="group h-11 gap-2 rounded-xl border-slate-200 px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50 sm:px-5">
            Pending <X className="h-4 w-4 text-slate-400 transition-colors group-hover:text-slate-600" />
          </Button>
          <Button variant="outline" size="sm" className="h-11 gap-2 rounded-xl border-slate-200 px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50 sm:px-5">
            <Filter className="h-4 w-4 stroke-[2]" /> More filters
          </Button>
        </div>
      </div>

      <Card className="overflow-hidden rounded-2xl border-slate-100 shadow-xl shadow-slate-200/10">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="relative z-10 border-b border-slate-100 bg-white text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 shadow-sm">
                <tr>
                  <th className="w-16 px-6 py-5">
                    <div className="flex items-center justify-center">
                      <input type="checkbox" className="h-5 w-5 cursor-pointer rounded-lg border-2 border-slate-200 bg-white text-[#0A77FF] transition-all focus:ring-[#0A77FF]" />
                    </div>
                  </th>
                  <th className="flex items-center gap-2 px-4 py-5 font-medium transition-colors hover:text-slate-900">
                    Applicant <span className="flex items-center text-[#0A77FF]">↓</span>
                  </th>
                  <th className="px-4 py-5 font-medium">Institution</th>
                  <th className="px-4 py-5 font-medium">Trade</th>
                  <th className="px-4 py-5 text-center font-medium">Status</th>
                  <th className="px-4 py-5 font-medium">Evaluation Stage</th>
                  <th className="px-4 py-5 font-medium">Submitted On</th>
                  <th className="px-6 py-5 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {applications.map((app) => (
                  <tr 
                    key={app.id} 
                    className="group/row cursor-pointer transition-all hover:bg-blue-50/20"
                    onClick={() => router.push(`/evaluator/evaluations/applications/${app.id}`)}
                  >
                    <td className="px-6 py-6">
                      <div className="flex items-center justify-center">
                        <input type="checkbox" className="h-5 w-5 cursor-pointer rounded-lg border-2 border-slate-200 bg-white text-[#0A77FF] transition-all focus:ring-[#0A77FF]" />
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-slate-100 text-xs font-semibold text-slate-600 ring-2 ring-white shadow-sm transition-transform group-hover/row:scale-110">
                          <Image src={avatar} alt={`${app.applicant.name} avatar`} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none tracking-tight text-slate-900">{app.applicant.name}</p>
                          <p className="mt-1.5 text-[12px] font-medium text-slate-400">{app.applicant.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <div className="flex items-center gap-4">
                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-orange-50 ring-1 ring-orange-100 shadow-sm transition-transform group-hover/row:rotate-3">
                          <Image src={companyLogo} alt={`${app.institution.name} logo`} fill className="object-contain p-2" />
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none tracking-tight text-slate-900">{app.institution.name}</p>
                          <p className="mt-1.5 text-[12px] font-medium text-slate-400">{app.institution.website}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-6">
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-slate-700">{app.trade.name}</p>
                        <p className="text-[10px] font-medium uppercase leading-none tracking-[0.18em] text-slate-400">{app.trade.type}</p>
                      </div>
                    </td>
                    <td className="px-4 py-6 text-center">
                      <Badge
                        variant="outline"
                        className={cn(
                          "gap-2 rounded-xl px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] shadow-xs transition-all",
                          app.status === "Pending" && "border-blue-100/50 bg-blue-50/50 text-[#0A77FF]",
                          app.status === "Approved" && "border-emerald-100/50 bg-emerald-50/50 text-emerald-600",
                          app.status === "Rejected" && "border-rose-100/50 bg-rose-50/50 text-rose-600",
                        )}
                      >
                        {app.status === "Pending" && <Clock className="h-3 w-3" />}
                        {app.status === "Approved" && <CheckCircle2 className="h-3 w-3" />}
                        {app.status === "Rejected" && <AlertCircle className="h-3 w-3" />}
                        {app.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-6 text-sm font-medium tracking-tight text-slate-500">{app.stage}</td>
                    <td className="px-4 py-6">
                      <div className="space-y-1">
                        <p className="text-sm font-medium tabular-nums text-slate-800">{app.submittedOn.split(" ")[0]}</p>
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">{app.submittedOn.split(" ").slice(1).join(" ")}</p>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-all hover:scale-110 hover:bg-blue-50 hover:text-[#0A77FF] active:scale-95">
                          <Eye className="h-5 w-5" strokeWidth={2} />
                        </button>
                        <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-all hover:scale-110 hover:bg-rose-50 hover:text-rose-600 active:scale-95">
                          <Trash2 className="h-5 w-5" strokeWidth={2} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
        <div className="flex flex-col gap-4 border-t border-slate-50 bg-white px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="h-10 rounded-xl border-slate-200 px-5 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50 active:scale-95 sm:px-6">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="h-10 rounded-xl border-slate-200 px-5 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50 active:scale-95 sm:px-6">
              Next
            </Button>
          </div>
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400">
            Page <span className="mx-1 text-slate-900">1</span> of 10
          </p>
        </div>
      </Card>

    </div>
  );
}
