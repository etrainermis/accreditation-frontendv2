import type { UserRole } from "@/types/auth";

export const portalLabels: Record<UserRole, string> = {
  applicant: "Applicant",
  evaluator: "Evaluator",
  "super-admin": "Super Admin",
  "curriculum-evaluator": "Curriculum Evaluator",
  supervisor: "Supervisor",
};

export const portalDescriptions: Record<UserRole, string> = {
  applicant: "Institution-facing workspace for profile management, applications, and certification outcomes.",
  evaluator: "Reviewers workspace for assignments, due diligence, paper evaluation, and findings.",
  "super-admin": "Operational workspace for evaluator management, assignment workflows, criteria, and oversight.",
  "curriculum-evaluator": "Specialized workspace for curriculum document review, verification, and accreditation feedback.",
  supervisor: "Read-only oversight workspace with certificate access granting authority.",
};
