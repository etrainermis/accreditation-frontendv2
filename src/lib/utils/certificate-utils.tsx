import React, { useState } from "react";
import { Column } from "@/components/ui/data-table";
import { StatusBadge, StatusType } from "@/components/ui/status-badge";
import { CheckCircle2, Clock, X, AlertTriangle } from "lucide-react";

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

// Modal Components
interface GrantAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  applicantName: string;
  tradeName: string;
}

export function GrantAccessModal({ isOpen, onClose, onConfirm, applicantName, tradeName }: GrantAccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-in fade-in zoom-in duration-200">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 mx-auto">
            <CheckCircle2 className="h-6 w-6 text-blue-600" />
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Grant Certificate Access</h3>
            <p className="text-sm text-slate-600">
              Are you sure you want to grant certificate access to <span className="font-medium text-slate-900">{applicantName}</span> for <span className="font-medium text-slate-900">{tradeName}</span>?
            </p>
            <p className="text-xs text-slate-500">
              The applicant will be able to download their accreditation certificate.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-sm text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Grant Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RevokeAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  applicantName: string;
  tradeName: string;
}

export function RevokeAccessModal({ isOpen, onClose, onConfirm, applicantName, tradeName }: RevokeAccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 animate-in fade-in zoom-in duration-200">
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-50 mx-auto">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>

          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-slate-900">Revoke Certificate Access</h3>
            <p className="text-sm text-slate-600">
              Are you sure you want to revoke certificate access for <span className="font-medium text-slate-900">{applicantName}</span> for <span className="font-medium text-slate-900">{tradeName}</span>?
            </p>
            <p className="text-xs text-red-600 font-medium">
              This action will prevent the applicant from downloading their certificate.
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2.5 border border-slate-300 text-slate-700 rounded-sm text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onConfirm();
                onClose();
              }}
              className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-sm text-sm font-medium hover:bg-red-700 transition-colors"
            >
              Revoke Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getCompletedApplicationColumns = (
  onGrantAccess?: (item: CompletedApplication) => void,
  onRevokeAccess?: (item: CompletedApplication) => void
): Column<CompletedApplication>[] => [
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
              onGrantAccess?.(item);
            }}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-sm text-[12px] font-medium hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Grant Access
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onRevokeAccess?.(item);
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

// --- Certificate Tracking ---

export interface GrantedCertificate {
  id: string;
  applicant: { name: string; email: string; avatar: string };
  institution: { name: string; website: string; logo: string };
  trade: { name: string; category: string };
  grantedOn: string; // ISO date string
  evaluator: string;
}

// Certificates granted at various points relative to today (April 14, 2026)
export const mockGrantedCertificates: GrantedCertificate[] = [
  {
    id: "1",
    applicant: { name: "Robert Johnson", email: "robert@example.com", avatar: "RJ" },
    institution: { name: "Vocational Training Center", website: "vtc.rw", logo: "VT" },
    trade: { name: "Carpentry", category: "SPE" },
    grantedOn: "2026-03-01",
    evaluator: "Sarah Williams",
  },
  {
    id: "2",
    applicant: { name: "David Wilson", email: "david@example.com", avatar: "DW" },
    institution: { name: "Professional Training Academy", website: "pta.rw", logo: "PT" },
    trade: { name: "Electrical Installation", category: "SPE" },
    grantedOn: "2026-02-10",
    evaluator: "Emily Davis",
  },
  {
    id: "3",
    applicant: { name: "Alice Mutoni", email: "alice@example.com", avatar: "AM" },
    institution: { name: "Kigali Tech Institute", website: "kti.rw", logo: "KT" },
    trade: { name: "Masonry", category: "SPE" },
    grantedOn: "2026-04-01",
    evaluator: "John Doe",
  },
  {
    id: "4",
    applicant: { name: "Eric Nkurunziza", email: "eric@example.com", avatar: "EN" },
    institution: { name: "Rwanda Skills Center", website: "rsc.rw", logo: "RS" },
    trade: { name: "Plumbing", category: "SPE" },
    grantedOn: "2026-01-10",
    evaluator: "Michael Chen",
  },
  {
    id: "5",
    applicant: { name: "Grace Uwimana", email: "grace@example.com", avatar: "GU" },
    institution: { name: "Technical College Kigali", website: "tck.rw", logo: "TC" },
    trade: { name: "Welding", category: "SPE" },
    grantedOn: "2026-04-10",
    evaluator: "James Miller",
  },
];

