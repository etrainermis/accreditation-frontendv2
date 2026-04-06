"use client";

import React, { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  mockApplications, 
  getApplicationColumns 
} from "@/lib/utils/application-utils";

const stats = [
  { label: "Applications", value: 24 },
  { label: "Pending", value: 8 },
  { label: "Evaluated", value: 5 },
  { label: "Rejected", value: 11 },
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
      action={
        <Button className="rounded-sm cursor-pointer px-4 py-3 text-sm font-medium">
          Start New Evaluation
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      }
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
