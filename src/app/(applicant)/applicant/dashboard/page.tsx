"use client";

import { FileText, Clock, CheckCircle2, AlertTriangle } from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { StatsGrid } from "@/components/dashboard/stats-grid";

const stats = [
  {
    label: "Applications",
    value: "2",
    icon: FileText,
    iconBg: "border border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    label: "Pending",
    value: "6",
    icon: Clock,
    iconBg: "border border-orange-100",
    iconColor: "text-orange-400",
  },
  {
    label: "Approved",
    value: "6",
    icon: CheckCircle2,
    iconBg: "border border-green-100",
    iconColor: "text-green-500",
  },
  {
    label: "Rejected",
    value: "12",
    icon: AlertTriangle,
    iconBg: "border border-red-100",
    iconColor: "text-red-400",
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
