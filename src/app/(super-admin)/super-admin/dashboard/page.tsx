"use client";

import { PageContainer } from "@/components/layout/page-container";
import { SharedDashboardContainer } from "@/features/dashboard/components/shared-dashboard-container";

import { useAppSelector } from "@/store/hooks";

export default function SuperAdminDashboardPage() {
  const { user } = useAppSelector((state) => state.auth);
  const firstName = user?.firstName || "Admin";

  return (
    <PageContainer 
      role="super-admin" 
      title={`Welcome, ${firstName}`} 
      description="Monitor and manage institution accreditation requests, evaluators, and system users."
    >
      <SharedDashboardContainer role="super-admin" userName={firstName} />
    </PageContainer>
  );
}
