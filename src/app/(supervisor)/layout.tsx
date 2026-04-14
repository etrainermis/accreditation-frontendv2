import { PortalShell } from "@/components/layout/portal-shell";

export default function SupervisorLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell role="supervisor">{children}</PortalShell>;
}
