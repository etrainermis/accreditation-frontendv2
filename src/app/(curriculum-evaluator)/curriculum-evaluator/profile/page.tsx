import { PageContainer } from "@/components/layout/page-container";
import { SharedProfileContainer } from "@/features/profile/components/shared-profile-container";

export default function CurriculumEvaluatorProfilePage() {
  return (
    <PageContainer
      role="curriculum-evaluator"
      title="Profile Settings"
      description="Manage your curriculum evaluator account details and security."
    >
      <SharedProfileContainer role="curriculum-evaluator" />
    </PageContainer>
  );
}
