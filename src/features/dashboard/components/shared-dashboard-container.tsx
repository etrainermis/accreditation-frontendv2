"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { StackedAnalyticsChart } from "@/components/dashboard/stacked-analytics-chart";
import { ApplicationsByTradeChart } from "@/components/dashboard/applications-by-trade-chart";
import { MostRequestedModules } from "@/components/dashboard/most-requested-modules";
import { RecentApplicationsTable } from "@/components/dashboard/recent-applications-table";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";
import { useAdminDashboardStats } from "@/hooks/queries/useSuperAdminQueries";
import { UserRole } from "@/types/auth";

interface SharedDashboardContainerProps {
  role: UserRole;
  userName?: string;
}

export function SharedDashboardContainer({ role, userName = "User" }: SharedDashboardContainerProps) {
  const { data: adminStatsResponse } = useAdminDashboardStats();
  const adminStats = adminStatsResponse?.data;

  const stats = role === "super-admin" && adminStats ? [
    { label: "Applications", value: adminStats.totalApplications.toString(), icon: NotepadText, iconColor: "#0A77FF" },
    { label: "Pending", value: adminStats.pendingApplications.toString(), icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Approved", value: adminStats.approvedApplications.toString(), icon: CheckCheck, iconColor: "#34C759" },
    { label: "Rejected", value: adminStats.rejectedApplications.toString(), icon: AlertTriangle, iconColor: "#FF383C" },
  ] : [
    { label: "Applications", value: "24", icon: NotepadText, iconColor: "#0A77FF" },
    { label: "Pending", value: "8", icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Evaluated", value: "5", icon: CheckCheck, iconColor: "#34C759" },
    { label: "Rejected", value: "11", icon: AlertTriangle, iconColor: "#FF383C" },
  ];

  const chartData = {
    "12 Months": [
      { label: "Jan", rejected: 6, approved: 5, pending: 4 },
      { label: "Feb", rejected: 8, approved: 6, pending: 5 },
      { label: "Mar", rejected: 4, approved: 4, pending: 3 },
      { label: "Apr", rejected: 6, approved: 6, pending: 6 },
      { label: "May", rejected: 4, approved: 4, pending: 3 },
      { label: "Jun", rejected: 7, approved: 6, pending: 5 },
      { label: "Jul", rejected: 6, approved: 5, pending: 6 },
      { label: "Aug", rejected: 6, approved: 6, pending: 6 },
      { label: "Sep", rejected: 6, approved: 5, pending: 6 },
      { label: "Oct", rejected: 6, approved: 6, pending: 5 },
      { label: "Nov", rejected: 7, approved: 5, pending: 5 },
      { label: "Dec", rejected: 7, approved: 7, pending: 5 },
    ],
    "30 Days": Array.from({ length: 30 }, (_, i) => ({
      label: `${i + 1}`,
      rejected: Math.floor(Math.random() * 5) + 2,
      approved: Math.floor(Math.random() * 6) + 3,
      pending: Math.floor(Math.random() * 4) + 2,
    })),
    "7 Days": [
      { label: "Mon", rejected: 2, approved: 2, pending: 1 },
      { label: "Tue", rejected: 3, approved: 1, pending: 3 },
      { label: "Wed", rejected: 2, approved: 4, pending: 2 },
      { label: "Thu", rejected: 4, approved: 2, pending: 2 },
      { label: "Fri", rejected: 5, approved: 3, pending: 1 },
      { label: "Sat", rejected: 1, approved: 1, pending: 1 },
      { label: "Sun", rejected: 1, approved: 0, pending: 1 },
    ],
    "24 Hours": Array.from({ length: 24 }, (_, i) => ({
      label: `${String(i).padStart(2, "0")}h`,
      rejected: Math.floor(Math.random() * 3) + 1,
      approved: Math.floor(Math.random() * 4) + 1,
      pending: Math.floor(Math.random() * 2) + 1,
    })),
  };

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} />

      <StackedAnalyticsChart data={chartData} />

      {(role === "super-admin" || role === "supervisor") && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-6">
          <ApplicationsByTradeChart />
          <MostRequestedModules />
        </div>
      )}



      <RecentApplicationsTable />
    </div>
  );
}
