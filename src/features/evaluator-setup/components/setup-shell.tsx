"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Key, User, ArrowLeft } from "lucide-react";

type SetupShellProps = {
  step: "profile" | "password";
  title: string;
  description: string;
  children: ReactNode;
  icon?: "profile" | "password";
};

export function SetupShell({ step, title, description, children, icon }: SetupShellProps) {
  const basePath = `/setup`;

  const steps = [
    {
      key: "password",
      label: "Password Setting",
      description: "Enter the basic identification details of your institution.",
      icon: <Key className="w-5 h-5" />,
      path: `${basePath}/password`,
    },
    {
      key: "profile",
      label: "Personal Details",
      description: "Provide the official physical and postal address of the institution.",
      icon: <User className="w-5 h-5" />,
      path: `${basePath}/profile`,
    },
  ] as const;

  // Determine back link based on step
  let backHref = "/login";
  if (step === "profile") {
    backHref = `${basePath}/password`;
  } else if (step === "password") {
    backHref = "/login"; // Pointing to main login instead of public/login for generic use
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-[380px] xl:w-[440px] bg-[#F9FAFB] border-b lg:border-b-0 lg:border-r border-[#EAECF0] flex flex-col justify-between py-6 px-6 lg:py-10 lg:px-10 xl:px-12">
        <div className="space-y-6 lg:space-y-10">
          <div className="flex items-start gap-3 lg:gap-4">
            <div className="relative h-10 w-14 lg:h-12 lg:w-16 shrink-0">
              <Image src="/images/branding/rtb-logo.png" alt="RTB" fill className="object-contain" priority />
            </div>
            <div className="pt-1 lg:pt-2">
              <h2 className="text-[15px] lg:text-[17px] font-semibold text-[#353E49] leading-tight">RTB</h2>
              <p className="text-[15px] lg:text-[17px] font-medium text-[#353E49] leading-tight opacity-70">Accreditation</p>
            </div>
          </div>

          <Link
            href={backHref}
            className="group inline-flex items-center gap-2 text-[13px] lg:text-[14px] font-medium text-[#0A77FF] hover:text-[#0862d1] transition-colors"
          >
            <div className="p-1.5 lg:p-2 rounded-md group-hover:bg-[#F0F7FF] transition-colors">
              <ArrowLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </div>
            Go back
          </Link>

          <nav className="relative">
            {/* Connection Line - Hidden on very small screens if steps stack differently, but here they stay vertical */}
            <div className="absolute left-[20px] lg:left-[24px] top-[24px] bottom-[24px] w-[1px] bg-[#EAECF0] -z-0" />

            <ul className="space-y-6 lg:space-y-8 relative z-10">
              {steps.map((item) => {
                const isActive = item.key === step;
                return (
                  <li key={item.key} className="flex items-start gap-3 lg:gap-4">
                    <div
                      className={`flex h-10 w-10 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-[10px] lg:rounded-[12px] border transition-all shadow-sm ${
                        isActive
                          ? "bg-white border-[#EAECF0] text-[#353E49]"
                          : "bg-white border-[#EAECF0] text-[#353E49] opacity-40 grayscale"
                      }`}
                    >
                      {/* Scale icon for mobile */}
                      <div className="scale-90 lg:scale-100">
                        {item.icon}
                      </div>
                    </div>
                    <div className={`pt-1 lg:pt-1.5 transition-all ${isActive ? "opacity-100" : "opacity-40"}`}>
                      <h3 className="text-[13px] lg:text-[14px] font-semibold text-[#101828]">{item.label}</h3>
                      <p className="hidden sm:block text-[11px] lg:text-[12px] text-[#475467] leading-relaxed mt-0.5 lg:mt-1 max-w-[180px] lg:max-w-[220px]">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <p className="hidden lg:block text-[14px] text-[#475467] mt-auto pt-10">© RTB 2025</p>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative bg-white flex items-center justify-center min-h-[calc(100vh-200px)] lg:min-h-screen overflow-hidden py-12 px-4 sm:px-6">
        {/* Dotted Pattern Background */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(#858C95 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0"
          }}
        />

        <div className="relative z-10 w-full max-w-[400px] flex flex-col items-center">
          {/* Header Icon */}
          <div className="mb-6 lg:mb-8 flex flex-col items-center text-center">
            <div className="h-12 w-12 lg:h-14 lg:w-14 mb-4 lg:mb-6 flex items-center justify-center rounded-xl lg:rounded-2xl border border-[#EAECF0] bg-white shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.03),0px_12px_16px_-4px_rgba(16,24,40,0.08)]">
              {icon === "password" ? (
                <Key className="w-5 h-5 lg:w-6 lg:h-6 text-[#353E49]" />
              ) : (
                <User className="w-5 h-5 lg:w-6 lg:h-6 text-[#353E49]" />
              )}
            </div>
            <h1 className="text-[18px] lg:text-[20px] font-semibold text-[#101828] mb-1.5 lg:mb-2">{title}</h1>
            <p className="text-[13px] lg:text-[14px] text-[#475467] px-4">{description}</p>
          </div>

          <div className="w-full">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
