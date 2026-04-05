import { Card, CardContent } from "@/components/ui/card";
import { PageContainer } from "@/components/layout/page-container";

export default function EvaluatorNotificationsPage() {
  return (
    <PageContainer role="evaluator" title="Notifications" description="Latest updates.">
      <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
        <CardContent className="p-6 text-sm text-slate-500">No notifications</CardContent>
      </Card>
    </PageContainer>
  );
}
