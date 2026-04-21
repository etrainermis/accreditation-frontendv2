"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { SharedApplicationsList } from "@/features/evaluations/components/shared-applications-list";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";

export default function EvaluatorApplicationsPage() {
  return (
    <PageContainer
      role="evaluator"
      title="Applications"
      description="Review the accreditation applications assigned to you."
    >
      <EvaluationsSubNav role="evaluator" />
      <SharedApplicationsList 
        role="evaluator" 
        basePath="/evaluator/applications" 
      />
    </PageContainer>
  );
}
