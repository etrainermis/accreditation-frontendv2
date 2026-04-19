import type { AuthSession, PortalAccess, UserRole } from "@/types/auth";

const roleHierarchy: Record<UserRole, number> = {
  applicant: 1,
  evaluator: 2,
  supervisor: 3,
  "curriculum-evaluator": 2,
  "super-admin": 4,
  SUPERADMIN: 4,
  ADMIN: 4,
  SUPERVISOR: 3,
  EVALUATOR: 2,
  CURRICULUM_EVALUATOR: 2,
  RTB_STAFF_CURRICULUM: 2,
  SCHOOL_MANAGER_PUBLIC: 1,
  SCHOOL_MANAGER: 1,
};

export function canAccessPortal(session: AuthSession, portal: PortalAccess) {
  if (portal === "public") {
    return true;
  }

  if (!session.user) {
    return false;
  }

  return session.user.roles.some(r => r.name === portal);
}

export function canManageEvaluators(session: AuthSession) {
  return session.user?.roles.some(r => r.name === "super-admin" || r.name === "SUPERADMIN");
}

export function isSameOrHigherRole(session: AuthSession, role: UserRole) {
  if (!session.user) {
    return false;
  }

  const userRanks = session.user.roles.map(r => roleHierarchy[r.name] || 0);
  const maxRank = Math.max(...userRanks, 0);
  
  return maxRank >= roleHierarchy[role];
}
