import type { UserRole } from "@/types/auth";

export const portalLabels: Record<UserRole, string> = {
  applicant: "Applicant",
  evaluator: "Evaluator",
  "super-admin": "Super Admin",
  supervisor: "Supervisor",
};

export const portalDescriptions: Record<UserRole, string> = {
  applicant: "Institution-facing workspace for profile management, applications, and certification outcomes.",
  evaluator: "Reviewers workspace for assignments, due diligence, paper evaluation, and findings.",
  "super-admin": "Operational workspace for evaluator management, assignment workflows, criteria, and oversight.",
  supervisor: "Read-only oversight workspace with certificate access granting authority.",
};
