import Image from "next/image";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { evaluatorEvaluationsBreadcrumbs, evaluatorEvaluationsHeader } from "@/features/evaluations";
import type { UserRole } from "@/types/auth";
import avatar from "@/app/evaluator/_components/assets/avatar.png";

function NotificationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10.268 21C10.4435 21.304 10.696 21.5565 11 21.732C11.3041 21.9075 11.6489 21.9999 12 21.9999C12.3511 21.9999 12.6959 21.9075 13 21.732C13.304 21.5565 13.5565 21.304 13.732 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.262 15.326C3.13137 15.4692 3.04516 15.6472 3.01386 15.8385C2.98256 16.0298 3.00752 16.226 3.08571 16.4034C3.1639 16.5807 3.29194 16.7316 3.45426 16.8375C3.61658 16.9434 3.80618 16.9999 4 17H20C20.1938 17.0001 20.3834 16.9438 20.5459 16.8381C20.7083 16.7324 20.8365 16.5817 20.9149 16.4045C20.9933 16.2273 21.0185 16.0311 20.9874 15.8398C20.9564 15.6485 20.8704 15.4703 20.74 15.327C19.41 13.956 18 12.499 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 12.499 4.589 13.956 3.262 15.326Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M1.32641 12.4514C1.44894 12.7605 1.47622 13.0992 1.40474 13.4239L0.517243 16.1656C0.488646 16.3046 0.49604 16.4487 0.538722 16.584C0.581405 16.7194 0.657961 16.8416 0.761132 16.9391C0.864302 17.0366 0.990667 17.1062 1.12824 17.1411C1.26582 17.1761 1.41004 17.1753 1.54724 17.1389L4.39141 16.3072C4.69784 16.2465 5.01518 16.273 5.30724 16.3839C7.08673 17.2149 9.10255 17.3907 10.999 16.8803C12.8955 16.3699 14.5508 15.2061 15.6728 13.5942C16.7948 11.9823 17.3115 10.0259 17.1317 8.0702C16.9518 6.11449 16.087 4.28514 14.6898 2.90491C13.2926 1.52468 11.4528 0.682277 9.49506 0.526325C7.53729 0.370374 5.58735 0.910896 3.98928 2.05253C2.3912 3.19416 1.24769 4.86353 0.760487 6.76611C0.273289 8.66869 0.473717 10.6822 1.32641 12.4514Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const roleLabel: Record<UserRole, string> = {
  applicant: "Applicant Portal",
  evaluator: "Evaluator Portal",
  "super-admin": "Super Admin Portal",
};

export function Topbar({ role, onMenuClick }: { role: UserRole; onMenuClick?: () => void }) {
  const pathname = usePathname();

  const evaluationBreadcrumb = pathname?.startsWith("/evaluator/evaluations")
    ? pathname.includes("/evaluator/evaluations/criteria")
      ? evaluatorEvaluationsBreadcrumbs.criteria
      : pathname.includes("/evaluator/evaluations/schedule")
        ? evaluatorEvaluationsBreadcrumbs.schedule
        : evaluatorEvaluationsBreadcrumbs.applications
    : null;

  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between bg-white px-4 sm:h-20 sm:px-6 lg:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          aria-label="Open navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5 stroke-[2]" />
        </button>
        <div className="min-w-0">
          {evaluationBreadcrumb ? (
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--primary)] sm:text-xs font-sans">
              {evaluatorEvaluationsHeader.breadcrumbBase} &gt; {evaluationBreadcrumb}
            </span>
          ) : (
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--primary)] sm:text-xs font-sans">Dashboard</span>
          )}
          <p className="truncate text-sm font-medium text-slate-500 md:hidden font-sans">{roleLabel[role]}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative">
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#323539] transition-all hover:bg-slate-50 active:scale-95 sm:h-11 sm:w-11">
            <MessageIcon className="h-[18px] w-[18px]" />
          </button>
          <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-medium text-white ring-4 ring-white">
            2
          </div>
        </div>
        <button type="button" className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#84888C] transition-all hover:bg-slate-50 active:scale-95 sm:h-11 sm:w-11">
          <NotificationIcon className="h-5 w-5" />
        </button>
        <div className="relative ml-1 h-9 w-9 overflow-hidden rounded-full ring-2 ring-slate-100 shadow-sm sm:ml-2 sm:h-10 sm:w-10">
          <Image src={avatar} alt="User Avatar" fill className="object-cover" />
        </div>
      </div>
    </header>
  );
}
