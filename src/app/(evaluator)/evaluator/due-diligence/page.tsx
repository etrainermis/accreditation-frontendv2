import { FormSection } from "@/components/forms/form-section";
import { PlaceholderPanel } from "@/components/feedback/placeholder-panel";
import { PageContainer } from "@/components/layout/page-container";

export default function DueDiligencePage() {
  return (
    <PageContainer
      role="evaluator"
      title="Due diligence"
      description="Capture due diligence findings, follow-up questions, and review observations here without coupling it to the paper evaluation route."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <FormSection
          title="Due diligence findings form"
          description="Use feature-owned field groups for findings, risk levels, notes, and evidence references."
        />
        <PlaceholderPanel
          eyebrow="Evaluator workflow"
          title="Scope guidance"
          description="Treat due diligence as a distinct evaluator workflow with its own components, even if it later shares primitives with paper evaluation."
          bullets={[
            "Feature ownership: src/features/evaluations",
            "Validation ownership: a dedicated due-diligence schema when the workflow solidifies",
            "Shared UI only after duplicate patterns emerge",
          ]}
        />
      </div>
    </PageContainer>
  );
}
