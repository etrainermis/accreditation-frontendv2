"use client";

import { ReactNode, useEffect } from "react";
import { usePageHeader } from "@/lib/context/page-header-context";

export function PageContainer({
  title,
  description,
  action,
  breadcrumbs,
  hideSidebar,
  children,
}: {
  role: string;
  title: string;
  description: string;
  action?: ReactNode;
  breadcrumbs?: { label: string; href: string }[];
  hideSidebar?: boolean;
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
    });
  }, [title, description, action, breadcrumbs, hideSidebar, setHeader]);

  return (
    <div className="space-y-6">
      <div className="py-6">
        {children}
      </div>
    </div>
  );
}
