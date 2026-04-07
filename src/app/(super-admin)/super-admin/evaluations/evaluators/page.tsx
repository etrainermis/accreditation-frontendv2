import { FormSection } from "@/components/forms/form-section";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";

export default function SuperAdminEvaluatorsPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <FormSection
          title="Evaluator editor"
          description="Use the evaluator-management feature module for forms, mutations, and evaluator-specific UI."
        />
        <DataTablePlaceholder
          title="Evaluator roster"
          description="Reserve for list management, active state, specialization, and assignment load indicators."
        />
      </div>
    </PageContainer>
  );
}
