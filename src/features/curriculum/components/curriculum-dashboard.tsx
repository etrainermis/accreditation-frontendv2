"use client";

import React from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { StackedAnalyticsChart } from "@/components/dashboard/stacked-analytics-chart";
import { RecentApplicationsTable } from "@/components/dashboard/recent-applications-table";
import { ClipboardClock, CheckCheck, AlertTriangle, FileSearch } from "lucide-react";

export function CurriculumDashboard() {
  const stats = [
    { label: "Pending Reviews", value: "12", icon: ClipboardClock, iconColor: "#FF8D28" },
    { label: "Approved Curriculum", value: "45", icon: CheckCheck, iconColor: "#34C759" },
    { label: "Rejections", value: "6", icon: AlertTriangle, iconColor: "#FF383C" },
    { label: "Unknown Docs", value: "7", icon: FileSearch, iconColor: "#0A77FF" },
  ];

  const chartData = {
    "12 Months": Array.from({ length: 12 }, (_, i) => ({
      label: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
      rejected: Math.floor(Math.random() * 5),
      approved: Math.floor(Math.random() * 10) + 5,
      pending: Math.floor(Math.random() * 8) + 2,
    })),
    "30 Days": Array.from({ length: 30 }, (_, i) => ({
      label: `${i + 1}`,
      rejected: Math.floor(Math.random() * 2),
      approved: Math.floor(Math.random() * 5) + 2,
      pending: Math.floor(Math.random() * 3) + 1,
    })),
    "7 Days": Array.from({ length: 7 }, (_, i) => ({
      label: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
      rejected: Math.floor(Math.random() * 2),
      approved: Math.floor(Math.random() * 4) + 1,
      pending: Math.floor(Math.random() * 3) + 1,
    })),
    "24 Hours": Array.from({ length: 24 }, (_, i) => ({
      label: `${String(i).padStart(2, "0")}h`,
      rejected: 0,
      approved: Math.floor(Math.random() * 2),
      pending: Math.floor(Math.random() * 2),
    })),
  };

  return (
    <div className="space-y-6 text-left">
      <StatsGrid items={stats} />
      <StackedAnalyticsChart data={chartData} />
      <div className="bg-white border border-slate-200 rounded-2xl p-6">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Urgent Curriculum Reviews</h3>
        <RecentApplicationsTable />
      </div>
    </div>
  );
}
