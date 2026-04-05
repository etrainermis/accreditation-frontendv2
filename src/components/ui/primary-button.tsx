import * as React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface PrimaryButtonProps {
  /** Label text shown inside the button */
  label: string;
  /** If provided the button renders as a Next.js Link */
  href?: string;
  /** Extra Tailwind classes */
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  /** Set true to hide the leading + icon */
  hideIcon?: boolean;
}

export function PrimaryButton({
  label,
  href,
  className,
  onClick,
  type = "button",
  hideIcon = false,
}: PrimaryButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[12px] px-6 py-2.5",
    "text-[14px] font-medium leading-none",
    "transition-all duration-150 cursor-pointer select-none border-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A77FF]/50",
    "hover:opacity-90 active:scale-[0.98]",
    className,
  );

  const style: React.CSSProperties = {
    backgroundColor: "#0A77FF",
    color: "#ffffff",
    fontFamily: "'Nunito Sans', sans-serif",
    fontWeight: 500,
  };

  const inner = (
    <>
      {!hideIcon && (
        <Plus
          style={{ width: "18px", height: "18px", strokeWidth: 2.25, flexShrink: 0, color: "#ffffff" }}
        />
      )}
      <span style={{ color: "#ffffff", fontWeight:500 }}>{label}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href as never} className={baseClasses} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} style={style}>
      {inner}
    </button>
  );
}
