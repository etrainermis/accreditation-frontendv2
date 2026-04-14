import { PageContainer } from "@/components/layout/page-container";
import { ApplicantEvaluationsView } from "@/features/evaluations/components/applicant-evaluations-view";

export default function ApplicantEvaluationsPage() {
  return (
    <PageContainer
      role="applicant"
      title="Manage Accreditation Evaluations"
      description="View & manage active applications and requests"
      title="Manage Accreditation Evaluations"
      description="View & manage active applications and requests"
    >
      <ApplicantEvaluationsView />
    </PageContainer>
  );
}
