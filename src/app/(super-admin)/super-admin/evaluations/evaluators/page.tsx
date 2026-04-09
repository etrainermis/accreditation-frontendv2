"use client";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { EvaluatorsContent } from "@/features/evaluations/components/evaluators-content";

export default function SuperAdminEvaluatorsPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav role="super-admin" />
      <EvaluatorsContent />
    </PageContainer>
  );
}
