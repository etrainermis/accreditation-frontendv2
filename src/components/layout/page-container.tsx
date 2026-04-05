import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { ReactNode } from "react";

export function PageContainer({
  title,
  description,
  children,
}: {
  role: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="sticky top-0 z-10 bg-white border-b border-[#EAECF0] pb-5 pt-1 flex items-center justify-between">
        <div>
          <h1 className="text-xl text-[#101828] font-medium">{title}</h1>
          <p className="mt-1 text-sm text-[#64748B]">{description}</p>
        </div>
        <Button className="rounded-sm cursor-pointer px-4 py-3 text-sm font-medium">
          Start New Evaluation
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
}
