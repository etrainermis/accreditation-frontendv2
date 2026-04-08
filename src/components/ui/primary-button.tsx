import * as React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/ui/button";

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
  const buttonVariant = variant === "primary" ? "default" : "outline";
  
  const inner = (
    <span className={cn("inline-flex items-center", variant === "primary" && "text-white")}>
      {!hideIcon && iconPosition === "left" && (
        <Icon className={cn("h-4 w-4 text-white", label && "mr-2")} aria-hidden="true" />
      )}
      {label && <span className={cn(variant === "primary" && "text-white font-medium")}>{label}</span>}
      {!hideIcon && iconPosition === "right" && (
        <Icon className={cn("h-4 w-4 text-white", label && "ml-2")} aria-hidden="true" />
      )}
    </span>
  );

  const buttonClasses = cn(
    "rounded-sm cursor-pointer",
    variant === "primary" && "text-white !text-white bg-[#0A77FF]",
    className
  );

  if (href) {
    return (
      <Button variant={buttonVariant} className={buttonClasses} disabled={disabled} style={variant === "primary" ? { color: "white" } : undefined} asChild>
        <Link href={href as never} style={variant === "primary" ? { color: "white" } : undefined}>
          {inner}
        </Link>
      </Button>
    );
  }

  return (
    <Button variant={buttonVariant} type={type} onClick={onClick} className={buttonClasses} disabled={disabled} style={variant === "primary" ? { color: "white" } : undefined}>
      {inner}
    </Button>
  );
}
