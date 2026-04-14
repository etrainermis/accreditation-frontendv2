"use client";

import React, { useState } from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  CheckCircle2, 
  Clock, 
  Award,
  FileCheck
} from "lucide-react";
import { 
  mockCompletedApplications, 
  getCompletedApplicationColumns 
} from "@/lib/utils/certificate-utils";

export function CertificateAccessContent() {
  const [search, setSearch] = useState("");
  const columns = getCompletedApplicationColumns();

  const stats = [
    { label: "Completed Evaluations", value: "18", icon: CheckCircle2, iconColor: "#34C759" },
    { label: "Certificates Granted", value: "12", icon: Award, iconColor: "#0A77FF" },
    { label: "Pending Access", value: "6", icon: Clock, iconColor: "#FF8D28" },
    { label: "Total Approved", value: "18", icon: FileCheck, iconColor: "#6155F5" },
  ];

  const filteredData = mockCompletedApplications.filter(item => 
    item.institution.name.toLowerCase().includes(search.toLowerCase()) ||
    item.applicant.name.toLowerCase().includes(search.toLowerCase()) ||
    item.trade.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} gridCols={4} />
      
      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="Completed Evaluations"
        description="Applications that have completed the evaluation process and are ready for certificate access"
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={5}
      />
    </div>
  );
}
