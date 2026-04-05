import { Card, CardContent } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";
import { AlertTriangle, CheckCheck, NotepadText, ClipboardClock } from "lucide-react";
import { StackedAnalyticsChart } from "@/components/dashboard/stacked-analytics-chart";

const stats = [
  { 
    label: "Applications", 
    value: "24", 
    icon: NotepadText, 
    iconColor: "#0A77FF"
  },
  { 
    label: "Pending", 
    value: "8", 
    icon: ClipboardClock, 
    iconColor: "#FF8D28"
  },
  { 
    label: "Evaluated", 
    value: "5", 
    icon: CheckCheck, 
    iconColor: "#34C759"
  },
  { 
    label: "Rejected", 
    value: "11", 
    icon: AlertTriangle, 
    iconColor: "#FF383C"
  },
];
const chartData = {
  "12 Months": [
    { label: "Jan", rejected: 6, approved: 5, pending: 4 },
    { label: "Feb", rejected: 8, approved: 6, pending: 5 },
    { label: "Mar", rejected: 4, approved: 4, pending: 3 },
    { label: "Apr", rejected: 6, approved: 6, pending: 6 },
    { label: "May", rejected: 4, approved: 4, pending: 3 },
    { label: "Jun", rejected: 7, approved: 6, pending: 5 },
    { label: "Jul", rejected: 6, approved: 5, pending: 6 },
    { label: "Aug", rejected: 6, approved: 6, pending: 6 },
    { label: "Sep", rejected: 6, approved: 5, pending: 6 },
    { label: "Oct", rejected: 6, approved: 6, pending: 5 },
    { label: "Nov", rejected: 7, approved: 5, pending: 5 },
    { label: "Dec", rejected: 7, approved: 7, pending: 5 },
  ],
  "30 Days": Array.from({ length: 30 }, (_, i) => ({
    label: `${i + 1}`,
    rejected: Math.floor(Math.random() * 5) + 2,
    approved: Math.floor(Math.random() * 6) + 3,
    pending: Math.floor(Math.random() * 4) + 2,
  })),
  "7 Days": [
    { label: "Mon", rejected: 2, approved: 2, pending: 1 },
    { label: "Tue", rejected: 3, approved: 1, pending: 3 },
    { label: "Wed", rejected: 2, approved: 4, pending: 2 },
    { label: "Thu", rejected: 4, approved: 2, pending: 2 },
    { label: "Fri", rejected: 5, approved: 3, pending: 1 },
    { label: "Sat", rejected: 1, approved: 1, pending: 1 },
    { label: "Sun", rejected: 1, approved: 0, pending: 1 },
  ],
  "24 Hours": Array.from({ length: 24 }, (_, i) => ({
    label: `${String(i).padStart(2, "0")}h`,
    rejected: Math.floor(Math.random() * 3) + 1,
    approved: Math.floor(Math.random() * 4) + 1,
    pending: Math.floor(Math.random() * 2) + 1,
  })),
};

export default function SuperAdminDashboardPage() {
  return (
    <PageContainer role="super-admin" title="Welcome, John" description="View & manage active elders and requests">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4 mb-6">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="rounded-t-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up">
              <CardContent className="p-5 flex flex-col gap-4">
                <div className="w-fit p-2.5 rounded-sm border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                  <Icon className="h-5 w-5" style={{ color: item.iconColor }} strokeWidth={1} />
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

      <StackedAnalyticsChart data={chartData} />
    </PageContainer>
  );
}
