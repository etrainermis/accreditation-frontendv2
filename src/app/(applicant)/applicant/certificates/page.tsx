import { EmptyState } from "@/components/feedback/empty-state";
import { PageContainer } from "@/components/layout/page-container";

export default function ApplicantCertificatesPage() {
  return (
    <PageContainer
      role="applicant"
      title="Certificates and outcomes"
      description="Keep certificate issuance, accreditation results, and downloadable documents in the certificates feature module."
    >
      <EmptyState
        title="Certificate outcome placeholders"
        description="This route is prepared for status history, certificate cards, and downloadable outcome artifacts once the data model is finalized."
      />
    </PageContainer>
  );
}
