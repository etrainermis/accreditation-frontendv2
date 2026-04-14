import type { AuthSession, PortalAccess, UserRole } from "@/types/auth";

const roleHierarchy: Record<UserRole, number> = {
  applicant: 1,
  evaluator: 2,
  supervisor: 3,
  "super-admin": 4,
};

export function canAccessPortal(session: AuthSession, portal: PortalAccess) {
  if (portal === "public") {
    return true;
  }

  if (!session.user) {
    return false;
  }

  return session.user.role === portal;
}

export function canManageEvaluators(session: AuthSession) {
  return session.user?.role === "super-admin";
}

export function isSameOrHigherRole(session: AuthSession, role: UserRole) {
  if (!session.user) {
    return false;
  }

  return roleHierarchy[session.user.role] >= roleHierarchy[role];
}
