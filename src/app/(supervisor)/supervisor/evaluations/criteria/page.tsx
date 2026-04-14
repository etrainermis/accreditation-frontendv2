"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { CriteriaContent } from "@/features/evaluations/components/criteria-content";

export default function SupervisorCriteriaPage() {
  return (
    <PageContainer
      role="supervisor"
      title="Evaluation Criteria Files"
      description="View evaluation criteria"
    >
      <EvaluationsSubNav role="supervisor" />
      <CriteriaContent role="supervisor" />
    </PageContainer>
  );
}
