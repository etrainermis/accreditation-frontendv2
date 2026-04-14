"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { SharedEvaluationContainer } from "@/features/evaluations/components/shared-evaluation-container";
import { mockApplications } from "@/lib/utils/application-utils";

export default function SupervisorApplicationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const application = mockApplications.find(app => app.id === id) || mockApplications[0];

  return (
    <PageContainer
      role="supervisor"
      hideSidebar={false}
      noPadding={true}
      noScroll={true}
      title={`${application.institution.name} ${application.trade.name} Accreditation Application`}
      description="View application details and grant certificate access"
      breadcrumbs={[
        { label: "Evaluations", href: "/supervisor/evaluations/applications" },
        { label: "Applications", href: "/supervisor/evaluations/applications" },
        { label: `${application.institution.name} ${application.trade.name}`, href: "#" },
      ]}
    >
      <SharedEvaluationContainer id={id} role="supervisor" />
    </PageContainer>
  );
}
