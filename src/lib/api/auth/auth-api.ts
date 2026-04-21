import type { ApiSingleResponse, AuthSession } from "@/types";

import { apiRequest } from "@/lib/api/client";

export function getSessionQuery() {
  return apiRequest<AuthSession>("/v1/auth/session");
}

export function signInWithPassword(payload: { email: string; password: string }) {
  return apiRequest<AuthSession>("/v1/auth/signin", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
