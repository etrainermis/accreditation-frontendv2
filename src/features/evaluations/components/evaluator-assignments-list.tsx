"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { NotepadText, ClipboardClock, CheckCheck, AlertTriangle, Loader2 } from "lucide-react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable, type Column } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { useEvaluatorAssignments, useEvaluatorStats } from "@/hooks/queries/useEvaluationQueries";
import { format } from "date-fns";
import { useAppSelector } from "@/store/hooks";
import type { EvaluatorAssignment } from "@/types/domain";

export function EvaluatorAssignmentsList() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  
  const user = useAppSelector((state) => state.auth.user);
  const evaluatorId = user?.id || "";
  
  const { data: stats, isLoading: statsLoading } = useEvaluatorStats();
  const { data: assignments, isLoading: assignmentsLoading, error: assignmentsError } = useEvaluatorAssignments(evaluatorId);

  const statsItems = [
    { 
      label: "Total Assigned", 
      value: stats?.totalAssigned ?? 0, 
      icon: NotepadText, 
      iconColor: "#0A77FF" 
    },
    { 
      label: "Pending", 
      value: stats?.pendingEvaluations ?? 0, 
      icon: ClipboardClock, 
      iconColor: "#FF8D28" 
    },
    { 
      label: "Completed", 
      value: stats?.completedEvaluations ?? 0, 
      icon: CheckCheck, 
      iconColor: "#34C759" 
    },
    { 
      label: "Overdue", 
      value: 0, 
      icon: AlertTriangle, 
      iconColor: "#FF383C" 
    },
  ];

  const columns: Column<EvaluatorAssignment>[] = [
    {
      header: "Ref No",
      accessor: (item) => <span className="font-mono text-xs uppercase">{item.application.id.substring(0, 8)}</span>
    },
    {
      header: "Institution",
      accessor: (item) => (
        <div className="flex flex-col">
          <span className="font-medium text-[#202A36]">{item.application.institution.name}</span>
          <span className="text-xs text-muted-foreground">{item.application.tradeName || item.application.type}</span>
        </div>
      ),
    },
    {
      header: "Assigned Date",
      accessor: (item) => (
        <span className="text-sm text-[#475467]">
          {format(new Date(item.assignedAt), "MMM dd, yyyy")}
        </span>
      ),
    },
    {
      header: "Deadline",
      accessor: (item) => (
        <span className="text-sm text-[#475467]">
          {item.dueDate ? format(new Date(item.dueDate), "MMM dd, yyyy") : "N/A"}
        </span>
      ),
    },
    {
      header: "Status",
      accessor: (item) => {
        const getVariant = (status: string) => {
          switch (status) {
            case "COMPLETED":
            case "APPROVED":
              return "success";
            case "PENDING":
              return "info";
            case "IN_PROGRESS":
              return "warning";
            case "REJECTED":
              return "error";
            default:
              return "default";
          }
        };
        return (
          <Badge variant={getVariant(item.status)}>
            {item.status.replace("_", " ")}
          </Badge>
        );
      },
    },
  ];

  const filteredData = assignments?.filter(item => 
    item.application.institution.name.toLowerCase().includes(search.toLowerCase()) ||
    item.application.id.toLowerCase().includes(search.toLowerCase())
  ) ?? [];

  if (assignmentsLoading || statsLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-10 w-10 animate-spin text-[#0A77FF]" />
          <span className="text-sm text-muted-foreground font-medium">Loading assignments...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-in fade-in duration-500 space-y-8">
      <StatsGrid items={statsItems} />
      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="My Assignments"
        description="Review and evaluate the following accreditation applications assigned to you."
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={1}
        onRowClick={(item) => router.push(`/evaluator/applications/${item.application.id}`)}
      />
    </div>
  );
}
