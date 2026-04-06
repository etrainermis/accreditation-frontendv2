"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { portalNavigation } from "@/lib/config/navigation";
import type { UserRole } from "@/types/auth";

export function usePortalNavigation(role: UserRole) {
  const pathname = usePathname();

  return useMemo(() => {
    const config = portalNavigation[role];

    return config.items.map((item) => ({
      ...item,
      isActive: item.activeMatchers?.some((matcher) => pathname === matcher || pathname.startsWith(`${matcher}/`))
        ?? (item.match === "exact"
          ? pathname === item.href
          : pathname === item.href || pathname.startsWith(`${item.href}/`)),
    }));
  }, [pathname, role]);
}
