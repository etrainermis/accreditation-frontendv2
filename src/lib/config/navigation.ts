import {
  Bell,
  ClipboardCheck,
  FileCheck2,
  FileSpreadsheet,
  Gauge,
  ShieldAlert,
  User,
  UserCog,
} from "lucide-react";

import type { PortalNavigation } from "@/types/navigation";

export const portalNavigation: Record<PortalNavigation["role"], PortalNavigation> = {
  applicant: {
    role: "applicant",
    label: "Applicant Portal",
    shortLabel: "Applicant",
    basePath: "/applicant",
    items: [
      { title: "Dashboard", href: "/applicant/dashboard", description: "", icon: Gauge, match: "exact" },
      { title: "Applications", href: "/applicant/applications", description: "", icon: FileSpreadsheet },
      { title: "Evaluations", href: "/applicant/certificates", description: "", icon: FileCheck2 },
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
      { title: "Dashboard", href: "/evaluator/dashboard", description: "", icon: Gauge, match: "exact" },
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
      { title: "Dashboard", href: "/super-admin/dashboard", description: "", icon: Gauge, match: "exact" },
      { title: "Evaluators", href: "/super-admin/evaluators", description: "", icon: UserCog },
      { title: "Assignments", href: "/super-admin/assignments", description: "", icon: ClipboardCheck },
      { title: "Criteria", href: "/super-admin/criteria", description: "", icon: ShieldAlert },
      { title: "Notifications", href: "/super-admin/notifications", description: "", icon: Bell },
    ],
  },
};
