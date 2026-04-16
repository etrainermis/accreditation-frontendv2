"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { CurriculumReviewView } from "@/features/curriculum/components/curriculum-review-view";
import { mockApplications } from "@/lib/utils/application-utils";

export default function CurriculumReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const application = mockApplications.find((item) => item.id === id) || mockApplications[0];

  return (
    <PageContainer 
      role="curriculum-evaluator" 
      title={`${application.institution.name} Curriculum Review`} 
      description="Verify curriculum completeness, standards alignment, and supporting assessment evidence."
      breadcrumbs={[
        { label: "Applications", href: "/curriculum-evaluator/applications" },
        { label: application.institution.name, href: "#" },
      ]}
    >
      <CurriculumReviewView id={id} />
    </PageContainer>
  );
}
