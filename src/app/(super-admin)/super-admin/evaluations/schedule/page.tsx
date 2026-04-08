"use client";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { CalendarDays, Clock, CheckCheck, AlertCircle, XCircle, ClipboardClock, NotepadText } from "lucide-react";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { mockSchedule, getScheduleColumns } from "@/lib/utils/schedule-utils";

const stats = [
  { label: "Total scheduled visits", value: "24", icon: NotepadText, iconColor: "#0A77FF" },
  { label: "Today's visit", value: "3", icon: ClipboardClock, iconColor: "#FF8D28" },
  { label: "Completed visits", value: "18", icon: CheckCheck, iconColor: "#34C759" },
  { label: "Overdue visits", value: "2", icon: AlertCircle, iconColor: "#6155F5" },
  { label: "Cancelled visits", value: "1", icon: XCircle, iconColor: "#FF383C" },
];

const columns = getScheduleColumns();

export default function SuperAdminSchedulePage() {
  const [search, setSearch] = useState("");
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 6),
    to: new Date(2024, 0, 13),
  });

  const filteredData = mockSchedule.filter(item => 
    item.institution.name.toLowerCase().includes(search.toLowerCase()) ||
    item.evaluator.name.toLowerCase().includes(search.toLowerCase()) ||
    item.trade.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav>
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </EvaluationsSubNav>
      
      <StatsGrid items={stats} gridCols={5} />

      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="Due Diligence Schedule"
        description="Manage institutions schedule visits right here"
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={10}
      />
    </PageContainer>
  );
}
