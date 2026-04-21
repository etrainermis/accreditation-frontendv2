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

export type EvaluationStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED" | "REJECTED" | "APPROVED";

export interface EvaluatorAssignment {
  id: string;
  application: {
    id: string;
    institution: {
      name: string;
      email?: string;
      website?: string;
    };
    applicantName?: string;
    type: string;
    tradeName?: string;
    status: string;
  };
  assignedAt: string;
  dueDate?: string;
  status: EvaluationStatus;
  decision: EvaluationDecision;
  stage: string;
  role: string;
  active?: boolean;
  officialComments?: string;
}

export type EvaluationDecision = "APPROVE" | "REJECT" | "PENDING";
