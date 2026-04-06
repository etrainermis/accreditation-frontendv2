"use client";

import { LucideIcon, NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

export interface StatItem {
  label: string;
  value: string | number;
}

const statConfig: Record<string, { icon: LucideIcon; color: string }> = {
  "Applications": { icon: NotepadText, color: "#0A77FF" },
  "Pending": { icon: ClipboardClock, color: "#FF8D28" },
  "Evaluated": { icon: CheckCheck, color: "#34C759" },
  "Approved": { icon: CheckCheck, color: "#34C759" },
  "Rejected": { icon: AlertTriangle, color: "#FF383C" },
};

interface StatsGridProps {
  items: StatItem[];
  className?: string;
}

export function StatsGrid({ items, className }: StatsGridProps) {
  return (
    <div className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-6", className)}>
      {items.map((item) => {
        const config = statConfig[item.label] || { icon: NotepadText, color: "#64748B" };
        const Icon = config.icon;
        
        return (
          <Card 
            key={item.label} 
            className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up"
          >
            <CardContent className="p-5 flex flex-col gap-4">
              <div className="w-fit p-2.5 rounded-sm border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                <Icon className="h-5 w-5" style={{ color: config.color }} strokeWidth={1} />
              </div>
              <div className="space-y-1">
                <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
