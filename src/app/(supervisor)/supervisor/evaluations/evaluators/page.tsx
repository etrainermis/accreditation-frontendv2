"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { EvaluatorsContent } from "@/features/evaluations/components/evaluators-content";

export default function SupervisorEvaluatorsPage() {
  return (
    <PageContainer
      role="supervisor"
      title="Evaluators"
      description="View evaluators list"
    >
      <EvaluationsSubNav role="supervisor" />
      <EvaluatorsContent role="supervisor" />
    </PageContainer>
  );
}
