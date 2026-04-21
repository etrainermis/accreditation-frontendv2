"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { PortalShell } from "@/components/layout/portal-shell";
import { apiRequest } from "@/lib/api/client";
import { Loader2 } from "lucide-react";

export default function ApplicantLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Skip verification if we are already on the onboarding page
    if (pathname.includes("/applicant/onboarding")) {
      setIsVerifying(false);
      return;
    }

    async function verifyInstitution() {
      // Check if user is logged in
      const token = typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const instResponse = await apiRequest<{ success: boolean }>("/v1/institutions/my-institution");
        if (instResponse.success === false) {
          router.push("/applicant/onboarding");
        } else {
          setIsVerifying(false);
        }
      } catch (error) {
        console.error("Institution verification failed:", error);
        // Fallback to onboarding if we can't confirm institution
        router.push("/applicant/onboarding");
      }
    }

    verifyInstitution();
  }, [pathname, router]);

  if (isVerifying) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
        <p className="text-slate-500 font-medium font-sans">Verifying your institutional access...</p>
      </div>
    );
  }

  return <PortalShell role="applicant">{children}</PortalShell>;
}
