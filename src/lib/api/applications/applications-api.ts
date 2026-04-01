import type { AccreditationApplication, ApiListResponse, ApiSingleResponse } from "@/types";

import { apiRequest } from "@/lib/api/client";

export function listApplications() {
  return apiRequest<ApiListResponse<AccreditationApplication>>("/applications");
}

export function getApplicationById(id: string) {
  return apiRequest<ApiSingleResponse<AccreditationApplication>>(`/applications/${id}`);
}
