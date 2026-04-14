import { PageContainer } from "@/components/layout/page-container";
import { NotificationsContent } from "@/features/notifications/components/notifications-content";

export default function SupervisorNotificationsPage() {
  return (
    <PageContainer role="supervisor" title="Notifications" description="Latest updates.">
      <NotificationsContent role="supervisor" />
    </PageContainer>
  );
}
