"use client";

import { PageContainer } from "@/components/layout/page-container";
import { CurriculumDashboard } from "@/features/curriculum/components/curriculum-dashboard";

export default function CurriculumDashboardPage() {
  return (
    <PageContainer 
      role="curriculum-evaluator" 
      title="Curriculum Overview" 
      description="Monitor and manage pending curriculum reviews."
    >
      <CurriculumDashboard />
    </PageContainer>
  );
}
