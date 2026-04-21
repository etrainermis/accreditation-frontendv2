"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { SharedEvaluationContainer } from "@/features/evaluations/components/shared-evaluation-container";
import { useGetApplicationDetails } from "@/hooks/queries/useApplicationQueries";
import { Loader2 } from "lucide-react";

export default function EvaluatorApplicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const { data: application, isLoading } = useGetApplicationDetails(id);

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-10 w-10 animate-spin text-[#0A77FF]" />
      </div>
    );
  }

  const appTitle = application 
    ? `${application.institution?.name || application.applicantName} ${application.trade?.name || ""} Application`
    : "Application Details";

  return (
    <PageContainer
      role="evaluator"
      hideSidebar={false}
      title={appTitle}
      description="Review and evaluate the accreditation application."
      breadcrumbs={[
        { label: "Evaluations", href: "/evaluator/applications" },
        { label: "Applications", href: "/evaluator/applications" },
        { 
          label: application?.institution?.name || application?.applicantName || "Application", 
          href: "#" 
        },
      ]}
    >
      <SharedEvaluationContainer id={id} role="evaluator" />
    </PageContainer>
  );
}
