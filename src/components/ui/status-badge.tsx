"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { CheckCheck, X, Clock, TriangleAlert } from "lucide-react";

export type StatusType = "Pending" | "Approved" | "Rejected";

interface StatusBadgeProps {
  status: StatusType;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const configs = {
    Pending: {
      label: "Pending",

      text: "text-[#3538CD]",
      icon: Clock,
    },
    Approved: {
      label: "Approved",
      text: "text-[#027A48]",
      icon: CheckCheck,
    },
    Rejected: {
      label: "Rejected",
   
      text: "text-[#B42318]",
      icon: TriangleAlert,
    },
  };

  const config = configs[status] || configs.Pending;
  const Icon = config.icon;

  return (
    <div className={cn(
      "inline-flex items-center border border-[#D0D5DD] gap-1.5 px-2 py-0.5 rounded-[3px] shadow-sm text-[11px] ",
 
      config.text,
    )}>
       {config.label}
      <Icon className="h-3 w-3" />
     
    </div>
  );
}
