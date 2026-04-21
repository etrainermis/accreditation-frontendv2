import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signInWithPassword, getSessionQuery } from "@/lib/api/auth/auth-api";
import type { AuthSession } from "@/types";

export const AUTH_QUERY_KEYS = {
  session: ["auth-session"] as const,
};

export function useSignInWithPassword() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: { email: string; password: string }) => signInWithPassword(payload),
    onSuccess: (data: AuthSession) => {
      // Potentially set the session into the cache if desired
      queryClient.setQueryData(AUTH_QUERY_KEYS.session, data);
    },
  });
}

export function useGetAuthSession() {
  return useQuery({
    queryKey: AUTH_QUERY_KEYS.session,
    queryFn: () => getSessionQuery(),
  });
}
