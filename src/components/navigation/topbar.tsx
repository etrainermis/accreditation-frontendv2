"use client";

import Link from "next/link";
import { Bell, LogOut, MessageSquareMore, User, Menu, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePageHeader } from "@/lib/context/page-header-context";

import type { UserRole } from "@/types/auth";

import { PortalBreadcrumbs } from "./portal-breadcrumbs";

import { Skeleton } from "@/components/ui/skeleton";
import { PrimaryButton } from "@/components/ui/primary-button";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";

export function Topbar({ role, onOpenMobile }: { role: UserRole, onOpenMobile?: () => void }) {
  const { title, description, action } = usePageHeader();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handleOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const userInitials = user 
    ? `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase() 
    : "??";

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white">
      {/* Global Navigation Row */}
      <div className="flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          {onOpenMobile && (
            <button
              type="button"
              onClick={onOpenMobile}
              className="md:hidden p-1.5 -ml-1 text-slate-500 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Open sidebar"
            >
               <Menu className="h-5 w-5" />
            </button>
          )}
          <PortalBreadcrumbs />
        </div>

        <div className="flex items-center gap-3">

          {/* Notifications */}
          <button type="button" className="cursor-pointer p-2 text-[#667085] hover:text-slate-700 transition-colors">
            <Bell className="h-4.5 w-4.5" />
          </button>

          {/* User Profile */}
          <div
            className="relative ml-1"
            ref={containerRef}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <div
              className="h-9 w-9 rounded-full cursor-pointer outline-none border border-slate-200 bg-[var(--primary-light)] flex items-center justify-center overflow-hidden hover:opacity-90 transition-opacity"
              onClick={() => setOpen(!open)}
            >
              <span className="text-xs font-bold text-[var(--primary)] uppercase">
                {userInitials}
              </span>
            </div>

            {open && (
              <div
                className="absolute right-0 top-full mt-1 w-48 rounded-md bg-white p-1 shadow-lg ring-1 ring-slate-200 z-50 overflow-hidden"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
              >
                <div className="px-3 py-2 border-b border-slate-100 mb-1">
                  <p className="text-xs font-semibold text-slate-900 truncate">
                    {user ? `${user.firstName} ${user.lastName}` : "User Profile"}
                  </p>
                  <p className="text-[10px] text-slate-500 truncate uppercase">
                    {role.replace("-", " ")}
                  </p>
                </div>
                <Link
                  href={`/${role}/profile`}
                  className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Profile Settings</span>
                </Link>
                <div className="my-1 h-px bg-slate-100" />
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-red-600 hover:bg-red-50 text-left cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Page Header Row (Integrated/Fused) with content-width border */}
      <div className="px-6">
        <div className="flex w-full pb-2 border-b border-[#EAECF0]">
          {title ? (
            <>
              <div className="flex w-full justify-between items-center gap-10">
                <div>
                  <h1 className="text-[18px]  text-[#101828] leading-tight">{title}</h1>
                  {description && <p className="mt-1 text-[13px] text-[#64748B]">{description}</p>}
                </div>
                {action}
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full justify-between items-center gap-10">
                <div className="space-y-2">
                  <Skeleton className="h-5 w-[240px]" />
                  <Skeleton className="h-3 w-[320px]" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
