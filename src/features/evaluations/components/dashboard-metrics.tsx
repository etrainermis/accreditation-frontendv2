import { CheckSquare, ClipboardList, ClipboardPenLine, TriangleAlert } from "lucide-react";

import { Card } from "@/components/ui/card";

const metrics = [
  {
    label: "Assigned",
    value: "2,203",
    icon: ClipboardPenLine,
    color: "text-blue-600",
    bg: "bg-blue-50/50",
    border: "border-blue-100/50",
  },
  {
    label: "Pending",
    value: "1,003",
    icon: ClipboardList,
    color: "text-amber-600",
    bg: "bg-amber-50/50",
    border: "border-amber-100/50",
  },
  {
    label: "Evaluated",
    value: "1,190",
    icon: CheckSquare,
    color: "text-emerald-600",
    bg: "bg-emerald-50/50",
    border: "border-emerald-100/50",
  },
  {
    label: "Overdue",
    value: "10",
    icon: TriangleAlert,
    color: "text-rose-600",
    bg: "bg-rose-50/50",
    border: "border-rose-100/50",
  },
];

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="group relative flex min-h-36 flex-col justify-between border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:border-[#0A77FF]/40 hover:shadow-xl hover:shadow-blue-500/[0.04] sm:min-h-40 sm:p-6"
        >
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${metric.border} ${metric.bg} transition-transform group-hover:scale-110 sm:h-12 sm:w-12`}>
            <metric.icon className={`h-5 w-5 ${metric.color}`} strokeWidth={2} />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
            <h3 className="text-xl font-medium tabular-nums text-slate-900 transition-colors group-hover:text-[#0A77FF] sm:text-2xl">{metric.value}</h3>
          </div>
        </Card>
      ))}
    </div>
  );
}
