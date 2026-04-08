import { Skeleton } from "@/components/ui/skeleton";

export function PortalGenericLoading() {
  return (
    <div className="space-y-6 py-6 animate-pulse">
      {/* Subnav / Header placeholder */}
      <div className="flex w-full items-center justify-between mb-6">
        <div className="flex gap-2">
          <Skeleton className="h-10 w-28 rounded-sm" />
          <Skeleton className="h-10 w-28 rounded-sm" />
          <Skeleton className="h-10 w-40 rounded-sm" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-28 w-full rounded-md" />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="space-y-4">
        <Skeleton className="h-[400px] w-full rounded-md" />
        <Skeleton className="h-[300px] w-full rounded-md" />
      </div>
    </div>
  );
}
