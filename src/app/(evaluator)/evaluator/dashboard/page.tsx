"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SharedDashboardContainer } from "@/features/dashboard/components/shared-dashboard-container";

export default function EvaluatorDashboardPage() {
  return (
    <PageContainer 
      role="evaluator" 
      title="Manage Accreditation Evaluations" 
      description="View and manage evaluations."
    >
      <SharedDashboardContainer role="evaluator" userName="Evaluator" />
    </PageContainer>
  );
}
