import { apiRequest } from "@/lib/api/client";

export interface DueDiligenceSchedule {
  id: string;
  startDate: string;
  endDate: string;
  completed: boolean;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
  application?: {
    id: string;
    institution: {
      name: string;
      email?: string;
    };
    tradeName: string;
  };
  evaluator?: {
    id: string;
    name: string;
    email: string;
  };
  location?: string;
  status?: string;
}

export interface DueDiligenceScheduleResponse {
  id: string;
  assignmentId: string;
  applicationId: string;
  evaluatorName: string;
  startDate: string;
  endDate: string;
  completed: boolean;
  notes?: string;
}

export interface DueDiligenceReport {
  id: string;
  scheduleId: string;
  findings: string;
  comments?: string;
  photoEvidenceUrl?: string;
}

export function getPendingSchedules() {
  return apiRequest<DueDiligenceSchedule[]>("/v1/due-diligence/schedules/pending");
}

export function scheduleDueDiligence(payload: {
  applicationId?: string;
  evaluatorId?: string;
  assignmentId?: string;
  startDate: string;
  endDate: string;
  notes?: string;
}) {
  const path = payload.assignmentId
    ? "/v1/due-diligence/schedules/by-assignment"
    : "/v1/due-diligence/schedules";

  return apiRequest<DueDiligenceSchedule>(path, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function completeDueDiligence(id: string) {
  return apiRequest<DueDiligenceSchedule>(`/v1/due-diligence/schedules/${id}/complete`, {
    method: "PUT",
  });
}

export function submitDueDiligenceReport(formData: FormData) {
  return apiRequest<DueDiligenceReport>("/v1/due-diligence/reports", {
    method: "POST",
    body: formData,
  });
}

export function getDueDiligenceByAssignment(assignmentId: string) {
  return apiRequest<DueDiligenceScheduleResponse>(
    `/v1/due-diligence/by-assignment/${assignmentId}`
  );
}
