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

export function EvaluationsSubNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between gap-2  pb-2 mb-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href as never}
            className={cn(
              "flex w-full items-center gap-2 px-4 py-2.5 rounded-sm transition-all duration-200 text-[var(--primary)]",
              isActive 
                ? "bg-[#F9FAFB]" 
                : "hover:bg-slate-50 hover:text-slate-900"
            )}
          >
            <Icon 
              className="h-4 w-4 text-[var(--primary)]" 
              strokeWidth={1}
            />
            <span className="text-sm font-medium text-[var(--primary)]">{item.title}</span>
          </Link>
        );
      })}
    </div>
  );
}
