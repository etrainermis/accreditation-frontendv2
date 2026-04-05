import type { LucideIcon } from "lucide-react";

import type { UserRole } from "@/types/auth";

export interface NavigationItem {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  match?: "exact" | "prefix";
  activeMatchers?: string[];
}

export interface PortalNavigation {
  role: UserRole;
  label: string;
  shortLabel: string;
  basePath: string;
  items: NavigationItem[];
}
