import Link from "next/link";
import { Bell, LogOut, MessageSquareMore } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { UserRole } from "@/types/auth";

export function Topbar({ role }: { role: UserRole }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <p className="text-sm font-medium text-[var(--primary)]">Dashboard</p>
      <div className="flex items-center gap-3">
        <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-500">
          <MessageSquareMore className="h-4 w-4" />
        </button>
        <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-500">
          <Bell className="h-4 w-4" />
        </button>
        <div className="h-9 w-9 rounded-full bg-[var(--primary-soft)]" />
        <Button asChild variant="outline" className="h-10 rounded-xl border-[var(--primary-soft-strong)] px-4 text-[var(--primary)]">
          <Link href="/login" className="inline-flex items-center gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </header>
  );
}
