"use client";

import { useState } from "react";
import { Building, FileText, CloudUpload, Package, Mail, Phone, CheckCircle, Clock, CheckCircle2 } from "lucide-react";
import { FormInput, FormSelect, FormPhone } from "@/components/ui/form-field";

interface InstitutionDetailsStepProps {
  subStep: 1 | 2;
  setSubStep: (step: 1 | 2) => void;
  mouFile: File | null;
  setMouFile: (file: File | null) => void;
  regCertFile: File | null;
  setRegCertFile: (file: File | null) => void;
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
}

export function InstitutionDetailsStep({
  subStep,
  mouFile,
  setMouFile,
  regCertFile,
  setRegCertFile,
  formData,
  setFormData,
}: InstitutionDetailsStepProps) {
  const isOther = formData["Institution Category"] === "Other Institution";
  const docTypes = isOther
    ? ["MOU (Signed Memorandum)", "Registration Certificate"]
    : ["MOU (Signed Memorandum)"];


  const [selectedDocType, setSelectedDocType] = useState("MOU (Signed Memorandum)");


  const certOptions = [
    { id: 'mou', label: 'MOU (Signed Memorandum)' },
    ...(isOther ? [{ id: 'regCert', label: 'Registration Certificate' }] : []),
  ];

  const files: Record<string, File | null> = {
    mou: mouFile,
    regCert: regCertFile,
  };

  if (subStep === 2) {
    const activeFile = selectedDocType === "MOU (Signed Memorandum)" ? mouFile : regCertFile;

    return (
      <div className="flex flex-col space-y-6">
        <div className="space-y-1.5">
          <FormSelect
            label="Select Document Type"
            value={selectedDocType}
            onChange={(v) => setSelectedDocType(v)}
            options={docTypes.map(type => ({
              label: `${type}${type === "MOU (Signed Memorandum)" && mouFile ? " ✔" : type === "Registration Certificate" && regCertFile ? " ✔" : ""}`,
              value: type
            }))}
          />
        </div>

        <div className="space-y-1.5">
          <span className="text-[13px] font-medium text-slate-700">Upload {selectedDocType}</span>
          <label htmlFor="certificate-upload" className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center transition hover:bg-slate-50 cursor-pointer group">
            <input
              id="certificate-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  if (selectedDocType === "MOU (Signed Memorandum)") setMouFile(file);
                  else setRegCertFile(file);
                }
              }}
            />

            {activeFile ? (
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-blue-50 shadow-sm text-blue-600">
                  <FileText className="h-6 w-6 stroke-[1.5]" />
                </div>
                <p className="text-[14px] font-medium text-slate-800 truncate max-w-[250px]">{activeFile.name}</p>
                <div className="flex items-center gap-1.5 mt-2 justify-center text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span className="text-[12px] font-medium">Successfully uploaded</span>
                </div>
                <p className="mt-4 text-[13px] text-slate-500 font-medium">Click to change file</p>
              </div>
            ) : (
              <>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm">
                  <CloudUpload className="h-6 w-6 text-slate-600 stroke-[1.5]" />
                </div>
                <p className="text-[15px] text-slate-600">
                  <span className=" text-blue-500 group-hover:text-blue-600 transition-colors">Click to upload</span> or drag and drop
                </p>
              </>
            )}
          </label>
        </div>

        <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 space-y-3">
          <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider px-1">Upload Status</h4>
          <div className="grid gap-2">
            {certOptions.map(opt => {
              const uploaded = !!files[opt.id];
              return (
                <div key={opt.id} className={`flex items-center justify-between rounded-lg border px-3.5 py-3 transition-colors ${uploaded ? 'bg-white border-emerald-100 text-emerald-900 shadow-sm' : 'bg-white/50 border-slate-200 text-slate-500'}`}>
                  <div className="flex items-center gap-3">
                    {uploaded ? (
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    ) : (
                      <Clock className="h-4 w-4 text-slate-300" />
                    )}
                    <span className="text-[13.5px] font-medium">{opt.label}</span>
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight ${uploaded ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                    {uploaded ? 'Uploaded' : 'Pending'}
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
