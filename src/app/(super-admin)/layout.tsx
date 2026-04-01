import { PortalShell } from "@/components/layout/portal-shell";

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell role="super-admin">{children}</PortalShell>;
}
