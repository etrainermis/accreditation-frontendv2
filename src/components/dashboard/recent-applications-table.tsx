"use client";

import React, { useState } from "react";
import { DataTable } from "@/components/ui/data-table";
import { X, ListFilter } from "lucide-react";
import { 
  mockApplications, 
  getApplicationColumns 
} from "@/lib/utils/application-utils";

export function RecentApplicationsTable() {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["All time", "US, AU, +4"]);

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const filteredData = mockApplications.filter(item => {
    const matchesSearch = 
      item.applicant.name.toLowerCase().includes(search.toLowerCase()) ||
      item.applicant.email.toLowerCase().includes(search.toLowerCase()) ||
      item.institution.name.toLowerCase().includes(search.toLowerCase());
    
    const hasLocationFilter = activeFilters.includes("US, AU, +4");
    const matchesLocation = !hasLocationFilter || (item.location && ["US", "AU"].includes(item.location));

    return matchesSearch && matchesLocation;
  });

  const columns = getApplicationColumns();

  return (
    <div className="mt-8 animate-slide-up">
      <DataTable 
        data={filteredData} 
        columns={columns} 
        title="Recent Applications"
        description="Manage applications by different institutions right here"
        searchValue={search}
        onSearchChange={setSearch}
        showPagination={true}
        currentPage={1}
        totalPages={10}
        filters={
          <div className="flex items-center gap-2">
            {activeFilters.map((filter) => (
              <div 
                key={filter} 
                className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs text-[#344054] border border-slate-100 bg-white"
              >
                <span>{filter}</span>
                <X 
                  className="h-3 w-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" 
                  onClick={() => removeFilter(filter)}
                />
              </div>
            ))}
            <button className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs text-[#344054] hover:bg-slate-100 transition-colors border border-slate-100 bg-white shadow-sm">
              <ListFilter className="h-4 w-4 text-slate-500" />
              <span>More filters</span>
            </button>
          </div>
        }
      />
    </div>
  );
}
