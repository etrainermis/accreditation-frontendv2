import { PortalShell } from "@/components/layout/portal-shell";

export default function EvaluatorPortalLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell role="evaluator">{children}</PortalShell>;
}
