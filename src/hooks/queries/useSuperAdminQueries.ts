import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAdminDashboardStats,
  getUsers,
  changeUserStatus,
  getAllInstitutions,
  handleApplicationDecision,
  assignEvaluator,
  getEvaluatorAssignments,
} from "@/lib/api/super-admin-api";
import {
  ADMIN_DASHBOARD_STATS_SEED,
  USERS_SEED,
  INSTITUTIONS_SEED,
  EVALUATOR_ASSIGNMENTS_SEED,
} from "@/lib/mocks/super-admin-seeds";

export const SUPER_ADMIN_QUERY_KEYS = {
  stats: ["admin-dashboard-stats"] as const,
  users: ["admin-users"] as const,
  institutions: ["admin-institutions"] as const,
  assignments: ["evaluator-assignments"] as const,
};

export function useAdminDashboardStats() {
  return useQuery({
    queryKey: SUPER_ADMIN_QUERY_KEYS.stats,
    queryFn: () => getAdminDashboardStats(),
    initialData: { success: true, message: "Seeded stats", data: ADMIN_DASHBOARD_STATS_SEED },
  });
}

export function useGetUsers() {
  return useQuery({
    queryKey: SUPER_ADMIN_QUERY_KEYS.users,
    queryFn: () => getUsers(),
    initialData: { success: true, message: "Seeded users", data: USERS_SEED },
  });
}

export function useChangeUserStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, status }: { userId: string; status: string }) =>
      changeUserStatus(userId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SUPER_ADMIN_QUERY_KEYS.users });
    },
  });
}

export function useGetAllInstitutions() {
  return useQuery({
    queryKey: SUPER_ADMIN_QUERY_KEYS.institutions,
    queryFn: () => getAllInstitutions(),
    initialData: { success: true, message: "Seeded institutions", data: INSTITUTIONS_SEED },
  });
}

export function useApplicationDecision() {
  return useMutation({
    mutationFn: ({ applicationId, decision, comment }: { applicationId: string; decision: string; comment: string }) =>
      handleApplicationDecision(applicationId, { decision, comment }),
  });
}

export function useAssignEvaluator() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { applicationId: string; evaluatorId: string }) =>
      assignEvaluator(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SUPER_ADMIN_QUERY_KEYS.assignments });
    },
  });
}

export function useGetEvaluatorAssignments() {
  return useQuery({
    queryKey: SUPER_ADMIN_QUERY_KEYS.assignments,
    queryFn: () => getEvaluatorAssignments(),
    initialData: { success: true, message: "Seeded assignments", data: EVALUATOR_ASSIGNMENTS_SEED },
  });
}
