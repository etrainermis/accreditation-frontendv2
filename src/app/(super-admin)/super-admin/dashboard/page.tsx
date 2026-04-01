import { ChartPlaceholder } from "@/components/charts/chart-placeholder";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";

export default function SuperAdminDashboardPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Super admin dashboard"
      description="Use this route for operational oversight, workload monitoring, assignment health, and platform activity visibility."
    >
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <DataTablePlaceholder
          title="Operational activity"
          description="Replace with application pipeline, evaluator activity, or audit views."
        />
        <ChartPlaceholder
          title="Platform monitoring"
          description="Reserve for assignment coverage, status aging, or activity trend charts."
        />
      </div>
    </PageContainer>
  );
}
