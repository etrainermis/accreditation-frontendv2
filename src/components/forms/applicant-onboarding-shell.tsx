import Link from "next/link";

import { applicantOnboardingSteps } from "@/lib/constants/applicant-onboarding";

export function ApplicantOnboardingShell({
  currentStep,
  children,
}: {
  currentStep: string;
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen bg-[#f8fafc] lg:grid-cols-[320px_1fr]">
      <aside className="flex flex-col border-r border-slate-200 bg-white px-8 py-10">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-slate-900">RTB Accreditation</p>
            <Link href="/login" className="inline-flex text-sm text-[var(--primary)]">
              Go back
            </Link>
          </div>
          <div className="space-y-5">
            {applicantOnboardingSteps.map((step, index) => {
              const isActive = step.key === currentStep;
              const isComplete = applicantOnboardingSteps.findIndex((item) => item.key === currentStep) > index;

              return (
                <div key={step.key} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold ${
                        isActive
                          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                          : isComplete
                            ? "border-[var(--primary-soft-strong)] bg-[var(--primary-soft)] text-[var(--primary)]"
                            : "border-slate-200 bg-slate-50 text-slate-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                    {index < applicantOnboardingSteps.length - 1 ? <span className="mt-2 h-8 w-px bg-slate-200" /> : null}
                  </div>
                  <div className="pt-1">
                    <p className={`text-sm font-medium ${isActive ? "text-slate-900" : "text-slate-400"}`}>
                      {step.title}
                    </p>
                    <p className={`mt-1 text-xs leading-5 ${isActive ? "text-slate-500" : "text-slate-300"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-auto text-xs text-slate-400">© RTB 2025</p>
      </aside>
      <section className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-2xl rounded-[2rem] bg-white px-8 py-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
          {children}
        </div>
      </section>
    </main>
  );
}
