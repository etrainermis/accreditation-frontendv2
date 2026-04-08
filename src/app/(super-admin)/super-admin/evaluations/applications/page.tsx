"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { SharedApplicationsList } from "@/features/evaluations/components/shared-applications-list";

export default function SuperAdminApplicationsPage() {
  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      <SharedApplicationsList
        role="super-admin"
        basePath="/super-admin/evaluations/applications"
      />
    </PageContainer>
  );
}
