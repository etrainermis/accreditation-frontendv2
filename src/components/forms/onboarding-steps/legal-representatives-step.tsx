"use client";

import { User, Mail, Phone } from "lucide-react";
import { FormInput, FormSelect, FormPhone } from "@/components/ui/form-field";
import { FormCard } from "../form-card";

export interface LegalRep {
  firstName: string;
  lastName: string;
  position: string;
  gender: string;
  email: string;
  phone: string;
}

interface LegalRepresentativesStepProps {
  isAddingRep: boolean;
  legalReps: LegalRep[];
  newRep: LegalRep;
  setNewRep: (rep: LegalRep | ((prev: LegalRep) => LegalRep)) => void;
}

export function LegalRepresentativesStep({
  isAddingRep,
  legalReps,
  newRep,
  setNewRep,
}: LegalRepresentativesStepProps) {
  if (isAddingRep || legalReps.length === 0) {
    return (
      <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
        <FormInput
          label="First Name"
          value={newRep.firstName}
          onChange={(v) => setNewRep({ ...newRep, firstName: v })}
          placeholder="e.g. John"
          required
          icon={User}
        />
        <FormInput
          label="Last Name"
          value={newRep.lastName}
          onChange={(v) => setNewRep({ ...newRep, lastName: v })}
          placeholder="e.g. Doe"
          required
          icon={User}
        />
        <FormSelect
          label="Position in Institution"
          value={newRep.position}
          onChange={(v) => setNewRep({ ...newRep, position: v })}
          required
          options={[
            { label: "Director General", value: "Director General" },
            { label: "Principal", value: "Principal" },
            { label: "Legal Advisor", value: "Legal Advisor" },
            { label: "Manager", value: "Manager" },
          ]}
        />
        <FormSelect
          label="Gender"
          value={newRep.gender}
          onChange={(v) => setNewRep({ ...newRep, gender: v })}
          required
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
        />
        <FormInput
          label="Email"
          value={newRep.email}
          onChange={(v) => setNewRep({ ...newRep, email: v })}
          placeholder="e.g: company@example.com"
          type="email"
          required
          icon={Mail}
          className="md:col-span-2"
        />
        <FormPhone
          label="Phone Number"
          value={newRep.phone}
          onChange={(v) => setNewRep({ ...newRep, phone: v })}
          required
          icon={Phone}
          className="md:col-span-2"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {legalReps.map((rep, idx) => (
        <FormCard key={idx} className="flex gap-4 items-start">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[15px] font-medium text-slate-600 uppercase">
            {rep.firstName?.[0] || "?"}{rep.lastName?.[0] || "?"}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-800">
                {rep.firstName} {rep.lastName}
              </span>
              <span className="text-[13px] text-slate-500">{rep.position || "N/A"}</span>
            </div>
            <p className="mt-1 text-[13px] text-slate-500">{rep.gender}</p>
            <p className="mt-1.5 text-[13px] text-slate-600">{rep.email}</p>
            <div className="mt-1 flex items-center gap-2 text-[13px] text-slate-600">
              <span className="text-slate-500">Tel:</span> <span>+250-{rep.phone || "XXX-XXX-XXX"}</span>
            </div>
          </div>
        </FormCard>
      ))}
    </div>
  );
}
