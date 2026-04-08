"use client";

import { useState } from "react";
import { FileText, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DashboardEmptyState } from "@/components/dashboard/dashboard-empty-state";
import { PrimaryButton } from "@/components/ui/primary-button";
import { ApplicationWizard } from "@/components/forms/application-wizard";

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
  const [isApplying, setIsApplying] = useState(false);

  // Dynamic header content
  const pageTitle = isApplying ? "Apply For Short Course" : "Welcome, John";
  const pageDescription = isApplying 
    ? "Create and manage your accreditation applications for the selected trades." 
    : "View & manage active elders and requests";
  
  const breadcrumbs = isApplying ? [
    { label: "Dashboard", href: "/applicant/dashboard" },
    { label: "Short Course Application", href: "#" }
  ] : undefined;

  return (
    <PageContainer 
      role="applicant" 
      title={pageTitle}
      description={pageDescription}
      breadcrumbs={breadcrumbs}
      action={
        !isApplying && (
          <PrimaryButton 
            label="New Application" 
            onClick={() => setIsApplying(true)}
            iconPosition="right"
            className="rounded-[8px] h-10 px-5 text-white"
          />
        )
      }
    >
      <div className="space-y-6">
        {isApplying ? (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <ApplicationWizard onQuit={() => setIsApplying(false)} />
          </div>
        ) : (
          <>
            <StatsGrid items={stats} />
            <DashboardEmptyState />
          </>
        )}
      </div>
    </PageContainer>
  );
}
