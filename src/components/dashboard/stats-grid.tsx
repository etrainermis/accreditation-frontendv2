"use client";

import { LucideIcon, NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

export interface StatItem {
  label: string;
  value: string | number;
  icon: LucideIcon;
  iconColor?: string;
}

interface StatsGridProps {
  items: StatItem[];
  className?: string;
  gridCols?: 2 | 3 | 4 | 5;
}

export function StatsGrid({ items, className, gridCols = 4 }: StatsGridProps) {
  const gridColsClass = {
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
    5: "xl:grid-cols-5",
  }[gridCols];

  return (
    <div className={cn("grid gap-4 md:grid-cols-2 mb-6 relative z-10", gridColsClass, className)}>
      {items.map((item) => {
        const Icon = item.icon;
        
        return (
          <Card 
            key={item.label} 
            className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up"
          >
            <CardContent className="p-5 flex flex-col gap-4">
              <div className="w-fit p-2.5 rounded-sm border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                <Icon className="h-5 w-5" style={{ color: item.iconColor || "#64748B" }} strokeWidth={1} />
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
