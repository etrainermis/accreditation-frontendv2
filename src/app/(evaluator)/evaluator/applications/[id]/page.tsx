import { FormSection } from "@/components/forms/form-section";
import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { PageContainer } from "@/components/layout/page-container";

export default async function EvaluatorApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <PageContainer
      role="evaluator"
      title={`Application review: ${id}`}
      description="Use this dynamic route for evaluator-visible application detail, curriculum review context, and supporting evidence panels."
    >
      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <FormSection
          title="Review workspace"
          description="Compose read-only application summaries with evaluator-only actions and findings forms here."
        />
        <PlaceholderPanel
          eyebrow="Dynamic route"
          title="Evaluator application detail"
          description="This page is intentionally role-specific so reviewer concerns do not leak into the applicant or super-admin portals."
          bullets={[
            "Keep evaluator comments and findings scoped to src/features/evaluations",
            "Add nested sections or tabs as local route concerns if the workflow grows",
            "Use frontend permission checks before rendering reviewer actions",
          ]}
        />
      </div>
    </PageContainer>
  );
}
