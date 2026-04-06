"use client";

import { useState } from "react";
import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";
import { X } from "lucide-react";
import { PageHeaderProvider } from "@/lib/context/page-header-context";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <PageHeaderProvider>
      <div className="h-screen bg-white text-slate-900 md:grid md:grid-cols-[250px_1fr] overflow-hidden">
        {/* Desktop Sidebar */}
        <aside className="hidden border-r border-slate-200 bg-white px-4 pt-6 md:block h-full overflow-y-auto no-scrollbar">
          <SidebarNav role={role} />
        </aside>

        {/* Mobile Sidebar Overlay */}
        <div className={`fixed inset-0 z-50 flex md:hidden transition-opacity duration-300 ${isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none delay-150"}`}>
          <div className={`fixed inset-0 bg-slate-900/30 transition-opacity ${isMobileOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileOpen(false)} />
          <aside className={`relative flex w-[260px] max-w-[calc(100%-3rem)] flex-col bg-white px-4 py-6 shadow-xl h-full transition-transform duration-300 ease-out ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button 
               onClick={() => setIsMobileOpen(false)}
               className="absolute right-3 top-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 z-10"
            >
               <X className="h-5 w-5" />
            </button>
            <div className="flex-1 overflow-y-auto h-full">
              <SidebarNav role={role} onCloseMobile={() => setIsMobileOpen(false)} />
            </div>
          </aside>
        </div>

        {/* Main content area */}
        <div className="flex h-screen flex-col overflow-hidden w-full">
          <Topbar role={role} onOpenMobile={() => setIsMobileOpen(true)} />
          <main className="flex-1 overflow-y-auto px-6 pb-6 no-scrollbar">
            {children}
          </main>
        </div>
      </div>
    </PageHeaderProvider>
  );
}
