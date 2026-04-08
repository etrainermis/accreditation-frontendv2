"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";
import { PageHeaderProvider } from "@/lib/context/page-header-context";
import { LayoutGroup } from "framer-motion";

// Suppress the React 19 warning for next-themes script tag in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return;
    }
    orig.apply(console, args);
  };
}

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60_000,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <PageHeaderProvider>
          <QueryClientProvider client={queryClient}>
            <LayoutGroup>
              {children}
            </LayoutGroup>
          </QueryClientProvider>
        </PageHeaderProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
}
