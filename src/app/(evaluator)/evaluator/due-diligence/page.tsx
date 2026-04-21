"use client";

import React, { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import {
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  CalendarCheck2,
  CalendarX2,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useGetPendingSchedules } from "@/hooks/queries/useDueDiligenceQueries";
import { format, parseISO } from "date-fns";
import type { DueDiligenceSchedule } from "@/lib/api/evaluations/due-diligence-api";

// Avatar colour palette — cycles through to assign a colour per institution initial
const AVATAR_COLORS = ["#0A77FF", "#FF8D28", "#34C759", "#6155F5", "#FF383C", "#00B4D8"];

type VisitStatus = "upcoming" | "completed" | "cancelled";

const statusConfig: Record<VisitStatus, {
  label: string;
  bg: string;
  text: string;
  icon: React.ComponentType<any>;
  iconColor: string;
  strip: string;
}> = {
  upcoming: {
    label: "Upcoming",
    bg: "bg-blue-50",
    text: "text-blue-700",
    icon: Clock,
    iconColor: "text-blue-500",
    strip: "bg-[#0A77FF]",
  },
  completed: {
    label: "Completed",
    bg: "bg-green-50",
    text: "text-green-700",
    icon: CheckCircle2,
    iconColor: "text-green-500",
    strip: "bg-green-500",
  },
  cancelled: {
    label: "Cancelled",
    bg: "bg-red-50",
    text: "text-red-700",
    icon: AlertCircle,
    iconColor: "text-red-500",
    strip: "bg-red-500",
  },
};

function mapStatus(schedule: DueDiligenceSchedule): VisitStatus {
  if (schedule.completed) return "completed";
  // If status field is present (some backends add it), map it
  if ((schedule as any).status === "COMPLETED") return "completed";
  if ((schedule as any).status === "CANCELLED") return "cancelled";
  return "upcoming";
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function formatDateRange(startDate: string, endDate: string): string {
  try {
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    if (startDate === endDate) return format(start, "MMM d, yyyy");
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${format(start, "MMM d")} – ${format(end, "d, yyyy")}`;
    }
    return `${format(start, "MMM d, yyyy")} – ${format(end, "MMM d, yyyy")}`;
  } catch {
    return `${startDate} – ${endDate}`;
  }
}

export default function DueDiligencePage() {
  const [activeFilter, setActiveFilter] = useState<"all" | VisitStatus>("all");

  const { data: schedules, isLoading } = useGetPendingSchedules();

  // Map backend schedules → display-ready visits
  const visits = (schedules ?? []).map((schedule, idx) => {
    const institutionName =
      schedule.application?.institution?.name ?? "Unknown Institution";
    const tradeName = schedule.application?.tradeName ?? "N/A";
    const status = mapStatus(schedule);
    const color = AVATAR_COLORS[idx % AVATAR_COLORS.length];

    return {
      id: schedule.id,
      institution: institutionName,
      trade: tradeName,
      dateRange: formatDateRange(schedule.startDate, schedule.endDate),
      startDate: schedule.startDate,
      notes: schedule.notes ?? "",
      location: schedule.location ?? "Province / District / Sector",
      evaluatorName: schedule.evaluator?.name ?? "",
      status,
      avatar: getInitials(institutionName),
      avatarColor: color,
    };
  });

  // Derived stats from real data
  const totalScheduled = visits.length;
  const upcomingCount = visits.filter((v) => v.status === "upcoming").length;
  const completedCount = visits.filter((v) => v.status === "completed").length;
  const cancelledCount = visits.filter((v) => v.status === "cancelled").length;

  const filteredVisits =
    activeFilter === "all" ? visits : visits.filter((v) => v.status === activeFilter);

  const statCards = [
    {
      label: "Total Scheduled",
      value: totalScheduled,
      icon: CalendarCheck2,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      valueColor: "text-blue-700",
    },
    {
      label: "Upcoming Visits",
      value: upcomingCount,
      icon: Calendar,
      bg: "bg-orange-50",
      iconColor: "text-orange-500",
      valueColor: "text-orange-600",
    },
    {
      label: "Completed",
      value: completedCount,
      icon: CheckCircle2,
      bg: "bg-green-50",
      iconColor: "text-green-500",
      valueColor: "text-green-700",
    },
    {
      label: "Cancelled",
      value: cancelledCount,
      icon: CalendarX2,
      bg: "bg-red-50",
      iconColor: "text-red-500",
      valueColor: "text-red-700",
    },
  ];

  const filterLabels: Record<"all" | VisitStatus, string> = {
    all: "All Visits",
    upcoming: "Upcoming",
    completed: "Completed",
    cancelled: "Cancelled",
  };

  const filterCounts: Record<"all" | VisitStatus, number> = {
    all: totalScheduled,
    upcoming: upcomingCount,
    completed: completedCount,
    cancelled: cancelledCount,
  };

  return (
    <PageContainer
      role="evaluator"
      title="Due Diligence"
      description="Track and manage your scheduled on-site accreditation visits and inspections."
    >
      <EvaluationsSubNav role="evaluator" />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.label}
              className="rounded-sm border border-slate-100 bg-white p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={cn("h-10 w-10 rounded-sm flex items-center justify-center", card.bg)}>
                <Icon className={cn("h-5 w-5", card.iconColor)} strokeWidth={1.5} />
              </div>
              <div>
                <p className={cn("text-2xl font-bold tabular-nums", card.valueColor)}>
                  {isLoading ? "—" : card.value}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">{card.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1 border-b border-slate-100 mb-6">
        {(["all", "upcoming", "completed", "cancelled"] as const).map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px",
              activeFilter === filter
                ? "border-[#0A77FF] text-[#0A77FF]"
                : "border-transparent text-slate-500 hover:text-slate-700"
            )}
          >
            {filterLabels[filter]}
            {!isLoading && (
              <span
                className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                  activeFilter === filter
                    ? "bg-[#0A77FF]/10 text-[#0A77FF]"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                {filterCounts[filter]}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Visit Cards Grid */}
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-[#0A77FF]" />
        </div>
      ) : filteredVisits.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center text-center">
          <CalendarX2 className="h-12 w-12 text-slate-200 mb-3" />
          <p className="text-sm font-medium text-slate-500">No visits found</p>
          <p className="text-xs text-slate-400 mt-1">
            {activeFilter === "all"
              ? "No due diligence visits have been scheduled for you yet."
              : `No ${filterLabels[activeFilter].toLowerCase()} visits.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredVisits.map((visit) => {
            const config = statusConfig[visit.status];
            const StatusIcon = config.icon;

            return (
              <div
                key={visit.id}
                className="group rounded-sm border border-slate-100 bg-white hover:border-slate-200 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                {/* Coloured top strip by status */}
                <div className={cn("h-1 w-full", config.strip)} />

                <div className="p-5 flex flex-col gap-4">
                  {/* Institution Row */}
                  <div className="flex items-start gap-3">
                    <div
                      className="h-10 w-10 rounded-sm flex items-center justify-center text-xs font-bold shrink-0"
                      style={{
                        backgroundColor: visit.avatarColor + "20",
                        color: visit.avatarColor,
                      }}
                    >
                      {visit.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-semibold text-slate-900 leading-tight truncate">
                        {visit.institution}
                      </h4>
                      <p className="text-[11px] text-slate-500 mt-0.5 truncate">{visit.trade}</p>
                    </div>
                    <span
                      className={cn(
                        "shrink-0 flex items-center gap-1 px-2 py-1 rounded-sm text-[10px] font-semibold uppercase tracking-wide",
                        config.bg,
                        config.text
                      )}
                    >
                      <StatusIcon className={cn("h-3 w-3", config.iconColor)} />
                      {config.label}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[12px] text-slate-600">
                      <Calendar className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span>{visit.dateRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-slate-600">
                      <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{visit.location}</span>
                    </div>
                    {visit.notes && (
                      <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2 pt-1">
                        {visit.notes}
                      </p>
                    )}
                  </div>

                  {/* Footer Action */}
                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">
                      {visit.evaluatorName ? `Assigned to ${visit.evaluatorName}` : ""}
                    </span>
                    <button className="flex items-center gap-1 text-[12px] font-medium text-[#0A77FF] hover:text-blue-700 transition-colors cursor-pointer group-hover:gap-2">
                      View
                      <ChevronRight className="h-3.5 w-3.5 transition-all" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </PageContainer>
  );
}
