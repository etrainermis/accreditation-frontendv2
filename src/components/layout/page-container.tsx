"use client";

import { ReactNode, useEffect } from "react";
import { usePageHeader } from "@/lib/context/page-header-context";

export function PageContainer({
  title,
  description,
  action,
  children,
}: {
  role: string;
  title: string;
  description: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  const { setHeader } = usePageHeader();

  useEffect(() => {
    setHeader({
      title,
      description,
      action: action || null
    });
  }, [title, description, action, setHeader]);

  return (
    <div className="space-y-6">
      <div className="space-y-6 py-6">
        {children}
      </div>
    </div>
  );
}
