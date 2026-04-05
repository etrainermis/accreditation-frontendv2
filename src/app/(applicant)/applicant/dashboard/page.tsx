import { FileText, Clock, CheckCircle2, AlertTriangle, FilePlus2, Plus } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Applications",
    
    value: "2",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    label: "Pending",
    value: "6",
    icon: Clock,
    iconBg: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    label: "Approved",
    value: "6",
    icon: CheckCircle2,
    iconBg: "bg-green-50",
    iconColor: "text-green-500",
  },
  {
    label: "Rejected",
    value: "12",
    icon: AlertTriangle,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
];

export default function ApplicantDashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome header + New Application button */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Welcome, John
          </h1>
          <p className="mt-0.5 text-[13px] text-slate-400">
            View &amp; manage active orders and requests
          </p>
        </div>
        <Link
          href="/applicant/applications"
          className="inline-flex items-center gap-2 rounded-xl bg-[#0A77FF] px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#0A77FF]/90"
        >
          New Application
          <Plus className="h-4 w-4" />
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div
                className={`mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                <Icon className={`h-5 w-5 ${item.iconColor}`} />
              </div>
              <p className="mb-1 text-[13px] text-slate-400">{item.label}</p>
              <p className="text-2xl font-semibold text-slate-900">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      <div className="relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
        {/* Decorative concentric circles */}
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/50" />
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/50" />
        <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-200/50" />

        {/* Document icon */}
        <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
          <FilePlus2 className="h-6 w-6 text-slate-400" />
        </div>

        {/* Text */}
        <h2 className="relative z-10 text-base font-semibold text-slate-900">
          No Applications Yet!
        </h2>
        <p className="relative z-10 mb-6 mt-1.5 max-w-xs text-[13px] leading-5 text-slate-400">
          You haven&apos;t started any applications. Explore opportunities and
          begin your first application to track your progress here.
        </p>

        {/* CTA */}
        <Link
          href="/applicant/applications"
          className="relative z-10 inline-flex items-center gap-2 rounded-xl bg-[#0A77FF] px-6 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-[#0A77FF]/90"
        >
          <Plus className="h-4 w-4" />
          Start Application
        </Link>
      </div>
    </div>
  );
}
