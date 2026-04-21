"use client";

import React, { useMemo, useState } from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable, type Column } from "@/components/ui/data-table";
import { CheckCheck, AlertCircle, XCircle, ClipboardClock, NotepadText, Loader2 } from "lucide-react";
import { UserRole } from "@/types/auth";
import { useGetPendingSchedules } from "@/hooks/queries/useDueDiligenceQueries";
import { format } from "date-fns";

interface ScheduleContentProps {
  role?: UserRole;
}

interface ScheduleRow {
  id: string;
  institution: string;
  trade: string;
  evaluator: string;
  startDate: string;
  endDate: string;
  status: string;
}

function formatScheduleDate(value: string) {
  if (!value) return "N/A";

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? value : format(parsed, "MMM dd, yyyy");
}

export function ScheduleContent({ role = "super-admin" }: ScheduleContentProps) {
  const [search, setSearch] = useState("");
  const { data: schedules, isLoading } = useGetPendingSchedules();

  const rows = useMemo<ScheduleRow[]>(
    () =>
      (schedules ?? []).map((item) => ({
        id: item.id,
        institution: item.application?.institution?.name ?? "Unknown institution",
        trade: item.application?.tradeName ?? "Unspecified trade",
        evaluator: item.evaluator?.name ?? "Assigned evaluator",
        startDate: item.startDate,
        endDate: item.endDate,
        status: item.completed ? "Completed" : item.status === "CANCELLED" ? "Cancelled" : "Pending",
      })),
    [schedules]
  );

  const filteredData = rows.filter((item) =>
    [item.institution, item.trade, item.evaluator].some((value) =>
      value.toLowerCase().includes(search.toLowerCase())
    )
  );

  const stats = [
    { label: "Total scheduled visits", value: rows.length, icon: NotepadText, iconColor: "#0A77FF" },
    {
      label: "Pending visits",
      value: rows.filter((item) => item.status === "Pending").length,
      icon: ClipboardClock,
      iconColor: "#FF8D28",
    },
    {
      label: "Completed visits",
      value: rows.filter((item) => item.status === "Completed").length,
      icon: CheckCheck,
      iconColor: "#34C759",
    },
    {
      label: "Needs attention",
      value: rows.filter((item) => item.status !== "Completed" && item.status !== "Pending").length,
      icon: AlertCircle,
      iconColor: "#6155F5",
    },
    {
      label: "Cancelled visits",
      value: rows.filter((item) => item.status === "Cancelled").length,
      icon: XCircle,
      iconColor: "#FF383C",
    },
  ];

  const columns: Column<ScheduleRow>[] = [
    {
      header: "Institution",
      accessor: (item) => (
        <div className="flex flex-col">
          <span className="text-sm text-[#101828]">{item.institution}</span>
          <span className="text-xs text-[#475467]">{item.trade}</span>
        </div>
      ),
    },
    {
      header: "Evaluator",
      accessor: (item) => <span className="text-sm text-[#475467]">{item.evaluator}</span>,
    },
    {
      header: "Start Date",
      accessor: (item) => <span className="text-sm text-[#475467]">{formatScheduleDate(item.startDate)}</span>,
    },
    {
      header: "End Date",
      accessor: (item) => <span className="text-sm text-[#475467]">{formatScheduleDate(item.endDate)}</span>,
    },
    {
      header: "Status",
      accessor: (item) => <span className="text-sm text-[#475467]">{item.status}</span>,
    },
  ];

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#0A77FF]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} gridCols={5} />
      <DataTable
        data={filteredData}
        columns={columns}
        title={role === "evaluator" ? "My Due Diligence Schedule" : "Due Diligence Schedule"}
        description={role === "evaluator" ? "Track your scheduled site visits." : "Manage institutions schedule visits right here"}
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={1}
      />
    </div>
  );
}
