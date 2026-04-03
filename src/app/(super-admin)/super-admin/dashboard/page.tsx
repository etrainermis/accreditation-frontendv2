import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";

const stats = [
  { label: "Applications", value: "24" },
  { label: "Evaluators", value: "8" },
  { label: "Criteria", value: "5" },
  { label: "Pending", value: "11" },
];

export default function SuperAdminDashboardPage() {
  return (
    <PageContainer role="super-admin" title="Welcome, John" description="View and manage your records.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.label} className="rounded-2xl border border-slate-200 bg-white shadow-none">
            <CardContent className="space-y-3 p-6">
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Applications Trend</CardTitle>
            <CardDescription>Overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid h-52 grid-cols-8 items-end gap-3">
              {[45, 68, 30, 72, 40, 78, 60, 82].map((value, index) => (
                <div key={index} className="rounded-t-xl bg-[var(--primary)]" style={{ height: `${value}%` }} />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
          <CardHeader>
            <CardTitle className="text-base">Recent Applications</CardTitle>
            <CardDescription>Minimal list</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-xl bg-[var(--primary-soft)] px-3 py-3">
              <span>Command+R</span>
              <span className="text-[var(--primary)]">Pending</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
              <span>Nova Institute</span>
              <span>Approved</span>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
              <span>Riverside</span>
              <span>Rejected</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
