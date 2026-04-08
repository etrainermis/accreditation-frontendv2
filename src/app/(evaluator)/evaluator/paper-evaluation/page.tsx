import { FormSection } from "@/components/forms/form-section";
import { PageContainer } from "@/components/layout/page-container";
import { DataTablePlaceholder } from "@/components/tables/data-table-placeholder";

export default function PaperEvaluationPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Paper evaluation"
      description="Use this route for evidence scoring, section-by-section comments, and other structured evaluator outputs."
    >
      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <FormSection
          title="Evaluation form area"
          description="Build scoring widgets, comment forms, and validation in feature-owned files first."
        />
        <DataTablePlaceholder
          title="Criteria and scoring placeholder"
          description="Reserve this for criteria rows, score summaries, or findings tables once the criteria contract exists."
        />
      </div>
    </PageContainer>
  );
}
