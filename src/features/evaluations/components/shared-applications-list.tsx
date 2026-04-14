"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  mockApplications, 
  getApplicationColumns 
} from "@/lib/utils/application-utils";
import { UserRole } from "@/types/auth";

interface SharedApplicationsListProps {
  role: UserRole;
  basePath: string;
}

export function SharedApplicationsList({ role, basePath }: SharedApplicationsListProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const isReadOnly = role === "supervisor";

  const stats = [
    { label: "Applications", value: 24, icon: NotepadText, iconColor: "#0A77FF" },
    { label: "Pending", value: 8, icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Evaluated", value: 5, icon: CheckCheck, iconColor: "#34C759" },
    { label: "Rejected", value: 11, icon: AlertTriangle, iconColor: "#FF383C" },
  ];

  const columns = getApplicationColumns(isReadOnly);

  const filteredData = mockApplications.filter(item => 
    item.applicant.name.toLowerCase().includes(search.toLowerCase()) ||
    item.applicant.email.toLowerCase().includes(search.toLowerCase()) ||
    item.institution.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} />
      <DataTable 
        data={filteredData} 
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
