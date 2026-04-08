"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";

interface PageHeaderContextType {
  title: string;
  description: string;
  action: ReactNode | null;
  breadcrumbs?: { label: string; href: string }[];
  hideSidebar?: boolean;
  setHeader: (header: { 
    title?: string; 
    description?: string; 
    action?: ReactNode | null;
    breadcrumbs?: { label: string; href: string }[];
    hideSidebar?: boolean;
  }) => void;
}

const PageHeaderContext = createContext<PageHeaderContextType | undefined>(undefined);

export function PageHeaderProvider({ children }: { children: ReactNode }) {
  const [{ title, description, action, breadcrumbs, hideSidebar }, setHeaderState] = useState<{ 
    title: string; 
    description: string; 
    action: ReactNode | null;
    breadcrumbs?: { label: string; href: string }[];
    hideSidebar?: boolean;
  }>({
    title: "",
    description: "",
    action: null,
    breadcrumbs: [],
    hideSidebar: false,
  });

  const setHeader = useCallback((newHeader: { 
    title?: string; 
    description?: string; 
    action?: ReactNode | null;
    breadcrumbs?: { label: string; href: string }[];
    hideSidebar?: boolean;
  }) => {
    setHeaderState((prev) => {
      // Use 'in' operator to check if the property was explicitly passed
      const nextTitle = 'title' in newHeader ? newHeader.title! : prev.title;
      const nextDescription = 'description' in newHeader ? newHeader.description! : prev.description;
      const nextAction = 'action' in newHeader ? newHeader.action : prev.action;
      const nextBreadcrumbs = 'breadcrumbs' in newHeader ? newHeader.breadcrumbs : prev.breadcrumbs;
      const nextHideSidebar = 'hideSidebar' in newHeader ? newHeader.hideSidebar : prev.hideSidebar;

      if (
        nextTitle === prev.title && 
        nextDescription === prev.description && 
        nextAction === prev.action &&
        nextBreadcrumbs === prev.breadcrumbs &&
        nextHideSidebar === prev.hideSidebar
      ) {
        return prev;
      }

      return {
        title: nextTitle,
        description: nextDescription,
        action: nextAction,
        breadcrumbs: nextBreadcrumbs,
        hideSidebar: nextHideSidebar,
      };
    });
  }, []);

  const value = useMemo(() => ({
    title,
    description,
    action,
    breadcrumbs,
    hideSidebar,
    setHeader
  }), [title, description, action, breadcrumbs, hideSidebar, setHeader]);

  return (
    <PageHeaderContext.Provider value={value}>
      {children}
    </PageHeaderContext.Provider>
  );
}

export function usePageHeader() {
  const context = useContext(PageHeaderContext);
  if (context === undefined) {
    throw new Error("usePageHeader must be used within a PageHeaderProvider");
  }
  return context;
}
