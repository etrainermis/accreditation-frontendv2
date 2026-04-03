import Link from "next/link";
import Image from "next/image";
import { Building, MapPin, User, ClipboardList, Users, ArrowLeft, CheckCircle } from "lucide-react";
import React from "react";

import { applicantOnboardingSteps } from "@/lib/constants/applicant-onboarding";
import { DotPatternBackground } from "@/components/layout/dot-pattern-background";
import { getCurrentYear } from "@/lib/utils/date";

const stepIcons = [Building, MapPin, User, ClipboardList, Users, CheckCircle];

export function ApplicantOnboardingShell({
  currentStep,
  children,
}: {
  currentStep: string;
  children: React.ReactNode;
}) {
  return (
    <main className="grid min-h-screen bg-white lg:grid-cols-[340px_1fr]">
      <aside className="relative flex flex-col justify-between border-r border-slate-200 bg-[#f8fafc] px-8 pt-8 pb-4 z-10">
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/images/branding/rtb-logo.png" 
                alt="RTB Logo" 
                width={55} 
                height={35} 
                className="object-contain mix-blend-multiply" 
              />
              <div className="flex flex-col">
                <span className="text-[15px] font-medium text-slate-700 leading-tight">RTB</span>
                <span className="text-[15px] text-slate-600 leading-tight">Accreditation</span>
              </div>
            </div>

            <Link href="/login" className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 transition-colors hover:text-blue-700">
              <ArrowLeft className="h-3.5 w-3.5" /> Go back
            </Link>
          </div>

          <div className="space-y-1">
            {applicantOnboardingSteps.map((step, index) => {
              const isActive = step.key === currentStep;
              const isComplete = applicantOnboardingSteps.findIndex((item) => item.key === currentStep) > index;
              const Icon = stepIcons[index] || Building;

              return (
                <div key={step.key} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-md border transition-colors ${
                        isActive
                          ? "border-slate-200 bg-white text-slate-800 shadow-sm"
                          : isComplete
                            ? "border-transparent text-slate-400"
                            : "border-transparent text-slate-300"
                      }`}
                    >
                      <Icon className="h-4 w-4 stroke-[1.5]" />
                    </span>
                    {index < applicantOnboardingSteps.length - 1 ? (
                      <span className="my-1.5 h-6 w-px border-l-[1.5px] border-dotted border-slate-200" />
                    ) : null}
                  </div>
                  <div className="pt-2">
                    <p className={`text-sm font-medium ${isActive ? "text-slate-800" : isComplete ? "text-slate-400" : "text-slate-400"}`}>
                      {step.title}
                    </p>
                    <p className={`mt-0.5 text-xs leading-relaxed max-w-[190px] ${isActive ? "text-slate-500" : "text-slate-300"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-12 text-xs text-slate-400 font-medium">© RTB {getCurrentYear()}</div>
      </aside>
      
      <section className="relative w-full h-full bg-white z-0">
        <DotPatternBackground>
          <div className="flex min-h-screen items-center justify-center px-4 py-8 relative">
            <div className="z-10 w-full max-w-[420px] bg-transparent pt-2">
              {children}
            </div>
          </div>
        </DotPatternBackground>
      </section>
    </main>
  );
}
