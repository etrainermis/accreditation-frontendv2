"use client";

import React from "react";
import { DataTable } from "@/components/ui/data-table";
import { mockApplications, getApplicationColumns } from "@/lib/utils/application-utils";
import { useRouter } from "next/navigation";

export function CurriculumApplicationList() {
  const router = useRouter();
  
  // Filter for applications that need curriculum review
  // For demonstration, we'll use applications with status "Pending" and specific stages
  const applications = mockApplications.filter(app => 
    app.stage === "Initial Review" || app.id === "2"
  );

  const columns = getApplicationColumns();
  
  // Customize Action column for our specific workflow
  const customColumns = columns.map(col => {
    if (col.header === "Actions") {
      return {
        ...col,
        accessor: (item: any) => (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/curriculum-evaluator/applications/${item.id}`);
            }}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#0A77FF] text-white text-[12px] font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer whitespace-nowrap"
          >
            Review Curriculum
          </button>
        )
      };
    }
    return col;
  });

  return (
    <div className="mt-8 text-left">
      <DataTable 
        data={applications} 
        columns={customColumns} 
        title="Pending Reviews"
        description="Select an application to start the curriculum verification process."
      />
    </div>
  );
}
