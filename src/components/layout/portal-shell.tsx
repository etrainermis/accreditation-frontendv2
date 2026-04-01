import Link from "next/link";
import { PanelLeftClose, Workflow } from "lucide-react";

import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import { appConfig } from "@/lib/config/app";
import { portalNavigation } from "@/lib/config/navigation";
import type { UserRole } from "@/types/auth";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const config = portalNavigation[role];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] md:grid md:grid-cols-[320px_1fr]">
      <aside className="hidden border-r border-white/10 bg-[var(--sidebar)] px-6 py-8 text-[var(--sidebar-foreground)] md:block">
        <Link href={config.basePath} className="mb-10 flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Workflow className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.2em] text-white/65">{appConfig.companyName}</span>
            <span className="block text-sm font-semibold">{config.label}</span>
          </span>
        </Link>
        <SidebarNav role={role} />
      </aside>
      <div className="flex min-h-screen flex-col">
        <div className="border-b border-[var(--border)] bg-white px-4 py-3 md:hidden">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold">{config.label}</span>
            <button type="button" className="rounded-full border border-[var(--border)] p-2 text-[var(--muted-foreground)]">
              <PanelLeftClose className="h-4 w-4" />
            </button>
          </div>
        </div>
        <Topbar role={role} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
