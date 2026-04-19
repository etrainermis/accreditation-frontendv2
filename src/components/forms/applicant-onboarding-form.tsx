"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Building, CheckCircle, ClipboardList, MapPin, User, Users, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
import { 
  getMyInstitution, 
  getMyAdministrativeProfile, 
  createInstitution, 
  createAdministrativeProfile 
} from "@/lib/api/onboarding-api";

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
  
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const router = useRouter();

  // Load existing data on mount (Resume logic)
  useEffect(() => {
    async function loadData() {
      // Check if user is logged in
      const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const instRes = await getMyInstitution();
        if (instRes.success && instRes.data) {
          const inst = instRes.data;
          const mappedFormData: Record<string, string> = {
            institutionName: inst.institutionName,
            institutionEmail: inst.institutionEmail,
            phoneNumber: inst.phoneNumber,
            poBox: inst.poBox,
            institutionType: inst.institutionType,
            institutionCategory: inst.institutionCategory || "SCHOOL",
          };

          if (inst.locationAddress) {
            mappedFormData.province = inst.locationAddress.province;
            mappedFormData.district = inst.locationAddress.district;
            mappedFormData.sector = inst.locationAddress.sector;
            mappedFormData.cell = inst.locationAddress.cell;
            mappedFormData.village = inst.locationAddress.village;
            mappedFormData.address_line = inst.locationAddress.address_line;
          }

          setFormData(prev => ({ ...prev, ...mappedFormData }));
          setAboutText({
            institutionSummary: inst.institutionSummary || "",
            mission: inst.mission || "",
            programsOffered: inst.programsOffered || "",
          });
        }

        const adminRes = await getMyAdministrativeProfile();
        if (adminRes.success && adminRes.data) {
          const admin = adminRes.data;
          
          if (admin.representatives) {
            setLegalReps(admin.representatives.map((r: any) => ({
              firstName: r.firstName,
              lastName: r.lastName,
              email: r.email,
              phone: r.phoneNumber,
              position: r.position,
              gender: r.gender,
            })));
          }

          if (admin.staffList) {
            setStaffList(admin.staffList.map((s: any) => ({
              qualification: s.qualification,
              specialization: s.specialization,
              number: s.numberStaff,
              status: s.availabilityStatus,
            })));
          }
        }
      } catch (error) {
        console.error("Error loading onboarding data:", error);
      } finally {
        setIsInitialLoading(false);
      }
    }

    loadData();
  }, []);

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

  const nextStep = getNextStep(step);
  const previousStep = getPreviousStep(step);
  const isLastStep = !nextStep;
  const currentStepIndex = applicantOnboardingSteps.findIndex((item) => item.key === step);
  const StepIcon = stepIcons[currentStepIndex] || Building;

  async function handlePersistData(isFinalSubmit = false) {
    setIsLoading(true);
    try {
      // 1. Prepare Institution FormData
      const instFormData = new FormData();
      instFormData.append("institutionName", formData.institutionName || "");
      instFormData.append("institutionEmail", formData.institutionEmail || "");
      instFormData.append("phoneNumber", formData.phoneNumber || "");
      instFormData.append("poBox", formData.poBox || "");
      instFormData.append("institutionType", formData.institutionType || "PRIVATE");
      instFormData.append("institutionCategory", formData.institutionCategory || "SCHOOL");
      
      // Address nested in Institution object in backend? Let's check DTO.
      // Usually flattened or nested in DTO.
      instFormData.append("province", formData.province || "");
      instFormData.append("district", formData.district || "");
      instFormData.append("sector", formData.sector || "");
      instFormData.append("cell", formData.cell || "");
      instFormData.append("village", formData.village || "");
      instFormData.append("address_line", formData.address_line || "");

      instFormData.append("institutionSummary", aboutText.institutionSummary || "");
      instFormData.append("mission", aboutText.mission || "");
      instFormData.append("programsOffered", aboutText.programsOffered || "");

      // Handle files
      if (certificates.regCert) instFormData.append("registrationCertificate", certificates.regCert as File);
      if (certificates.appLetter) instFormData.append("applicationLetter", certificates.appLetter as File);
      if (certificates.trainingContent) instFormData.append("trainingContent", certificates.trainingContent as File);
      if (certificates.infraPhoto) instFormData.append("photographInfrastructure", certificates.infraPhoto as File);
      if (certificates.equipOwnership) instFormData.append("equipmentOwnership", certificates.equipOwnership as File);
      if (certificates.premOwnership) instFormData.append("premisesOwnership", certificates.premOwnership as File);
      if (certificates.skillsGap) instFormData.append("skillsGapReport", certificates.skillsGap as File);
      if (certificates.mou) instFormData.append("mouWithPartners", certificates.mou as File);
      if (certificates.otherDocs) instFormData.append("otherDocuments", certificates.otherDocs as File);

      const instResult = await createInstitution(instFormData);
      if (!instResult.success) throw new Error(instResult.message || "Failed to save institution details");

      // 2. Prepare Administrative FormData
      const adminFormData = new FormData();
      
      // Representatives
      legalReps.forEach((rep, index) => {
        adminFormData.append(`representatives[${index}].firstName`, rep.firstName);
        adminFormData.append(`representatives[${index}].lastName`, rep.lastName);
        adminFormData.append(`representatives[${index}].email`, rep.email);
        adminFormData.append(`representatives[${index}].phoneNumber`, rep.phone);
        adminFormData.append(`representatives[${index}].position`, rep.position);
        adminFormData.append(`representatives[${index}].gender`, rep.gender);
      });

      // Staff List
      staffList.forEach((staff, index) => {
        adminFormData.append(`staffList[${index}].qualification`, staff.qualification);
        adminFormData.append(`staffList[${index}].specialization`, staff.specialization);
        adminFormData.append(`staffList[${index}].numberStaff`, String(staff.number));
        adminFormData.append(`staffList[${index}].availabilityStatus`, staff.status);
      });

      const adminResult = await createAdministrativeProfile(adminFormData);
      if (!adminResult.success) throw new Error(adminResult.message || "Failed to save administrative profile");

      if (isFinalSubmit) {
        toast.success("Application submitted successfully!");
        router.push("/applicant/dashboard");
      } else {
        toast.success("Progress saved as draft");
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred while saving");
    } finally {
      setIsLoading(false);
    }
  }

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
            files={{
              mou: (certificates["mou"] as File) || null,
              registration: (certificates["regCert"] as File) || null,
            }}
            legalReps={legalReps}
            aboutText={aboutText}
            staffList={staffList}
          />
        );
      default:
        return null;
    }
  };

  if (isInitialLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
        <p className="text-slate-500 font-medium">Loading your application...</p>
      </div>
    );
  }

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
          } else if (isLastStep) {
            primaryBtn = (
              <button 
                type="button"
                disabled={isLoading}
                onClick={() => handlePersistData(true)}
                className={`flex ${primaryWidth} items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 cursor-pointer disabled:opacity-50`}
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Confirm and Submit
              </button>
            );
          } else {
            primaryBtn = (
              <Link href={`/applicant/onboarding/${nextStep.key}`} className={`flex ${primaryWidth} items-center justify-center rounded-sm bg-blue-600 px-4 py-2.5 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/20 cursor-pointer`}>
                Continue
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
          disabled={isLoading}
          onClick={() => handlePersistData(false)}
          className="text-[13px] font-medium text-slate-400 hover:text-slate-600 transition-colors py-2 px-4 cursor-pointer disabled:opacity-50 flex items-center"
        >
          {isLoading ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : null}
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
