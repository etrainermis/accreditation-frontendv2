"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { getApplicationColumns } from "@/lib/utils/application-utils";
import type { StatusType } from "@/components/ui/status-badge";
import { UserRole } from "@/types/auth";
import { useEvaluatorAssignments, useEvaluatorStats } from "@/hooks/queries/useEvaluationQueries";
import { useAppSelector } from "@/store/hooks";
import { Loader2 } from "lucide-react";

import { useGetAllApplications } from "@/hooks/queries/useApplicationQueries";

interface SharedApplicationsListProps {
  role: UserRole;
  basePath: string;
}

export function SharedApplicationsList({ role, basePath }: SharedApplicationsListProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const isReadOnly = role === "supervisor";
  const isAdmin = role === "super-admin" || role === "supervisor";
  
  const user = useAppSelector((state) => state.auth.user);
  const evaluatorId = user?.id || "";

  const { data: assignments, isLoading: assignmentsLoading } = useEvaluatorAssignments(evaluatorId);
  const { data: evaluatorStats } = useEvaluatorStats();
  const { data: allApplicationsResponse, isLoading: allLoading } = useGetAllApplications();

  const isLoading = isAdmin ? allLoading : assignmentsLoading;

  const stats = [
    { 
      label: "Applications", 
      value: isAdmin ? ((allApplicationsResponse as any)?.data?.length ?? 0) : (evaluatorStats?.totalAssigned ?? 0), 
      icon: NotepadText, 
      iconColor: "#0A77FF" 
    },
    { 
      label: "Pending", 
      value: isAdmin
        ? ((allApplicationsResponse as any)?.data ?? []).filter((item: any) => item.status === "PENDING").length
        : (evaluatorStats?.pendingEvaluations ?? 0), 
      icon: ClipboardClock, 
      iconColor: "#FF8D28" 
    },
    { 
      label: "Evaluated", 
      value: isAdmin
        ? ((allApplicationsResponse as any)?.data ?? []).filter((item: any) => item.status === "APPROVED").length
        : (evaluatorStats?.completedEvaluations ?? 0), 
      icon: CheckCheck, 
      iconColor: "#34C759" 
    },
    { 
      label: "Rejected", 
      value: isAdmin
        ? ((allApplicationsResponse as any)?.data ?? []).filter((item: any) => item.status === "REJECTED").length
        : (assignments ?? []).filter((item) => item.status === "REJECTED").length, 
      icon: AlertTriangle, 
      iconColor: "#FF383C" 
    },
  ];

  const columns = getApplicationColumns(isReadOnly);

  // Determine source data based on role
  const rawData = isAdmin 
    ? (allApplicationsResponse as any)?.data || allApplicationsResponse || [] 
    : assignments || [];

  const filteredData = (rawData as any[]).filter(item => {
    const institutionName = isAdmin 
      ? (item.institution?.name || item.applicantName || "") 
      : (item.application?.institution?.name || "");
    const id = isAdmin ? item.id : item.application?.id;
    
    return institutionName.toLowerCase().includes(search.toLowerCase()) ||
           id?.toLowerCase().includes(search.toLowerCase());
  });

  // Map data to standard Application format for the table
  const mappedData = filteredData.map(item => {
    if (isAdmin) {
      return {
        id: item.id,
        applicant: { 
          name: item.applicantName || item.institution?.name || "N/A", 
          email: item.institution?.email || "N/A", 
          avatar: (item.applicantName || item.institution?.name || "N").substring(0, 2).toUpperCase() 
        },
        institution: { 
          name: item.institution?.name || item.applicantName || "N/A", 
          website: item.institution?.website || "N/A", 
          logo: (item.institution?.name || "N").substring(0, 2).toUpperCase() 
        },
        trade: { name: item.tradeName || "N/A", category: item.competenceName || "N/A" },
        status: (item.status === "APPROVED" ? "Approved" : item.status === "REJECTED" ? "Rejected" : "Pending") as StatusType,
        stage: item.stage || item.status,
        submittedOn: item.submissionDate || "N/A",
      };
    } else {
      return {
        id: item.application.id,
        applicant: { 
          name: item.application.applicantName || item.application.institution.name || "N/A", 
          email: item.application.institution?.email || "N/A", 
          avatar: (item.application.applicantName || item.application.institution.name || "N").substring(0, 2).toUpperCase() 
        },
        institution: { 
          name: item.application.institution.name, 
          website: item.application.institution?.website || "N/A", 
          logo: item.application.institution.name.substring(0, 2).toUpperCase() 
        },
        trade: { name: item.application.tradeName || item.application.type, category: item.role },
        status: (item.status === "COMPLETED" ? "Completed" : item.status === "REJECTED" ? "Rejected" : "Pending") as StatusType,
        stage: item.stage,
        submittedOn: item.assignedAt,
      };
    }
  });

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#0A77FF]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} />
      <DataTable 
        data={mappedData} 
        columns={columns} 
        title="All Applications"
        description={isReadOnly ? "View applications from different institutions" : "Manage applications by different institutions right here"}
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={10}
        onRowClick={isReadOnly ? undefined : (item) => router.push(`${basePath}/${item.id}`)}
      />
    </div>
  );
}
