import { PageContainer } from "@/components/layout/page-container";
import { SharedProfileContainer } from "@/features/profile/components/shared-profile-container";

export default function SupervisorProfilePage() {
  return (
    <PageContainer role="supervisor" title="Profile Settings" description="Manage your account preferences and security.">
      <SharedProfileContainer role="supervisor" />
    </PageContainer>
  );
}
