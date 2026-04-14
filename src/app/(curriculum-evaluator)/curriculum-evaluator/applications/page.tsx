"use client";

import { PageContainer } from "@/components/layout/page-container";
import { CurriculumApplicationList } from "@/features/curriculum/components/curriculum-application-list";

export default function CurriculumApplicationsPage() {
  return (
    <PageContainer 
      role="curriculum-evaluator" 
      title="Accreditation Applications" 
      description="Review applications with unknown or unverified curriculum documents."
    >
      <CurriculumApplicationList />
    </PageContainer>
  );
}
