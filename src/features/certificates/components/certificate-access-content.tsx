"use client";

import React, { useState } from "react";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { DataTable } from "@/components/ui/data-table";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import {
  CheckCircle2,
  Clock,
  Award,
  FileCheck,
  Activity,
  AlertTriangle,
} from "lucide-react";
import {
  mockCompletedApplications,
  getCompletedApplicationColumns,
  GrantAccessModal,
  RevokeAccessModal,
  CompletedApplication,
  mockGrantedCertificates,
  getCertificateTrackingColumns,
} from "@/lib/utils/certificate-utils";

const TABS = [
  { key: "access", label: "Access Management" },
  { key: "tracking", label: "Certificate Tracking" },
];

export function CertificateAccessContent() {
  const [activeTab, setActiveTab] = useState("access");
  const [search, setSearch] = useState("");
  const [trackingSearch, setTrackingSearch] = useState("");
  const [grantModalOpen, setGrantModalOpen] = useState(false);
  const [revokeModalOpen, setRevokeModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<CompletedApplication | null>(null);

  const handleGrantAccess = (item: CompletedApplication) => {
    setSelectedApplication(item);
    setGrantModalOpen(true);
  };

  const handleRevokeAccess = (item: CompletedApplication) => {
    setSelectedApplication(item);
    setRevokeModalOpen(true);
  };

  const confirmGrantAccess = () => {
    if (selectedApplication) {
      alert(`Certificate access granted to ${selectedApplication.applicant.name} for ${selectedApplication.trade.name}`);
    }
  };

  const confirmRevokeAccess = () => {
    if (selectedApplication) {
      alert(`Certificate access revoked for ${selectedApplication.applicant.name}`);
    }
  };

  const columns = getCompletedApplicationColumns(handleGrantAccess, handleRevokeAccess);
  const trackingColumns = getCertificateTrackingColumns();

  const accessStats = [
    { label: "Completed Evaluations", value: "18", icon: CheckCircle2, iconColor: "#34C759" },
    { label: "Certificates Granted", value: "12", icon: Award, iconColor: "#0A77FF" },
    { label: "Pending Access", value: "6", icon: Clock, iconColor: "#FF8D28" },
    { label: "Total Approved", value: "18", icon: FileCheck, iconColor: "#6155F5" },
  ];

  const trackingStats = [
    { label: "Active Certificates", value: "9", icon: Activity, iconColor: "#0A77FF" },
    { label: "Expiring Soon", value: "3", icon: AlertTriangle, iconColor: "#FF8D28" },
    { label: "Expired", value: "2", icon: Clock, iconColor: "#FF383C" },
    { label: "Total Issued", value: "12", icon: Award, iconColor: "#34C759" },
  ];

  const filteredData = mockCompletedApplications.filter(item =>
    item.institution.name.toLowerCase().includes(search.toLowerCase()) ||
    item.applicant.name.toLowerCase().includes(search.toLowerCase()) ||
    item.trade.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredTracking = mockGrantedCertificates.filter(item =>
    item.institution.name.toLowerCase().includes(trackingSearch.toLowerCase()) ||
    item.applicant.name.toLowerCase().includes(trackingSearch.toLowerCase()) ||
    item.trade.name.toLowerCase().includes(trackingSearch.toLowerCase())
  );

  return (
    <>
      {/* Tabs */}
      <div className="flex w-full justify-between items-center gap-2 mb-6">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={cn(
                "relative flex items-center justify-center gap-2 px-4 py-3 rounded-sm transition-colors w-full duration-200 whitespace-nowrap",
                isActive ? "text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50 hover:text-[var(--primary)]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="cert-tab-pill"
                  className="absolute inset-0 bg-[#F9FAFB] rounded-sm z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={cn(
                "relative z-10 text-sm font-medium transition-colors duration-200",
                isActive ? "text-[var(--primary)]" : "text-[#353E49]"
              )}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {activeTab === "access" && (
        <div className="space-y-6">
          <StatsGrid items={accessStats} gridCols={4} />
          <DataTable
            data={filteredData}
            columns={columns}
            title="Completed Evaluations"
            description="Applications that have completed the evaluation process and are ready for certificate access"
            searchValue={search}
            onSearchChange={setSearch}
            showPagination={true}
            currentPage={1}
            totalPages={5}
          />
        </div>
      )}

      {activeTab === "tracking" && (
        <div className="space-y-6">
          <StatsGrid items={trackingStats} gridCols={4} />
          <DataTable
            data={filteredTracking}
            columns={trackingColumns}
            title="Certificate Tracking"
            description="Track all granted certificates, their validity period and expiry status"
            searchValue={trackingSearch}
            onSearchChange={setTrackingSearch}
            showPagination={true}
            currentPage={1}
            totalPages={3}
          />
        </div>
      )}

      {selectedApplication && (
        <>
          <GrantAccessModal
            isOpen={grantModalOpen}
            onClose={() => setGrantModalOpen(false)}
            onConfirm={confirmGrantAccess}
            applicantName={selectedApplication.applicant.name}
            tradeName={selectedApplication.trade.name}
          />
          <RevokeAccessModal
            isOpen={revokeModalOpen}
            onClose={() => setRevokeModalOpen(false)}
            onConfirm={confirmRevokeAccess}
            applicantName={selectedApplication.applicant.name}
            tradeName={selectedApplication.trade.name}
          />
        </>
      )}
    </>
  );
}
