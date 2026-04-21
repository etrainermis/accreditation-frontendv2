import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllTrades,
  getCompetenciesByTrade,
  createTrainingEquipment,
  addTechnicalStaff,
  createApplication,
  getMyApplications,
  getApplicantDashboardStats,
  getApplicationDetailsById,
  getEvaluatorDashboardStats,
  getAllApplications,
} from "@/lib/api/application-api";

export const APPLICATION_QUERY_KEYS = {
  trades: ["trades"] as const,
  competencies: (tradeId: string) => ["competencies", tradeId] as const,
  myApplications: ["my-applications"] as const,
  allApplications: ["all-applications"] as const,
  dashboardStats: ["applicant-dashboard-stats"] as const,
  evaluatorStats: ["evaluator-dashboard-stats"] as const,
  applicationDetails: (id: string) => ["application-details", id] as const,
};

export function useGetAllTrades() {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.trades,
    queryFn: () => getAllTrades(),
  });
}

export function useGetCompetenciesByTrade(tradeId: string | undefined) {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.competencies(tradeId!),
    queryFn: () => getCompetenciesByTrade(tradeId!),
    enabled: !!tradeId,
  });
}

export function useGetMyApplications() {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.myApplications,
    queryFn: () => getMyApplications(),
  });
}

export function useGetApplicantDashboardStats() {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.dashboardStats,
    queryFn: () => getApplicantDashboardStats(),
  });
}

export function useCreateTrainingEquipment() {
  return useMutation({
    mutationFn: (formData: FormData) => createTrainingEquipment(formData),
  });
}

export function useAddTechnicalStaff() {
  return useMutation({
    mutationFn: (formData: FormData) => addTechnicalStaff(formData),
  });
}

export function useCreateApplication() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createApplication(formData),
    onSuccess: () => {
      // Invalidate relevant queries to trigger refetch
      queryClient.invalidateQueries({ queryKey: APPLICATION_QUERY_KEYS.myApplications });
      queryClient.invalidateQueries({ queryKey: APPLICATION_QUERY_KEYS.dashboardStats });
    },
  });
}
export function useGetApplicationDetails(applicationId: string | undefined) {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.applicationDetails(applicationId!),
    queryFn: () => getApplicationDetailsById(applicationId!),
    enabled: !!applicationId,
  });
}

export function useGetEvaluatorDashboardStats() {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.evaluatorStats,
    queryFn: () => getEvaluatorDashboardStats(),
  });
}

export function useGetAllApplications() {
  return useQuery({
    queryKey: APPLICATION_QUERY_KEYS.allApplications,
    queryFn: () => getAllApplications(),
  });
}
