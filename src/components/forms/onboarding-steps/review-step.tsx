"use client";

import Link from "next/link";
import { CheckCircle, FileText } from "lucide-react";
import type { TechnicalStaffEntry } from "./technical-staff-step";
import type { LegalRep } from "./legal-representatives-step";

interface ReviewApplicationStepProps {
  formData: Record<string, string>;
  files: Record<string, File | File[] | null>;
  legalReps: LegalRep[];
  aboutText: Record<string, string>;
  staffList: TechnicalStaffEntry[];
}

const ALL_DOC_LABELS: Record<string, string> = {
  regCert: "Recognized Registration Certificate",
  nesaCert: "Accreditation from NESA",
  appLetter: "Application Letter",
  trainContent: "Training Content",
  infraPhoto: "Photographs of Infrastructures",
  equipOwnership: "Proof of ownership of training equipment",
  premisesOwnership: "Proof of ownership/renting of training premises",
  skillsGap: "Signed skills gap report",
  mou: "Signed MOU with Partners",
  other: "Other Necessary Documents",
};

export function ReviewApplicationStep({
  formData,
  files,
  legalReps,
  aboutText,
  staffList,
}: ReviewApplicationStepProps) {

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
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Institution Category</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["Institution Category"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">P.O Box</span>
              <p className="text-[13.5px] font-medium text-slate-800">{formData["P.O Box"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>

            <div className="col-span-2 pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-y-5 gap-x-6">
              {Object.entries(ALL_DOC_LABELS).map(([key, label]) => {
                const fileOrFiles = files[key];
                if (!fileOrFiles) return null;

                const fileList = Array.isArray(fileOrFiles) ? fileOrFiles : [fileOrFiles];

                return (
                  <div key={key} className="space-y-1">
                    <span className="text-[12px] text-slate-500 block">{label}</span>
                    <div className="space-y-1.5 mt-1">
                      {fileList.map((f, i) => (
                        <div 
                          key={i} 
                          onClick={() => {
                            const url = URL.createObjectURL(f);
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = f.name; // Forces correct filename if the browser decides to download it (e.g., .docx)
                            a.target = '_blank'; // Opens PDFs/Images in a new tab natively if supported
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            
                            // Prevent memory leaks by revoking the blob URL after 10 seconds (gives the new tab enough time to load it)
                            setTimeout(() => URL.revokeObjectURL(url), 10000);
                          }}
                          className="flex items-center gap-2 text-slate-700 bg-slate-50 border border-slate-100 rounded-sm px-2.5 py-1.5 w-fit hover:bg-slate-100 hover:border-slate-200 cursor-pointer transition-colors"
                          title="Click to preview document"
                        >
                          <FileText className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span className="text-[12.5px] font-medium truncate max-w-[200px]">{f.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              {Object.values(files).every(f => !f) && (
                 <div className="col-span-2">
                   <p className="text-[13px] italic text-slate-400">No documents uploaded.</p>
                 </div>
              )}
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
                {[formData["Province"], formData["District"], formData["Sector"], formData["Cell"], formData["Village"]].filter(Boolean).join(", ") || <span className="italic text-slate-400">Not provided</span>}
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
              <span className="text-[12px] text-slate-500 block mb-1">Institution Summary</span>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">{aboutText["Institution Summary"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Mission or Mandate</span>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">{aboutText["Mission or Mandate"] || <span className="italic text-slate-400">Not provided</span>}</p>
            </div>
            <div>
              <span className="text-[12px] text-slate-500 block mb-1">Programs Offered</span>
              <p className="text-[13.5px] text-slate-800 leading-relaxed">{aboutText["Programs Offered"] || <span className="italic text-slate-400">Not provided</span>}</p>
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
