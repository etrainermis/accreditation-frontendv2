"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { NotepadText, ClipboardClock, CheckCheck, AlertTriangle } from "lucide-react";

const stats = [
  { label: "Applications", value: "2,203", icon: NotepadText, iconColor: "#0A77FF" },
  { label: "Pending", value: "1,003", icon: ClipboardClock, iconColor: "#FF8D28" },
  { label: "Evaluated", value: "1,190", icon: CheckCheck, iconColor: "#34C759" },
  { label: "Rejected", value: "10", icon: AlertTriangle, iconColor: "#FF383C" },
];

export default function EvaluatorDashboardPage() {
  return (
    <PageContainer role="evaluator" title="Manage Accreditation Evaluations" description="View and manage evaluations.">
      <StatsGrid items={stats} />

      <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
        <CardHeader>
          <CardTitle className="text-base">All Applications</CardTitle>
          <CardDescription>Minimal list</CardDescription>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-slate-400">
              <tr className="border-b border-slate-200">
                <th className="pb-3 font-medium">Applicant</th>
                <th className="pb-3 font-medium">Institution</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Stage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Jane Smith", "Command+R", "Pending", "Initial Review"],
                ["Jane Smith", "Command+R", "Pending", "Due Diligence"],
                ["Jane Smith", "Command+R", "Approved", "Certified"],
              ].map((row) => (
                <tr key={row.join("-")} className="border-b border-slate-100 text-slate-600 last:border-0">
                  {row.map((cell) => (
                    <td key={cell} className="py-4">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
