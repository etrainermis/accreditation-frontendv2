"use client";

import Link from "next/link";
import { Bell, LogOut, MessageSquareMore, User, Menu, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePageHeader } from "@/lib/context/page-header-context";

import type { UserRole } from "@/types/auth";

import { PortalBreadcrumbs } from "./portal-breadcrumbs";

import { Skeleton } from "@/components/ui/skeleton";

export function Topbar({ role, onOpenMobile }: { role: UserRole, onOpenMobile?: () => void }) {
  const { title, description, action } = usePageHeader();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleOpen = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleClose = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  };

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
      <div className="flex items-center justify-between px-6 py-4">
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
          <button type="button" className="rounded-[5px] cursor-pointer border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
            <MessageSquareMore className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-xl cursor-pointer border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
            <Bell className="h-4 w-4" />
          </button>
          
          <div 
            className="relative ml-1" 
            ref={containerRef}
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
          >
            <div 
              className="h-9 w-9 rounded-full bg-[var(--primary-soft)] cursor-pointer outline-none border border-slate-100 flex items-center justify-center overflow-hidden"
              onClick={() => setOpen(!open)}
            >
              <User className="h-5 w-5 text-[var(--primary)]" />
            </div>

            {open && (
              <div 
                className="absolute right-0 top-full mt-1 w-48 rounded-md bg-white p-1 shadow-lg ring-1 ring-slate-200 z-50 overflow-hidden"
                onMouseEnter={handleOpen}
                onMouseLeave={handleClose}
              >
                <Link 
                  href="/profile" 
                  className="flex w-full items-center gap-2 rounded-sm px-3 py-3 text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  <User className="h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <div className="my-1 h-px bg-slate-100" />
                <Link 
                  href="/login" 
                  className="flex w-full items-center gap-2 rounded-sm px-3 py-3 text-sm text-red-600 hover:bg-red-50"
                  onClick={() => setOpen(false)}
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Page Header Row (Integrated/Fused) with content-width border */}
      <div className="px-6">
        <div className="flex w-full pb-5 pt-1 border-b border-[#EAECF0]">
          {title ? (
            <>
              <div className="flex w-full justify-between items-center gap-10">
                <div>
                  <h1 className="text-sm text-[#101828]">{title}</h1>
                  {description && <p className="mt-1 text-xs text-[#64748B]">{description}</p>}
                </div>

                {role === "super-admin" && (
                  <button 
                    data-slot="button" 
                    data-variant="default" 
                    data-size="default" 
                    className="group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 bg-primary text-primary-foreground hover:bg-primary/80 h-9 gap-1.5 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 rounded-sm cursor-pointer px-4 py-3 text-sm font-medium"
                  >
                    Start New Evaluation
                    <Plus className="ml-2 h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
              {action}
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Skeleton className="h-6 w-[240px]" />
                <Skeleton className="h-3 w-[320px]" />
              </div>
              <Skeleton className="h-9 w-[160px]" />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
