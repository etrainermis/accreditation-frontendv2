"use client";

import { PageContainer } from "@/components/layout/page-container";
import { ApplicationWizard } from "@/components/forms/application-wizard";
import { useRouter } from "next/navigation";

export default function ApplicantApplicationsPage() {
  const router = useRouter();

  return (
    <PageContainer 
      role="applicant" 
      title="Apply For Short Course" 
      description="Create and manage your accreditation applications for the selected trades."
      breadcrumbs={[
        { label: "Dashboard", href: "/applicant/dashboard" },
        { label: "Short Course Application", href: "#" }
      ]}
    >
      <ApplicationWizard onQuit={() => router.push("/applicant/dashboard")} />
    </PageContainer>
  );
}
