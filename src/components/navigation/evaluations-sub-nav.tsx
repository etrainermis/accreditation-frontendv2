"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/cn";
import {
  NotepadText,
  ShieldUser,
  FolderOpen,
  CalendarCheck2,
} from "lucide-react";

interface EvaluationsSubNavProps {
  role?: "super-admin" | "evaluator";
  children?: React.ReactNode;
}

export function EvaluationsSubNav({ role = "super-admin", children }: EvaluationsSubNavProps) {
  const pathname = usePathname();
  const basePath = role === "super-admin" ? "/super-admin/evaluations" : "/evaluator";

  const allNavItems = [
    {
      title: "Applications",
      href: `${basePath}/applications`,
      icon: NotepadText,
    },
    {
      title: "Evaluators",
      href: `${basePath}/evaluators`,
      icon: ShieldUser,
    },
    {
      title: "Evaluation Criteria Files",
      href: `${basePath}/criteria`,
      icon: FolderOpen,
    },
    {
      title: "Due Diligence Schedule",
      href: `${basePath}/schedule`,
      icon: CalendarCheck2,
    },
  ];

  // Filter out the 'Evaluators' item if the active role is 'evaluator'
  const navItems = allNavItems.filter((item) => {
    if (role === "evaluator" && item.title === "Evaluators") {
      return false;
    }
    return true;
  });

  return (
    <div className="flex flex-col w-full items-center justify-between mb-6">
      <div className="flex w-full justify-between items-center gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href as never}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-sm transition-all w-full duration-200 whitespace-nowrap",
                isActive
                  ? "text-[var(--primary)] bg-[#F9FAFB]"
                  : "text-[#353E49]"
              )}
            >
              <Icon
                className={cn(
                  "h-4 w-4",
                  isActive ? "text-[var(--primary)]" : "text-[#353E49]"
                )}
                strokeWidth={1}
              />
              <span
                className={cn(
                  "text-sm font-medium",
                  isActive ? "text-[var(--primary)]" : "text-[#353E49]"
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="justify-end mt-6 flex w-full">
        {children}
      </div>
    </div>
  );
}
