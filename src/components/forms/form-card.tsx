import type { ReactNode } from "react";

interface FormCardProps {
  children: ReactNode;
  className?: string;
}

export function FormCard({ children, className = "" }: FormCardProps) {
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
