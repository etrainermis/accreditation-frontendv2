"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, Phone, ChevronDown } from "lucide-react";
import { SetupShell } from "@/features/evaluator-setup/components/setup-shell";

type ProfileFormState = {
  firstName: string;
  lastName: string;
  gender: string;
  phone: string;
};

const initialState: ProfileFormState = {
  firstName: "",
  lastName: "",
  gender: "",
  phone: "",
};

export function ProfileSetupForm() {
  const router = useRouter();
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isFormValid = form.firstName && form.lastName && form.gender && form.phone;

  const updateField = (field: keyof ProfileFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!isFormValid) return;
    router.push("/evaluator/dashboard");
  };

  return (
    <SetupShell
      step="profile"
      icon="profile"
      title="Personal Details"
      description="Profile details"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="First Name" required>
            <div className="relative group">
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                placeholder="e.g. John"
                className="w-full h-11 px-4 pr-10 rounded-lg border border-[#D0D5DD] bg-white text-[#101828] placeholder:text-[13px] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all shadow-sm"
              />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" />
            </div>
          </Field>

          <Field label="Last Name" required>
            <div className="relative group">
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => updateField("lastName", e.target.value)}
                placeholder="e.g. Doe"
                className="w-full h-11 px-4 pr-10 rounded-lg border border-[#D0D5DD] bg-white text-[#101828] placeholder:text-[13px] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all shadow-sm"
              />
              <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" />
            </div>
          </Field>
        </div>

        <Field label="Gender" required>
          <div className="relative group">
            <select
              value={form.gender}
              onChange={(e) => updateField("gender", e.target.value)}
              className="w-full h-11 px-4 appearance-none rounded-lg border border-[#D0D5DD] bg-white text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all shadow-sm"
            >
              <option value="" disabled>Select ...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" />
          </div>
        </Field>

        <Field label="Phone Number" required>
          <div className="flex h-11 rounded-lg border border-[#D0D5DD] bg-white shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-[#0A77FF]/10 focus-within:border-[#0A77FF] transition-all">
            <div className="bg-[#F9FAFB] border-r border-[#D0D5DD] px-3 flex items-center gap-1 cursor-default">
              <span className="text-[14px] text-[#101828] font-medium">+250</span>
              <ChevronDown className="w-4 h-4 text-[#98A2B3]" />
            </div>
            <div className="relative flex-1 group">
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                placeholder="XXX-XXX-XXX"
                className="w-full h-full px-4 pr-10 text-[#101828] placeholder:text-[13px] placeholder:text-[#667085] focus:outline-none bg-transparent"
              />
              <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#98A2B3] pointer-events-none" />
            </div>
          </div>
        </Field>

        <button
          type="submit"
          className="w-full h-11 bg-[#0A77FF] text-white rounded-lg text-[14px] font-semibold hover:bg-[#0862d1] active:transform active:scale-[0.98] transition-all shadow-[0px_1px_2px_rgba(16,24,40,0.05)] mt-4"
        >
          Save Profile
        </button>
      </form>
    </SetupShell>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5 w-full text-left">
      <label className="text-[14px] font-medium text-[#344054]">
        {label}
        {required && <span className="text-rose-500 ml-1 font-bold">*</span>}
      </label>
      {children}
    </div>
  );
}
