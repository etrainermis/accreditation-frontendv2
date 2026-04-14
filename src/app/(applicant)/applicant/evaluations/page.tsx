import { PageContainer } from "@/components/layout/page-container";
import { ApplicantEvaluationsView } from "@/features/evaluations/components/applicant-evaluations-view";

export default function ApplicantEvaluationsPage() {
  return (
    <PageContainer
      role="applicant"
      title="My Evaluations"
      description="Track the evaluation progress of your submitted accreditation applications and view reviewer feedback."
    >
      <ApplicantEvaluationsView />
    </PageContainer>
  );
}
