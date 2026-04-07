"use client";

import { FormSection } from "@/components/forms/form-section";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { Users, ClipboardList, UserX, User, CheckCheck, ClipboardClock, TriangleAlert } from "lucide-react";

const stats = [
  { label: "Total Evaluators", value: "48", icon: Users, iconColor: "#0A77FF" },
  { label: "Active", value: "32", icon: User, iconColor: "#34C759" },
  { label: "Available", value: "12", icon: CheckCheck, iconColor: "#CB30E0" },
  { label: "Pending", value: "4", icon: ClipboardClock, iconColor: "#6155F5" },
  { label: "Deactivated", value: "2", icon: TriangleAlert, iconColor: "#FF383C" },
];

export default function SuperAdminEvaluatorsPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      
      <StatsGrid items={stats} gridCols={5} />

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <FormSection
          title="Evaluator editor"
          description="Use the evaluator-management feature module for forms, mutations, and evaluator-specific UI."
        />
        <DataTablePlaceholder
          title="Evaluator roster"
          description="Reserve for list management, active state, specialization, and assignment load indicators."
        />
      </div>
    </PageContainer>
  );
}
