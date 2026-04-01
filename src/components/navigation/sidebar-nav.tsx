"use client";

import Link from "next/link";

import { usePortalNavigation } from "@/hooks/use-portal-navigation";
import { cn } from "@/lib/utils/cn";
import type { UserRole } from "@/types/auth";

export function SidebarNav({ role }: { role: UserRole }) {
  const items = usePortalNavigation(role);

  return (
    <nav className="space-y-2">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-start gap-3 rounded-3xl px-4 py-3 transition-colors",
              item.isActive ? "bg-white/10 text-white" : "text-white/80 hover:bg-white/5 hover:text-white",
            )}
          >
            <Icon className="mt-0.5 h-4 w-4 shrink-0" />
            <span className="space-y-1">
              <span className="block text-sm font-semibold">{item.title}</span>
              <span className="block text-xs leading-5 text-white/60">{item.description}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
