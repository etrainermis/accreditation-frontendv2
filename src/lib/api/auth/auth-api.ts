import type { ApiSingleResponse, AuthSession } from "@/types";

import { apiRequest } from "@/lib/api/client";

export function getSessionQuery() {
  return apiRequest<ApiSingleResponse<AuthSession>>("/auth/session");
}

export function signInWithPassword(payload: { email: string; password: string }) {
  return apiRequest<ApiSingleResponse<AuthSession>>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
