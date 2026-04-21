import { apiRequest } from "./client";
import type { ApiResponse } from "./application-api";

export interface AdminDashboardStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
  totalInstitutions: number;
  totalUsers: number;
  activeEvaluators: number;
}

export interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
}

export interface InstitutionDTO {
  id: string;
  name: string;
  code: string;
  location: string;
  status: string;
}

export interface EvaluatorAssignmentDTO {
  id: string;
  applicationId: string;
  evaluatorName: string;
  assignedAt: string;
  status: string;
}

/**
 * Super Admin API functions
 */

export async function getAdminDashboardStats(): Promise<ApiResponse<AdminDashboardStats>> {
  return apiRequest<ApiResponse<AdminDashboardStats>>("/v1/dashboard/admin", {
    method: "GET",
  });
}

export async function getUsers(): Promise<ApiResponse<UserDTO[]>> {
  return apiRequest<ApiResponse<UserDTO[]>>("/v1/users", {
    method: "GET",
  });
}

export async function changeUserStatus(userId: string, status: string): Promise<ApiResponse> {
  return apiRequest<ApiResponse>(`/v1/users/${userId}/change-status`, {
    method: "PUT",
    body: JSON.stringify({ status }),
  });
}

export async function getAllInstitutions(): Promise<ApiResponse<InstitutionDTO[]>> {
  return apiRequest<ApiResponse<InstitutionDTO[]>>("/v1/institutions/all", {
    method: "GET",
  });
}

export async function handleApplicationDecision(applicationId: string, decision: { decision: string; comment: string }): Promise<ApiResponse> {
  return apiRequest<ApiResponse>(`/approval/${applicationId}/decision`, {
    method: "POST",
    body: JSON.stringify(decision),
  });
}

export async function assignEvaluator(payload: { applicationId: string; evaluatorId: string }): Promise<ApiResponse> {
  return apiRequest<ApiResponse>("/v1/evaluators/assign", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getEvaluatorAssignments(): Promise<ApiResponse<EvaluatorAssignmentDTO[]>> {
  return apiRequest<ApiResponse<EvaluatorAssignmentDTO[]>>("/v1/evaluators/assignments", {
    method: "GET",
  });
}
