import Link from "next/link";

import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const portalCards = [
  { title: "Applicant", href: "/applicant/dashboard", description: "Institution profile, applications, statuses, and certificates." },
  { title: "Evaluator", href: "/evaluator/dashboard", description: "Assignments, due diligence, paper evaluation, and findings." },
  { title: "Super Admin", href: "/super-admin/dashboard", description: "Evaluator management, assignments, criteria, and oversight." },
] as const;

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-8 px-6 py-12">
      <PlaceholderPanel
        eyebrow="Public access"
        title="Portal entry point"
        description="Authentication UI is intentionally lightweight for now. Teams can replace this route with the real auth flow while preserving the public route boundary and shared conventions."
        bullets={[
          "Keep login-specific forms and mutations inside src/features/auth.",
          "Route users into their role portal only after the backend contract is finalized.",
          "Use the Zod auth schema and TanStack Query hooks as the integration boundary.",
        ]}
      />
      <section className="grid gap-6 md:grid-cols-3">
        {portalCards.map((portal) => (
          <Card key={portal.title}>
            <CardHeader>
              <Badge>{portal.title}</Badge>
              <CardTitle>{portal.title} workspace</CardTitle>
              <CardDescription>{portal.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={portal.href} className="text-sm font-semibold text-[var(--primary)]">
                Open placeholder portal
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
