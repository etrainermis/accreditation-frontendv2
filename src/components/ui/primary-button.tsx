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
  /** Custom Icon component instead of default Plus */
  icon?: React.ElementType;
  /** Position of the icon relative to the text */
  iconPosition?: "left" | "right";
  disabled?: boolean;
  variant?: "primary" | "outline";
}

export function PrimaryButton({
  label,
  href,
  className,
  onClick,
  type = "button",
  hideIcon = false,
  icon: customIcon,
  iconPosition = "left",
  disabled = false,
  variant = "primary"
}: PrimaryButtonProps) {
  const Icon = customIcon || Plus;
  const baseClasses = cn(
    "flex items-center justify-center gap-2.5 rounded-sm px-6 py-3",
    "text-[13px] font-semibold leading-none",
    "transition-all duration-150 select-none",
    disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90 active:scale-[0.98]",
    variant === "primary" 
      ? "bg-[#0A77FF] !text-white border-none shadow-[0_1px_2px_rgba(10,119,255,0.1)]" 
      : "bg-white text-[#344054] border border-[#D0D5DD] hover:bg-slate-50 rounded-xl",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A77FF]/50",
    className,
  );

  const inner = (
    <>
      {!hideIcon && iconPosition === "left" && (
        <Icon className="h-4 w-4 text-white" strokeWidth={2.5} />
      )}
      <span>{label}</span>
      {!hideIcon && iconPosition === "right" && (
        <Icon className="h-4 w-4 text-white" strokeWidth={2.5} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href as never} className={baseClasses}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} disabled={disabled}>
      {inner}
    </button>
  );
}
