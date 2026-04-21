import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAllTrades,
  getCompetenciesByTrade,
  createTrainingEquipment,
  addTechnicalStaff,
  createApplication,
  getMyApplications,
  getApplicantDashboardStats,
} from "@/lib/api/application-api";

export const APPLICATION_QUERY_KEYS = {
  trades: ["trades"] as const,
  competencies: (tradeId: string) => ["competencies", tradeId] as const,
  myApplications: ["my-applications"] as const,
  dashboardStats: ["applicant-dashboard-stats"] as const,
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
