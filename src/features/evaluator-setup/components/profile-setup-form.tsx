"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { User, Phone, ChevronDown } from "lucide-react";
import { SetupShell } from "@/features/evaluator-setup/components/setup-shell";
import { FormInput } from "@/components/ui/form-field";

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
          <FormInput
            label="First Name"
            value={form.firstName}
            onChange={(value) => updateField("firstName", value)}
            placeholder="e.g. John"
            required
            icon={User}
          />
          <FormInput
            label="Last Name"
            value={form.lastName}
            onChange={(value) => updateField("lastName", value)}
            placeholder="e.g. Doe"
            required
            icon={User}
          />
          <div className="col-span-1 sm:col-span-2">
            <label className="text-xs font-medium text-slate-700 mb-1 block">Gender <span className="text-red-500">*</span></label>
            <select
              value={form.gender}
              onChange={e => updateField("gender", e.target.value)}
              className="w-full rounded-sm border border-slate-200 px-3 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 placeholder:text-slate-400"
              required
            >
              <option value="" disabled>Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <FormInput
            label="Phone Number"
            value={form.phone}
            onChange={(value) => updateField("phone", value)}
            placeholder="e.g. 0781234567"
            required
            icon={Phone}
          />
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          disabled={!isFormValid && submitted}
        >
          Continue
        </button>
        {submitted && !isFormValid && (
          <div className="text-red-500 text-sm mt-2">Please fill in all required fields.</div>
        )}
      </form>
    </SetupShell>
  );
}
