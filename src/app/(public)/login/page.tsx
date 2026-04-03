"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Eye, Info, EyeClosed } from "lucide-react";

import { DotPatternBackground } from "@/components/layout/dot-pattern-background";
import { getCurrentYear } from "@/lib/utils/date";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-screen lg:grid-cols-[1fr_480px]">
      {/* Left side - Login form */}
      <DotPatternBackground>
        <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-8 lg:px-12 lg:pt-20 lg:pb-10">
          <div className="w-full max-w-sm space-y-7">
          <div className="mb-10 flex justify-center">
            <Image src="/images/branding/rtb-logo.png" alt="RTB Logo" width={120} height={80} />
          </div>
          <div className="space-y-2.5 text-center">
            <h1 className="text-2xl font-bold text-slate-900">RTB Accreditation</h1>
            <p className="text-sm font-medium text-slate-700">Login Into Your Account</p>
            <p className="text-xs text-slate-500">Please enter your email and password to sign in.</p>
          </div>

          <div className="rounded-sm border border-blue-100  p-3">
            <div className="flex gap-2.5 p-1">
              <div className="shrink-0 flex items-center justify-center size-10 rounded-sm border border-slate-200 bg-white p-1">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1 space-y-0.5">
                <p className="text-xs font-medium text-slate-900">
                  You must have an account in account in the TVET management portal.
                </p>
                <p className="text-[11px] text-slate-600">This platform uses the same credentials as the portal.</p>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-medium text-slate-700">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-sm border border-slate-200 px-3.5 py-2.5 pr-9 text-sm outline-none transition focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20"
                />
                <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="block text-xs font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-sm border border-slate-200 px-3.5 py-2.5 pr-9 text-sm outline-none transition focus:border-[#0088FF] focus:ring-2 focus:ring-[#0088FF]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeClosed className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-[#0088FF]" />
                <span className="text-xs text-slate-900">Remember on this device</span>
              </label>
              <Link href="/forgot-password" className="text-xs font-medium !text-[#0088FF] hover:underline">
                Forgot password
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-sm bg-[#0088FF] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0077EE] cursor-pointer"
            >
              Login
            </button>
          </form>
          </div>
        </div>

        <p className="absolute bottom-20 left-6 text-xs text-slate-400 lg:left-10">© RTB {getCurrentYear()}</p>
      </DotPatternBackground>

      {/* Right side - Image banner */}
      <div className="hidden lg:block">
        <Image
          src="/images/auth/sider-banner-login.png"
          alt="Login banner"
          width={432}
          height={768}
          className="min-h-screen w-full object-cover"
          priority
        />
      </div>
    </main>
  );
}
