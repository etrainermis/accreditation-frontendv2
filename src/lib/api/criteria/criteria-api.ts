import type { ApiListResponse, EvaluationCriteriaDocument } from "@/types";

import { apiRequest } from "@/lib/api/client";

export function listCriteriaDocuments() {
  return apiRequest<ApiListResponse<EvaluationCriteriaDocument>>("/criteria");
}
