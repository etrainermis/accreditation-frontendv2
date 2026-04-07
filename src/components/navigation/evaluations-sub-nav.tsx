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

const navItems = [
  {
    title: "Applications",
    href: "/super-admin/evaluations/applications",
    icon: NotepadText,
  },
  {
    title: "Evaluators",
    href: "/super-admin/evaluations/evaluators",
    icon: ShieldUser,
  },
  {
    title: "Evaluation Criteria Files",
    href: "/super-admin/evaluations/criteria",
    icon: FolderOpen,
  },
  {
    title: "Due Diligence Schedule",
    href: "/super-admin/evaluations/schedule",
    icon: CalendarCheck2,
  },
];

export function EvaluationsSubNav({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname();

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
                "flex items-center gap-2 px-4 py-2.5 rounded-sm transition-all duration-200 whitespace-nowrap",
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
    <div className="justify-end flex w-full">
        {children}
    </div>
    </div>
  );
}
