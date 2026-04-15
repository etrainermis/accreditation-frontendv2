"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCheck, ClipboardClock, FileSearch, ShieldAlert } from "lucide-react";

import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { mockApplications } from "@/lib/utils/application-utils";

export function CurriculumApplicationList() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const applications = useMemo(
    () =>
      mockApplications
        .filter((app) => app.status === "Pending" || app.stage === "Rejected")
        .map((app, index) => ({
          ...app,
          curriculumStatus:
            index % 3 === 0 ? "Needs evidence" : index % 3 === 1 ? "Ready to review" : "Criteria mismatch",
          standardsArea:
            index % 2 === 0 ? "Learning outcomes + assessments" : "Module structure + supporting files",
        })),
    [],
  );

  const filteredApplications = applications.filter((item) => {
    const query = search.toLowerCase();
    return (
      item.institution.name.toLowerCase().includes(query) ||
      item.trade.name.toLowerCase().includes(query) ||
      item.curriculumStatus.toLowerCase().includes(query)
    );
  });

  const stats = [
    { label: "Assigned reviews", value: filteredApplications.length, icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Ready for approval", value: 2, icon: CheckCheck, iconColor: "#34C759" },
    { label: "Evidence gaps", value: 3, icon: FileSearch, iconColor: "#0A77FF" },
    { label: "Standards issues", value: 1, icon: ShieldAlert, iconColor: "#FF383C" },
  ];

  return (
    <div className="mt-8 space-y-6 text-left">
      <StatsGrid items={stats} />

      <DataTable
        data={filteredApplications}
        columns={[
          {
            header: "Institution",
            sortable: true,
            accessor: (item) => (
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-slate-900">{item.institution.name}</span>
                <span className="text-[11px] text-slate-500">{item.trade.name}</span>
              </div>
            ),
          },
          {
            header: "Program area",
            accessor: (item) => (
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-slate-900">{item.trade.category}</span>
                <span className="text-[11px] text-slate-500">{item.stage}</span>
              </div>
            ),
          },
          {
            header: "Curriculum status",
            accessor: (item) => (
              <Badge
                className={
                  item.curriculumStatus === "Ready to review"
                    ? "border-0 bg-emerald-50 normal-case tracking-normal text-emerald-700"
                    : item.curriculumStatus === "Needs evidence"
                      ? "border-0 bg-amber-50 normal-case tracking-normal text-amber-700"
                      : "border-0 bg-rose-50 normal-case tracking-normal text-rose-700"
                }
              >
                {item.curriculumStatus}
              </Badge>
            ),
          },
          {
            header: "Review focus",
            accessor: (item) => <span className="text-[13px] font-medium text-slate-600">{item.standardsArea}</span>,
          },
          {
            header: "Submitted",
            accessor: (item) => <span className="text-[13px] font-medium text-slate-600">{item.submittedOn}</span>,
          },
          {
            header: "Action",
            accessor: (item) => (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/curriculum-evaluator/applications/${item.id}`);
                }}
                className="rounded-sm bg-[#0A77FF] px-3 py-2 text-[13px] font-medium whitespace-nowrap text-white transition-all hover:opacity-90"
              >
                Review Curriculum
              </button>
            ),
          },
        ]}
        title="Curriculum Review Queue"
        description="Review completeness, outcome alignment, and assessment evidence before accreditation decisions move ahead."
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={1}
        onRowClick={(item) => router.push(`/curriculum-evaluator/applications/${item.id}`)}
      />
    </div>
  );
}
