"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { FileListItem } from "@/components/ui/file-list-item";
import { DataTable } from "@/components/ui/data-table";
import { getCriteriaColumns, mockCriteriaAttachments } from "@/lib/utils/criteria-utils";

export function CriteriaContent() {
  const [files, setFiles] = useState([
    { id: "1", name: "Tech design requirements.pdf", size: "200 KB", progress: 100, type: "PDF" as const },
    { id: "2", name: "Dashboard prototype.mp4", size: "16 MB", progress: 70, type: "MP4" as const },
    { id: "3", name: "Dashboard prototype FINAL.fig", size: "4.2 MB", progress: 70, type: "FIG" as const },
  ]);

  const [search, setSearch] = useState("");
  const columns = getCriteriaColumns();

  return (
    <div className="space-y-6">
      <FileUpload 
        onFileSelect={(selectedFiles: FileList | null) => {
           console.log("Selected files:", selectedFiles);
        }}
      />

      <div className="space-y-4">
         {files.map((file: any) => (
           <FileListItem 
             key={file.id}
             name={file.name}
             size={file.size}
             progress={file.progress}
             type={file.type}
           />
         ))}
      </div>

      <div className="pt-4">
        <DataTable 
          title="Evaluation Criteria Attachments"
          description="Files and assets that have been attached to this project."
          data={mockCriteriaAttachments}
          columns={columns}
          searchPlaceholder="Search for trades"
          searchValue={search}
          onSearchChange={setSearch}
          showPagination={true}
        />
      </div>
    </div>
  );
}
