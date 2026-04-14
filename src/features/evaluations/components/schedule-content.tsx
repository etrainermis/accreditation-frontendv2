"use client";

import React, { useState } from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  CheckCheck, 
  AlertCircle, 
  XCircle, 
  ClipboardClock, 
  NotepadText,
  Calendar
} from "lucide-react";
import { mockSchedule, getScheduleColumns } from "@/lib/utils/schedule-utils";
import { UserRole } from "@/types/auth";

interface ScheduleContentProps {
  role?: UserRole;
}

export function ScheduleContent({ role = "super-admin" }: ScheduleContentProps) {
  const [search, setSearch] = useState("");
  const isReadOnly = role === "supervisor";
  const columns = getScheduleColumns(isReadOnly);

  const stats = [
    { label: "Total scheduled visits", value: "24", icon: NotepadText, iconColor: "#0A77FF" },
    { label: "Today's visit", value: "3", icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Completed visits", value: "18", icon: CheckCheck, iconColor: "#34C759" },
    { label: "Overdue visits", value: "2", icon: AlertCircle, iconColor: "#6155F5" },
    { label: "Cancelled visits", value: "1", icon: XCircle, iconColor: "#FF383C" },
  ];

  const filteredData = mockSchedule.filter(item => 
    item.institution.name.toLowerCase().includes(search.toLowerCase()) ||
    item.evaluator.name.toLowerCase().includes(search.toLowerCase()) ||
    item.trade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} gridCols={5} />
      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="Due Diligence Schedule"
        description={isReadOnly ? "View scheduled visits" : "Manage institutions schedule visits right here"}
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={10}
      />
    </div>
  );
}
