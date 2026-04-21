import { apiRequest } from "@/lib/api/client";
import type { ApiResponse } from "@/lib/api/application-api";

export interface FileModel {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
}

export interface EvaluationCriteria {
  id: string;
  name: string;
  description: string;
  file: FileModel;
  createdAt: string;
  updatedAt: string;
}

export function getAllCriteria() {
  return apiRequest<EvaluationCriteria[]>("/v1/criteria", {
    method: "GET",
  });
}

export function uploadCriteria(formData: FormData) {
  return apiRequest<ApiResponse<EvaluationCriteria>>("/v1/criteria/upload", {
    method: "POST",
    body: formData,
  });
}

export function deleteCriteria(id: string) {
  return apiRequest<ApiResponse>(`/v1/criteria/${id}`, {
    method: "DELETE",
  });
}
