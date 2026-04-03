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
      {/* Logo / Brand */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-[#0088ff]">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">RTB Accreditation</p>
          <p className="text-xs text-[#0088ff]">{config.shortLabel} Portal</p>
        </div>
      </div>

      {/* Navigation items */}
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href as never}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors",
                item.isActive
                  ? "bg-blue-50 text-[#0088ff]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-700",
              )}
            >
              <Icon className="h-[18px] w-[18px] shrink-0" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="mt-auto space-y-1 border-t border-slate-100 pt-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
        >
          <LifeBuoy className="h-[18px] w-[18px]" />
          <span>Support</span>
        </button>
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
        >
          <Settings className="h-[18px] w-[18px]" />
          <span>Settings</span>
        </button>

        {/* User profile card */}
        <div className="mt-4 flex items-center justify-between rounded-xl px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-orange-100">
              <div className="flex h-full w-full items-center justify-center text-xs font-medium text-slate-500">
                OR
              </div>
            </div>
            <div>
              <p className="text-[13px] font-medium text-slate-800">Olivia Rhye</p>
              <p className="text-[11px] text-slate-400">olivia@com...</p>
            </div>
          </div>
          <button type="button" className="text-slate-400 transition-colors hover:text-slate-600">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
