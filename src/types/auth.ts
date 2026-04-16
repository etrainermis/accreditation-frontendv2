export const userRoles = ["applicant", "evaluator", "super-admin", "curriculum-evaluator", "supervisor"] as const;

export type UserRole = (typeof userRoles)[number];

export type PortalAccess = "public" | UserRole;

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface AuthSession {
  user: SessionUser | null;
  expiresAt?: string;
}
