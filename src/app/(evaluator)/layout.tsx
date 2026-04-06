import { PortalShell } from "@/components/layout/portal-shell";

export default function EvaluatorLayout({ children }: { children: React.ReactNode }) {
  return <PortalShell role="evaluator">{children}</PortalShell>;
}
