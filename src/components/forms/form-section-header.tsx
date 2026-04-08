import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface FormSectionHeaderProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
}

export function FormSectionHeader({
  icon: Icon,
  title,
  description,
  children,
}: FormSectionHeaderProps) {
  return (
    <div className="space-y-3 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-800 shadow-[0_1px_3px_rgb(0_0_0_/_0.02)]">
        <Icon className="h-5 w-5 stroke-[1.5]" />
      </div>
      <div className="space-y-1.5">
        <h1 className="text-[17px] font-semibold text-slate-800 tracking-tight">{title}</h1>
        <p className="text-[13.5px] text-slate-500 max-w-md mx-auto">{description}</p>
        {children && <div className="pt-2">{children}</div>}
      </div>
    </div>
  );
}
