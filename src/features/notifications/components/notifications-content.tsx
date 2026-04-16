"use client";

import React, { useState } from "react";
import { UserRole } from "@/types/auth";
import { cn } from "@/lib/utils/cn";
import { BellRing, ShieldCheck, MailWarning, AlertTriangle, CircleCheck, Info, Check, Trash2 } from "lucide-react";

interface NotificationsContentProps {
  role: UserRole;
}

export function NotificationsContent({ role }: NotificationsContentProps) {
  const [activeTab, setActiveTab] = useState("all");

  const mockNotifications = [
    {
      id: 1,
      type: "alert",
      title: "System Maintenance Scheduled",
      message: "The platform will be undergoing scheduled maintenance this Sunday 00:00 GMT.",
      time: "2 hours ago",
      read: false,
      icon: AlertTriangle,
      color: "text-red-500",
      bg: "bg-red-50",
    },
    {
      id: 2,
      type: "application",
      title: "New Application Submitted",
      message: "Rwanda Polytechnic submitted a new application for the Trade & Competency module.",
      time: "5 hours ago",
      read: false,
      icon: BellRing,
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      id: 3,
      type: "security",
      title: "Security Audit Required",
      message: "A mandatory account access review is required for all active super-administrators.",
      time: "1 day ago",
      read: true,
      icon: ShieldCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      id: 4,
      type: "system",
      title: "Password Change Detected",
      message: "Your primary master account password was successfully updated.",
      time: "2 days ago",
      read: true,
      icon: CircleCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      id: 5,
      type: "message",
      title: "Unread Helpdesk Ticket",
      message: "An institution requested clarification regarding their evaluation criteria grading.",
      time: "3 days ago",
      read: true,
      icon: MailWarning,
      color: "text-orange-500",
      bg: "bg-orange-50",
    },
  ];

  const filtered = activeTab === "unread" 
    ? mockNotifications.filter(n => !n.read) 
    : mockNotifications;

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
      {/* Left Sidebar Filter */}
      <div className="w-full md:w-64 shrink-0 space-y-1">
        <button
          onClick={() => setActiveTab("all")}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-sm transition-colors",
            activeTab === "all" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <span>All Notifications</span>
          <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">5</span>
        </button>
        <button
          onClick={() => setActiveTab("unread")}
          className={cn(
            "w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-sm transition-colors",
            activeTab === "unread" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <span>Unread</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">2</span>
        </button>
        <div className="pt-4 mt-4 border-t border-slate-100">
          <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-sm transition-colors hover:bg-slate-50">
            <Check className="h-4 w-4" />
            Mark all as read
          </button>
        </div>
      </div>

      {/* Main Feed */}
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
                  <h4 className={cn("text-sm ", !notification.read ? "text-slate-900" : "text-slate-700")}>
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

              {/* Action */}
              <button className="absolute right-4 top-4 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-sm opacity-0 group-hover:opacity-100 transition-all">
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
