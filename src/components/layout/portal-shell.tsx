"use client";

import React from "react";
import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";
import { PageHeaderProvider, usePageHeader } from "@/lib/context/page-header-context";
import { cn } from "@/lib/utils/cn";

function PortalLayoutInner({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const { hideSidebar } = usePageHeader();

  return (
    <div className={cn(
      "h-screen bg-white text-slate-900 overflow-hidden transition-all duration-300",
      hideSidebar ? "flex flex-col" : "md:grid md:grid-cols-[250px_1fr]"
    )}>
      {/* Sidebar */}
      {!hideSidebar && (
        <aside className="hidden border-r border-slate-200 bg-white px-4 pt-6 md:block h-full overflow-y-auto no-scrollbar animate-in slide-in-from-left duration-300">
          <SidebarNav role={role} />
        </aside>
      )}

      {/* Main Content Area */}
      <div className="flex h-full flex-col overflow-hidden">
        <Topbar role={role} />
        <main className={cn(
            "flex-1 overflow-y-auto no-scrollbar",
            hideSidebar ? "p-0" : "px-6 pb-6"
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  return (
    <PageHeaderProvider>
      <PortalLayoutInner role={role}>
        {children}
      </PortalLayoutInner>
    </PageHeaderProvider>
  );
}
