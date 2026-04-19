import type { RequestOptions } from "@/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "/api";

function buildUrl(path: string, query?: RequestOptions["query"]) {
  const normalizedBase = API_BASE_URL.endsWith("/") ? API_BASE_URL.slice(0, -1) : API_BASE_URL;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const target = normalizedBase.startsWith("http")
    ? new URL(`${normalizedBase}${normalizedPath}`)
    : new URL(`${normalizedBase}${normalizedPath}`, "http://localhost");

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined) {
        target.searchParams.set(key, String(value));
      }
    }
  }

  return normalizedBase.startsWith("http")
    ? target.toString()
    : `${target.pathname}${target.search}`;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { query, headers, body, ...rest } = options;

  const isFormData = body instanceof FormData;
  const requestHeaders = new Headers(headers);

  // Add Authorization header if token exists
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token && !requestHeaders.has("Authorization")) {
      requestHeaders.set("Authorization", `Bearer ${token}`);
    }
  }

  if (!isFormData && !requestHeaders.has("Content-Type")) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const response = await fetch(buildUrl(path, query), {
    ...rest,
    body,
    headers: requestHeaders,
  });

  if (!response.ok) {
    throw new Error(`API request failed for ${path}. Replace the placeholder helper with the real backend contract.`);
  }

  return (await response.json()) as T;
}
