import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";

export default function EvaluatorAssignmentsPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Assignments"
      description="This route is reserved for assigned application lists, filtering, priority views, and evaluator workload context."
    >
      <DataTablePlaceholder
        title="Assigned applications"
        description="Keep evaluator-specific list behavior inside the evaluations feature module instead of shared table utilities."
      />
    </PageContainer>
  );
}
