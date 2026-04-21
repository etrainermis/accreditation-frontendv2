import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllCriteria, uploadCriteria, deleteCriteria } from "@/lib/api/evaluations/criteria-api";

export const CRITERIA_QUERY_KEYS = {
  all: ["evaluation-criteria"] as const,
};

export function useGetAllCriteria() {
  return useQuery({
    queryKey: CRITERIA_QUERY_KEYS.all,
    queryFn: () => getAllCriteria(),
  });
}

export function useUploadCriteria() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => uploadCriteria(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CRITERIA_QUERY_KEYS.all });
    },
  });
}

export function useDeleteCriteria() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCriteria(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: CRITERIA_QUERY_KEYS.all });
    },
  });
}
