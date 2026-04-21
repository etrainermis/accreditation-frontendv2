import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { 
  getEvaluatorAssignments, 
  getEvaluatorStats, 
  submitEvaluationDecision 
} from "@/lib/api/evaluations/evaluations-api";
import { EvaluationDecision } from "@/types";

export const EVALUATION_QUERY_KEYS = {
  assignments: (evaluatorId: string) => ["evaluator-assignments", evaluatorId] as const,
  stats: ["evaluator-stats"] as const,
};

export function useEvaluatorAssignments(evaluatorId: string) {
  return useQuery({
    queryKey: EVALUATION_QUERY_KEYS.assignments(evaluatorId),
    queryFn: () => getEvaluatorAssignments(evaluatorId),
    enabled: !!evaluatorId,
  });
}

export function useEvaluatorStats() {
  return useQuery({
    queryKey: EVALUATION_QUERY_KEYS.stats,
    queryFn: () => getEvaluatorStats(),
  });
}

export function useSubmitEvaluationDecision() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: {
      assignmentId: string;
      decision: EvaluationDecision;
      comments: string;
    }) => submitEvaluationDecision(payload),
    onSuccess: (_, variables) => {
      // Invalidate assignments to refresh the list
      // Note: We might not have the evaluatorId here, but we can invalidate all assignments
      queryClient.invalidateQueries({ queryKey: ["evaluator-assignments"] });
      queryClient.invalidateQueries({ queryKey: EVALUATION_QUERY_KEYS.stats });
    },
  });
}
