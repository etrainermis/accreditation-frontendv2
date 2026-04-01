import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, UsersRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { appConfig } from "@/lib/config/app";

const portals = [
  {
    title: "Applicant Portal",
    href: "/applicant/dashboard",
    description: "Institution-facing flows for profile maintenance, application submission, statuses, and certification outcomes.",
    icon: Building2,
  },
  {
    title: "Evaluator Portal",
    href: "/evaluator/dashboard",
    description: "Dedicated reviewer workspace for assigned applications, due diligence, and paper evaluation tasks.",
    icon: ShieldCheck,
  },
  {
    title: "Super Admin Portal",
    href: "/super-admin/dashboard",
    description: "Operational workspace for evaluator management, assignment coordination, criteria uploads, and oversight.",
    icon: UsersRound,
  },
] as const;

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <section className="space-y-6 rounded-[2rem] border border-[var(--border)] bg-white/80 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur">
          <Badge>Frontend foundation</Badge>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
              {appConfig.name}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
              This repo is organized as a collaboration-ready Next.js App Router frontend for three distinct role-based portals: Applicant, Evaluator, and Super Admin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/login">Open portal login</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/super-admin/dashboard">Review admin foundation</Link>
            </Button>
          </div>
        </section>
        <Card className="bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.95))] text-white">
          <CardHeader>
            <CardTitle className="text-2xl">What is already in place</CardTitle>
            <CardDescription className="text-white/70">
              Shared shell components, role route groups, navigation config, typed placeholders, validation scaffolding, and collaboration docs.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7 text-white/78">
            <p>Use the portal routes to start building features without re-litigating file placement or route ownership.</p>
            <p>Client components are intentionally kept focused around providers and navigation state so the rest of the app can stay server-first.</p>
          </CardContent>
        </Card>
      </div>
      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        {portals.map((portal) => {
          const Icon = portal.icon;

          return (
            <Card key={portal.title} className="h-full">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--muted)] text-[var(--primary)]">
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle>{portal.title}</CardTitle>
                <CardDescription>{portal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="gap-2 px-0">
                  <Link href={portal.href}>
                    Open workspace
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </section>
    </main>
  );
}
