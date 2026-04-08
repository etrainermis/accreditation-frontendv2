"use client";

import { FileText, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { StatsGrid } from "@/components/dashboard/stats-grid";

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
  return (
    <PageContainer 
      role="applicant" 
      title="Welcome, John" 
      description="View and manage your applications."
    >
      <div className="space-y-6">
        <StatsGrid items={stats} />
        {/* Placeholder for local content if any was removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* You can add more local dashboard components here */}
        </div>
      </div>
    </PageContainer>
  );
}
