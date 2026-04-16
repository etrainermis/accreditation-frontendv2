"use client";

import React from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { StackedAnalyticsChart } from "@/components/dashboard/stacked-analytics-chart";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { ClipboardClock, CheckCheck, AlertTriangle, FileSearch } from "lucide-react";
import { mockApplications } from "@/lib/utils/application-utils";

export function CurriculumDashboard() {
  const stats = [
    { label: "Pending review", value: "12", icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Aligned packages", value: "18", icon: CheckCheck, iconColor: "#34C759" },
    { label: "Action needed", value: "5", icon: AlertTriangle, iconColor: "#FF383C" },
    { label: "Evidence gaps", value: "7", icon: FileSearch, iconColor: "#0A77FF" },
  ];

  const chartData = {
    "12 Months": Array.from({ length: 12 }, (_, i) => ({
      label: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
      rejected: Math.floor(Math.random() * 5),
      approved: Math.floor(Math.random() * 10) + 5,
      pending: Math.floor(Math.random() * 8) + 2,
    })),
    "30 Days": Array.from({ length: 30 }, (_, i) => ({
      label: `${i + 1}`,
      rejected: Math.floor(Math.random() * 2),
      approved: Math.floor(Math.random() * 5) + 2,
      pending: Math.floor(Math.random() * 3) + 1,
    })),
    "7 Days": Array.from({ length: 7 }, (_, i) => ({
      label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      rejected: Math.floor(Math.random() * 2),
      approved: Math.floor(Math.random() * 4) + 1,
      pending: Math.floor(Math.random() * 3) + 1,
    })),
    "24 Hours": Array.from({ length: 24 }, (_, i) => ({
      label: `${String(i).padStart(2, "0")}h`,
      rejected: 0,
      approved: Math.floor(Math.random() * 2),
      pending: Math.floor(Math.random() * 2),
    })),
  };

  return (
    <div className="space-y-6 text-left">
      <StatsGrid items={stats} />
      <StackedAnalyticsChart data={chartData} />

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-md border border-slate-200 bg-white p-6">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-md text-[#101828]">Priority Curriculum Queue</h3>
              <p className="text-[13px] text-[#64748B]">
                Applications that need curriculum alignment checks before they can move forward.
              </p>
            </div>
            <Badge className="border-0 bg-blue-50 normal-case tracking-normal text-blue-700">Needs attention</Badge>
          </div>

          <DataTable
            data={mockApplications.slice(0, 3)}
            columns={[
              {
                header: "Institution",
                accessor: (item) => (
                  <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-slate-900">{item.institution.name}</span>
                    <span className="text-[11px] text-slate-500">{item.trade.name}</span>
                  </div>
                ),
              },
              {
                header: "Risk",
                accessor: (item) => (
                  <span className="text-[13px] text-slate-600">
                    {item.id === "1" ? "Missing assessment mapping" : item.id === "2" ? "Unknown supporting files" : "Clarify module outcomes"}
                  </span>
                ),
              },
              {
                header: "Status",
                accessor: (item) => (
                  <Badge className="border-0 bg-amber-50 normal-case tracking-normal text-amber-700">
                    {item.id === "3" ? "Escalate" : "Review now"}
                  </Badge>
                ),
              },
            ]}
            title="Curriculum Review Tasks"
            description="Focus on standards alignment, module evidence, and assessment support."
          />
        </div>

        <div className="rounded-md border border-slate-200 bg-white p-6">
          <h3 className="text-md text-[#101828]">What To Verify</h3>
          <p className="text-[13px] text-[#64748B]">Use the same review cues the other evaluator flows already rely on.</p>
          <div className="mt-4 space-y-4">
            {[
              {
                title: "Outcome Alignment",
                description: "Confirm course outcomes map clearly to accreditation criteria and competency levels.",
              },
              {
                title: "Assessment Coverage",
                description: "Check whether exams, practicals, and rubrics demonstrate the required evidence.",
              },
              {
                title: "Supporting Documents",
                description: "Verify that syllabi, manuals, and module guides are complete and current.",
              },
              {
                title: "Decision Notes",
                description: "Record precise remarks so the next reviewer or institution can act quickly.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-slate-100 bg-white p-4">
                <p className="text-[13px] font-medium text-slate-900">{item.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
