"use client";

import React from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { NotepadText, ClipboardClock, CheckCheck } from "lucide-react";
import { useEvaluatorStats } from "@/hooks/queries/useEvaluationQueries";
import { StackedAnalyticsChart } from "@/components/dashboard/stacked-analytics-chart";
import { RecentApplicationsTable } from "@/components/dashboard/recent-applications-table";
import { Skeleton } from "@/components/ui/skeleton";

export function EvaluatorDashboardContainer() {
  const { data: statsData, isLoading } = useEvaluatorStats();

  const stats = [
    { 
      label: "Applications", 
      value: (statsData?.totalAssigned ?? 0).toString(), 
      icon: NotepadText, 
      iconColor: "#0A77FF" 
    },
    { 
      label: "Pending", 
      value: (statsData?.pendingEvaluations ?? 0).toString(), 
      icon: ClipboardClock, 
      iconColor: "#FF8D28" 
    },
    { 
      label: "Evaluated", 
      value: (statsData?.completedEvaluations ?? 0).toString(), 
      icon: CheckCheck, 
      iconColor: "#34C759" 
    },
    { 
      label: "Rejected", 
      value: "0", 
      icon: CheckCheck, 
      iconColor: "#FF3B30" 
    },
  ];

  if (isLoading && !statsData) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
  }

  // Placeholder chart data as the backend might not provide historical stats for evaluators yet
  const chartData = {
    "12 Months": [
        { label: "Jan", rejected: 1, approved: 2, pending: 1 },
        { label: "Feb", rejected: 0, approved: 1, pending: 2 },
        { label: "Mar", rejected: 1, approved: 3, pending: 0 },
        { label: "Apr", rejected: 2, approved: 2, pending: 1 },
        { label: "May", rejected: 1, approved: 1, pending: 3 },
        { label: "Jun", rejected: 0, approved: 4, pending: 2 },
        { label: "Jul", rejected: 1, approved: 2, pending: 1 },
        { label: "Aug", rejected: 2, approved: 3, pending: 0 },
        { label: "Sep", rejected: 1, approved: 1, pending: 2 },
        { label: "Oct", rejected: 0, approved: 2, pending: 1 },
        { label: "Nov", rejected: 1, approved: 1, pending: 1 },
        { label: "Dec", rejected: 0, approved: 2, pending: 0 },
    ],
    "30 Days": Array.from({ length: 30 }, (_, i) => ({
      label: `${i + 1}`,
      rejected: Math.floor(Math.random() * 2),
      approved: Math.floor(Math.random() * 3),
      pending: Math.floor(Math.random() * 2),
    })),
    "7 Days": [
      { label: "Mon", rejected: 0, approved: 1, pending: 0 },
      { label: "Tue", rejected: 0, approved: 0, pending: 1 },
      { label: "Wed", rejected: 1, approved: 1, pending: 0 },
      { label: "Thu", rejected: 0, approved: 1, pending: 1 },
      { label: "Fri", rejected: 0, approved: 0, pending: 0 },
      { label: "Sat", rejected: 0, approved: 0, pending: 0 },
      { label: "Sun", rejected: 0, approved: 0, pending: 0 },
    ],
    "24 Hours": Array.from({ length: 24 }, (_, i) => ({
      label: `${String(i).padStart(2, "0")}h`,
      rejected: 0,
      approved: 0,
      pending: 0,
    })),
  };

  return (
    <div className="space-y-6">
      <StatsGrid items={stats} />
      <StackedAnalyticsChart data={chartData} title="Evaluation Activity" />
      <RecentApplicationsTable title="Your Recent Assignments" />
    </div>
  );
}
