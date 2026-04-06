import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function SuperAdminApplicationsPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
      action={
        <Button className="rounded-sm cursor-pointer px-4 py-3 text-sm font-medium">
          Start New Evaluation
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      }
    >
      <EvaluationsSubNav />
      <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
        <CardContent className="flex min-h-[400px] flex-col items-center justify-center gap-4 p-8 text-center text-slate-500">
          <p>Applications list and management will be implemented here.</p>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
