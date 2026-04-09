import { PageContainer } from "@/components/layout/page-container";
import { NotificationsContent } from "@/features/notifications/components/notifications-content";

export default function SuperAdminNotificationsPage() {
  return (
    <PageContainer role="super-admin" title="Notifications" description="Latest updates.">
      <NotificationsContent role="super-admin" />
    </PageContainer>
  );
}
