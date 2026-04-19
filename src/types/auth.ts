export const userRoles = [
  "applicant",
  "evaluator",
  "super-admin",
  "curriculum-evaluator",
  "supervisor",
  "SUPERADMIN",
  "ADMIN",
  "SUPERVISOR",
  "EVALUATOR",
  "CURRICULUM_EVALUATOR",
  "RTB_STAFF_CURRICULUM",
  "SCHOOL_MANAGER_PUBLIC",
  "SCHOOL_MANAGER",
] as const;

export type UserRole = (typeof userRoles)[number];

export type PortalAccess = "public" | UserRole;

export interface SessionUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: {
    id: string;
    name: UserRole;
    description: string;
  }[];
}

export interface AuthSession {
  accessToken?: string;
  tokenType?: string;
  user: SessionUser | null;
}
