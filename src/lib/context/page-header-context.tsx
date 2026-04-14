"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";

interface PageHeaderContextType {
  title: string;
  description: string;
  action: ReactNode | null;
  breadcrumbs?: { label: string; href: string }[];
  hideSidebar?: boolean;
  noPadding?: boolean;
  noScroll?: boolean;
  setHeader: (header: { 
    title?: string; 
    description?: string; 
    action?: ReactNode | null;
    breadcrumbs?: { label: string; href: string }[];
    hideSidebar?: boolean;
    noPadding?: boolean;
    noScroll?: boolean;
  }) => void;
}

const PageHeaderContext = createContext<PageHeaderContextType | undefined>(undefined);

export function PageHeaderProvider({ children }: { children: ReactNode }) {
  const [headerState, setHeaderState] = useState<{ 
    title: string; 
    description: string; 
    action: ReactNode | null;
    breadcrumbs?: { label: string; href: string }[];
    hideSidebar?: boolean;
    noPadding?: boolean;
    noScroll?: boolean;
  }>({
    title: "",
    description: "",
    action: null,
    breadcrumbs: [],
    hideSidebar: false,
    noPadding: false,
    noScroll: false,
  });

  const { title, description, action, breadcrumbs, hideSidebar, noPadding, noScroll } = headerState;

  const setHeader = useCallback((newHeader: { 
    title?: string; 
    description?: string; 
    action?: ReactNode | null;
    breadcrumbs?: { label: string; href: string }[];
    hideSidebar?: boolean;
    noPadding?: boolean;
    noScroll?: boolean;
  }) => {
    setHeaderState((prev) => {
      const nextTitle = 'title' in newHeader ? newHeader.title! : prev.title;
      const nextDescription = 'description' in newHeader ? newHeader.description! : prev.description;
      const nextAction = 'action' in newHeader ? newHeader.action : prev.action;
      const nextBreadcrumbs = 'breadcrumbs' in newHeader ? newHeader.breadcrumbs : prev.breadcrumbs;
      const nextHideSidebar = 'hideSidebar' in newHeader ? newHeader.hideSidebar : prev.hideSidebar;
      const nextNoPadding = 'noPadding' in newHeader ? newHeader.noPadding : prev.noPadding;
      const nextNoScroll = 'noScroll' in newHeader ? newHeader.noScroll : prev.noScroll;

      if (
        nextTitle === prev.title && 
        nextDescription === prev.description && 
        nextAction === prev.action &&
        nextBreadcrumbs === prev.breadcrumbs &&
        nextHideSidebar === prev.hideSidebar &&
        nextNoPadding === prev.noPadding &&
        nextNoScroll === prev.noScroll
      ) {
        return prev;
      }

      return {
        title: nextTitle,
        description: nextDescription,
        action: nextAction,
        breadcrumbs: nextBreadcrumbs,
        hideSidebar: nextHideSidebar,
        noPadding: nextNoPadding,
        noScroll: nextNoScroll,
      };
    });
  }, []);

  const value = useMemo(() => ({
    title,
    description,
    action,
    breadcrumbs,
    hideSidebar,
    noPadding,
    noScroll,
    setHeader
  }), [title, description, action, breadcrumbs, hideSidebar, noPadding, noScroll, setHeader]);

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
