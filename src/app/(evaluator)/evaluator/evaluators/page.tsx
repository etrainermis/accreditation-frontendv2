"use client";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { EvaluatorsContent } from "@/features/evaluations/components/evaluators-content";

export default function EvaluatorEvaluatorsPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav role="evaluator" />
      <EvaluatorsContent />
    </PageContainer>
  );
}
