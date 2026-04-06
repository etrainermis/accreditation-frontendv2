"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import rtbLogo from "../assets/rtb-logo.png";
import { imgContent } from "./svg-23ljh";

const genderOptions = ["Male", "Female"] as const;

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

function ProgressSidebar() {
  return (
    <section className="flex w-full max-w-[440px] flex-col justify-between bg-[#f9fafb]">
      <div className="flex flex-col gap-[42px] px-[48px] pb-8 pt-[48px]">
        <div className="flex items-start gap-3">
          <div className="relative h-[43px] w-[69px]">
            <Image alt="RTB logo" src={rtbLogo} fill className="object-contain" priority />
          </div>
          <p
            className="w-[100px] text-[16px] font-medium leading-6 text-[#353e49]"
            style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
          >
            RTB Accreditation
          </p>
        </div>

        <button type="button" className="flex items-center gap-[10px] text-left text-[#0a77ff]">
          <span className="flex h-10 w-10 items-center justify-center rounded-[6px] px-[10px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12.5 5L7.5 10L12.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-[14px] font-medium leading-5">Go back</span>
        </button>

        <div className="flex flex-col gap-4">
          <div className="flex gap-4 opacity-60">
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#eaecf0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M8 12L10.5 14.5L16 9" stroke="#34C759" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="9" stroke="#34C759" strokeWidth="1.8" />
                </svg>
              </div>
              <div className="w-[2px] flex-1 rounded-[2px] bg-[#eaecf0]" />
            </div>
            <div className="flex-1 pb-8">
              <p className="text-[14px] font-medium leading-5 text-[#323539]">Password Setting</p>
              <p className="text-[12px] font-light leading-[18px] text-[#323539]">
                Enter the basic identification details of your institution.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#eaecf0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.25" stroke="#353E49" strokeWidth="1.8" />
                  <path d="M5 19C6.6 15.8 9.1 14.5 12 14.5C14.9 14.5 17.4 15.8 19 19" stroke="#353E49" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="#353E49" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
            <div className="flex-1 pb-8">
              <p className="text-[14px] font-medium leading-5 text-[#353e49]">Personal Details</p>
              <p className="text-[12px] font-light leading-[18px] text-[#353e49]">
                Provide the official physical and postal address of the institution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 text-[14px] leading-5 text-[#475467]">© RTB 2025</div>
    </section>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  type?: React.HTMLInputTypeAttribute;
}) {
  return (
    <label className="flex w-full flex-col gap-[6px]">
      <span className="text-[14px] text-[#344054]">
        {label}
        {required ? <span className="text-[#ff383c]"> *</span> : null}
      </span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-[44px] w-full rounded-[8px] border border-[#d0d5dd] bg-white px-[14px] text-[14px] text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-none placeholder:text-[12px] placeholder:font-light placeholder:text-[#667085] focus:border-[#0a77ff]"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex w-full flex-col gap-[6px]">
      <span className="text-[14px] text-[#344054]">
        {label}
        <span className="text-[#ff383c]"> *</span>
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-[44px] w-full rounded-[8px] border border-[#d0d5dd] bg-white px-[14px] text-[14px] text-[#344054] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline-none focus:border-[#0a77ff]"
      >
        <option value="">Select ...</option>
        {genderOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function Step() {
  const router = useRouter();
  const [form, setForm] = useState<ProfileFormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const isValid = form.firstName.trim() && form.lastName.trim() && form.gender.trim() && form.phone.trim();

  const updateField = <K extends keyof ProfileFormState>(key: K, value: ProfileFormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      return;
    }

    router.push("/evaluator/setup/password");
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white lg:flex-row">
      <ProgressSidebar />

      <section className="relative flex min-h-screen min-w-0 flex-1 items-center justify-center overflow-hidden bg-white px-8 py-20">
        <div
          className="absolute left-1/2 top-[-208px] h-[768px] w-[768px] -translate-x-1/2 opacity-70"
          style={{ maskImage: `url('${imgContent}')`, WebkitMaskImage: `url('${imgContent}')` }}
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(10,119,255,0.12),_transparent_62%)]" />
        </div>

        <div className="relative z-10 w-full max-w-[360px]">
          <div className="mb-8 flex flex-col items-center gap-6 text-center">
            <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[12px] border border-[#eaecf0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3.25" stroke="#353E49" strokeWidth="1.8" />
                <path d="M5 19C6.6 15.8 9.1 14.5 12 14.5C14.9 14.5 17.4 15.8 19 19" stroke="#353E49" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="12" cy="12" r="9" stroke="#353E49" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <h1 className="text-[18px] font-medium leading-7 text-[#101828]">Personal Details</h1>
              <p className="text-[14px] leading-5 text-[#475467]">Profile details</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6 rounded-[12px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 sm:flex-row">
                <InputField
                  label="First Name"
                  required
                  value={form.firstName}
                  onChange={(value) => updateField("firstName", value)}
                  placeholder="e.g. John"
                />
                <InputField
                  label="Last Name"
                  required
                  value={form.lastName}
                  onChange={(value) => updateField("lastName", value)}
                  placeholder="e.g. Doe"
                />
              </div>

              <SelectField label="Gender" value={form.gender} onChange={(value) => updateField("gender", value)} />

              <div className="flex flex-col gap-[6px]">
                <span className="text-[14px] text-[#344054]">
                  Phone Number <span className="text-[#ff383c]">*</span>
                </span>
                <div className="flex h-[44px] overflow-hidden rounded-[8px] border border-[#d0d5dd] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#0a77ff]">
                  <div className="flex items-center gap-1 border-r border-[#eaecf0] px-[14px] text-[14px] text-[#344054]">
                    <span>+250</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M4 6L8 10L12 6" stroke="#98A2B3" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    placeholder="XXX-XXX-XXX"
                    className="h-full flex-1 px-[14px] text-[14px] text-[#344054] outline-none placeholder:text-[12px] placeholder:font-light placeholder:text-[#667085]"
                  />
                </div>
              </div>
            </div>

            {submitted && !isValid ? (
              <p className="text-[12px] leading-[18px] text-[#F04438]">Please fill in all required fields before continuing.</p>
            ) : null}

            <button
              type="submit"
              className="h-[44px] w-full rounded-[8px] bg-[#0a77ff] px-[14px] py-[10px] text-[14px] font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-all hover:bg-[#0862d1] disabled:cursor-not-allowed disabled:bg-[#98A2B3]"
              disabled={!isValid && submitted}
            >
              Continue
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
