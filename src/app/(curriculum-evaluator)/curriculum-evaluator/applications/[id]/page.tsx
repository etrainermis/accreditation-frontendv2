"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { CurriculumReviewView } from "@/features/curriculum/components/curriculum-review-view";
import { useParams } from "next/navigation";

export default function CurriculumReviewPage() {
  const params = useParams();
  const id = params.id as string;

  return (
    <PageContainer 
      role="curriculum-evaluator" 
      title="Curriculum Document Review" 
      description="Examine curriculum materials and provide accreditation feedback."
      hideSidebar={true}
    >
      <CurriculumReviewView id={id} />
    </PageContainer>
  );
}
