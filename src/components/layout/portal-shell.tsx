"use client";

import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";
import { PageHeaderProvider } from "@/lib/context/page-header-context";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  return (
    <PageHeaderProvider>
      <div className="h-screen bg-white text-slate-900 md:grid md:grid-cols-[250px_1fr] overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden border-r border-slate-200 bg-white px-4 pt-6 md:block h-full overflow-y-auto no-scrollbar">
          <SidebarNav role={role} />
        </aside>

        {/* Main Content Area */}
        <div className="flex h-full flex-col overflow-hidden">
          <Topbar role={role} />
          <main className="flex-1 overflow-y-auto px-6 pb-6 no-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </PageHeaderProvider>
  );
}
