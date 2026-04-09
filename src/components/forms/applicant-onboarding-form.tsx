"use client";
import Link from "next/link";

import {
  applicantOnboardingSteps,
  type ApplicantOnboardingStepKey,
} from "@/lib/constants/applicant-onboarding";
import { useState, useEffect } from "react";

import { InstitutionDetailsStep } from "./onboarding-steps/institution-details-step";
import { Building, MapPin, User, ClipboardList, Users, CheckCircle } from "lucide-react";
import { AddressInformationStep } from "./onboarding-steps/address-information-step";
import { LegalRepresentativesStep, type LegalRep } from "./onboarding-steps/legal-representatives-step";
import { AboutInstitutionStep } from "./onboarding-steps/about-institution-step";
import { TechnicalStaffStep, type TechnicalStaff, type TechnicalStaffEntry } from "./onboarding-steps/technical-staff-step";
import { ReviewApplicationStep } from "./onboarding-steps/review-step";
import { DeleteStaffModal } from "./onboarding-steps/delete-staff-modal";
import { FormSectionHeader } from "./form-section-header";

const stepIcons = [Building, MapPin, User, ClipboardList, Users, CheckCircle];

function getNextStep(step: ApplicantOnboardingStepKey) {
  const index = applicantOnboardingSteps.findIndex((item) => item.key === step);
  return applicantOnboardingSteps[index + 1];
}

function getPreviousStep(step: ApplicantOnboardingStepKey) {
  const index = applicantOnboardingSteps.findIndex((item) => item.key === step);
  return applicantOnboardingSteps[index - 1];
}

// Global cached variables to persist data across Next.js route unmounts
let globalFormData: Record<string, string> = {};
let globalLegalReps: LegalRep[] = [];
let globalStaffList: TechnicalStaffEntry[] = [];
let globalAboutText: Record<string, string> = {};
let globalMouFile: File | null = null;
let globalRegCertFile: File | null = null;

export function ApplicantOnboardingForm({ step }: { step: ApplicantOnboardingStepKey }) {
  const [institutionSubStep, setInstitutionSubStep] = useState<1 | 2>(1);
  const [mouFile, setMouFile] = useState<File | null>(globalMouFile);
  const [regCertFile, setRegCertFile] = useState<File | null>(globalRegCertFile);

  const [legalReps, setLegalReps] = useState<LegalRep[]>(globalLegalReps);
  const [isAddingRep, setIsAddingRep] = useState(false);
  const [newRep, setNewRep] = useState<LegalRep>({ firstName: "", lastName: "", position: "", gender: "Male", email: "", phone: "" });
  const [aboutText, setAboutText] = useState<Record<string, string>>(globalAboutText);
  const [aboutSubStep, setAboutSubStep] = useState<1 | 2 | 3>(1);
  const [staffNumber, setStaffNumber] = useState(0);
  const [staffList, setStaffList] = useState<TechnicalStaffEntry[]>(globalStaffList);
  const [newStaff, setNewStaff] = useState<TechnicalStaff>({ qualification: "", position: "", status: "" });
  const [editingStaffIdx, setEditingStaffIdx] = useState<number | null>(null);
  const [staffToDelete, setStaffToDelete] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>(globalFormData);

  // Sync back to globals
  useEffect(() => { globalFormData = formData; }, [formData]);
  useEffect(() => { globalLegalReps = legalReps; }, [legalReps]);
  useEffect(() => { globalStaffList = staffList; }, [staffList]);
  useEffect(() => { globalAboutText = aboutText; }, [aboutText]);
  useEffect(() => { globalMouFile = mouFile; }, [mouFile]);
  useEffect(() => { globalRegCertFile = regCertFile; }, [regCertFile]);

  const config = applicantOnboardingSteps.find((item) => item.key === step);

  if (!config) {
    return null;
  }

  const nextStep = getNextStep(step);
  const previousStep = getPreviousStep(step);
  const isLastStep = !nextStep;
  const currentStepIndex = applicantOnboardingSteps.findIndex((item) => item.key === step);
  const StepIcon = stepIcons[currentStepIndex] || Building;

  const renderStep = () => {
    switch (step) {
      case "institution-details":
        return (
          <InstitutionDetailsStep
            subStep={institutionSubStep}
            setSubStep={setInstitutionSubStep}
            mouFile={mouFile}
            setMouFile={setMouFile}
            regCertFile={regCertFile}
            setRegCertFile={setRegCertFile}
            formData={formData}
            setFormData={setFormData}
          />
        );
      case "address-information":
        return <AddressInformationStep formData={formData} setFormData={setFormData} />;
      case "legal-representatives":
        return <LegalRepresentativesStep isAddingRep={isAddingRep} legalReps={legalReps} newRep={newRep} setNewRep={setNewRep} />;
      case "about-the-institution":
        return <AboutInstitutionStep fields={config.fields} subStep={aboutSubStep} aboutText={aboutText} setAboutText={setAboutText} />;
      case "technical-and-administrative-staff":
        return (
          <TechnicalStaffStep
            newStaff={newStaff}
            setNewStaff={setNewStaff}
            staffNumber={staffNumber}
            setStaffNumber={setStaffNumber}
            staffList={staffList}
            setStaffList={setStaffList}
            editingStaffIdx={editingStaffIdx}
            setEditingStaffIdx={setEditingStaffIdx}
            onDeleteStaff={(idx) => setStaffToDelete(idx)}
          />
        );
      case "review-application":
        return (
          <ReviewApplicationStep
            formData={formData}
            mouFile={mouFile}
            regCertFile={regCertFile}
            legalReps={legalReps}
            aboutText={aboutText}
            staffList={staffList}
          />
        );
      default:
        return (
          <div className="grid gap-4 md:grid-cols-2">
            {config.fields.map((field, index) => (
              <label key={field} className={`space-y-2.5 flex flex-col ${index === 0 ? "md:col-span-2" : ""}`}>
                <span className="text-xs font-medium text-slate-700">
                  {field} <span className="text-red-500">*</span>
                </span>
                <input
                  className="w-full rounded-sm border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-blue-500"
                  placeholder={`Enter ${field.toLowerCase()}`}
                />
              </label>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <FormSectionHeader
        icon={StepIcon}
        title={config.title}
        description={config.description}
      >
        {step === "legal-representatives" && (
          <div className="flex items-center justify-between mt-1 px-1">
            <p className="text-[13px] text-blue-500 font-medium">
              You can add up to {3 - legalReps.length} {3 - legalReps.length === 1 ? 'more person' : 'People'}
            </p>
            {legalReps.length > 0 && !isAddingRep && legalReps.length < 3 && (
              <button
                type="button"
                onClick={() => setIsAddingRep(true)}
                className="text-[13px] font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer"
              >
                Add another <Plus className="h-4 w-4" />
              </button>
            )}
          </div>
        )}
      </FormSectionHeader>

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
