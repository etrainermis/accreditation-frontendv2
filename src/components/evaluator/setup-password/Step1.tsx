"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import rtbLogo from "../assets/rtb-logo.png";
import { imgContent } from "./svg-m8420";

type PasswordState = {
  password: string;
  confirmPassword: string;
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
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#eaecf0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 11V8.5C7 5.74 9.24 3.5 12 3.5C14.76 3.5 17 5.74 17 8.5V11" stroke="#353E49" strokeWidth="1.8" strokeLinecap="round" />
                  <rect x="5" y="11" width="14" height="9.5" rx="2" stroke="#353E49" strokeWidth="1.8" />
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

          <div className="flex gap-4 opacity-60">
            <div className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-[10px] border border-[#eaecf0] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3.25" stroke="#AAAFB5" strokeWidth="1.8" />
                  <path d="M5 19C6.6 15.8 9.1 14.5 12 14.5C14.9 14.5 17.4 15.8 19 19" stroke="#AAAFB5" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="#AAAFB5" strokeWidth="1.8" />
                </svg>
              </div>
            </div>
            <div className="flex-1 pb-8">
              <p className="text-[14px] font-medium leading-5 text-[#858c95]">Personal Details</p>
              <p className="text-[12px] font-light leading-[18px] text-[#858c95]">
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

function PasswordField({
  label,
  value,
  onChange,
  show,
  onToggle,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  show: boolean;
  onToggle: () => void;
}) {
  return (
    <label className="flex w-full flex-col gap-[6px]">
      <span className="text-[14px] text-[#344054]">{label}</span>
      <div className="flex h-[44px] items-center rounded-[8px] border border-[#d0d5dd] bg-white px-[14px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] focus-within:border-[#0a77ff]">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="flex-1 text-[14px] text-[#344054] outline-none placeholder:text-[#667085]"
          placeholder="Enter password"
        />
        <button type="button" onClick={onToggle} className="text-[#AAAFB5]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d={show ? "M2 8C3.4 5.3 5.53 4 8 4C10.47 4 12.6 5.3 14 8C12.6 10.7 10.47 12 8 12C5.53 12 3.4 10.7 2 8Z" : "M2 8C3.4 5.3 5.53 4 8 4C10.47 4 12.6 5.3 14 8C12.6 10.7 10.47 12 8 12C5.53 12 3.4 10.7 2 8Z"}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5" />
            {!show ? <path d="M2 14L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /> : null}
          </svg>
        </button>
      </div>
    </label>
  );
}

function Requirement({ met, text }: { met: boolean; text: string }) {
  return (
    <div className="flex items-start gap-[8px]">
      <div className={`flex h-5 w-5 items-center justify-center rounded-full ${met ? "bg-[#34c759]" : "bg-[#d0d5dd]"}`}>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
          <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="flex-1 text-[12px] font-light leading-[18px] text-[#475467]">{text}</p>
    </div>
  );
}

export default function Step() {
  const router = useRouter();
  const [form, setForm] = useState<PasswordState>({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const requirements = useMemo(
    () => ({
      minLength: form.password.length >= 8,
      specialCharacter: /[^A-Za-z0-9]/.test(form.password),
      passwordMatch: form.password.length > 0 && form.password === form.confirmPassword,
    }),
    [form.confirmPassword, form.password],
  );

  const isValid = requirements.minLength && requirements.specialCharacter && requirements.passwordMatch;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!isValid) {
      return;
    }

    router.push("/evaluator/dashboard");
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
                <path d="M7 11V8.5C7 5.74 9.24 3.5 12 3.5C14.76 3.5 17 5.74 17 8.5V11" stroke="#353E49" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="5" y="11" width="14" height="9.5" rx="2" stroke="#353E49" strokeWidth="1.8" />
              </svg>
            </div>
            <div>
              <h1 className="text-[18px] font-medium leading-7 text-[#101828]">Set Account Password</h1>
              <p className="text-[14px] leading-5 text-[#475467]">Basic information about your institution</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <PasswordField
                label="Password"
                value={form.password}
                onChange={(value) => setForm((current) => ({ ...current, password: value }))}
                show={showPassword}
                onToggle={() => setShowPassword((current) => !current)}
              />

              <PasswordField
                label="Confirm Password"
                value={form.confirmPassword}
                onChange={(value) => setForm((current) => ({ ...current, confirmPassword: value }))}
                show={showConfirmPassword}
                onToggle={() => setShowConfirmPassword((current) => !current)}
              />
            </div>

            <div className="flex flex-col gap-3">
              <Requirement met={requirements.specialCharacter} text="Must contain one special character" />
              <Requirement met={requirements.minLength} text="Must be at least 8 characters" />
              <Requirement met={requirements.passwordMatch} text="Passwords must match" />
            </div>

            {submitted && !isValid ? (
              <p className="text-[12px] leading-[18px] text-[#F04438]">Please satisfy all password requirements before continuing.</p>
            ) : null}

            <button
              type="submit"
              className="h-[44px] w-full rounded-[8px] bg-[#0a77ff] px-[14px] py-[10px] text-[14px] font-medium text-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] transition-all hover:bg-[#0862d1]"
            >
              Save Password
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
