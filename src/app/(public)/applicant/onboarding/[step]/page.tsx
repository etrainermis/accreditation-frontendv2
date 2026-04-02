import { notFound } from "next/navigation";

import { ApplicantOnboardingForm } from "@/components/forms/applicant-onboarding-form";
import { ApplicantOnboardingShell } from "@/components/forms/applicant-onboarding-shell";
import {
  applicantOnboardingSteps,
  type ApplicantOnboardingStepKey,
} from "@/lib/constants/applicant-onboarding";

export default async function ApplicantOnboardingStepPage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const isValidStep = applicantOnboardingSteps.some((item) => item.key === step);

  if (!isValidStep) {
    notFound();
  }

  return (
    <ApplicantOnboardingShell currentStep={step}>
      <ApplicantOnboardingForm step={step as ApplicantOnboardingStepKey} />
    </ApplicantOnboardingShell>
  );
}
