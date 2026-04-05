"use client";

import Link from "next/link";
import Image from "next/image";
import { LogOut, Settings, LifeBuoy } from "lucide-react";
import rtbLogo from "@/app/evaluator/_components/assets/rtb-logo.png";
import avatar from "@/app/evaluator/_components/assets/avatar.png";

import { usePortalNavigation } from "@/hooks/use-portal-navigation";
import { cn } from "@/lib/utils/cn";
import { portalNavigation } from "@/lib/config/navigation";
import type { UserRole } from "@/types/auth";
import type { NavigationItem } from "@/types/navigation";

type SidebarNavigationItem = NavigationItem & { isActive: boolean };

function DashboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 10.0005C2.99993 9.70955 3.06333 9.4221 3.18579 9.1582C3.30824 8.89429 3.4868 8.66028 3.709 8.47248L10.709 2.47248C11.07 2.16739 11.5274 2 12 2C12.4726 2 12.93 2.16739 13.291 2.47248L20.291 8.47248C20.5132 8.66028 20.6918 8.89429 20.8142 9.1582C20.9367 9.4221 21.0001 9.70955 21 10.0005V19.0005C21 19.5309 20.7893 20.0396 20.4142 20.4147C20.0391 20.7898 19.5304 21.0005 19 21.0005H5C4.46957 21.0005 3.96086 20.7898 3.58579 20.4147C3.21071 20.0396 3 19.5309 3 19.0005V10.0005Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EvaluationsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3.84999 8.61912C3.70404 7.96165 3.72645 7.27796 3.91515 6.63146C4.10386 5.98496 4.45274 5.39657 4.92946 4.92084C5.40618 4.44512 5.9953 4.09747 6.6422 3.91012C7.2891 3.72277 7.97283 3.70179 8.62999 3.84912C8.9917 3.28342 9.49 2.81788 10.0789 2.49541C10.6679 2.17293 11.3285 2.00391 12 2.00391C12.6714 2.00391 13.3321 2.17293 13.921 2.49541C14.51 2.81788 15.0083 3.28342 15.37 3.84912C16.0282 3.70114 16.7131 3.72203 17.361 3.90983C18.0089 4.09764 18.5988 4.44626 19.0758 4.92327C19.5529 5.40029 19.9015 5.99019 20.0893 6.63812C20.2771 7.28605 20.298 7.97095 20.15 8.62912C20.7157 8.99083 21.1812 9.48912 21.5037 10.0781C21.8262 10.667 21.9952 11.3277 21.9952 11.9991C21.9952 12.6706 21.8262 13.3312 21.5037 13.9202C21.1812 14.5091 20.7157 15.0074 20.15 15.3691C20.2973 16.0263 20.2764 16.71 20.089 17.3569C19.9017 18.0038 19.554 18.5929 19.0783 19.0697C18.6026 19.5464 18.0142 19.8953 17.3677 20.084C16.7212 20.2727 16.0375 20.2951 15.38 20.1491C15.0188 20.717 14.5201 21.1845 13.9301 21.5084C13.3402 21.8324 12.678 22.0022 12.005 22.0022C11.332 22.0022 10.6698 21.8324 10.0799 21.5084C9.48992 21.1845 8.99123 20.717 8.62999 20.1491C7.97283 20.2965 7.2891 20.2755 6.6422 20.0881C5.9953 19.9008 5.40618 19.5531 4.92946 19.0774C4.45274 18.6017 4.10386 18.0133 3.91515 17.3668C3.72645 16.7203 3.70404 16.0366 3.84999 15.3791C3.27995 15.0184 2.81041 14.5193 2.48504 13.9283C2.15968 13.3374 1.98906 12.6737 1.98906 11.9991C1.98906 11.3245 2.15968 10.6609 2.48504 10.0699C2.81041 9.47895 3.27995 8.97988 3.84999 8.61912Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12L11 14L15 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProfileIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NotificationsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.268 21C10.4435 21.304 10.696 21.5565 11 21.732C11.3041 21.9075 11.6489 21.9999 12 21.9999C12.3511 21.9999 12.6959 21.9075 13 21.732C13.304 21.5565 13.5565 21.304 13.732 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.262 15.326C3.13137 15.4692 3.04516 15.6472 3.01386 15.8385C2.98256 16.0298 3.00752 16.226 3.08571 16.4034C3.1639 16.5807 3.29194 16.7316 3.45426 16.8375C3.61658 16.9434 3.80618 16.9999 4 17H20C20.1938 17.0001 20.3834 16.9438 20.5459 16.8381C20.7083 16.7324 20.8365 16.5817 20.9149 16.4045C20.9933 16.2273 21.0185 16.0311 20.9874 15.8398C20.9564 15.6485 20.8704 15.4703 20.74 15.327C19.41 13.956 18 12.499 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 12.499 4.589 13.956 3.262 15.326Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function getNavIcon(title: string) {
  switch (title) {
    case "Dashboard":
      return DashboardIcon;
    case "Evaluations":
      return EvaluationsIcon;
    case "Profile":
      return ProfileIcon;
    case "Notifications":
      return NotificationsIcon;
    default:
      return null;
  }
}

export function SidebarNav({ role, onNavigate }: { role: UserRole; onNavigate?: () => void }) {
  const items = usePortalNavigation(role);
  const config = portalNavigation[role];

  return (
    <div className="flex h-full min-h-0 flex-col justify-between">
      <div>
        <div className="mb-6 flex items-center gap-3 px-2">
        <div className="relative h-9 w-9 overflow-hidden rounded-xl">
          <Image src={rtbLogo} alt="RTB Logo" fill className="object-contain" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800">RTB Accreditation</p>
          <p className="text-xs text-[var(--primary)]">{config.shortLabel} Portal</p>
        </div>
        </div>

        <nav className="space-y-1">
          {items.map((item: SidebarNavigationItem) => {
            const Icon = getNavIcon(item.title);

            return (
              <Link
                key={item.href}
                href={item.href as never}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors font-sans",
                  item.isActive
                    ? "bg-[var(--primary-soft)] text-[var(--primary)]"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800",
                )}
              >
                {Icon ? (
                  <Icon className={cn("h-6 w-6 shrink-0", item.isActive ? "text-[var(--primary)]" : "text-slate-500 group-hover:text-slate-800")}/>
                ) : (
                  <item.icon className={cn("h-5 w-5 shrink-0", item.isActive ? "text-[var(--primary)]" : "text-slate-500 group-hover:text-slate-800")}/>
                )}
                <span className={item.isActive ? "text-[var(--primary)]" : undefined}>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-1 border-t border-slate-200 pt-4">
        <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800">
          <LifeBuoy className="h-4 w-4" />
          <span>Support</span>
        </button>
        <button type="button" className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </button>
        <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 px-3 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full font-medium">
              <Image src={avatar} alt="Olivia Rhye" fill className="object-cover" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-800">Olivia Rhye</p>
              <p className="text-xs text-slate-400">olivia@company.com</p>
            </div>
          </div>
          <LogOut className="h-4 w-4 text-slate-400 shrink-0" />
        </div>
      </div>
    </div>
  );
}
