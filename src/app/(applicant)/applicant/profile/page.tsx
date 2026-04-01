import { FormSection } from "@/components/forms/form-section";
import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { PageContainer } from "@/components/layout/page-container";

export default function ApplicantProfilePage() {
  return (
    <PageContainer
      role="applicant"
      title="Institution profile"
      description="Keep profile editing, contact details, and reusable institution schemas in the applicant-profile feature module."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <FormSection
          title="Profile form area"
          description="React Hook Form and Zod validators are scaffolded so teams can add sections without restructuring the route."
        />
        <PlaceholderPanel
          eyebrow="Applicant profile"
          title="Implementation notes"
          description="This page should stay institution-facing only. Avoid mixing application workflow details into the shared profile module."
          bullets={[
            "Feature ownership: src/features/applicant-profile",
            "Validation ownership: src/lib/validations/applications.ts",
            "API ownership: src/lib/api/applications or a profile-specific helper when the contract arrives",
          ]}
        />
      </div>
    </PageContainer>
  );
}
