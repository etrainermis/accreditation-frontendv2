import React from "react";
import { Column } from "@/components/ui/data-table";
import { StatusBadge, StatusType } from "@/components/ui/status-badge";
import { Eye, Trash2 } from "lucide-react";

export interface Application {
  id: string;
  applicant: { name: string; email: string; avatar: string };
  institution: { name: string; website: string; logo: string };
  trade: { name: string; category: string };
  status: StatusType;
  stage: string;
  submittedOn: string;
  location?: string;
}

export const mockApplications: Application[] = [
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
    stage: "Rejected",
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
    status: "Approved",
    stage: "Certified",
    submittedOn: "19/12/2025 2:00 PM",
    location: "AU",
  },
];

export const getApplicationColumns = (isReadOnly: boolean = false): Column<Application>[] => {
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
            <span className="text-[13px] text-[#101828]">{item.applicant.name}</span>
            <span className="text-[11px] text-[#475467]">{item.applicant.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Institution",
      sortable: true,
      accessor: (item) => (
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-100 text-[10px] font-bold text-orange-600">
            {item.institution.logo}
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[#101828]">{item.institution.name}</span>
            <span className="text-[11px] text-[#475467]">{item.institution.website}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Trade",
      accessor: (item) => (
        <div className="flex flex-col">
          <span className="text-[13px] font-medium text-slate-600">{item.trade.name}</span>
          <span className="text-[11px] text-[#475467] uppercase tracking-wider">{item.trade.category}</span>
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
          <span className="text-[11px] text-[#475467]">{item.submittedOn.split(" ").slice(1).join(" ")}</span>
        </div>
      ),
    },
  ];

  if (!isReadOnly) {
    columns.push({
      header: "Actions",
      accessor: () => (
        <div className="flex items-start gap-4">
          <Eye className="h-4 w-4 text-slate-400 cursor-pointer hover:text-[var(--primary)] transition-colors" />
          <Trash2 className="h-4 w-4 text-slate-400 cursor-pointer hover:text-red-500 transition-colors" />
        </div>
      ),
    });
  }

  return columns;
};
