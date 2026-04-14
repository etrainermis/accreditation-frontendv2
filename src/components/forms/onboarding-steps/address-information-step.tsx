"use client";

import { MapPin } from "lucide-react";
import { FormInput, FormSelect } from "@/components/ui/form-field";

interface AddressInformationStepProps {
  formData: Record<string, string>;
  setFormData: (data: Record<string, string>) => void;
}

export function AddressInformationStep({ formData, setFormData }: AddressInformationStepProps) {
  return (
    <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
      {[
        { label: "Province", req: true },
        { label: "District", req: true },
        { label: "Sector", req: true },
        { label: "Cell", req: true },
        { label: "Village", req: true },
        { label: "City", req: false },
      ].map((field) => (
        <FormSelect
          key={field.label}
          label={field.label}
          value={formData[field.label] || ""}
          onChange={(v) => setFormData({ ...formData, [field.label]: v })}
          placeholder={`Select ${field.label.toLowerCase()}`}
          required={field.req}
          options={[
            { label: "Kigali City", value: "Kigali City" },
            { label: "Gasabo", value: "Gasabo" },
            { label: "Kicukiro", value: "Kicukiro" },
            { label: "Nyarugenge", value: "Nyarugenge" },
            { label: "Western Province", value: "Western Province" },
          ]}
        />
      ))}
      <FormInput
        label="Address Line"
        value={formData["Address Line"] || ""}
        onChange={(v) => setFormData({ ...formData, "Address Line": v })}
        placeholder="e.g. KN 3 Rd, Nyarugenge, Kigali"
        icon={MapPin}
        className="md:col-span-2 pt-1"
      />
    </div>
  );
}
