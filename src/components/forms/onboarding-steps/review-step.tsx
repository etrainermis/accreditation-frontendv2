"use client";

import Link from "next/link";
import { CheckCircle, FileText } from "lucide-react";
import type { TechnicalStaffEntry } from "./technical-staff-step";
import type { LegalRep } from "./legal-representatives-step";

interface ReviewApplicationStepProps {
  formData: Record<string, string>;
  files: {
    registration: File | null;
    mou: File | null;
  };
  legalReps: LegalRep[];
  aboutText: Record<string, string>;
  staffList: TechnicalStaffEntry[];
}

const ALL_DOC_LABELS: Record<string, string> = {
  appLetter: "Application Letter",
  trainContent: "Training Content",
  nesaAccred: "Accreditation from NESA",
  mou: "Signed MOU with Partners",
  other: "Other Necessary Documents",
  trainContentCurric: "Training Content / Curriculum",
  regCert: "Recognized Registration Certificate",
  infraPhotos: "Photographs of Infrastructures",
  equipOwnership: "Proof of ownership of training equipment",
  premiseOwnership: "Proof of ownership/renting of training premises",
  skillsGap: "Signed skills gap report",
};

export function ReviewApplicationStep({
  formData,
  files,
  legalReps,
  aboutText,
  staffList,
}: ReviewApplicationStepProps) {
  const uploadedDocIds = Object.keys(certificates).filter(id => {
    const file = certificates[id];
    return Array.isArray(file) ? file.length > 0 : !!file;
  });

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm overflow-hidden text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mb-3">
          <CheckCircle className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-base  text-slate-800">Ready to Submit!</h3>
        <p className="mt-1 text-sm text-slate-500 max-w-sm mx-auto">
          Please review your application details below. Once confirmed, your application will be successfully routed.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50/50 px-5 py-3.5 flex items-center justify-between">
            <h4 className="text-[13px]  text-slate-800">Institution Details</h4>
            <Link href="/applicant/onboarding/institution-details" className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition">Edit</Link>
          </div>
          <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Name of Institution</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["Name of Institution"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Institution Type</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["Institution Type"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Email</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["Email"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Phone Number</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["Phone Number"] ? `+250 ${formData["Phone Number"]}` : <span className="italic text-slate-400">Not provided</span>}</p>
            </div>

            <div className="col-span-2 pt-3 mt-1 border-t border-slate-100 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[12px] text-slate-500 block">Registration Certificate</span>
                {files.registration ? (
                  <div className="flex items-center gap-2 text-slate-700 mt-1">
                    <FileText className="h-4 w-4 text-blue-500" />
                    <span className="text-[13.5px] font-medium truncate max-w-[150px]">{files.registration.name}</span>
                  </div>
                ) : (
                  <p className="text-[13.5px] italic text-slate-400 mt-0.5">No file uploaded</p>
                )}
              </div>
              <div className="space-y-1">
                <span className="text-[12px] text-slate-500 block">MOU (Signed)</span>
                {files.mou ? (
                  <div className="flex items-center gap-2 text-slate-700 mt-1">
                    <FileText className="h-4 w-4 text-emerald-500" />
                    <span className="text-[13.5px] font-medium truncate max-w-[150px]">{files.mou.name}</span>
                  </div>
                ) : (
                  <p className="text-[13.5px] italic text-slate-400 col-span-2">No documents uploaded</p>
                )}
              </div>
            </div>

          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50/50 px-5 py-3.5 flex items-center justify-between">
            <h4 className="text-[13px]  text-slate-800">Address Information</h4>
            <Link href="/applicant/onboarding/address-information" className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition">Edit</Link>
          </div>
          <div className="p-5 grid grid-cols-2 gap-y-4 gap-x-6">
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Location Context</span>
              <p className="text-[13.5px] font-medium text-slate-800">
                {[formData["Province"], formData["District"], formData["Sector"]].filter(Boolean).join(", ") || <span className="italic text-slate-400">Not provided</span>}
              </p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Address Line</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["Address Line"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50/50 px-5 py-3.5 flex items-center justify-between">
            <h4 className="text-[13px]  text-slate-800">Legal Representatives</h4>
            <Link href="/applicant/onboarding/legal-representatives" className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition">Edit</Link>
          </div>
          <div className="p-5">
            {legalReps.length > 0 ? (
              <div className="space-y-3">
                {legalReps.map((rep, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs  uppercase">
                      {rep.firstName?.[0] || ""}{rep.lastName?.[0] || ""}
                    </div>
                    <div>
                      <p className="text-[13.5px]  text-slate-800">{rep.firstName} {rep.lastName}</p>
                      <p className="text-[12px] text-slate-500">{rep.position} • {rep.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[13.5px] italic text-slate-400 py-1">No legal representatives added</p>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50/50 px-5 py-3.5 flex items-center justify-between">
            <h4 className="text-[13px]  text-slate-800">About the Institution</h4>
            <Link href="/applicant/onboarding/about-the-institution" className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition">Edit</Link>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Institution&apos;s Mission</span>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">{aboutText["Institution's mission"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Institution&apos;s Vision</span>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">{aboutText["Institution's vision"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-slate-100 bg-slate-50/50 px-5 py-3.5 flex items-center justify-between">
            <h4 className="text-[13px]  text-slate-800">Staff Constraints</h4>
            <Link href="/applicant/onboarding/technical-and-administrative-staff" className="text-[13px] font-medium text-blue-600 hover:text-blue-700 transition">Edit</Link>
          </div>
          <div className="p-5">
            {staffList.length > 0 ? (
              <div className="space-y-3">
                {staffList.map((staff, idx) => (
                  <div key={idx} className="flex items-center justify-between bg-slate-50 rounded-lg p-3 border border-slate-100">
                    <div>
                      <p className="text-[13.5px]  text-slate-800">{staff.specialization}</p>
                      <p className="text-[12px] text-slate-500">{staff.qualification} • {staff.status}</p>
                    </div>
                    <div className="px-3 py-1 bg-white border border-slate-200 rounded-sm text-[12px]  text-slate-600 shadow-sm">
                      {staff.number} Staffs
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[13.5px] italic text-slate-400 py-1">No staff configurations added</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
