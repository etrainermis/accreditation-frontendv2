"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { Building, FileText, CloudUpload, Package, Mail, Phone, ChevronDown, CheckCircle2, Clock } from "lucide-react";
import { FormInput, FormSelect, FormPhone } from "@/components/ui/form-field";

interface InstitutionDetailsStepProps {
  subStep: 1 | 2;
  setSubStep: (step: 1 | 2) => void;
  files: Record<string, File | null>;
  setFiles: Dispatch<SetStateAction<Record<string, File | null>>>;
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
}

export function InstitutionDetailsStep({
  subStep,
  files,
  setFiles,
  formData,
  setFormData,
}: InstitutionDetailsStepProps) {
  const [selectedType, setSelectedType] = useState<"registration" | "mou">("registration");

  if (subStep === 2) {
    const certOptions = [
      { id: "registration", label: "Registration Certificate", required: true },
      { id: "mou", label: "MOU (Signed Memorandum)", required: true },
    ] as const;

    const currentCert = certOptions.find(opt => opt.id === selectedType)!;
    const isUploaded = !!files[selectedType];

    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700">Select Document Type</label>
          <div className="relative group">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 cursor-pointer"
            >
              {certOptions.map(opt => (
                <option key={opt.id} value={opt.id}>
                  {opt.label} {opt.required ? "*" : ""} {files[opt.id] ? "✓" : ""}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-slate-600 transition-colors" />
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <span className="text-sm font-medium text-slate-700">Upload {currentCert.label}</span>
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/30 px-6 py-12 text-center transition hover:bg-slate-50 hover:border-blue-300 cursor-pointer group relative overflow-hidden">
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setFiles({ ...files, [selectedType]: file });
              }}
            />

            <div className="relative z-10 flex flex-col items-center">
              {isUploaded ? (
                <>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 shadow-sm transition-transform group-hover:scale-105">
                    <FileText className="h-8 w-8 stroke-[1.5]" />
                  </div>
                  <p className="text-[15px] font-semibold text-slate-800 truncate max-w-[300px]">
                    {files[selectedType]?.name}
                  </p>
                  <p className="mt-2 flex items-center gap-1.5 text-[13px] text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Successfully uploaded
                  </p>
                  <p className="mt-4 text-[13px] text-slate-400 font-medium group-hover:text-slate-600">Click to change file</p>
                </>
              ) : (
                <>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-transform group-hover:scale-105">
                    <CloudUpload className="h-8 w-8 text-slate-500 stroke-[1.5]" />
                  </div>
                  <p className="text-[16px] text-slate-700">
                    <span className="font-bold text-blue-600">Click to upload</span> or drag and drop
                  </p>
                  <p className="mt-2 text-[13px] text-slate-400 font-medium">PDF or Word documents (max 10MB)</p>
                </>
              )}
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50/50 opacity-0 group-hover:opacity-100 transition-opacity" />
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
