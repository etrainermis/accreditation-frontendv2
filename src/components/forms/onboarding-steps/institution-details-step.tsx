"use client";

import { useState } from "react";
import { Building, FileText, CloudUpload, Package, Mail, Phone, CheckCircle, Clock, CheckCircle2 } from "lucide-react";
import { FormInput, FormSelect, FormPhone } from "@/components/ui/form-field";

interface InstitutionDetailsStepProps {
  subStep: 1 | 2;
  setSubStep: (step: 1 | 2) => void;
  certificates: Record<string, File | File[] | null>;
  setCertificates: (certs: Record<string, File | File[] | null>) => void;
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
}

interface DocRequirement {
  id: string;
  label: string;
  required: boolean;
  multiple?: boolean;
}

const SCHOOL_DOCS: DocRequirement[] = [
  { id: "appLetter", label: "Application Letter", required: true },
  { id: "regCert", label: "Registration Certificate", required: true },
  { id: "trainContent", label: "Training Content", required: true },
  { id: "infraPhoto", label: "Photographs of Infrastructures", required: true },
  { id: "equipOwnership", label: "Proof of ownership of training equipment", required: true },
  { id: "premiseOwnership", label: "Proof of ownership/renting of training premises", required: true },
  { id: "skillsGap", label: "Signed skills gap report", required: false },
  { id: "mou", label: "Signed MOU with Partners", required: false },
  { id: "other", label: "Other Necessary Documents", required: false },
];

const OTHER_INSTITUTION_DOCS: DocRequirement[] = [
  { id: "appLetter", label: "Application Letter", required: true },
  { id: "regCert", label: "Registration Certificate", required: true },
  { id: "trainContent", label: "Training Content / Curriculum", required: true },
  { id: "infraPhoto", label: "Photographs of Infrastructures", required: true },
  { id: "equipOwnership", label: "Proof of ownership of training equipment", required: true },
  { id: "premiseOwnership", label: "Proof of ownership/renting of training premises", required: true },
  { id: "skillsGap", label: "Signed skills gap report", required: false },
  { id: "mou", label: "Signed MOU with Partners", required: false },
  { id: "other", label: "Other Necessary Documents", required: false },
];


