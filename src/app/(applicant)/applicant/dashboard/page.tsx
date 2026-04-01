import { ChartPlaceholder } from "@/components/charts/chart-placeholder";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";

export default function ApplicantDashboardPage() {
  return (
    <PageContainer
      role="applicant"
      title="Applicant dashboard"
      description="Start applicant-facing delivery here: summary cards, draft applications, submission deadlines, and certification outcomes."
    >
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <DataTablePlaceholder
          title="Application status queue"
          description="Replace with applicant-specific status cards or a table once the backend contract is ready."
        />
        <ChartPlaceholder
          title="Submission and outcome trends"
          description="Reserve for progress, deadlines, and institution-level reporting visuals."
        />
      </div>
    </PageContainer>
  );
}
