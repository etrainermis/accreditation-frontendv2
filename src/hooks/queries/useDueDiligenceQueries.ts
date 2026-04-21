import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  getPendingSchedules, 
  scheduleDueDiligence, 
  completeDueDiligence, 
  submitDueDiligenceReport,
  getDueDiligenceByAssignment,
  type DueDiligenceScheduleResponse,
} from "@/lib/api/evaluations/due-diligence-api";

export const DUE_DILIGENCE_QUERY_KEYS = {
  pendingSchedules: ["due-diligence-pending"] as const,
  byAssignment: (id: string) => ["due-diligence-assignment", id] as const,
};

export function useGetPendingSchedules() {
  return useQuery({
    queryKey: DUE_DILIGENCE_QUERY_KEYS.pendingSchedules,
    queryFn: () => getPendingSchedules(),
  });
}

export function useGetDueDiligenceByAssignment(assignmentId: string) {
  return useQuery({
    queryKey: DUE_DILIGENCE_QUERY_KEYS.byAssignment(assignmentId),
    queryFn: () => getDueDiligenceByAssignment(assignmentId),
    enabled: !!assignmentId,
  });
}

export function useScheduleDueDiligence() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: any) => scheduleDueDiligence(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DUE_DILIGENCE_QUERY_KEYS.pendingSchedules });
    },
  });
}

export function useCompleteDueDiligence() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => completeDueDiligence(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: DUE_DILIGENCE_QUERY_KEYS.pendingSchedules });
    },
  });
}

export function useSubmitDueDiligenceReport() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => submitDueDiligenceReport(formData),
    onSuccess: (_, variables) => {
      // If we have a schedule ID in variables, we might want to invalidate byAssignment
      queryClient.invalidateQueries({ queryKey: DUE_DILIGENCE_QUERY_KEYS.pendingSchedules });
    },
  });
}
