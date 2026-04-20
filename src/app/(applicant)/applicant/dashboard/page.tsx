"use client";

import React, { useEffect, useState } from "react";
import { FileText, Clock, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DashboardEmptyState } from "@/components/dashboard/dashboard-empty-state";
import { PrimaryButton } from "@/components/ui/primary-button";
import { DashboardFilledState } from "@/components/dashboard/dashboard-filled-state";
import { useGetMyApplications, useGetApplicantDashboardStats } from "@/hooks/queries/useApplicationQueries";

export default function ApplicantDashboardPage() {
  const { data: statsRes, isLoading: isLoadingStats } = useGetApplicantDashboardStats();
  const { data: appsRes, isLoading: isLoadingApps } = useGetMyApplications();

  const stats = statsRes?.data;
  const applications = appsRes?.data || [];
  const isLoading = isLoadingStats || isLoadingApps;

  const statsList = [
    {
      label: "Applications",
      value: stats?.totalApplications.toString() || "0",
      icon: FileText,
      iconColor: "#0A77FF",
    },
    {
      label: "Pending",
      value: stats?.pendingApplications.toString() || "0",
      icon: Clock,
      iconColor: "#FF8D28",
    },
    {
      label: "Approved",
      value: stats?.approvedApplications.toString() || "0",
      icon: CheckCircle2,
      iconColor: "#34C759",
    },
    {
      label: "Rejected",
      value: stats?.rejectedApplications.toString() || "0",
      icon: AlertTriangle,
      iconColor: "#FF383C",
    },
  ];

  const actionButton = React.useMemo(() => (
    <PrimaryButton
      label="New Application"
      href="/applicant/applications"
      iconPosition="right"
    />
  ), []);

  return (
    <PageContainer
      role="applicant"
      title="Welcome to your Dashboard"
      description="View & manage active applications and requests"
      action={actionButton}
    >
      <div className="space-y-6">
        <StatsGrid items={statsList} />
        {isLoading ? (
            <div className="flex justify-center items-center h-48 w-full border border-slate-100 bg-white rounded-xl shadow-sm">
              <Loader2 className="animate-spin h-8 w-8 text-[#0A77FF]" />
            </div>
        ) : applications.length > 0 ? (
          <DashboardFilledState applications={applications} />
        ) : (
          <DashboardEmptyState />
        )}
      </div>
    </PageContainer>
  );
}
