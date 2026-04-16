import { PageContainer } from "@/components/layout/page-container";
import { SharedProfileContainer } from "@/features/profile/components/shared-profile-container";

export default function SuperAdminProfilePage() {
  return (
    <PageContainer role="super-admin" noScroll title="Profile Settings" description="Manage your account preferences and security.">
      <SharedProfileContainer role="super-admin" />
    </PageContainer>
  );
}
