"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SharedDashboardContainer } from "@/features/dashboard/components/shared-dashboard-container";

export default function SupervisorDashboardPage() {
  return (
    <PageContainer 
      role="supervisor" 
      title="Supervisor Dashboard" 
      description="View and monitor accreditation evaluations"
    >
      <SharedDashboardContainer role="supervisor" userName="Supervisor" />
    </PageContainer>
  );
}
