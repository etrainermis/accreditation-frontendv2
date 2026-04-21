import { apiRequest } from "./client";

export async function createInstitution(formData: FormData) {
  return apiRequest<any>("/v1/institutions/create", {
    method: "POST",
    body: formData,
  });
}

export async function getMyInstitution() {
  return apiRequest<any>("/v1/institutions/my-institution");
}

export async function createAdministrativeProfile(formData: FormData) {
  return apiRequest<any>("/v1/administrative/create", {
    method: "POST",
    body: formData,
  });
}

export async function getMyAdministrativeProfile() {
  return apiRequest<any>("/v1/administrative/me");
}
