import { Card, CardContent } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";

const stats = [
  { label: "Applications", value: "2" },
  { label: "Pending", value: "6" },
  { label: "Approved", value: "6" },
  { label: "Rejected", value: "12" },
];

export default function ApplicantDashboardPage() {
  return (
    <PageContainer role="applicant" title="Welcome, John" description="View and manage your applications.">
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

      <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
        <CardContent className="flex min-h-[320px] flex-col items-center justify-center gap-4 p-8 text-center">
          <div className="h-16 w-16 rounded-2xl border border-[var(--primary-soft-strong)] bg-[var(--primary-soft)]" />
          <div>
            <p className="text-lg font-medium text-slate-900">No Applications Yet</p>
            <p className="mt-1 text-sm text-slate-400">Start your first application.</p>
          </div>
          <button type="button" className="rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white">
            Start Application
          </button>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
