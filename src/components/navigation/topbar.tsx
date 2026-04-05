"use client";

import Link from "next/link";
import { Bell, LogOut, MessageSquareMore, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";

import type { UserRole } from "@/types/auth";

export function Topbar({ role }: { role: UserRole }) {
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
    <header className="flex items-center justify-between bg-white px-6 py-4">
      <p className="text-sm font-medium text-[var(--primary)]">Dashboard</p>
      <div className="flex items-center gap-3">
        <button type="button" className="rounded-xl cursor-pointer border border-slate-200 p-2 text-slate-500">
          <MessageSquareMore className="h-4 w-4" />
        </button>
        <button type="button" className="rounded-xl cursor-pointer border border-slate-200 p-2 text-slate-500">
          <Bell className="h-4 w-4" />
        </button>
        
        <div 
          className="relative" 
          ref={containerRef}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        >
          <div 
            className="h-9 w-9 rounded-full bg-[var(--primary-soft)] cursor-pointer outline-none"
            onClick={() => setOpen(!open)}
          />

          {open && (
            <div 
              className="absolute right-0 top-full mt-1 w-48 rounded-md bg-white p-1 shadow-lg ring-1 ring-slate-200 z-50 overflow-hidden"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              <Link 
                href="/profile" 
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                onClick={() => setOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
              <div className="my-1 h-px bg-slate-100" />
              <Link 
                href="/login" 
                className="flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                onClick={() => setOpen(false)}
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
