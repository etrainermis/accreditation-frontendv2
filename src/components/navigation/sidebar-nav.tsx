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
          <p className="text-xs  text-[var(--primary)]">{config.shortLabel} Portal</p>
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
                "flex items-center gap-3 rounded-sm px-3 py-3 text-sm transition-colors",
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
              <span className={cn(item.isActive ? "text-[var(--primary)]" : "text-[#353E49]")}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
