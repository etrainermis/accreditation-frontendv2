"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { DataTable } from "@/components/ui/data-table";
import { getCriteriaColumns } from "@/lib/utils/criteria-utils";
import { UserRole } from "@/types/auth";
import { useGetAllCriteria, useUploadCriteria, useDeleteCriteria } from "@/hooks/queries/useCriteriaQueries";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

import { DocumentViewerModal } from "@/components/ui/document-viewer-modal";

interface CriteriaContentProps {
  role?: UserRole;
}

export function CriteriaContent({ role = "super-admin" }: CriteriaContentProps) {
  const [search, setSearch] = useState("");
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  
  const isReadOnly = role === "supervisor" || role === "evaluator"; // these roles can only view
  const canUpload = role === "super-admin" || role === "ADMIN"; // only admins can upload
  
  const { data: criteria, isLoading } = useGetAllCriteria();
  const uploadMutation = useUploadCriteria();
  const deleteMutation = useDeleteCriteria();

  const handleUpload = (selectedFiles: FileList | null) => {
    if (!selectedFiles || selectedFiles.length === 0) return;
    
    const file = selectedFiles[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", file.name);
    formData.append("description", "Uploaded via criteria tab");

    uploadMutation.mutate(formData);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this criteria?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleView = (item: any) => {
    setSelectedFile(item);
    setIsViewerOpen(true);
  };

  const columns = getCriteriaColumns(isReadOnly, handleDelete, handleView);

  if (isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-[#0A77FF]" />
      </div>
    );
  }

  // Map backend criteria to table format
  const mappedData = criteria?.map(item => ({
    id: item.id,
    name: item.name,
    size: `${(item.file?.size / 1024).toFixed(1)} KB`,
    type: (item.file?.type?.toUpperCase() || "PDF") as any,
    dateUploaded: format(new Date(item.createdAt), "MMM dd, yyyy"),
    lastUpdated: format(new Date(item.updatedAt), "MMM dd, yyyy"),
    fileUrl: item.file?.url, // Store original URL for viewer
    uploadedBy: { 
      name: "Admin", 
      email: "admin@rtb.gov.rw", 
      avatar: "A" 
    },
  })) || [];

  return (
    <div className="space-y-6">
      {canUpload && (
        <FileUpload 
          onFileSelect={handleUpload}
        />
      )}

      <div className="pt-4">
        <DataTable 
          title="Evaluation Criteria Attachments"
          description={isReadOnly ? "View evaluation criteria files" : "Files and assets that have been attached to the system."}
          data={mappedData}
          columns={columns}
          searchPlaceholder="Search criteria"
          searchValue={search}
          onSearchChange={setSearch}
          showPagination={true}
        />
      </div>

      {selectedFile && (
        <DocumentViewerModal
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
          title={selectedFile.name}
          fileUrl={selectedFile.fileUrl}
          fileTypeLabel={selectedFile.type}
          fileSize={selectedFile.size}
        />
      )}
    </div>
  );
}
