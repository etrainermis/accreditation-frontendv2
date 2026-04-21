import { apiRequest } from "./client";

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T;
}

interface BackendFile {
  id?: string;
  name?: string;
  url?: string;
  path?: string;
  size?: number;
  type?: string;
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
  applicantName: string;
  tradeName: string;
  competenceName?: string;
  status: string;
  submissionDate: string;
  stage?: string;
  institution: {
    name: string;
    email?: string;
    website?: string;
  };
}

export interface EvaluatorDashboardStats {
  totalAssigned: number;
  pendingEvaluations: number;
  completedEvaluations: number;
}

export interface ApplicationDocument {
  id: string;
  name: string;
  url?: string;
  size?: number;
  type?: string;
  category: string;
}

export interface ApplicationDetails {
  id: string;
  applicationId: string;
  applicantName: string;
  institution: {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    poBox?: string;
    mission?: string;
    summary?: string;
    type?: string;
    address: {
      province?: string;
      district?: string;
      sector?: string;
      cell?: string;
      village?: string;
      addressLine?: string;
    };
    representatives: Array<{
      id?: string;
      firstName?: string;
      lastName?: string;
      email?: string;
      phoneNumber?: string;
      position?: string;
      gender?: string;
      type?: string;
    }>;
  };
  trade: {
    id?: string;
    name: string;
    requiredEducationLevel?: string;
    traineesNumber?: number;
    applicationStatus?: string;
  };
  competence?: {
    id?: string;
    name: string;
    reference?: string;
    moduleDuration?: string;
    moduleType?: string;
  };
  status: string;
  stage?: string;
  submissionDate?: string;
  technicalStaff: TechnicalStaff[];
  trainingEquipments: Equipment[];
  documents: ApplicationDocument[];
}

function unwrapApiResponse<T>(payload: ApiResponse<T> | T): T {
  if (payload && typeof payload === "object" && "data" in payload && "success" in payload) {
    return (payload as ApiResponse<T>).data;
  }

  return payload as T;
}

function readFileUrl(file?: BackendFile | null) {
  return file?.url ?? file?.path;
}

function normalizeInstitution(raw: any) {
  const location = raw?.locationAddress ?? {};

  return {
    id: raw?.id,
    name: raw?.institutionName ?? raw?.name ?? "Unknown institution",
    email: raw?.institutionEmail ?? raw?.email,
    phone: raw?.phoneNumber,
    poBox: raw?.poBox,
    mission: raw?.mission,
    summary: raw?.institutionSummary,
    type: raw?.institutionType,
    address: {
      province: location?.province,
      district: location?.district,
      sector: location?.sector,
      cell: location?.cell,
      village: location?.village,
      addressLine: location?.address_line,
    },
    representatives: Array.isArray(raw?.representatives)
      ? raw.representatives
      : [],
  };
}

function normalizeApplicationSummary(raw: any): ApplicationDTO {
  return {
    id: raw?.applicationId ?? raw?.id ?? "",
    applicantName:
      raw?.applicantName ??
      raw?.institution?.institutionName ??
      raw?.institutionName ??
      "Unknown applicant",
    tradeName: raw?.tradeName ?? raw?.trade?.tradeName ?? "Unspecified trade",
    competenceName: raw?.competenceName ?? raw?.competence?.name ?? raw?.competence?.competence,
    status: raw?.status ?? "PENDING",
    stage: raw?.stage,
    submissionDate: raw?.submissionDate ?? raw?.createdAt ?? "",
    institution: {
      name: raw?.institution?.institutionName ?? raw?.institutionName ?? raw?.applicantName ?? "Unknown institution",
      email: raw?.institution?.institutionEmail ?? raw?.institutionEmail,
      website: raw?.institution?.website,
    },
  };
}

function normalizeApplicationDetails(raw: any): ApplicationDetails {
  const institution = normalizeInstitution(raw?.institution ?? {});
  const trade = raw?.trade ?? {};
  const competence = raw?.competence;

  const documents: ApplicationDocument[] = [
    {
      id: trade?.curriculumContentFilePath?.id ?? "trade-curriculum",
      name: trade?.curriculumContentFilePath?.name ?? "Curriculum document",
      url: readFileUrl(trade?.curriculumContentFilePath),
      size: trade?.curriculumContentFilePath?.size,
      type: trade?.curriculumContentFilePath?.type,
      category: "Curriculum",
    },
    {
      id: institution?.id ? `${institution.id}-registration` : "registration-certificate",
      name: raw?.institution?.registrationCertificate?.name ?? "Registration certificate",
      url: readFileUrl(raw?.institution?.registrationCertificate),
      size: raw?.institution?.registrationCertificate?.size,
      type: raw?.institution?.registrationCertificate?.type,
      category: "Institution",
    },
  ].filter((item) => item.url || item.name);

  return {
    id: raw?.applicationId ?? raw?.id ?? "",
    applicationId: raw?.applicationId ?? raw?.id ?? "",
    applicantName:
      institution.name ||
      raw?.administrativeStaff?.[0]?.user?.firstName ||
      "Unknown applicant",
    institution,
    trade: {
      id: trade?.id ?? trade?.externalId,
      name: trade?.tradeName ?? "Unspecified trade",
      requiredEducationLevel: trade?.requiredEducationLevel,
      traineesNumber: trade?.traineesNumber,
      applicationStatus: trade?.applicationStatus,
    },
    competence: competence
      ? {
          id: competence?.id ?? competence?.externalId,
          name: competence?.name ?? competence?.competence ?? "Competence",
          reference: competence?.reference,
          moduleDuration: competence?.moduleDuration,
          moduleType: competence?.moduleType,
        }
      : undefined,
    status: trade?.applicationStatus ?? raw?.status ?? "PENDING",
    stage: raw?.stage,
    submissionDate: raw?.submissionDate,
    technicalStaff: Array.isArray(raw?.technicalStaff) ? raw.technicalStaff : [],
    trainingEquipments: Array.isArray(raw?.trainingEquipments) ? raw.trainingEquipments : [],
    documents,
  };
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
  const response = await apiRequest<ApiResponse<any[]>>("/v1/applications/my-applications", {
    method: "GET",
  });

  const items = unwrapApiResponse<any[]>(response) ?? [];

  return {
    ...response,
    data: items.map(normalizeApplicationSummary),
  };
}

/**
 * Fetch applicant's dashboard statistics
 */
export async function getApplicantDashboardStats(): Promise<ApiResponse<ApplicantDashboardStats>> {
  return apiRequest<ApiResponse<ApplicantDashboardStats>>("/v1/applications/my-applications/stats", {
    method: "GET",
  });
}
/**
 * Fetch full application details by ID
 */
export async function getApplicationDetailsById(applicationId: string): Promise<ApplicationDetails> {
  const response = await apiRequest<any>(`/v1/applications/${applicationId}`, {
    method: "GET",
  });

  return normalizeApplicationDetails(response);
}

/**
 * Fetch all applications (for admins/staff)
 */
export async function getAllApplications(): Promise<ApiResponse<ApplicationDTO[]>> {
  const response = await apiRequest<any[]>("/v1/applications/all", {
    method: "GET",
  });

  const items = unwrapApiResponse<any[]>(response) ?? [];

  return {
    success: true,
    message: "Applications fetched successfully",
    data: items.map(normalizeApplicationSummary),
  };
}

/**
 * Fetch dashboard statistics for the logged-in evaluator
 */
export async function getEvaluatorDashboardStats(): Promise<EvaluatorDashboardStats> {
  return apiRequest<EvaluatorDashboardStats>("/v1/applications/dashboard/stats", {
    method: "GET",
  });
}
