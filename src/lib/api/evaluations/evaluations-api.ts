import type { EvaluationDecision, EvaluatorAssignment } from "@/types";
import { apiRequest } from "@/lib/api/client";

export interface EvaluatorStats {
  totalAssigned: number;
  pendingEvaluations: number;
  completedEvaluations: number;
}

function normalizeAssignmentStatus(raw: any): EvaluatorAssignment["status"] {
  const value = String(raw?.status ?? raw?.decision ?? "").toUpperCase();

  if (value === "APPROVE" || value === "APPROVED" || value === "COMPLETED") {
    return "COMPLETED";
  }

  if (value === "REJECT" || value === "REJECTED") {
    return "REJECTED";
  }

  if (value === "IN_PROGRESS" || value === "UNDER_REVIEW") {
    return "IN_PROGRESS";
  }

  return "PENDING";
}

function normalizeAssignment(raw: any): EvaluatorAssignment {
  const application = raw?.application ?? {};
  const institution = application?.institution ?? raw?.institution ?? {};

  return {
    id: raw?.id ?? raw?.assignmentId ?? "",
    application: {
      id: application?.id ?? raw?.applicationId ?? raw?.id ?? "",
      institution: {
        name: institution?.name ?? institution?.institutionName ?? raw?.institutionName ?? "Unknown institution",
        email: institution?.email ?? institution?.institutionEmail,
      },
      applicantName:
        application?.applicantName ??
        institution?.institutionName ??
        raw?.institutionName ??
        "Unknown applicant",
      type: application?.type ?? application?.tradeName ?? raw?.tradeName ?? "Accreditation",
      tradeName: application?.tradeName ?? raw?.tradeName ?? "Unspecified trade",
      status: application?.status ?? raw?.stage ?? "PENDING",
    },
    assignedAt: raw?.assignedDate ?? raw?.createdAt ?? "",
    dueDate: raw?.dueDate,
    status: normalizeAssignmentStatus(raw),
    decision: (raw?.decision ?? "PENDING") as EvaluatorAssignment["decision"],
    stage: raw?.stage ?? application?.stage ?? "INITIAL_REVIEW",
    role: raw?.evaluatorRole ?? "SUPPORTING_EVALUATOR",
    active: raw?.active ?? true,
    officialComments: raw?.officialComments,
  };
}

export async function getEvaluatorAssignments(evaluatorId: string) {
  const response = await apiRequest<any[]>(`/v1/evaluators/assignments/${evaluatorId}`);
  return Array.isArray(response) ? response.map(normalizeAssignment) : [];
}

export async function getEvaluatorStats() {
  try {
    return await apiRequest<EvaluatorStats>("/v1/applications/dashboard/stats");
  } catch (error) {
    // Keep evaluator screens usable even if the backend endpoint is unavailable.
    return {
      totalAssigned: 0,
      pendingEvaluations: 0,
      completedEvaluations: 0,
    };
  }
}

export function submitEvaluationDecision(payload: {
  assignmentId: string;
  decision: EvaluationDecision;
  comments: string;
}) {
  return apiRequest("/v1/evaluations/submit-decision", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
