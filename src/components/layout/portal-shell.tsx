import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden bg-white text-slate-900 md:grid md:grid-cols-[240px_1fr]">
      <aside className="hidden h-screen overflow-y-auto border-r border-slate-200 bg-white px-4 py-6 md:block">
        <SidebarNav role={role} />
      </aside>

      {/* Main content area */}
      <div className="flex h-screen flex-col overflow-hidden">
        <Topbar role={role} />
        <main className="flex flex-1 flex-col overflow-y-auto px-8 py-4">{children}</main>
      </div>
    </div>
  );
}
