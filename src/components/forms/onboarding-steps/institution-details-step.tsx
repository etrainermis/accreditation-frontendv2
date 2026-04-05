"use client";

import { Building, FileText, CloudUpload, Package, Mail, Phone } from "lucide-react";
import { FormInput, FormSelect, FormPhone } from "@/components/ui/form-field";

interface InstitutionDetailsStepProps {
  subStep: 1 | 2;
  setSubStep: (step: 1 | 2) => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
}

export function InstitutionDetailsStep({
  subStep,
  selectedFile,
  setSelectedFile,
  formData,
  setFormData,
}: InstitutionDetailsStepProps) {
  if (subStep === 2) {
    return (
      <div className="flex flex-col space-y-3">
        <span className="text-sm font-medium text-slate-700">Issued Certificate</span>
        <label htmlFor="certificate-upload" className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-10 text-center transition hover:bg-slate-50 cursor-pointer group">
          <input
            id="certificate-upload"
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) setSelectedFile(file);
            }}
          />

          {selectedFile ? (
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 shadow-sm text-blue-600">
                <FileText className="h-6 w-6 stroke-[1.5]" />
              </div>
              <p className="text-[14px] font-medium text-slate-700 truncate max-w-[250px]">{selectedFile.name}</p>
              <p className="mt-1.5 text-[13px] text-blue-500 font-medium">Click to change file</p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm">
                <CloudUpload className="h-6 w-6 text-slate-600 stroke-[1.5]" />
              </div>
              <p className="text-[15px] text-slate-600">
                <span className="font-semibold text-blue-500 group-hover:text-blue-600 transition-colors">Click to upload</span> or drag and drop
              </p>
              <p className="mt-1.5 text-[13px] text-slate-400">PDF, DOCX, or DOC (max. 800x400px)</p>
            </>
          )}
        </label>
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
      <FormInput
        label="P.O Box"
        value={formData["P.O Box"] || ""}
        onChange={(v) => setFormData({ ...formData, "P.O Box": v })}
        placeholder="e.g. P.O. Box 1234, K..."
        icon={Package}
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
