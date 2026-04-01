import { ChartPlaceholder } from "@/components/charts/chart-placeholder";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";

export default function EvaluatorDashboardPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Evaluator dashboard"
      description="Use this dashboard for evaluator-specific workload summaries, pending reviews, and time-sensitive review milestones."
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <DataTablePlaceholder
          title="Assigned application queue"
          description="Replace with evaluator assignments, review deadlines, and status indicators."
        />
        <ChartPlaceholder
          title="Review progress"
          description="Reserve for personal throughput, due diligence completion, or workload charts."
        />
      </div>
    </PageContainer>
  );
}
