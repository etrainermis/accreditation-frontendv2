import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[var(--accent)] px-3 py-1 text-xs  uppercase tracking-[0.18em] text-[var(--accent-foreground)]",
        className,
      )}
      {...props}
    />
  );
}
