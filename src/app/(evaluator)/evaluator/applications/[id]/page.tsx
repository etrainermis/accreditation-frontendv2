"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { SharedEvaluationContainer } from "@/features/evaluations/components/shared-evaluation-container";
import { mockApplications } from "@/lib/utils/application-utils";

export default function EvaluatorApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const application = mockApplications.find(app => app.id === id) || mockApplications[0];

  return (
    <PageContainer
      role="evaluator"
      hideSidebar={false}
      title={`${application.institution.name} ${application.trade.name} Accreditation Application`}
      description="Create and manage your accreditation applications for the selected trades."
      breadcrumbs={[
        { label: "Evaluations", href: "/evaluator/applications" },
        { label: "Applications", href: "/evaluator/applications" },
        { label: `${application.institution.name} ${application.trade.name}`, href: "#" },
      ]}
    >
      <SharedEvaluationContainer id={id} role="evaluator" />
    </PageContainer>
  );
}
