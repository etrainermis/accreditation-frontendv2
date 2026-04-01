import { PortalShell } from "@/components/layout/portal-shell";

export default function ApplicantLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell role="applicant">{children}</PortalShell>;
}