function getDaysInfo(grantedOn: string) {
  const granted = new Date(grantedOn);
  const expiry = new Date(granted);
  expiry.setMonth(expiry.getMonth() + 3); // 3 months validity

  const today = new Date("2026-04-14"); // current date
  const totalMs = expiry.getTime() - granted.getTime();
  const elapsedMs = today.getTime() - granted.getTime();
  const remainingMs = expiry.getTime() - today.getTime();

  const totalDays = Math.round(totalMs / (1000 * 60 * 60 * 24));
  const elapsedDays = Math.round(elapsedMs / (1000 * 60 * 60 * 24));
  const remainingDays = Math.round(remainingMs / (1000 * 60 * 60 * 24));
  const progressPct = Math.min(100, Math.round((elapsedDays / totalDays) * 100));

  const isExpired = remainingDays <= 0;
  const isExpiringSoon = !isExpired && remainingDays <= 14;

  return { granted, expiry, elapsedDays, remainingDays, progressPct, isExpired, isExpiringSoon };
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export const getCertificateTrackingColumns = (): Column<GrantedCertificate>[] => [
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
    header: "Institution / Trade",
    accessor: (item) => (
      <div className="flex flex-col">
        <span className="text-[13px] text-[#101828]">{item.institution.name}</span>
        <span className="text-[11px] text-[#475467]">{item.trade.name}</span>
      </div>
    ),
  },
  {
    header: "Granted On",
    accessor: (item) => {
      const { granted } = getDaysInfo(item.grantedOn);
      return <span className="text-[13px] text-slate-600">{formatDate(granted)}</span>;
    },
  },
  {
    header: "Expires On",
    accessor: (item) => {
      const { expiry, isExpired, isExpiringSoon } = getDaysInfo(item.grantedOn);
      return (
        <span className={`text-[13px] font-medium ${isExpired ? "text-red-600" : isExpiringSoon ? "text-orange-600" : "text-slate-600"}`}>
          {formatDate(expiry)}
        </span>
      );
    },
  },
  {
    header: "Time Remaining",
    accessor: (item) => {
      const { remainingDays, isExpired, isExpiringSoon } = getDaysInfo(item.grantedOn);
      if (isExpired) {
        return (
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-red-500 shrink-0" />
            <span className="text-[12px] font-medium text-red-600">Expired</span>
          </div>
        );
      }
      return (
        <div className="flex items-center gap-1.5">
          <div className={`h-2 w-2 rounded-full shrink-0 ${isExpiringSoon ? "bg-orange-500" : "bg-blue-500"}`} />
          <span className={`text-[12px] font-medium ${isExpiringSoon ? "text-orange-600" : "text-blue-600"}`}>
            {remainingDays}d left
          </span>
        </div>
      );
    },
  },
  {
    header: "Validity Progress",
    accessor: (item) => {
      const { progressPct, isExpired, isExpiringSoon } = getDaysInfo(item.grantedOn);
      const barColor = isExpired
        ? "bg-red-500"
        : isExpiringSoon
        ? "bg-orange-500"
        : "bg-blue-500";
      return (
        <div className="w-32 space-y-1">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all ${barColor}`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-400">{progressPct}% elapsed</span>
        </div>
      );
    },
  },
  {
    header: "Status",
    accessor: (item) => {
      const { isExpired, isExpiringSoon } = getDaysInfo(item.grantedOn);
      const status: StatusType = isExpired ? "Expired" : isExpiringSoon ? "Expiring Soon" : "Active";
      return <StatusBadge status={status} />;
    },
  },
];
