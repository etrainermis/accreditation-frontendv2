"use client";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  Users, 
  ClipboardList, 
  UserX, 
  User, 
  CheckCheck, 
  ClipboardClock, 
  TriangleAlert 
} from "lucide-react";
import { 
  mockEvaluators, 
  getEvaluatorColumns 
} from "@/lib/utils/evaluator-utils";
import { useState } from "react";

const stats = [
  { label: "Total Evaluators", value: "48", icon: Users, iconColor: "#0A77FF" },
  { label: "Active", value: "32", icon: User, iconColor: "#34C759" },
  { label: "Available", value: "12", icon: CheckCheck, iconColor: "#CB30E0" },
  { label: "Pending", value: "4", icon: ClipboardClock, iconColor: "#6155F5" },
  { label: "Deactivated", value: "2", icon: TriangleAlert, iconColor: "#FF383C" },
];

const columns = getEvaluatorColumns();

export default function SuperAdminEvaluatorsPage() {
  const [search, setSearch] = useState("");

  const filteredData = mockEvaluators.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      
      <StatsGrid items={stats} gridCols={5} />

      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="All Evaluators"
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
