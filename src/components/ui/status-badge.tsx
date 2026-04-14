"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { CheckCheck, X, Clock, TriangleAlert } from "lucide-react";

export type StatusType = "Pending" | "Approved" | "Rejected" | "Active" | "Deactivated" | "Completed" | "Cancelled" | "Expired" | "Expiring Soon";

interface StatusBadgeProps {
  status: StatusType;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const configs = {
    Pending: {
      label: "Pending",
      text: "text-[#3538CD]",
      border: "border-[#C7D7FE]",
      dot: "bg-[#6155F5]",
      icon: Clock,
    },
    Active: {
      label: "Active",
      text: "text-[#027A48]",
      border: "border-[#ABEFC6]",
      dot: "bg-[#34C759]",
      icon: CheckCheck,
    },
    Approved: {
      label: "Approved",
      text: "text-[#027A48]",
      border: "border-[#ABEFC6]",
      dot: "bg-[#12B76A]",
      icon: CheckCheck,
    },
    Deactivated: {
      label: "Deactivated",
      text: "text-[#B42318]",
      border: "border-[#FECDCA]",
      dot: "bg-[#F04438]",
      icon: X,
    },
    Rejected: {
      label: "Rejected",
      text: "text-[#B42318]",
      border: "border-[#FECDCA]",
      dot: "bg-[#B42318]",
      icon: TriangleAlert,
    },
    Completed: {
      label: "Completed",
      text: "text-[#027A48]",
      border: "border-[#ABEFC6]",
      dot: "bg-[#32D583]",
      icon: CheckCheck,
    },
    Cancelled: {
      label: "Cancelled",
      text: "text-[#B42318]",
      border: "border-[#FECDCA]",
      dot: "bg-[#F04438]",
      icon: TriangleAlert,
    },
    Expired: {
      label: "Expired",
      text: "text-[#B42318]",
      border: "border-[#FECDCA]",
      dot: "bg-[#F04438]",
      icon: X,
    },
    "Expiring Soon": {
      label: "Expiring Soon",
      text: "text-[#B54708]",
      border: "border-[#FEDF89]",
      dot: "bg-[#F79009]",
      icon: TriangleAlert,
    },
  };

  const config = configs[status] || configs.Pending;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] border text-[11px] font-medium shadow-none",
      config.border,
      config.text,
    )}>
      {config.label}
      <config.icon className="h-3 w-3 ml-1 opacity-80" />
    </div>
  );
}
