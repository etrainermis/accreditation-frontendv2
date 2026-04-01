import Link from "next/link";

import { EmptyState } from "@/components/feedback/empty-state";
import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl items-center px-6 py-12">
      <div className="w-full space-y-6">
        <EmptyState
          title="Unauthorized"
          description="Use this route for frontend-only role guards when a user reaches a portal outside their assigned role."
        />
        <Button asChild>
          <Link href="/login">Return to login</Link>
        </Button>
      </div>
    </main>
  );
}
