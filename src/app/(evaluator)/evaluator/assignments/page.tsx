import { PageContainer } from "@/components/layout/page-container";
import { EvaluatorAssignmentsList } from "@/features/evaluations/components/evaluator-assignments-list";

export default function EvaluatorAssignmentsPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Assignments"
      description="Review the accreditation applications assigned to you."
    >
      <EvaluatorAssignmentsList />
    </PageContainer>
  );
}
