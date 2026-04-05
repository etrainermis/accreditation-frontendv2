import { SidebarNav } from "@/components/navigation/sidebar-nav";
import { Topbar } from "@/components/navigation/topbar";
import type { UserRole } from "@/types/auth";

export function PortalShell({ role, children }: { role: UserRole; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-slate-900 md:grid md:grid-cols-[240px_1fr]">
      {/* Sidebar */}
      <aside
        className="hidden md:flex md:flex-col"
        style={{
          backgroundColor: "#FFFFFF",
          borderRight: "1px solid #E4E7EC",
          padding: "24px 16px",
          minHeight: "100vh",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
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
