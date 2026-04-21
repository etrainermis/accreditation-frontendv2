"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { X, ListFilter } from "lucide-react";
import { getApplicationColumns } from "@/lib/utils/application-utils";
import type { StatusType } from "@/components/ui/status-badge";
import { useEvaluatorAssignments } from "@/hooks/queries/useEvaluationQueries";
import { useAppSelector } from "@/store/hooks";
import { Loader2 } from "lucide-react";

import { format } from "date-fns";

interface RecentApplicationsTableProps {
  title?: string;
  description?: string;
}

export function RecentApplicationsTable({ 
  title = "Recent Applications", 
  description = "Manage applications by different institutions right here" 
}: RecentApplicationsTableProps) {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["All time"]);
  
  const user = useAppSelector((state) => state.auth.user);
  const evaluatorId = user?.id || "";
  
  const { data: assignments, isLoading } = useEvaluatorAssignments(evaluatorId);

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const filteredData = assignments?.filter(item => {
    const matchesSearch = 
      item.application.institution.name.toLowerCase().includes(search.toLowerCase()) ||
      item.application.id.toLowerCase().includes(search.toLowerCase());
    
    return matchesSearch;
  }) ?? [];

  const tableData = filteredData.map(item => ({
    id: item.application.id,
    applicant: { 
      name: item.application.applicantName || item.application.institution.name || "N/A", 
      email: item.application.institution.email || "N/A", 
      avatar: (item.application.applicantName || item.application.institution.name || "N").substring(0, 2).toUpperCase() 
    },
    institution: { 
      name: item.application.institution.name, 
      website: item.application.institution.website || "N/A", 
      logo: item.application.institution.name.substring(0, 2).toUpperCase() 
    },
    trade: { name: item.application.tradeName || item.application.type, category: item.role },
    status: (item.status === "COMPLETED" ? "Completed" : item.status === "REJECTED" ? "Rejected" : "Pending") as StatusType,
    stage: item.stage,
    submittedOn: item.assignedAt ? format(new Date(item.assignedAt), "MMM dd, yyyy") : "N/A",
  }));

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center border rounded-sm bg-white mt-8">
        <Loader2 className="h-8 w-8 animate-spin text-[#0A77FF]" />
      </div>
    );
  }

  const columns = getApplicationColumns();

  return (
    <div className="mt-8 animate-slide-up">
      <DataTable 
        data={tableData} 
        columns={columns} 
        title={title}
        description={description}
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={10}
        filters={
          <div className="flex items-center gap-2">
            {activeFilters.map((filter) => (
              <div 
                key={filter} 
                className="flex items-center gap-2 px-3 py-3 rounded-sm text-xs text-[#344054] border border-slate-100 bg-white"
              >
                <span>{filter}</span>
                <X 
                  className="h-3 w-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" 
                  onClick={() => removeFilter(filter)}
                />
              </div>
            ))}
            <button className="flex items-center gap-2 px-3 py-3 rounded-sm text-xs text-[#344054] hover:bg-slate-100 transition-colors border border-slate-100 bg-white ">
              <ListFilter className="h-4 w-4 text-slate-500" />
              <span>More filters</span>
            </button>
          </div>
        }
      />
    </div>
  );
}
