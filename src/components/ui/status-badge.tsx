"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { CheckCheck, X, Clock, TriangleAlert } from "lucide-react";

export type StatusType = "Pending" | "Approved" | "Rejected" | "Active" | "Deactivated";

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
    },
    Active: {
      label: "Active",
      text: "text-[#027A48]",
      border: "border-[#ABEFC6]",
      dot: "bg-[#34C759]",
    },
    Approved: {
      label: "Approved",
      text: "text-[#027A48]",
      border: "border-[#ABEFC6]",
      dot: "bg-[#12B76A]",
    },
    Deactivated: {
      label: "Deactivated",
      text: "text-[#B42318]",
    
      border: "border-[#FECDCA]",
      dot: "bg-[#F04438]",
    },
    Rejected: {
      label: "Rejected",
      text: "text-[#B42318]",
      border: "border-[#FECDCA]",
      dot: "bg-[#B42318]",
    },
  };

  const config = configs[status] || configs.Pending;

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-[3px] border text-[11px] font-medium shadow-none",
      config.border,
      config.text,
    )}>
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
      {config.label}
    </div>
  );
}
