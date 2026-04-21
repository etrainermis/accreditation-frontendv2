"use client";

import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  AlertTriangle,
  BellRing,
  CalendarClock,
  Check,
  CircleCheck,
  Info,
  Loader2,
  ShieldCheck,
  Trash2,
} from "lucide-react";

import { getMe } from "@/lib/api/auth/auth-api";
import { useEvaluatorAssignments, useEvaluatorStats } from "@/hooks/queries/useEvaluationQueries";
import { useGetPendingSchedules } from "@/hooks/queries/useDueDiligenceQueries";
import { UserRole } from "@/types/auth";
import { cn } from "@/lib/utils/cn";

interface NotificationsContentProps {
  role: UserRole;
}

interface NotificationItem {
  id: string;
  type: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
  bg: string;
}

function formatRelativeDate(value?: string) {
  if (!value) return "Recently";

  const target = new Date(value);
  if (Number.isNaN(target.getTime())) return "Recently";

  const diffMs = Date.now() - target.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) return "Less than 1 hour ago";
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
}

function getStatusStyle(status: string) {
  if (status === "COMPLETED") {
    return {
      icon: CircleCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
      read: true,
    };
  }

  if (status === "REJECTED") {
    return {
      icon: AlertTriangle,
      color: "text-red-500",
      bg: "bg-red-50",
      read: false,
    };
  }

  return {
    icon: BellRing,
    color: "text-blue-500",
    bg: "bg-blue-50",
    read: false,
  };
}

