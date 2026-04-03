"use client";

import Link from "next/link";
import { LogOut, Settings, LifeBuoy } from "lucide-react";

import { usePortalNavigation } from "@/hooks/use-portal-navigation";
import { cn } from "@/lib/utils/cn";
import { portalNavigation } from "@/lib/config/navigation";
import type { UserRole } from "@/types/auth";

export function SidebarNav({ role }: { role: UserRole }) {
  const items = usePortalNavigation(role);
  const config = portalNavigation[role];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="h-9 w-9 rounded-xl bg-[var(--primary-soft)]" />
        <div>
          <p className="text-sm font-semibold text-slate-800">RTB Accreditation</p>
          <p className="text-xs text-[var(--primary)]">{config.shortLabel} Portal</p>
        </div>
      </div>

      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href as never}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                item.isActive
                  ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-slate-200 pt-4">
        <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-800">
          <LifeBuoy className="h-4 w-4" />
          <span>Support</span>
        </button>
        <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-800">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <div className="mt-4 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-3">
          <div>
            <p className="text-sm font-medium text-slate-800">Olivia Rhye</p>
            <p className="text-xs text-slate-400">olivia@company.com</p>
          </div>
          <LogOut className="h-4 w-4 text-slate-400" />
        </div>
      </div>
    </div>
  );
}
