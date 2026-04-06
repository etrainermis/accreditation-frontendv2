"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Check } from "lucide-react";
import { SetupShell } from "@/features/evaluator-setup/components/setup-shell";

export function PasswordSetupForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const requirements = useMemo(() => [
    { label: "Must contain one special character", passed: /[^A-Za-z0-9]/.test(password) },
    { label: "Must be at least 8 characters", passed: password.length >= 8 },
    { label: "Must contain at least one number", passed: /[0-9]/.test(password) },
  ], [password]);

  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const isFormValid = requirements.every(r => r.passed) && passwordsMatch;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (isFormValid) {
      router.push("/evaluator/dashboard");
    }
  };

  return (
    <SetupShell
      step="password"
      icon="password"
      title="Set Account Password"
      description="Basic information about your institution"
    >
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Field label="Password">
            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-4 pr-12 rounded-lg border border-[#D0D5DD] bg-white text-[#101828] placeholder:text-[13px] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#98A2B3] hover:text-[#475467] transition-colors"
                aria-label="Toggle password visibility"
              >
                {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
              </button>
            </div>
          </Field>

          <Field label="Confirm Password">
            <div className="relative group">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-11 px-4 pr-12 rounded-lg border border-[#D0D5DD] bg-white text-[#101828] placeholder:text-[13px] placeholder:text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-[#98A2B3] hover:text-[#475467] transition-colors"
                aria-label="Toggle password visibility"
              >
                {showConfirmPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
              </button>
            </div>
          </Field>
        </div>

        <div className="space-y-3 pt-2">
          {requirements.map((req, i) => (
            <div key={i} className="flex items-center gap-3">
              <div 
                className={`p-0.5 rounded-full flex items-center justify-center w-5 h-5 transition-colors ${
                  req.passed ? "bg-[#34C759]" : "bg-[#EAECF0]"
                }`}
              >
                <Check className={`w-3.5 h-3.5 ${req.passed ? "text-white" : "text-[#D0D5DD]"}`} />
              </div>
              <span className={`text-[13px] ${req.passed ? "text-[#101828]" : "text-[#475467]"} font-medium transition-colors`}>
                {req.label}
              </span>
            </div>
          ))}
          {submitted && !passwordsMatch && confirmPassword.length > 0 && (
             <div className="flex items-center gap-3 animate-in fade-in slide-in-from-top-1">
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-rose-50 text-rose-500 font-bold text-xs ring-1 ring-rose-200">
                  ×
                </div>
                <span className="text-[13px] text-rose-500 font-medium">Passwords must match</span>
             </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full h-11 bg-[#0A77FF] text-white rounded-lg text-[14px] font-semibold hover:bg-[#0862d1] active:transform active:scale-[0.98] transition-all shadow-[0px_1px_2px_rgba(16,24,40,0.05)] mt-4"
        >
          Save Password
        </button>
      </form>
    </SetupShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5 w-full text-left">
      <label className="text-[14px] font-medium text-[#344054]">
        {label}
      </label>
      {children}
    </div>
  );
}
