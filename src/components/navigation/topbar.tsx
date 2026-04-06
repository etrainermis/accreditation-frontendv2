"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, MessageSquareMore, Menu } from "lucide-react";

import type { UserRole } from "@/types/auth";

export function Topbar({ role, onOpenMobile }: { role: UserRole, onOpenMobile?: () => void }) {
  const pathname = usePathname();

  // Derive breadcrumb label from pathname
  const segments = pathname.split("/").filter(Boolean);
  const currentPage = segments[segments.length - 1] ?? "dashboard";
  const pageLabel = currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 md:px-6 py-3.5">
      <div className="flex items-center gap-3">
        {onOpenMobile && (
          <button 
            type="button" 
            onClick={onOpenMobile} 
            className="md:hidden p-1.5 -ml-1 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"
            aria-label="Open sidebar"
          >
             <Menu className="h-5 w-5" />
          </button>
        )}
        <p className="text-sm font-medium text-[#0088ff]">{pageLabel}</p>
      </div>

      <div className="flex items-center gap-3">
        {/* Chat icon with badge */}
        <button
          type="button"
          className="relative rounded-full border border-slate-200 p-2 text-slate-400 transition-colors hover:text-slate-600 hidden sm:block"
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
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User avatar"
          className="h-9 w-9 shrink-0 object-cover rounded-full"
        />
      </div>
    </header>
  );
}
