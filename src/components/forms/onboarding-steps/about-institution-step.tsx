"use client";

import { FormTextarea } from "@/components/ui/form-field";

interface AboutInstitutionStepProps {
  fields: readonly string[];
  subStep: number;
  aboutText: Record<string, string>;
  setAboutText: (text: Record<string, string>) => void;
}

export function AboutInstitutionStep({
  fields,
  subStep,
  aboutText,
  setAboutText,
}: AboutInstitutionStepProps) {
  const field = fields[subStep - 1];
  
  return (
    <div className="flex flex-col space-y-6">
      <FormTextarea
        key={field}
        label={field}
        value={aboutText[field] || ""}
        onChange={(v) => setAboutText({ ...aboutText, [field]: v })}
        maxLength={275}
        placeholder="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
      />
    </div>
  );
}
