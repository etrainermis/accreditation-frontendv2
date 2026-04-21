import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createInstitution,
  getMyInstitution,
  createAdministrativeProfile,
  getMyAdministrativeProfile,
} from "@/lib/api/onboarding-api";

export const ONBOARDING_QUERY_KEYS = {
  myInstitution: ["my-institution"] as const,
  myAdministrativeProfile: ["my-administrative-profile"] as const,
};

export function useGetMyInstitution() {
  return useQuery({
    queryKey: ONBOARDING_QUERY_KEYS.myInstitution,
    queryFn: () => getMyInstitution(),
    // We only want to run this if we suspect the user is logged in, but the 
    // component using this checks for token first.
  });
}

export function useGetMyAdministrativeProfile() {
  return useQuery({
    queryKey: ONBOARDING_QUERY_KEYS.myAdministrativeProfile,
    queryFn: () => getMyAdministrativeProfile(),
  });
}

export function useCreateInstitution() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createInstitution(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ONBOARDING_QUERY_KEYS.myInstitution });
    },
  });
}

export function useCreateAdministrativeProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) => createAdministrativeProfile(formData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ONBOARDING_QUERY_KEYS.myAdministrativeProfile });
    },
  });
}