export function InstitutionDetailsStep({
  subStep,
  certificates,
  setCertificates,
  formData,
  setFormData,
}: InstitutionDetailsStepProps) {
  const isOther = formData["Institution Category"] === "Other Institution";
  const docTypes = isOther
    ? OTHER_INSTITUTION_DOCS
    : SCHOOL_DOCS;

  const [selectedDocId, setSelectedDocId] = useState(docTypes[0].id);
  const activeDoc = docTypes.find(d => d.id === selectedDocId) || docTypes[0];
  const activeFile = certificates[selectedDocId];


  if (subStep === 2) {
    return (
      <div className="flex flex-col space-y-6">
        <div className="space-y-1.5">
          <FormSelect
            label="Select Document Type"
            value={selectedDocId}
            onChange={(v) => setSelectedDocId(v)}
            options={docTypes.map(doc => ({
              label: `${doc.label}${certificates[doc.id] ? " ✔" : ""}${doc.required ? " *" : ""}`,
              value: doc.id
            }))}
          />
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between items-end mb-1">
            <span className="text-[13px] font-medium text-slate-700">
              Upload {activeDoc.label} {activeDoc.required && <span className="text-red-500">*</span>}
            </span>
            {activeDoc.multiple && (
              <span className="text-[11px] text-slate-400 font-medium">You can select multiple files</span>
            )}
          </div>
          <label htmlFor="certificate-upload" className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white px-6 py-8 text-center transition hover:bg-slate-50 cursor-pointer group">
            <input
              id="certificate-upload"
              type="file"
              accept="*"
              multiple={activeDoc.multiple}
              className="hidden"
              onChange={(e) => {
                const files = e.target.files;
                if (files && files.length > 0) {
                  if (activeDoc.multiple) {
                    const existing = Array.isArray(certificates[selectedDocId]) ? certificates[selectedDocId] : [];
                    setCertificates({
                      ...certificates,
                      [selectedDocId]: [...existing, ...Array.from(files)]
                    });
                  } else {
                    setCertificates({ ...certificates, [selectedDocId]: files[0] });
                  }
                }
              }}
            />

            {activeFile ? (
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-blue-50 shadow-sm text-blue-600">
                  <FileText className="h-5 w-5 stroke-[1.5]" />
                </div>
                {activeDoc.multiple && Array.isArray(activeFile) ? (
                  <p className="text-[14px] font-medium text-slate-800">{activeFile.length} files selected</p>
                ) : (
                  <p className="text-[14px] font-medium text-slate-800 truncate max-w-[250px]">{(!Array.isArray(activeFile) && activeFile?.name) || 'File selected'}</p>
                )}
                <div className="flex items-center gap-1.5 mt-2 justify-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  <CheckCircle className="h-3 w-3" />
                  <span className="text-[11px] font-medium">Successfully uploaded</span>
                </div>
                <p className="mt-3 text-[12px] text-slate-500 font-medium italic">Click to {activeDoc.multiple ? 'add more' : 'change file'}</p>
              </div>
            ) : (
              <>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm">
                  <CloudUpload className="h-5 w-5 text-slate-600 stroke-[1.5]" />
                </div>
                <p className="text-[15px] text-slate-600">
                  <span className=" text-blue-500 group-hover:text-blue-600 transition-colors">Click to upload</span> or drag and drop
                </p>
                <p className="mt-1 text-[11px] text-slate-400">PDF, DOC, Images supported</p>
              </>
            )}
          </label>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 space-y-3">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Required Documents</h4>
            <span className="text-[10px] text-slate-400 italic">* Required</span>
          </div>
          <div className="grid gap-2">
            {docTypes.map(doc => {
              const file = certificates[doc.id];
              const uploaded = Array.isArray(file) ? file.length > 0 : !!file;
              return (
                <div key={doc.id} className={`flex items-center justify-between rounded-lg border px-3 py-2.5 transition-colors ${uploaded ? 'bg-white border-emerald-100 text-emerald-900 shadow-sm' : 'bg-white/50 border-slate-200 text-slate-500'}`}>
                  <div className="flex items-center gap-2.5">
                    {uploaded ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    ) : (
                      <Clock className="h-3.5 w-3.5 text-slate-300" />
                    )}
                    <div className="flex flex-col">
                      <span className="text-[13px] font-medium leading-none">
                        {doc.label} {doc.required && <span className="text-red-400 transition-opacity">*</span>}
                      </span>
                      {uploaded && Array.isArray(file) && (
                        <span className="text-[10px] text-slate-400 mt-1">{file.length} files</span>
                      )}
                    </div>
                  </div>
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tight ${uploaded ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {uploaded ? 'Uploaded' : doc.required ? 'Missing' : 'Optional'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }



  return (
    <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
      <FormInput
        label="Name of Institution"
        value={formData["Name of Institution"] || ""}
        onChange={(v) => setFormData({ ...formData, "Name of Institution": v })}
        placeholder="e.g. Sina Gerard Rwanda"
        required
        icon={Building}
        className="md:col-span-2"
      />
      <FormSelect
        label="Institution Type"
        value={formData["Institution Type"] || ""}
        onChange={(v) => setFormData({ ...formData, "Institution Type": v })}
        placeholder="Select type"
        required
        options={[
          { label: "Public", value: "Public" },
          { label: "Private", value: "Private" },
          { label: "Government Aided", value: "Government Aided" },
          { label: "Nongovernmental", value: "Nongovernmental" },
        ]}
      />
      <FormSelect
        label="Institution Category"
        value={formData["Institution Category"] || ""}
        onChange={(v) => setFormData({ ...formData, "Institution Category": v })}
        placeholder="Select category"
        required
        options={[
          { label: "School", value: "School" },
          { label: "Other Institution", value: "Other Institution" },
        ]}
      />
      <FormInput
        label="P.O Box"
        value={formData["P.O Box"] || ""}
        onChange={(v) => setFormData({ ...formData, "P.O Box": v })}
        placeholder="e.g. P.O. Box 1234, K..."
        icon={Package}
        className="md:col-span-2"
      />
      <FormInput
        label="Email"
        value={formData["Email"] || ""}
        onChange={(v) => setFormData({ ...formData, "Email": v })}
        placeholder="e.g: company@example.com"
        type="email"
        required
        icon={Mail}
        className="md:col-span-2"
      />
      <FormPhone
        label="Phone Number"
        value={formData["Phone Number"] || ""}
        onChange={(v) => setFormData({ ...formData, "Phone Number": v })}
        required
        icon={Phone}
        className="md:col-span-2"
      />
    </div>
  );
}
