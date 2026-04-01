import type { ApiListResponse, EvaluationFinding } from "@/types";

import { apiRequest } from "@/lib/api/client";

export function listEvaluationFindings(applicationId?: string) {
  return apiRequest<ApiListResponse<EvaluationFinding>>("/evaluations/findings", {
    query: { applicationId },
  });
}
