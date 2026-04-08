"use client";

import { FileText, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DashboardEmptyState } from "@/components/dashboard/dashboard-empty-state";
import { PrimaryButton } from "@/components/ui/primary-button";
import { DashboardFilledState } from "@/components/dashboard/dashboard-filled-state";

const stats = [
  {
    label: "Applications",
    value: "2",
    icon: FileText,
    iconColor: "#0A77FF",
  },
  {
    label: "Pending",
    value: "6",
    icon: Clock,
    iconColor: "#FF8D28",
  },
  {
    label: "Approved",
    value: "6",
    icon: CheckCircle2,
    iconColor: "#34C759",
  },
  {
    label: "Rejected",
    value: "12",
    icon: AlertTriangle,
    iconColor: "#FF383C",
  },
];

export default function ApplicantDashboardPage() {
  const hasApplications = false;

  return (
    <PageContainer
      role="applicant"
      title="Welcome, John"
      description="View & manage active elders and requests"
      action={
        <PrimaryButton
          label="New Application"
          href="/applicant/applications"
          iconPosition="right"
        />
      }
    >
      <div className="space-y-6">
        <StatsGrid items={stats} />
        {hasApplications ? (
          <DashboardFilledState />
        ) : (
          <DashboardEmptyState />
        )}
      </div>
    </PageContainer>
  );
}
