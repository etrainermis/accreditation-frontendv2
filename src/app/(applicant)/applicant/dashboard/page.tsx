import { FileText, Clock, CheckCircle2, AlertTriangle, FilePlus2 } from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";

const stats = [
  {
    label: "Applications",
    value: "2",
    icon: FileText,
    iconBg: "border border-blue-100",
    iconColor: "text-blue-500",
  },
  {
    label: "Pending",
    value: "6",
    icon: Clock,
    iconBg: "border border-orange-100",
    iconColor: "text-orange-400",
  },
  {
    label: "Approved",
    value: "6",
    icon: CheckCircle2,
    iconBg: "border border-green-100",
    iconColor: "text-green-500",
  },
  {
    label: "Rejected",
    value: "12",
    icon: AlertTriangle,
    iconBg: "border border-red-100",
    iconColor: "text-red-400",
  },
];

export default function ApplicantDashboardPage() {
  return (
    <div className="flex flex-1 flex-col space-y-4">
      {/* Welcome header + New Application button */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[16px] font-[500] text-[#101828]">
            Welcome, John
          </h1>
          <p className="mt-0.5 text-[12px] font-[300] text-[#475467]">
            View &amp; manage active orders and requests
          </p>
        </div>
        <PrimaryButton label="New Application" href="/applicant/applications" iconPosition="right" />
      </div>

      <div className="h-[1px] w-full shrink-0 bg-slate-100" />

      {/* Stats cards */}
      <div className="grid grid-cols-4 gap-4 shrink-0">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-white p-5"
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
      <div className="relative flex flex-1 flex-col items-center justify-end overflow-hidden rounded-2xl bg-white px-6 pb-16 pt-6 text-center min-h-[400px]">
        {/* Decorative concentric circles at the top */}
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-50" />
        <div className="absolute left-1/2 top-0 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-50" />
        <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-50" />
        <div className="absolute left-1/2 top-0 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-50" />
        <div className="absolute left-1/2 top-0 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-slate-50" />

        {/* Document icon */}
        <div className="relative z-10 mb-4 mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-100">
          <FilePlus2 className="h-6 w-6 text-slate-400" />
        </div>

        {/* Text */}
        <h2 className="relative z-10 text-base font-semibold text-slate-900">
          No Applications Yet!
        </h2>
        <p className="relative z-10 mb-6 mt-1.5 max-w-xs text-[12px] leading-5 text-[#475467] font-[300]">
          You haven&apos;t started any applications. Explore opportunities and
          begin your first application to track your progress here.
        </p>

        {/* CTA */}
        <div className="relative z-10">
          <PrimaryButton label="Start Application" href="/applicant/applications" />
        </div>
      </div>
    </div>
  );
}
