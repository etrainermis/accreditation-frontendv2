"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable, Column } from "@/components/ui/data-table";
import { StatusBadge, StatusType } from "@/components/ui/status-badge";
import { 
  Search, 
  MoreHorizontal, 
  Eye, 
  Trash2, 
  X, 
  ChevronDown, 
  ListFilter 
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface Application {
  id: string;
  applicant: { name: string; email: string; avatar: string };
  institution: { name: string; website: string; logo: string };
  trade: { name: string; category: string };
  status: StatusType;
  stage: string;
  submittedOn: string;
  location: string;
}

const mockData: Application[] = [
  {
    id: "1",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Pending",
    stage: "Initial Review",
    submittedOn: "19/12/2025 2:00 PM",
    location: "US",
  },
  {
    id: "2",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Pending",
    stage: "Due Diligence Scheduled",
    submittedOn: "19/12/2025 2:00 PM",
    location: "AU",
  },
  {
    id: "3",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Rejected",
    stage: "Due Diligence Completed",
    submittedOn: "19/12/2025 2:00 PM",
    location: "UK",
  },
  {
    id: "4",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Pending",
    stage: "Final Review",
    submittedOn: "19/12/2025 2:00 PM",
    location: "US",
  },
  {
    id: "5",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Rejected",
    stage: "Rejected",
    submittedOn: "19/12/2025 2:00 PM",
    location: "AU",
  },
  {
    id: "6",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Approved",
    stage: "Certified",
    submittedOn: "19/12/2025 2:00 PM",
    location: "CA",
  },
  {
    id: "7",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Command+R", website: "cmdr.ai", logo: "CR" },
    trade: { name: "JavaScript", category: "SPE" },
    status: "Pending",
    stage: "Initial Review",
    submittedOn: "19/12/2025 2:00 PM",
    location: "US",
  },
];

export function RecentApplicationsTable() {
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>(["All time", "US, AU, +4"]);

  const removeFilter = (filter: string) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const filteredData = mockData.filter(item => {
    const matchesSearch = 
      item.applicant.name.toLowerCase().includes(search.toLowerCase()) ||
      item.applicant.email.toLowerCase().includes(search.toLowerCase()) ||
      item.institution.name.toLowerCase().includes(search.toLowerCase());
    
    const hasLocationFilter = activeFilters.includes("US, AU, +4");
    const matchesLocation = !hasLocationFilter || ["US", "AU"].includes(item.location);

    // Simplistic time filter for mock (All time means show all)
    return matchesSearch && matchesLocation;
  });

  const columns: Column<Application>[] = [
    {
      header: "Applicant",
      sortable: true,
      accessor: (item) => (
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
            {item.applicant.avatar}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-[13px] font-semibold text-slate-900">{item.applicant.name}</span>
     
            </div>
            <span className="text-[11px] text-slate-400">{item.applicant.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Institution",
      accessor: (item) => (
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
            {item.institution.logo}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-semibold text-slate-900">{item.institution.name}</span>
            <span className="text-[11px] text-slate-400">{item.institution.website}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Trade",
      accessor: (item) => (
        <div className="flex flex-col">
          <span className="text-[13px] font-medium text-slate-600">{item.trade.name}</span>
          <span className="text-[11px] text-slate-400 uppercase tracking-wider">{item.trade.category}</span>
        </div>
      ),
    },
    {
      header: "Status",
      accessor: (item) => <StatusBadge status={item.status} />,
    },
    {
      header: "Evaluation Stage",
      accessor: (item) => (
        <span className="text-[13px] font-medium text-slate-500">{item.stage}</span>
      ),
    },
    {
      header: "Submitted On",
      accessor: (item) => (
        <div className="flex flex-col">
          <span className="text-[13px] font-medium text-slate-600">{item.submittedOn.split(" ")[0]}</span>
          <span className="text-[11px] text-slate-400">{item.submittedOn.split(" ").slice(1).join(" ")}</span>
        </div>
      ),
    },
    {
      header: "Actions",
      accessor: () => (
        <div className="flex items-start gap-4">
          <Eye className="h-4 w-4 text-slate-400 cursor-pointer hover:text-[var(--primary)] transition-colors" />
          <Trash2 className="h-4 w-4 text-slate-400 cursor-pointer hover:text-red-500 transition-colors" />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8 animate-slide-up">
      <div className="mb-6">
        <div className="mb-6">
          <h2 className="text-lg text-[#101828]">Recent Applications</h2>
          <p className="text-sm text-[#64748B] ">
            Manage applications by different institutions right here
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-all border border-slate-100"
            />
          </div>

          <div className="flex items-center gap-2">
            {activeFilters.map((filter) => (
              <div 
                key={filter} 
                className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-semibold text-slate-700 border border-slate-100 bg-white"
              >
                <span>{filter}</span>
                <X 
                  className="h-3 w-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" 
                  onClick={() => removeFilter(filter)}
                />
              </div>
            ))}
            <button className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors border border-slate-100 bg-white">
              <ListFilter className="h-4 w-4 text-slate-500" />
              <span>More filters</span>
            </button>
          </div>
        </div>
      </div>

      <Card className="rounded-t-md border border-slate-200 bg-white shadow-none overflow-hidden">
        <DataTable data={filteredData} columns={columns} />

        <div className="p-6 flex items-center justify-between border-t border-slate-100">
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-xs font-semibold text-slate-600 rounded-sm bg-slate-50  hover:bg-slate-100 transition-all text-[#344054] border border-[#D0D5DD]">
              Previous
            </button>
            <button className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-sm hover:bg-slate-100 transition-all text-[#344054] border border-[#D0D5DD]">
              Next
            </button>
          </div>
          <span className="text-xs font-bold text-slate-500">
            Page 1 of 10
          </span>
        </div>
      </Card>
    </div>
  );
}
