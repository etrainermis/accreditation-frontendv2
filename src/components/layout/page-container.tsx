"use client";

import { ReactNode, useEffect } from "react";
import { usePageHeader } from "@/lib/context/page-header-context";
import { cn } from "@/lib/utils/cn";

export function PageContainer({
  title,
  description,
  action,
  breadcrumbs,
  hideSidebar,
  noPadding,
  noScroll,
  children,
}: {
  role: string;
  title: string;
  description: string;
  action?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  hideSidebar?: boolean;
  noPadding?: boolean;
  noScroll?: boolean;
  children: ReactNode;
}) {
  const { setHeader } = usePageHeader();

  useEffect(() => {
    setHeader({
      title,
      description,
      action: action || null,
      breadcrumbs,
      hideSidebar,
      noPadding,
      noScroll,
    });
  }, [title, description, action, breadcrumbs, hideSidebar, noPadding, noScroll, setHeader]);

  return (
    <div className={cn("space-y-6", noScroll && "h-full flex flex-col space-y-0")}>
      <div className={cn(
        noPadding ? "p-0" : "pt-2 pb-6 text-left",
        noScroll && "flex-1 flex flex-col overflow-hidden"
      )}>
        {children}
      </div>
    </div>
  );
}