const mockNotifications: NotificationItem[] = [
  {
    id: "system-maintenance",
    type: "alert",
    title: "System Maintenance Scheduled",
    message: "The platform will be undergoing scheduled maintenance this Sunday at 00:00 GMT.",
    time: "2 hours ago",
    read: false,
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    id: "security-check",
    type: "security",
    title: "Security Audit Required",
    message: "A mandatory account access review is required for all active users.",
    time: "1 day ago",
    read: true,
    icon: ShieldCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export function NotificationsContent({ role }: NotificationsContentProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [dismissedIds, setDismissedIds] = useState<string[]>([]);

  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
    retry: 1,
  });

  const evaluatorId = profile?.id || "";
  const isEvaluator = role === "evaluator";

  const { data: assignments, isLoading: assignmentsLoading } = useEvaluatorAssignments(
    isEvaluator && evaluatorId ? evaluatorId : ""
  );
  const { data: evaluatorStats } = useEvaluatorStats();
  const { data: schedules, isLoading: schedulesLoading } = useGetPendingSchedules();

  const notifications = useMemo<NotificationItem[]>(() => {
    if (!isEvaluator) {
      return mockNotifications;
    }

    const assignmentNotifications = (assignments ?? []).map((assignment) => {
      const style = getStatusStyle(assignment.status);
      return {
        id: `assignment-${assignment.id}`,
        type: "assignment",
        title:
          assignment.status === "COMPLETED"
            ? "Evaluation Completed"
            : "Evaluation Assignment Updated",
        message:
          assignment.status === "COMPLETED"
            ? `Your review for ${assignment.application.institution.name} (${assignment.application.tradeName || assignment.application.type}) has been completed.`
            : `You have an active ${assignment.stage.replaceAll("_", " ").toLowerCase()} assignment for ${assignment.application.institution.name}.`,
        time: formatRelativeDate(assignment.assignedAt),
        read: style.read,
        icon: style.icon,
        color: style.color,
        bg: style.bg,
      };
    });

    const scheduleNotifications = (schedules ?? [])
      .filter((schedule) =>
        !schedule.evaluator?.id || !evaluatorId ? true : schedule.evaluator.id === evaluatorId
      )
      .map((schedule) => ({
        id: `schedule-${schedule.id}`,
        type: "schedule",
        title: schedule.completed ? "Due Diligence Visit Completed" : "Due Diligence Visit Scheduled",
        message: schedule.completed
          ? `The due diligence visit for ${schedule.application?.institution?.name || "the assigned institution"} has been marked complete.`
          : `A due diligence visit is scheduled for ${schedule.application?.institution?.name || "an institution"} from ${new Date(schedule.startDate).toLocaleDateString()} to ${new Date(schedule.endDate).toLocaleDateString()}.`,
        time: formatRelativeDate(schedule.updatedAt || schedule.createdAt || schedule.startDate),
        read: !!schedule.completed,
        icon: schedule.completed ? CircleCheck : CalendarClock,
        color: schedule.completed ? "text-emerald-500" : "text-orange-500",
        bg: schedule.completed ? "bg-emerald-50" : "bg-orange-50",
      }));

    const summaryNotification: NotificationItem[] =
      evaluatorStats && (evaluatorStats.totalAssigned > 0 || evaluatorStats.pendingEvaluations > 0)
        ? [
            {
              id: "evaluator-summary",
              type: "summary",
              title: "Evaluator Workload Summary",
              message: `You currently have ${evaluatorStats.totalAssigned} total assignments, ${evaluatorStats.pendingEvaluations} pending evaluations, and ${evaluatorStats.completedEvaluations} completed evaluations.`,
              time: "Latest session",
              read: true,
              icon: Info,
              color: "text-slate-500",
              bg: "bg-slate-100",
            },
          ]
        : [];

    return [...summaryNotification, ...scheduleNotifications, ...assignmentNotifications].sort((a, b) =>
      a.read === b.read ? 0 : a.read ? 1 : -1
    );
  }, [assignments, evaluatorId, evaluatorStats, isEvaluator, schedules]);

  const visibleNotifications = notifications.filter((item) => !dismissedIds.includes(item.id));
  const unreadCount = visibleNotifications.filter((item) => !item.read).length;
  const filtered =
    activeTab === "unread"
      ? visibleNotifications.filter((item) => !item.read)
      : visibleNotifications;

  if (profileLoading || (isEvaluator && (assignmentsLoading || schedulesLoading))) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#0A77FF]" />
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
      <div className="w-full md:w-64 shrink-0 space-y-1">
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-sm transition-colors",
            activeTab === "all" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <span>All Notifications</span>
          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">{visibleNotifications.length}</span>
        </button>
        <button
          onClick={() => setActiveTab("unread")}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-sm transition-colors",
            activeTab === "unread" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <span>Unread</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">{unreadCount}</span>
        </button>
        <div className="pt-4 mt-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-sm transition-colors hover:bg-slate-50">
            <Check className="h-4 w-4" />
            Live notifications feed
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {filtered.map((notification) => {
          const Icon = notification.icon;
          return (
            <div
              key={notification.id}
              className={cn(
                "group relative flex items-start gap-4 p-4 border rounded-sm transition-all duration-200",
                !notification.read ? "bg-white border-blue-100 shadow-sm" : "bg-slate-50/50 border-slate-100"
              )}
            >
              {!notification.read && (
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-blue-500 rounded-l-sm" />
              )}

              <div className={cn("shrink-0 p-2.5 rounded-sm", notification.bg)}>
                <Icon className={cn("h-5 w-5", notification.color)} strokeWidth={1.5} />
              </div>

              <div className="flex-1 pr-10">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <h4 className={cn("text-sm", !notification.read ? "text-slate-900" : "text-slate-700")}>
                    {notification.title}
                  </h4>
                  <span className="shrink-0 text-xs text-slate-400 font-medium whitespace-nowrap">
                    {notification.time}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed max-w-3xl">
                  {notification.message}
                </p>
              </div>

              <button
                onClick={() => setDismissedIds((current) => [...current, notification.id])}
                className="absolute right-4 top-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-sm opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center p-12 text-center border border-dashed border-slate-200 rounded-sm bg-slate-50">
            <Info className="h-8 w-8 text-slate-400 mb-3" />
            <h3 className="text-sm font-medium text-slate-900">You're all caught up!</h3>
            <p className="text-sm text-slate-500 mt-1">No notifications found in this view.</p>
          </div>
        )}
      </div>
    </div>
  );
}
