"use client";

import React, { useState } from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { 
  Users, 
  User, 
  CheckCheck, 
  ClipboardClock, 
  TriangleAlert 
} from "lucide-react";
import { 
  mockEvaluators, 
  getEvaluatorColumns 
} from "@/lib/utils/evaluator-utils";

export function EvaluatorsContent() {
  const [search, setSearch] = useState("");
  const columns = getEvaluatorColumns();

  const stats = [
    { label: "Total Evaluators", value: "48", icon: Users, iconColor: "#0A77FF" },
    { label: "Active", value: "32", icon: User, iconColor: "#34C759" },
    { label: "Available", value: "12", icon: CheckCheck, iconColor: "#CB30E0" },
    { label: "Pending", value: "4", icon: ClipboardClock, iconColor: "#6155F5" },
    { label: "Deactivated", value: "2", icon: TriangleAlert, iconColor: "#FF383C" },
  ];

  const filteredData = mockEvaluators.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
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
    </div>
  );
}
