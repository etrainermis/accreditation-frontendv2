import {
  BadgeCheck,
  Bell,
  CalendarCheck,
  ClipboardCheck,
  FileSpreadsheet,
  House,
  ShieldAlert,
  User,
  UserCog,
  Users,
} from "lucide-react";

import type { PortalNavigation } from "@/types/navigation";
import type { UserRole } from "@/types/auth";

export const portalNavigation = {
  applicant: {
    role: "applicant",
    label: "Applicant Portal",
    shortLabel: "Applicant",
    basePath: "/applicant",
    items: [
      { title: "Dashboard", href: "/applicant/dashboard", description: "", icon: House, match: "exact" },
      { title: "Applications", href: "/applicant/applications", description: "", icon: FileSpreadsheet },
      { title: "Evaluations", href: "/applicant/evaluations", description: "", icon: CalendarCheck },
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
      { title: "Dashboard", href: "/evaluator/dashboard", description: "", icon: House, match: "exact" },
      { title: "Evaluations", href: "/evaluator/applications", description: "", icon: BadgeCheck },
      { title: "Profile", href: "/evaluator/profile", description: "", icon: User },
      { title: "Notifications", href: "/evaluator/notifications", description: "", icon: Bell },
    ],
  },
  "super-admin": {
    role: "super-admin",
    label: "Super Admin Portal",
    shortLabel: "Super Admin",
    basePath: "/super-admin",
    items: [
      { title: "Dashboard", href: "/super-admin/dashboard", description: "", icon: House, match: "exact" },
      { title: "Evaluations", href: "/super-admin/evaluations/applications", description: "", icon: BadgeCheck },
      { title: "Users", href: "/super-admin/users", description: "", icon: Users },
      { title: "Profile", href: "/super-admin/profile", description: "", icon: User },
      { title: "Notifications", href: "/super-admin/notifications", description: "", icon: Bell },
    ],
  },
  "curriculum-evaluator": {
    role: "curriculum-evaluator",
    label: "Curriculum Evaluator Portal",
    shortLabel: "Curriculum",
    basePath: "/curriculum-evaluator",
    items: [
      { title: "Dashboard", href: "/curriculum-evaluator/dashboard", description: "", icon: House, match: "exact" },
      { title: "Applications", href: "/curriculum-evaluator/applications", description: "", icon: FileSpreadsheet },
      { title: "Profile", href: "/curriculum-evaluator/profile", description: "", icon: User },
      { title: "Notifications", href: "/curriculum-evaluator/notifications", description: "", icon: Bell },
    ],
  },
  supervisor: {
    role: "supervisor",
    label: "Supervisor Portal",
    shortLabel: "Supervisor",
    basePath: "/supervisor",
    items: [
      { title: "Dashboard", href: "/supervisor/dashboard", description: "", icon: House, match: "exact" },
      { title: "Evaluations", href: "/supervisor/evaluations/applications", description: "", icon: BadgeCheck },
      { title: "Certificates", href: "/supervisor/certificates", description: "", icon: ClipboardCheck },
      { title: "Profile", href: "/supervisor/profile", description: "", icon: User },
      { title: "Notifications", href: "/supervisor/notifications", description: "", icon: Bell },
    ],
  },
} as unknown as Record<UserRole, PortalNavigation>;

// Map backend roles to portal navigation configurations
portalNavigation["SUPERADMIN"] = portalNavigation["super-admin"];
portalNavigation["ADMIN"] = portalNavigation["super-admin"];
portalNavigation["SUPERVISOR"] = portalNavigation["supervisor"];
portalNavigation["EVALUATOR"] = portalNavigation["evaluator"];
portalNavigation["CURRICULUM_EVALUATOR"] = portalNavigation["curriculum-evaluator"];
portalNavigation["RTB_STAFF_CURRICULUM"] = portalNavigation["curriculum-evaluator"];
portalNavigation["SCHOOL_MANAGER_PUBLIC"] = portalNavigation["applicant"];
portalNavigation["SCHOOL_MANAGER"] = portalNavigation["applicant"];
