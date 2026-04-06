"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { portalNavigation } from "@/lib/config/navigation";

export function PortalBreadcrumbs() {
  const pathname = usePathname();
  
  // Split path and filter out empty segments and route groups
  const allSegments = pathname
    .split("/")
    .filter((segment) => segment && !segment.startsWith("("));

  // Determine the role/root (e.g., 'super-admin')
  const role = allSegments[0] || "";
  const roleConfig = portalNavigation[role as keyof typeof portalNavigation];
  
  // The first segment after the role is the starting point (e.g., 'dashboard' or 'evaluations')
  const portalSegments = allSegments.slice(1);

  // Map of URL segments to friendly titles for cases where the URL structure
  // doesn't match the navigation config titles perfectly.
  const SEGMENT_TITLE_MAP: Record<string, string> = {
    evaluations: "Evaluations",
    applications: "Applications",
    evaluators: "Evaluators",
    criteria: "Criteria",
    schedule: "Schedule",
    dashboard: "Dashboard",
  };

  // Map of segments to specific default internal redirects
  const SEGMENT_HREF_MAP: Record<string, string> = {
    evaluations: `/${role}/evaluations/applications`,
  };

  // Helper to find title from navigation config
  const getSegmentTitle = (segment: string, fullPath: string) => {
    // Check if we have an explicit mapping for this segment name
    if (SEGMENT_TITLE_MAP[segment]) {
      return SEGMENT_TITLE_MAP[segment];
    }

    if (!roleConfig) return formatSegment(segment);
    
    // Fallback to exact path match in navigation config
    const navItem = roleConfig.items.find(item => item.href === fullPath);
    return navItem ? navItem.title : formatSegment(segment);
  };

  // Helper to find the correct href for a segment
  const getSegmentHref = (segment: string, defaultPath: string) => {
    return SEGMENT_HREF_MAP[segment] || defaultPath;
  };

  // Function to format segments into human-readable titles (fallback)
  const formatSegment = (segment: string) => {
    return segment
      .replace(/-/g, " ")
      .replace(/([A-Z])/g, " $1")
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex items-center text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2">
        {portalSegments.map((segment, index) => {
          // Construct default href correctly: /role/segment/segment...
          const rawPath = `/${role}/${portalSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === portalSegments.length - 1;
          
          const href = getSegmentHref(segment, rawPath);
          const title = getSegmentTitle(segment, rawPath);

          return (
            <li key={rawPath} className="flex items-center gap-2">
              {index > 0 && <ChevronRight className="h-4 w-4 text-slate-300" />}
              {isLast ? (
                <span className="font-medium text-[var(--primary)]">
                  {title}
                </span>
              ) : (
                <Link
                  href={href as never}
                  className="text-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
