"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, MessageSquareMore } from "lucide-react";

import type { UserRole } from "@/types/auth";

export function Topbar({ role }: { role: UserRole }) {
  const pathname = usePathname();

  // Derive breadcrumb label from pathname
  const segments = pathname.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] ?? "dashboard";
  const pageLabel = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-3.5">
      <p className="text-sm font-medium text-[#0088ff]">{pageLabel}</p>

      <div className="flex items-center gap-3">
        {/* Chat icon with badge */}
        <button
          type="button"
          className="relative rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:text-slate-600"
        >
          <MessageSquareMore className="h-[18px] w-[18px]" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#0088ff] text-[10px] font-medium text-white">
            2
          </span>
        </button>

        {/* Notification bell */}
        <button
          type="button"
          className="rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:text-slate-600"
        >
          <Bell className="h-[18px] w-[18px]" />
        </button>

        {/* User avatar */}
        <div className="h-9 w-9 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-orange-100">
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-500">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}
