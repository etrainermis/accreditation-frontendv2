import { PortalShell } from "@/components/layout/portal-shell";
import { AuthGuard } from "@/components/auth/auth-guard";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard allowedRoles={["super-admin", "SUPERADMIN"]}>
      <PortalShell role="super-admin">{children}</PortalShell>
    </AuthGuard>
  );
}
