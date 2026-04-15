import { PageContainer } from "@/components/layout/page-container";
import { NotificationsContent } from "@/features/notifications/components/notifications-content";

export default function CurriculumEvaluatorNotificationsPage() {
  return (
    <PageContainer
      role="curriculum-evaluator"
      title="Notifications"
      description="Latest curriculum review updates and system notices."
    >
      <NotificationsContent role="curriculum-evaluator" />
    </PageContainer>
  );
}
