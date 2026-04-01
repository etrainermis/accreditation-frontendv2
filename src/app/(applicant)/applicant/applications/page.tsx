import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { PageContainer } from "@/components/layout/page-container";

export default function ApplicantApplicationsPage() {
  return (
    <PageContainer
      role="applicant"
      title="Accreditation applications"
      description="Use this route for applicant-side create, edit, submit, and status workflows for accreditation applications."
    >
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <DataTablePlaceholder
          title="Applications workspace"
          description="Replace with applicant-owned application list, filters, and status components."
        />
        <PlaceholderPanel
          eyebrow="Applications"
          title="Suggested build slices"
          description="The route is ready for feature teams to add nested components without changing the route structure."
          bullets={[
            "List and filter submitted or draft applications",
            "Add an application creation drawer or dedicated form route later",
            "Keep detail routes under the applications feature if applicant detail pages are introduced",
          ]}
        />
      </div>
    </PageContainer>
  );
}
