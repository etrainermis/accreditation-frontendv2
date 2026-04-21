"use client";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { CriteriaContent } from "@/features/evaluations/components/criteria-content";

export default function EvaluatorCriteriaPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Evaluation Criteria"
      description="View the criteria and files used during accreditation review."
    >
      <EvaluationsSubNav role="evaluator" />
      <CriteriaContent role="evaluator" />
    </PageContainer>
  );
}
