import type { UserRole } from "@/types/auth";

export const portalLabels: Record<UserRole, string> = {
  applicant: "Applicant",
  evaluator: "Evaluator",
  "super-admin": "Super Admin",
  "curriculum-evaluator": "Curriculum Evaluator",
  supervisor: "Supervisor",
  SUPERADMIN: "Super Admin",
  ADMIN: "Super Admin",
  SUPERVISOR: "Supervisor",
  EVALUATOR: "Evaluator",
  CURRICULUM_EVALUATOR: "Curriculum Evaluator",
  RTB_STAFF_CURRICULUM: "Curriculum Evaluator",
  SCHOOL_MANAGER_PUBLIC: "Applicant",
  SCHOOL_MANAGER: "Applicant",
};

export const portalDescriptions: Record<UserRole, string> = {
  applicant: "Institution-facing workspace for profile management, applications, and certification outcomes.",
  evaluator: "Reviewers workspace for assignments, due diligence, paper evaluation, and findings.",
  "super-admin": "Operational workspace for evaluator management, assignment workflows, criteria, and oversight.",
  "curriculum-evaluator": "Specialized workspace for curriculum document review, verification, and accreditation feedback.",
  supervisor: "Read-only oversight workspace with certificate access granting authority.",
  SUPERADMIN: "Operational workspace for evaluator management, assignment workflows, criteria, and oversight.",
  ADMIN: "Operational workspace for evaluator management, assignment workflows, criteria, and oversight.",
  SUPERVISOR: "Read-only oversight workspace with certificate access granting authority.",
  EVALUATOR: "Reviewers workspace for assignments, due diligence, paper evaluation, and findings.",
  CURRICULUM_EVALUATOR: "Specialized workspace for curriculum document review, verification, and accreditation feedback.",
  RTB_STAFF_CURRICULUM: "Specialized workspace for curriculum document review, verification, and accreditation feedback.",
  SCHOOL_MANAGER_PUBLIC: "Institution-facing workspace for profile management, applications, and certification outcomes.",
  SCHOOL_MANAGER: "Institution-facing workspace for profile management, applications, and certification outcomes.",
};
