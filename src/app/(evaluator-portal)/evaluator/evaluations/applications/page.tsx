
"use client";


import { DashboardMetrics } from "@/features/evaluations/components/dashboard-metrics";
import { EvaluatorEvaluationsHeader } from "@/features/evaluations";

import { ApplicationsDataTable } from "@/features/evaluations/components/applications-data-table";
import { FileText, FolderOpen, CalendarCheck2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EvaluatorEvaluationsApplicationsPage() {
  const pathname = usePathname();
  const isApplications = pathname?.includes("/evaluator/evaluations/applications");
  const isCriteria = pathname?.includes("/evaluator/evaluations/criteria");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-1 pb-4 md:px-6 md:pt-1 md:pb-6 lg:px-8 lg:pt-2 lg:pb-8">
      <EvaluatorEvaluationsHeader />

      {/* Sub Navigation Tabs */}
      <div className="mb-6 flex flex-row items-center gap-4" style={{height: 40}}>
        {/* Applications Tab */}
        <Link
          href="/evaluator/evaluations/applications"
          className={`flex flex-row items-center gap-3 px-3 py-2 rounded-[6px] ${isApplications ? 'bg-[#F9FAFB]' : 'bg-white'}`}
          style={{width: 374.67, height: 40}}
        >
          <div className="flex flex-row items-center gap-3" style={{width: 127, height: 20}}>
            <FileText className={`w-5 h-5 ${isApplications ? 'text-[var(--primary)]' : 'text-slate-500'}`} strokeWidth={2} />
            <span className={`${isApplications ? 'text-[var(--primary)]' : 'text-slate-500'} font-medium text-sm font-sans`} style={{fontSize: 14, lineHeight: '20px'}}>Applications</span>
          </div>
        </Link>
        {/* Evaluation Criteria Files Tab */}
        <Link
          href="/evaluator/evaluations/criteria"
          className={`flex flex-row items-center gap-3 px-3 py-2 rounded-[6px] ${isCriteria ? 'bg-[#F9FAFB]' : 'bg-white'}`}
          style={{width: 374.67, height: 40}}
        >
          <div className="flex flex-row items-center gap-3" style={{width: 207, height: 20}}>
            <FolderOpen className={`w-5 h-5 ${isCriteria ? 'text-[var(--primary)]' : 'text-slate-500'}`} strokeWidth={2} />
            <span className={`${isCriteria ? 'text-[var(--primary)]' : 'text-slate-500'} font-medium text-sm font-sans`} style={{fontSize: 14, lineHeight: '20px'}}>Evaluation Criteria Files</span>
          </div>
        </Link>
        {/* Due Diligence Schedule Tab */}
        <div className="flex flex-row items-center gap-3 px-3 py-2 bg-white rounded-[6px]" style={{width: 374.67, height: 40}}>
          <div className="flex flex-row items-center gap-3" style={{width: 208, height: 20}}>
            <CalendarCheck2 className="w-5 h-5 text-slate-500" strokeWidth={2} />
            <span className="text-slate-500 font-medium text-sm font-sans" style={{fontSize: 14, lineHeight: '20px'}}>Due Diligence Schedule</span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mb-6">
        <DashboardMetrics />
      </div>

      {/* Applications Table */}
      <div>
        <ApplicationsDataTable />
      </div>
    </div>
  );
}
