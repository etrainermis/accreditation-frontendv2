import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { Card, CardContent } from "@/components/ui/card";

export default function SuperAdminCriteriaPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
        <CardContent className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-8 text-center text-slate-500">
          <p>Evaluation Criteria Files management will be implemented here.</p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
