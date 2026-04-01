import type { ApiListResponse, EvaluatorProfile } from "@/types";

import { apiRequest } from "@/lib/api/client";

export function listEvaluators() {
  return apiRequest<ApiListResponse<EvaluatorProfile>>("/evaluators");
}
