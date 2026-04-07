import { PageContainer } from "@/components/layout/page-container";
import { StackedAnalyticsChart } from "@/components/dashboard/stacked-analytics-chart";
import { ApplicationsByTradeChart } from "@/components/dashboard/applications-by-trade-chart";
import { MostRequestedModules } from "@/components/dashboard/most-requested-modules";
import { RecentApplicationsTable } from "@/components/dashboard/recent-applications-table";
import { StatsGrid } from "@/components/dashboard/stats-grid";

const stats = [
  { label: "Applications", value: "24" },
  { label: "Pending", value: "8" },
  { label: "Evaluated", value: "5" },
  { label: "Rejected", value: "11" },
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
    <PageContainer 
      role="super-admin" 
      title="Welcome, John" 
      description="View & manage active elders and requests"
    >
      <StatsGrid items={stats} />

      <StackedAnalyticsChart data={chartData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-6">
        <ApplicationsByTradeChart />
        <MostRequestedModules />
      </div>

      <RecentApplicationsTable />
    </PageContainer>
  );
}
