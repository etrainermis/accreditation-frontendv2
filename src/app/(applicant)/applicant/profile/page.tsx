import { PageContainer } from "@/components/layout/page-container";
import { SharedProfileContainer } from "@/features/profile/components/shared-profile-container";

export default function ApplicantProfilePage() {
  return (
    <PageContainer
      role="applicant"
      title="Institution Profile"
      description="Manage your institution's profile and account settings."
    >
      <SharedProfileContainer 
        role="applicant" 
        userName="Jean-Claude Murama" 
        userEmail="jc.murama@polytechnic.ac.rw" 
      />
    </PageContainer>
  );
}
