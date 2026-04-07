"use client";

import React, { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";

import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  mockApplications, 
  getApplicationColumns 
} from "@/lib/utils/application-utils";

const stats = [
  { label: "Applications", value: 24, icon: NotepadText, iconColor: "#0A77FF" },
  { label: "Pending", value: 8, icon: ClipboardClock, iconColor: "#FF8D28" },
  { label: "Evaluated", value: 5, icon: CheckCheck, iconColor: "#34C759" },
  { label: "Rejected", value: 11, icon: AlertTriangle, iconColor: "#FF383C" },
];

const columns = getApplicationColumns();

export default function SuperAdminApplicationsPage() {
  const [search, setSearch] = useState("");

  const filteredData = mockApplications.filter(item => 
    item.applicant.name.toLowerCase().includes(search.toLowerCase()) ||
    item.applicant.email.toLowerCase().includes(search.toLowerCase()) ||
    item.institution.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      <StatsGrid items={stats} />
      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="All Applications"
        description="Manage applications by different institutions right here"
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={10}
      />
    </PageContainer>
  );
}
