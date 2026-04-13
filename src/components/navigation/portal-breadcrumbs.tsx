"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { portalNavigation } from "@/lib/config/navigation";
import { usePageHeader } from "@/lib/context/page-header-context";

export function PortalBreadcrumbs() {
  const { breadcrumbs: contextBreadcrumbs } = usePageHeader();
  const pathname = usePathname();

  // If context breadcrumbs are provided, use them
  if (contextBreadcrumbs && contextBreadcrumbs.length > 0) {
    return (
      <nav className="flex items-center text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          {contextBreadcrumbs.map((crumb: { label: string; href: string }, index: number) => {
            const isLast = index === contextBreadcrumbs.length - 1;
            return (
              <li key={`${crumb.href}-${index}`} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-4 text-[#D0D5DD] w-4" />}
                {isLast ? (
                  <span className=" text-[#0A77FF]">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href as never}
                    className="text-[var(--primary)] hover:text-[var(--primary)] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  // Fallback to dynamic generation
  const allSegments = pathname
    .split("/")
    .filter((segment) => segment && !segment.startsWith("("));

  // Determine the role/root (e.g., 'super-admin')
  const role = allSegments[0] || "";
  const roleConfig = portalNavigation[role as keyof typeof portalNavigation];

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

  // The first segment after the role is the starting point (e.g., 'dashboard' or 'evaluations')
  const portalSegments = allSegments.slice(1);

  // Map of segments to specific default internal redirects
  const SEGMENT_HREF_MAP: Record<string, string> = {
    evaluations: role === "applicant" ? "/applicant/evaluations" : `/${role}/evaluations/applications`,
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
              {index > 0 && <ChevronRight className="h-4 text-[#D0D5DD] w-4" />}
              {isLast ? (
                <span className=" text-[#0A77FF]">
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
