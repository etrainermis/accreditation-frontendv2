import { PageContainer } from "@/components/layout/page-container";
import { NotificationsContent } from "@/features/notifications/components/notifications-content";

export default function EvaluatorNotificationsPage() {
  return (
    <PageContainer role="evaluator" title="Notifications" description="Latest updates.">
      <NotificationsContent role="evaluator" />
    </PageContainer>
  );
}
