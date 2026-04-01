import {
  ClipboardCheck,
  FileCheck2,
  FileSpreadsheet,
  Gauge,
  ShieldAlert,
  UserCog,
  UsersRound,
} from "lucide-react";

import type { PortalNavigation } from "@/types/navigation";

export const portalNavigation: Record<PortalNavigation["role"], PortalNavigation> = {
  applicant: {
    role: "applicant",
    label: "Applicant Portal",
    shortLabel: "Applicant",
    basePath: "/applicant",
    items: [
      {
        title: "Dashboard",
        href: "/applicant/dashboard",
        description: "High-level view of application progress and certification outcomes.",
        icon: Gauge,
        match: "exact",
      },
      {
        title: "Institution Profile",
        href: "/applicant/profile",
        description: "Manage the institution profile and primary contact details.",
        icon: UsersRound,
      },
      {
        title: "Applications",
        href: "/applicant/applications",
        description: "Create, review, and track accreditation applications.",
        icon: FileSpreadsheet,
      },
      {
        title: "Certificates",
        href: "/applicant/certificates",
        description: "View accreditation outcomes and downloadable certificates.",
        icon: FileCheck2,
      },
    ],
  },
  evaluator: {
    role: "evaluator",
    label: "Evaluator Portal",
    shortLabel: "Evaluator",
    basePath: "/evaluator",
    items: [
      {
        title: "Dashboard",
        href: "/evaluator/dashboard",
        description: "Monitor assigned workload, deadlines, and review activity.",
        icon: Gauge,
        match: "exact",
      },
      {
        title: "Assignments",
        href: "/evaluator/assignments",
        description: "See assigned applications awaiting evaluator action.",
        icon: ClipboardCheck,
      },
      {
        title: "Application Reviews",
        href: "/evaluator/applications/sample-application",
        description: "Inspect application and curriculum details per assigned record.",
        icon: FileSpreadsheet,
      },
      {
        title: "Due Diligence",
        href: "/evaluator/due-diligence",
        description: "Capture due diligence observations and follow-up notes.",
        icon: ShieldAlert,
      },
      {
        title: "Paper Evaluation",
        href: "/evaluator/paper-evaluation",
        description: "Record evaluation findings and scoring-ready comments.",
        icon: FileCheck2,
      },
    ],
  },
  "super-admin": {
    role: "super-admin",
    label: "Super Admin Portal",
    shortLabel: "Super Admin",
    basePath: "/super-admin",
    items: [
      {
        title: "Dashboard",
        href: "/super-admin/dashboard",
        description: "Track operational progress, pipeline status, and activity.",
        icon: Gauge,
        match: "exact",
      },
      {
        title: "Evaluators",
        href: "/super-admin/evaluators",
        description: "Create and manage evaluator records and assignments.",
        icon: UserCog,
      },
      {
        title: "Assignments",
        href: "/super-admin/assignments",
        description: "Assign evaluators to applications and review workloads.",
        icon: ClipboardCheck,
      },
      {
        title: "Criteria",
        href: "/super-admin/criteria",
        description: "Upload and version evaluation criteria documents.",
        icon: FileCheck2,
      },
      {
        title: "Application Oversight",
        href: "/super-admin/applications/sample-application",
        description: "Inspect specific application progress and audit activity.",
        icon: FileSpreadsheet,
      },
    ],
  },
};
