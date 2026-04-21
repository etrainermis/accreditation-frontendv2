import type { ApiSingleResponse, AuthSession } from "@/types";

import { apiRequest } from "@/lib/api/client";
import type { ApiResponse } from "@/lib/api/application-api";

export function getSessionQuery() {
  return apiRequest<ApiSingleResponse<AuthSession>>("/auth/session");
}

export function signInWithPassword(payload: { email: string; password: string }) {
  return apiRequest<ApiSingleResponse<AuthSession>>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function onboardUser(payload: any) {
  return apiRequest<any>("/v1/auth/onboarding", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function validateOnboardingToken(token: string) {
  return apiRequest<any>("/v1/auth/onboarding", {
    query: { token },
  });
}

export function getMe() {
  return apiRequest<ApiResponse<any> | any>("/v1/users/me").then((response) => {
    if (response && typeof response === "object" && "data" in response && "success" in response) {
      return (response as ApiResponse<any>).data;
    }

    return response;
  });
}
