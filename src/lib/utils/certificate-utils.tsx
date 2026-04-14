import React from "react";
import { Column } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { CheckCircle2, Clock } from "lucide-react";

export interface CompletedApplication {
  id: string;
  applicant: { name: string; email: string; avatar: string };
  institution: { name: string; website: string; logo: string };
  trade: { name: string; category: string };
  completedOn: string;
  evaluator: string;
  certificateAccess: "Granted" | "Pending";
}

export const mockCompletedApplications: CompletedApplication[] = [
  {
    id: "1",
    applicant: { name: "Jane Smith", email: "janesmith@example.com", avatar: "JS" },
    institution: { name: "Tech Institute Rwanda", website: "techinstituterw.com", logo: "TI" },
    trade: { name: "Masonry", category: "SPE" },
    completedOn: "15/03/2026",
    evaluator: "John Doe",
    certificateAccess: "Pending",
  },
  {
    id: "2",
    applicant: { name: "Robert Johnson", email: "robert@example.com", avatar: "RJ" },
    institution: { name: "Vocational Training Center", website: "vtc.rw", logo: "VT" },
    trade: { name: "Carpentry", category: "SPE" },
    completedOn: "12/03/2026",
    evaluator: "Sarah Williams",
    certificateAccess: "Granted",
  },
  {
    id: "3",
    applicant: { name: "Mary Brown", email: "mary@example.com", avatar: "MB" },
    institution: { name: "Skills Development Institute", website: "sdi.rw", logo: "SD" },
    trade: { name: "Plumbing", category: "SPE" },
    completedOn: "10/03/2026",
    evaluator: "Michael Chen",
    certificateAccess: "Pending",
  },
  {
    id: "4",
    applicant: { name: "David Wilson", email: "david@example.com", avatar: "DW" },
    institution: { name: "Professional Training Academy", website: "pta.rw", logo: "PT" },
    trade: { name: "Electrical Installation", category: "SPE" },
    completedOn: "08/03/2026",
    evaluator: "Emily Davis",
    certificateAccess: "Granted",
  },
  {
    id: "5",
    applicant: { name: "Lisa Anderson", email: "lisa@example.com", avatar: "LA" },
    institution: { name: "Technical College Kigali", website: "tck.rw", logo: "TC" },
    trade: { name: "Welding", category: "SPE" },
    completedOn: "05/03/2026",
    evaluator: "James Miller",
    certificateAccess: "Pending",
  },
];

export const getCompletedApplicationColumns = (): Column<CompletedApplication>[] => [
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
    header: "Completed On",
    accessor: (item) => (
      <span className="text-[13px] font-medium text-slate-600">{item.completedOn}</span>
    ),
  },
  {
    header: "Evaluator",
    accessor: (item) => (
      <span className="text-[13px] text-slate-500">{item.evaluator}</span>
    ),
  },
  {
    header: "Certificate Access",
    accessor: (item) => (
      <div className="flex items-center gap-2">
        {item.certificateAccess === "Granted" ? (
          <>
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
            <span className="text-[13px] font-medium text-blue-600">Granted</span>
          </>
        ) : (
          <>
            <Clock className="h-4 w-4 text-orange-500" />
            <span className="text-[13px] font-medium text-orange-600">Pending</span>
          </>
        )}
      </div>
    ),
  },
  {
    header: "Action",
    accessor: (item) => (
      <div className="flex items-center gap-2">
        {item.certificateAccess === "Pending" ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              alert(`Certificate access granted to ${item.applicant.name} for ${item.trade.name}`);
            }}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-sm text-[12px] font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Grant Access
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              if (confirm(`Are you sure you want to revoke certificate access for ${item.applicant.name}?`)) {
                alert(`Certificate access revoked for ${item.applicant.name}`);
              }
            }}
            className="px-3 py-1.5 bg-white border border-red-300 text-red-600 rounded-sm text-[12px] font-medium hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            Revoke Access
          </button>
        )}
      </div>
    ),
  },
];
