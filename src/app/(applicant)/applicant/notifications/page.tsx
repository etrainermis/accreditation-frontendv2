import { PageContainer } from "@/components/layout/page-container";
import { NotificationsContent } from "@/features/notifications/components/notifications-content";

export default function ApplicantNotificationsPage() {
  return (
    <PageContainer role="applicant" title="Notifications" description="Stay updated with the latest activity on your applications.">
      <NotificationsContent role="applicant" />
    </PageContainer>
  );
}
