"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, Settings, LifeBuoy } from "lucide-react";

import { usePortalNavigation } from "@/hooks/use-portal-navigation";
import { cn } from "@/lib/utils/cn";
import { portalNavigation } from "@/lib/config/navigation";
import type { UserRole } from "@/types/auth";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function SidebarNav({ role, onCloseMobile }: { role: UserRole; onCloseMobile?: () => void }) {
  const items = usePortalNavigation(role);
  const config = portalNavigation[role];

  return (
    <div className="flex h-full flex-col">
      {/* ── Logo / Brand ── */}
      <div className="mb-8 flex items-center gap-3 px-2">
        <Image
          src="/images/branding/rtb-logo.png"
          alt="RTB Logo"
          width={36}
          height={36}
          className="rounded-xl"
        />
        <div>
          <p className="text-sm font-bold text-[var(--app-text)]">RTB Accreditation</p>
          <p className="text-xs font-semibold text-[var(--primary)]">{config.shortLabel} Portal</p>
        </div>
      </div>

      {/* ── Primary navigation ── */}
      <nav className="flex flex-col gap-0.5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href as never}
              onClick={() => onCloseMobile?.()}
              className={cn(
                "flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm transition-colors",
                item.isActive
                  ? "bg-[#F9FAFB] text-[var(--primary)]"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-800",
              )}
            >
              <Icon 
                className={cn(item.isActive ? "text-[var(--primary)]" : "text-[#84888C]")} 
                strokeWidth={1.5} 
                size={20}
              />
              <span className={cn(item.isActive ? "text-[var(--primary)] font-semibold" : "text-[#353E49]")}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-1 pt-4">
        <button 
          type="button" 
          onClick={() => onCloseMobile?.()}
          className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-800 text-left"
        >
          <LifeBuoy className="text-[#667085]" strokeWidth={1.5} size={20} />
          <span className="text-[#344054]">Support</span>
        </button>
        <button 
          type="button" 
          onClick={() => onCloseMobile?.()}
          className="flex w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-500 hover:bg-slate-50 hover:text-slate-800 text-left"
        >
          <Settings className="text-[#667085]" strokeWidth={1.5} size={20} />
          <span className="text-[#344054]">Settings</span>
        </button>

        <div className="sticky bottom-0 mt-4 bg-white border-t border-[#EAECF0] items-center gap-3 py-4 flex px-1">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="text-xs font-semibold text-slate-600">OR</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-800 truncate">Olivia Rhye</p>
            <p className="text-xs text-[#475467] truncate">olivia@company.com</p>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                type="button" 
                className="text-[#475467] cursor-pointer hover:text-slate-900 transition-colors"
                aria-label="Log out"
              >
                <LogOut className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Log out</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
