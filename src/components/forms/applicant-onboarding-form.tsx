import Link from "next/link";

import {
  applicantOnboardingSteps,
  type ApplicantOnboardingStepKey,
} from "@/lib/constants/applicant-onboarding";

function getNextStep(step: ApplicantOnboardingStepKey) {
  const index = applicantOnboardingSteps.findIndex((item) => item.key === step);
  return applicantOnboardingSteps[index + 1];
}

function getPreviousStep(step: ApplicantOnboardingStepKey) {
  const index = applicantOnboardingSteps.findIndex((item) => item.key === step);
  return applicantOnboardingSteps[index - 1];
}

export function ApplicantOnboardingForm({ step }: { step: ApplicantOnboardingStepKey }) {
  const config = applicantOnboardingSteps.find((item) => item.key === step);

  if (!config) {
    return null;
  }

  const nextStep = getNextStep(step);
  const previousStep = getPreviousStep(step);
  const isLastStep = !nextStep;

  return (
    <div className="space-y-8">
      <div className="space-y-3 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 text-[var(--primary)]">
          {applicantOnboardingSteps.findIndex((item) => item.key === step) + 1}
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{config.title}</h1>
          <p className="mt-2 text-sm text-slate-500">{config.description}</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {config.fields.map((field, index) => (
          <label key={field} className={`space-y-2 text-sm ${index === 0 ? "md:col-span-2" : ""}`}>
            <span className="font-medium text-slate-700">{field}</span>
            <input
              className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
              placeholder={`Enter ${field.toLowerCase()}`}
            />
          </label>
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        {previousStep ? (
          <Link
            href={`/applicant/onboarding/${previousStep.key}`}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600"
          >
            Back
          </Link>
        ) : (
          <Link href="/login" className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-600">
            Back
          </Link>
        )}

        <Link
          href={isLastStep ? "/applicant/dashboard" : `/applicant/onboarding/${nextStep.key}`}
          className="rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white"
        >
          {isLastStep ? "Finish and enter portal" : "Continue"}
        </Link>
      </div>
    </div>
  );
}
