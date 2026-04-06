import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ApplicationsDataTable } from "@/features/evaluations/components/applications-data-table";
import { DashboardMetrics } from "@/features/evaluations/components/dashboard-metrics";
import { EvaluationTrendChart } from "@/features/evaluations/components/evaluation-trend-chart";

export default function EvaluatorDashboardPage() {
  return (
    <div className="flex flex-col gap-8 lg:gap-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">Welcome, John</h1>
          <p className="mt-1 text-sm font-medium text-slate-500 sm:text-base">View and manage active orders and requests</p>
        </div>
        <Button className="flex h-10 w-full items-center justify-center gap-1 rounded-lg border border-[#0A77FF] bg-[#0A77FF] px-[14px] py-[10px] text-sm text-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] transition-all hover:bg-[#096de8] hover:border-[#096de8] active:scale-95 sm:w-[168px]">
          <Plus className="h-5 w-5 stroke-[2]" />
          <span style={{ fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px" }}>
            New Evaluation
          </span>
        </Button>
      </div>

      <DashboardMetrics />

      <EvaluationTrendChart />

      <div className="space-y-5">
        <div>
          <h2 className="text-xl font-medium tracking-tight text-slate-900 sm:text-2xl">All Applications</h2>
          <p className="mt-1 text-sm font-medium text-slate-500 sm:text-base">Manage applications by different institutions right here</p>
        </div>
        <ApplicationsDataTable />
      </div>
    </div>
  );
}
