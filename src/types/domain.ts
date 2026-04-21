import type { UserRole } from "@/types/auth";

export interface InstitutionProfile {
  id: string;
  institutionName: string;
  contactEmail: string;
  phoneNumber?: string;
  address?: string;
}

export interface AccreditationApplication {
  id: string;
  institutionName: string;
  status: "draft" | "submitted" | "under-review" | "approved" | "declined";
  programName: string;
  submittedAt?: string;
  assignedEvaluatorIds?: string[];
}

export interface EvaluationFinding {
  id: string;
  applicationId: string;
  category: "due-diligence" | "paper-evaluation";
  summary: string;
  severity: "info" | "warning" | "critical";
}

export interface EvaluatorProfile {
  id: string;
  fullName: string;
  email: string;
  specializations: string[];
  active: boolean;
}

export interface EvaluationCriteriaDocument {
  id: string;
  title: string;
  version: string;
  uploadedAt: string;
}

export interface ActivityFeedItem {
  id: string;
  actor: string;
  action: string;
  occurredAt: string;
  role: UserRole;
}
