import type { AuthSession, UserRole } from "@/types/auth";

export async function getCurrentSession(): Promise<AuthSession> {
  return {
    user: null,
  };
}

export function hasRole(session: AuthSession, role: UserRole) {
  return session.user?.roles.some(r => r.name === role);
}
