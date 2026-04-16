"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { SharedApplicationsList } from "@/features/evaluations/components/shared-applications-list";

export default function SupervisorApplicationsPage() {
  return (
    <PageContainer
      role="supervisor"
      title="Manage Accreditation Evaluations"
      description="View and monitor applications"
    >
      <EvaluationsSubNav role="supervisor" />
      <SharedApplicationsList
        role="supervisor"
        basePath="/supervisor/evaluations/applications"
      />
    </PageContainer>
  );
}
