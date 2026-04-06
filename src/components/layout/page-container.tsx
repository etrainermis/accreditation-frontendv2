import type { ReactNode } from "react";

export function PageContainer({
  title,
  description,
  children,
  actions,
}: {
  role: string;
  title: string;
  description: string;
  children: ReactNode;
  actions?: ReactNode;
}) {
  return (
    <div className="space-y-10 px-4 py-8 md:px-8 md:py-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between px-1">
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">{title}</h1>
          <p className="text-sm font-semibold text-slate-400 sm:text-base leading-relaxed tracking-tight">{description}</p>
        </div>
        {actions && (
            <div className="flex shrink-0 items-center gap-4 transition-all animate-in fade-in slide-in-from-right-4 duration-500">
                {actions}
            </div>
        )}
      </div>
      <div className="pt-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
        {children}
      </div>
    </div>
  );
}
