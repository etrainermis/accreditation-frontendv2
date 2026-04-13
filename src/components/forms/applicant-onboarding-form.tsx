"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Building, MapPin, User, ClipboardList, Users, CheckCircle, Plus } from "lucide-react";

import {
  applicantOnboardingSteps,
  type ApplicantOnboardingStepKey,
} from "@/lib/constants/applicant-onboarding";

import { InstitutionDetailsStep } from "./onboarding-steps/institution-details-step";
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
let globalCertificates: Record<string, File | File[] | null> = {};

export function ApplicantOnboardingForm({ step }: { step: ApplicantOnboardingStepKey }) {
  const [institutionSubStep, setInstitutionSubStep] = useState<1 | 2>(1);
  const [certificates, setCertificates] = useState<Record<string, File | File[] | null>>(globalCertificates);

  const [legalReps, setLegalReps] = useState<LegalRep[]>(globalLegalReps);
  const [isAddingRep, setIsAddingRep] = useState(false);
  const [newRep, setNewRep] = useState<LegalRep>({ firstName: "", lastName: "", position: "", gender: "Male", email: "", phone: "" });
  const [aboutText, setAboutText] = useState<Record<string, string>>(globalAboutText);
  const [aboutSubStep, setAboutSubStep] = useState<1 | 2 | 3>(1);
  const [staffNumber, setStaffNumber] = useState(0);
  const [staffList, setStaffList] = useState<TechnicalStaffEntry[]>(globalStaffList);
  const [newStaff, setNewStaff] = useState<TechnicalStaff>({ qualification: "", specialization: "", status: "" });
  const [editingStaffIdx, setEditingStaffIdx] = useState<number | null>(null);
  const [staffToDelete, setStaffToDelete] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>(globalFormData);

  // Sync back to globals
  useEffect(() => { globalFormData = formData; }, [formData]);
  useEffect(() => { globalLegalReps = legalReps; }, [legalReps]);
  useEffect(() => { globalStaffList = staffList; }, [staffList]);
  useEffect(() => { globalAboutText = aboutText; }, [aboutText]);
  useEffect(() => { globalCertificates = certificates; }, [certificates]);

  const config = applicantOnboardingSteps.find((item) => item.key === step);

  if (!config) {
    return null;
  }

  const currentStepIndex = applicantOnboardingSteps.findIndex((item) => item.key === step);
  const nextStep = getNextStep(step);
  const previousStep = getPreviousStep(step);
  const isLastStep = !nextStep;
  const StepIcon = stepIcons[currentStepIndex] || Building;

  const renderStep = () => {
    switch (step) {
      case "institution-details":
        return (
          <InstitutionDetailsStep
            subStep={institutionSubStep}
            setSubStep={setInstitutionSubStep}
            certificates={certificates}
            setCertificates={setCertificates}
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
            certificates={certificates}
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

      <div className="pt-2">{renderStep()}</div>

      <div className="flex items-center gap-4 pt-4">
        {(() => {
          let secondaryBtn = null;
          let primaryBtn = null;

          if (step === "institution-details" && institutionSubStep === 2) {
            secondaryBtn = (
              <button type="button" onClick={() => setInstitutionSubStep(1)} className="flex w-1/2 items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 cursor-pointer">
                Back
              </button>
            );
          } else if (step === "about-the-institution" && aboutSubStep > 1) {
            secondaryBtn = (
              <button type="button" onClick={() => setAboutSubStep((prev) => (prev - 1) as 1 | 2 | 3)} className="flex w-1/2 items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 cursor-pointer">
                Back
              </button>
            );
          } else if (step === "legal-representatives" && isAddingRep && legalReps.length > 0) {
            secondaryBtn = (
              <button type="button" onClick={() => setIsAddingRep(false)} className="flex w-1/3 items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50 cursor-pointer">
                Cancel
              </button>
            );
          } else if (previousStep) {
            secondaryBtn = (
              <Link href={`/applicant/onboarding/${previousStep.key}`} className="flex w-1/3 items-center justify-center rounded-sm border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:bg-slate-50">
                Back
              </Link>
            );
          }

          const primaryWidth = secondaryBtn ? ((step === "institution-details" && institutionSubStep === 2) || (step === "about-the-institution" && aboutSubStep > 1) ? 'w-1/2' : 'w-2/3') : 'w-full';

          if (step === "institution-details" && institutionSubStep === 1) {
            primaryBtn = (
              <button type="button" onClick={() => setInstitutionSubStep(2)} className={`flex ${primaryWidth} items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 cursor-pointer`}>
                Continue
              </button>
            );
          } else if (step === "about-the-institution" && aboutSubStep < 3) {
            primaryBtn = (
              <button type="button" onClick={() => setAboutSubStep((prev) => (prev + 1) as 1 | 2 | 3)} className={`flex ${primaryWidth} items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 cursor-pointer`}>
                Continue
              </button>
            );
          } else if (step === "legal-representatives" && (isAddingRep || legalReps.length === 0)) {
            primaryBtn = (
              <button
                type="button"
                onClick={() => {
                  setLegalReps([...legalReps, newRep]);
                  setIsAddingRep(false);
                  setNewRep({ firstName: "", lastName: "", position: "", gender: "Male", email: "", phone: "" });
                }}
                className={`flex ${primaryWidth} items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 cursor-pointer`}
              >
                Save Representative
              </button>
            );
          } else {
            primaryBtn = (
              <Link href={isLastStep ? "/applicant/dashboard" : `/applicant/onboarding/${nextStep.key}`} className={`flex ${primaryWidth} items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 cursor-pointer`}>
                {isLastStep ? "Confirm and Submit" : "Continue"}
              </Link>
            );
          }

          return (
            <>
              {secondaryBtn}
              {primaryBtn}
            </>
          );
        })()}
      </div>

      <div className="flex items-center justify-center pt-2">
        <button
          type="button"
          onClick={() => {
            alert("Application saved as draft successfully!");
          }}
          className="text-[13px] font-medium text-slate-400 hover:text-slate-600 transition-colors py-2 px-4 cursor-pointer"
        >
          Save as Draft
        </button>
      </div>

      {staffToDelete !== null && (
        <DeleteStaffModal
          onCancel={() => setStaffToDelete(null)}
          onConfirm={() => {
            setStaffList(staffList.filter((_, i) => i !== staffToDelete));
            setStaffToDelete(null);
          }}
        />
      )}
    </div>
  );
}
