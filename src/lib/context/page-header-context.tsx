"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo } from "react";

interface PageHeaderContextType {
  title: string;
  description: string;
  action: ReactNode | null;
  setHeader: (header: { title?: string; description?: string; action?: ReactNode | null }) => void;
}

const PageHeaderContext = createContext<PageHeaderContextType | undefined>(undefined);

export function PageHeaderProvider({ children }: { children: ReactNode }) {
  const [{ title, description, action }, setHeaderState] = useState<{ 
    title: string; 
    description: string; 
    action: ReactNode | null 
  }>({
    title: "",
    description: "",
    action: null,
  });

  const setHeader = useCallback((newHeader: { title?: string; description?: string; action?: ReactNode | null }) => {
    setHeaderState((prev) => {
      // Check if anything actually changed to avoid redundant state updates
      const nextTitle = newHeader.title ?? prev.title;
      const nextDescription = newHeader.description ?? prev.description;
      const nextAction = newHeader.action !== undefined ? newHeader.action : prev.action;

      if (
        nextTitle === prev.title && 
        nextDescription === prev.description && 
        nextAction === prev.action
      ) {
        return prev;
      }

      return {
        title: nextTitle,
        description: nextDescription,
        action: nextAction,
      };
    });
  }, []);

  const value = useMemo(() => ({
    title,
    description,
    action,
    setHeader
  }), [title, description, action, setHeader]);

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
