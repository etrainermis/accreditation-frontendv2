import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  loading?: boolean;
  asChild?: boolean;
}

const buttonClassName = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
}: Pick<ButtonProps, "variant" | "size" | "fullWidth" | "loading" | "className">) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-500",
    outline: "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus:ring-slate-500 shadow-sm",
    ghost: "text-slate-600 hover:bg-slate-100 focus:ring-slate-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    loading && "cursor-wait",
    className
  );
};

const iconSizeByButtonSize = {
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      icon: Icon,
      iconPosition = "left",
      fullWidth = false,
      loading = false,
      className,
      disabled,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const spinnerSize = iconSizeByButtonSize[size];
    const buttonClasses = buttonClassName({ variant, size, fullWidth, loading, className });

    if (asChild) {
      return (
        <Slot className={buttonClasses}>
          {children}
        </Slot>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} disabled={disabled || loading} {...props}>
        {loading ? (
          <>
            <svg className={cn("animate-spin", spinnerSize)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </>
        ) : (
          <>
            {Icon && iconPosition === "left" && <Icon className={spinnerSize} />}
            {children}
            {Icon && iconPosition === "right" && <Icon className={spinnerSize} />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
