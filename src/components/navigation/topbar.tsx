import Link from "next/link";
import { Bell, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portalLabels } from "@/lib/constants/portals";
import type { UserRole } from "@/types/auth";

export function Topbar({ role }: { role: UserRole }) {
  return (
    <header className="flex flex-col gap-4 border-b border-[var(--border)] bg-white/75 px-6 py-5 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div className="space-y-2">
        <Badge>{portalLabels[role]}</Badge>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-[var(--foreground)]">RTB Accreditation Platform</h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Frontend collaboration baseline for the {portalLabels[role].toLowerCase()} workspace.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="outline" className="gap-2">
          <Search className="h-4 w-4" />
          Search
        </Button>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          Activity
        </Button>
        <Button asChild>
          <Link href="/login">Switch portal</Link>
        </Button>
      </div>
    </header>
  );
}
