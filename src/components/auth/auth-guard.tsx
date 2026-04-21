"use client";

import { useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useGetAuthSession } from "@/hooks/queries/useAuthQueries";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setCredentials, logout } from "@/store/slices/authSlice";
import { Loader2 } from "lucide-react";

import { userRoles, type UserRole } from "@/types/auth";

interface AuthGuardProps {
  children: ReactNode;
  allowedRoles?: UserRole[];
}

export function AuthGuard({ children, allowedRoles }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated, isLoading: isReduxLoading } = useAppSelector((state) => state.auth);

  // Check for session on mount / refresh
  const { data: session, isError, isLoading: isQueryLoading, isSuccess } = useGetAuthSession();

  useEffect(() => {
    if (isSuccess && session?.user) {
      if (!isAuthenticated || user?.id !== session.user.id) {
        dispatch(setCredentials({
          user: {
            id: session.user.id,
            email: session.user.email,
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            roles: session.user.roles?.map((r: any) => r.name) || [],
          }
        }));
      }
    } else if (isError || (isSuccess && !session?.user)) {
      // If error or no session found after check, ensure logged out and redirected
      if (isAuthenticated) {
        dispatch(logout());
      }
      if (!pathname.startsWith("/login")) {
        router.push("/login");
      }
    }
  }, [isSuccess, isError, session, dispatch, router, pathname, isAuthenticated, user?.id]);

  // Role checking logic
  const hasRequiredRole = !allowedRoles || (user && user.roles.some((role: any) => 
    allowedRoles.includes(role.toLowerCase() as UserRole) || 
    allowedRoles.includes(role.toUpperCase() as UserRole)
  ));

  useEffect(() => {
    if (isAuthenticated && !isReduxLoading && !isQueryLoading && !hasRequiredRole) {
      router.push("/unauthorized");
    }
  }, [isAuthenticated, isReduxLoading, isQueryLoading, hasRequiredRole, router]);

  // If we are on a login page, just show content
  if (pathname.startsWith("/login")) {
    return <>{children}</>;
  }

  // Show loading while checking session OR checking role
  const isVerifying = isReduxLoading || (isQueryLoading && !isAuthenticated) || (isAuthenticated && !hasRequiredRole);

  if (isVerifying) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin text-[var(--primary)]" />
          <p className="text-sm font-medium text-slate-500">
            {!isAuthenticated ? "Securing your session..." : "Verifying access..."}
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
