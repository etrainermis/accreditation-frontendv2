"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SharedDashboardContainer } from "@/features/dashboard/components/shared-dashboard-container";

export default function SuperAdminDashboardPage() {
  return (
    <PageContainer 
      role="super-admin" 
      title="Welcome, John" 
      description="View & manage active elders and requests"
    >
      <SharedDashboardContainer role="super-admin" userName="John" />
    </PageContainer>
  );
}
