import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 md:grid md:grid-cols-[240px_1fr]">
      <aside className="hidden border-r border-slate-200 bg-white px-4 py-6 md:block">
        <SidebarNav role={role} />
      </aside>

      {/* Main content area */}
      <div className="flex min-h-screen flex-col">
        <Topbar role={role} />
        <main className="flex-1 px-8 py-6">{children}</main>
      </div>
    </div>
  );
}
