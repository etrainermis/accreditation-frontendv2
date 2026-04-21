"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { Plus } from "lucide-react";
import { ApplicationWizard } from "@/components/forms/application-wizard";

export default function ApplicantApplicationsPage() {
  const [showWizard, setShowWizard] = useState(false);

  return (
    <PageContainer
      role="applicant"
      title="Apply For Short Course"
      description="Create and manage your accreditation applications for the selected trades."
      action={
        <button 
          onClick={() => setShowWizard(true)}
          className="flex h-[38px] items-center justify-center gap-1.5 rounded-lg bg-[#0A77FF] px-4 text-[13px] font-medium text-white transition-colors hover:bg-blue-600"
        >
          New Application
          <Plus className="h-3.5 w-3.5" strokeWidth={2.5} />
        </button>
      }
    >
      {showWizard ? (
        <ApplicationWizard 
          onQuit={() => setShowWizard(false)} 
          onSubmit={() => setShowWizard(false)} 
        />
      ) : (
        <div className="flex flex-col items-center justify-center h-full py-20 bg-white rounded-2xl border border-slate-100">
           <div className="bg-blue-50 p-4 rounded-full mb-4">
              <Plus className="w-8 h-8 text-[#0A77FF]" />
           </div>
           <h3 className="text-lg font-semibold text-slate-800">No Applications Yet</h3>
           <p className="text-slate-500 max-w-xs text-center mt-2 mb-6">
             Start your accreditation process by creating a new application for your training programs.
           </p>
           <button 
             onClick={() => setShowWizard(true)}
             className="px-6 py-2.5 bg-[#0A77FF] text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
           >
             Start New Application
           </button>
        </div>
      )}
    </PageContainer>
  );
}
