import type { ApiSingleResponse, AuthSession } from "@/types";

import { apiRequest } from "@/lib/api/client";

import { SessionUser } from "@/types/auth";

export async function getSessionQuery(): Promise<AuthSession> {
  try {
    const response = await apiRequest<ApiSingleResponse<SessionUser>>("/v1/users/me");
    return {
      user: response.data,
    };
  } catch (error) {
    // If session check fails, return a null user to trigger logout in AuthGuard
    return { user: null };
  }
}

export function signInWithPassword(payload: { email: string; password: string }) {
  return apiRequest<AuthSession>("/v1/auth/signin", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
