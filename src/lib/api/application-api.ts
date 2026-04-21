import { apiRequest } from "./client";

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

export interface Trade {
  id: string;
  tradeName: string;
  tradeCode?: string;
  description?: string;
}

export interface Competence {
  id: string;
  name: string;
  reference?: string;
  moduleDuration?: number;
}

export interface Equipment {
  id: string;
  name: string;
  number: number;
  description?: string;
  equipmentOwnershipUrl?: string;
}

export interface TechnicalStaff {
  id: string;
  qualification: string;
  position: string;
  numberStaff: number;
  availabilityStatus: string;
  specialization?: string;
}

export interface ApplicantDashboardStats {
  totalApplications: number;
  pendingApplications: number;
  approvedApplications: number;
  rejectedApplications: number;
}

export interface ApplicationDTO {
  id: string;
  applicantName: string | null;
  tradeName: string;
  competenceName: string;
  status: string;
  submissionDate: string;
}


/**
 * Fetch all available RTB-approved trades
 */
export async function getAllTrades(): Promise<ApiResponse<Trade[]>> {
  return apiRequest<ApiResponse<Trade[]>>("/v1/trades/all", {
    method: "GET",
  });
}

/**
 * Fetch competencies related to a specific trade
 */
export async function getCompetenciesByTrade(tradeId: string): Promise<ApiResponse<Competence[]>> {
  return apiRequest<ApiResponse<Competence[]>>(`/v1/competence/all/${tradeId}`, {
    method: "GET",
  });
}

/**
 * Create a training equipment entry
 */
export async function createTrainingEquipment(formData: FormData): Promise<ApiResponse<Equipment[]>> {
  return apiRequest<ApiResponse<Equipment[]>>("/v1/equipments/create", {
    method: "POST",
    body: formData,
  });
}

/**
 * Add technical staff entry
 */
export async function addTechnicalStaff(formData: FormData): Promise<ApiResponse<TechnicalStaff>> {
  return apiRequest<ApiResponse<TechnicalStaff>>("/v1/staff/add", {
    method: "POST",
    body: formData,
  });
}

/**
 * Final submission of the short course application
 */
export async function createApplication(formData: FormData): Promise<ApiResponse> {
  return apiRequest<ApiResponse>("/v1/applications", {
    method: "POST",
    body: formData,
  });
}

/**
 * Fetch applicant's own applications
 */
export async function getMyApplications(): Promise<ApiResponse<ApplicationDTO[]>> {
  return apiRequest<ApiResponse<ApplicationDTO[]>>("/v1/applications/my-applications", {
    method: "GET",
  });
}

/**
 * Fetch applicant's dashboard statistics
 */
export async function getApplicantDashboardStats(): Promise<ApiResponse<ApplicantDashboardStats>> {
  return apiRequest<ApiResponse<ApplicantDashboardStats>>("/v1/applications/my-applications/stats", {
    method: "GET",
  });
}
