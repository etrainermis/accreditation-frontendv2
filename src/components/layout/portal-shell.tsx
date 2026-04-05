"use client";

import { useState } from "react";

import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 md:grid md:grid-cols-[250px_1fr]">
      <aside className="sticky top-0 hidden h-screen overflow-hidden border-r border-slate-200 bg-white px-4 py-4 md:block">
        <SidebarNav role={role} />
      </aside>

      {isMobileNavOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-[1px]"
            onClick={() => setIsMobileNavOpen(false)}
          />
          <aside className="relative z-10 flex h-full w-[min(86vw,20rem)] flex-col border-r border-slate-200 bg-white px-4 py-4 shadow-2xl">
            <SidebarNav role={role} onNavigate={() => setIsMobileNavOpen(false)} />
          </aside>
        </div>
      ) : null}

      <div className="flex min-h-screen min-w-0 flex-col">
        <Topbar role={role} onMenuClick={() => setIsMobileNavOpen(true)} />
        <main className="flex-1 min-w-0 px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}
