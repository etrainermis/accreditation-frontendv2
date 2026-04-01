import { FormSection } from "@/components/forms/form-section";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";

export default function SuperAdminCriteriaPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Evaluation criteria"
      description="Use this route for criteria uploads, version history, and frontend management of evaluation rule documents."
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <FormSection
          title="Criteria upload area"
          description="Keep upload validation and criteria-specific state in the criteria feature module."
        />
        <DataTablePlaceholder
          title="Criteria library"
          description="Reserve for criteria versions, uploaded files, and effective dates."
        />
      </div>
    </PageContainer>
  );
}
