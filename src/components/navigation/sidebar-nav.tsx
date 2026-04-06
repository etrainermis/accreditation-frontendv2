"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, Settings, HelpCircle } from "lucide-react";

import { usePortalNavigation } from "@/hooks/use-portal-navigation";
import { cn } from "@/lib/utils/cn";
import { portalNavigation } from "@/lib/config/navigation";
import type { UserRole } from "@/types/auth";

export function SidebarNav({ role }: { role: UserRole }) {
  const items = usePortalNavigation(role);
  const config = portalNavigation[role];

  return (
    <div className="flex h-full flex-col">
      {/* ── Logo / Brand ── */}
      <div className="mb-6 flex items-center gap-2.5 px-1">
        <Image
          src="/images/branding/rtb-logo.png"
          alt="RTB Logo"
          width={38}
          height={38}
          className="shrink-0 object-contain"
        />
        <div className="leading-tight">
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1a1a2e",
              lineHeight: "1.3",
            }}
          >
            RTB Accreditation
          </p>
          <p
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              color: "#0A77FF",
              lineHeight: "1.3",
            }}
          >
            {config.shortLabel} Portal
          </p>
        </div>
      </div>

      {/* ── Primary navigation ── */}
      <nav className="flex flex-col gap-0.5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href as never}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150",
                item.isActive
                  ? "bg-[#EFF6FF] text-[#0A77FF]"
                  : "text-[#344054] hover:bg-[#EFF6FF] hover:text-[#0A77FF]",
              )}
              style={{ textDecoration: "none" }}
            >
              <Icon
                style={{
                  width: "20px",
                  height: "20px",
                  strokeWidth: 1.75,
                  flexShrink: 0,
                }}
                className="transition-colors duration-150"
              />
              <span
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontSize: "14px",
                  fontWeight: 100,
                  letterSpacing: "0.02em",
                }}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Bottom utility links ── */}
      <div className="mb-1 flex flex-col gap-0.5">
        <button
          type="button"
          className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[#344054] transition-colors duration-150 hover:bg-[#EFF6FF] hover:text-[#0A77FF]"
        >
          <HelpCircle
            style={{ width: "20px", height: "20px", strokeWidth: 1.75, flexShrink: 0 }}
            className="transition-colors duration-150"
          />
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Support
          </span>
        </button>

        <button
          type="button"
          className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[#344054] transition-colors duration-150 hover:bg-[#EFF6FF] hover:text-[#0A77FF]"
        >
          <Settings
            style={{ width: "20px", height: "20px", strokeWidth: 1.75, flexShrink: 0 }}
            className="transition-colors duration-150"
          />
          <span
            style={{
              fontFamily: "'Nunito Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            Settings
          </span>
        </button>
      </div>

      {/* ── Divider ── */}
      <div style={{ height: "1px", backgroundColor: "#E4E7EC", margin: "4px 0" }} />

      {/* ── User profile card ── */}
      <div className="flex items-center justify-between px-1 pt-3 pb-1">
        {/* Avatar + info */}
        <div className="flex items-center gap-2.5">
          {/* Avatar image */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Olivia Rhye"
            className="h-9 w-9 shrink-0 object-cover rounded-full"
          />

          {/* Name + email */}
          <div className="leading-tight">
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#101828",
                lineHeight: "1.4",
              }}
            >
              Olivia Rhye
            </p>
            <p
              style={{
                fontFamily: "'Nunito Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                color: "#667085",
                lineHeight: "1.4",
              }}
            >
              olivia@com...
            </p>
          </div>
        </div>

        {/* Logout arrow-right icon */}
        <button
          type="button"
          className="text-[#98A2B3] transition-colors hover:text-[#667085]"
          aria-label="Sign out"
        >
          <LogOut
            style={{ width: "18px", height: "18px", strokeWidth: 1.75 }}
          />
        </button>
      </div>
    </div>
  );
}
