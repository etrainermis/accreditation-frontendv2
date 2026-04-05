import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[#f8fafc] text-slate-900 md:grid md:grid-cols-[250px_1fr] overflow-hidden">
      <aside className="hidden border-r border-slate-200 bg-white px-4 py-6 md:block h-full overflow-y-auto no-scrollbar">
        <SidebarNav role={role} />
      </aside>
      <div className="flex h-full flex-col overflow-hidden">
        <Topbar role={role} />
        <main className="flex-1 overflow-y-auto px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
