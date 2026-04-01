import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { portalDescriptions, portalLabels } from "@/lib/constants/portals";
import type { UserRole } from "@/types/auth";

export function PageContainer({
  role,
  title,
  description,
  children,
}: {
  role: UserRole;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6 px-6 py-8">
      <Card className="overflow-hidden border-none bg-[linear-gradient(135deg,rgba(37,99,235,0.96),rgba(15,118,110,0.94))] text-white shadow-none">
        <CardContent className="grid gap-4 p-8 md:grid-cols-[1.6fr_1fr] md:items-end">
          <div className="space-y-4">
            <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
              {portalLabels[role]}
            </span>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
              <p className="max-w-2xl text-sm leading-7 text-white/85">{description}</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-white/72">{portalDescriptions[role]}</p>
        </CardContent>
      </Card>
      {children}
    </div>
  );
}
