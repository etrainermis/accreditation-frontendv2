import {
  BadgeCheck,
  Bell,
  CalendarCheck,
  ClipboardCheck,
  FileSpreadsheet,
  Home,
  ShieldAlert,
  User,
  UserCog,
  Users,
} from "lucide-react";

import type { PortalNavigation } from "@/types/navigation";

export const portalNavigation: Record<PortalNavigation["role"], PortalNavigation> = {
  applicant: {
    role: "applicant",
    label: "Applicant Portal",
    shortLabel: "Applicant",
    basePath: "/applicant",
    items: [
      { title: "Dashboard", href: "/applicant/dashboard", description: "", icon: Home, match: "exact" },
      { title: "Applications", href: "/applicant/applications", description: "", icon: Users },
      { title: "Evaluations", href: "/applicant/certificates", description: "", icon: CalendarCheck },
      { title: "Profile", href: "/applicant/profile", description: "", icon: User },
      { title: "Notifications", href: "/applicant/notifications", description: "", icon: Bell },
    ],
  },
  evaluator: {
    role: "evaluator",
    label: "Evaluator Portal",
    shortLabel: "Evaluator",
    basePath: "/evaluator",
    items: [
      { title: "Dashboard", href: "/evaluator/dashboard", description: "", icon: Home, match: "exact" },
      { title: "Evaluations", href: "/evaluator/assignments", description: "", icon: ClipboardCheck },
      { title: "Profile", href: "/evaluator/due-diligence", description: "", icon: User },
      { title: "Notifications", href: "/evaluator/notifications", description: "", icon: Bell },
    ],
  },
  "super-admin": {
    role: "super-admin",
    label: "Super Admin Portal",
    shortLabel: "Super Admin",
    basePath: "/super-admin",
    items: [
      { title: "Dashboard", href: "/super-admin/dashboard", description: "", icon: Home, match: "exact" },
      { title: "Evaluations", href: "/super-admin/evaluations", description: "", icon: BadgeCheck },
    
      { title: "Profile", href: "/super-admin/profile", description: "", icon: User },
      { title: "Notifications", href: "/super-admin/notifications", description: "", icon: Bell },
    ],
  },
};
