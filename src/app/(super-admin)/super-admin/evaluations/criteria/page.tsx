"use client";

import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { FileUpload } from "@/components/ui/file-upload";
import { FileListItem, CriteriaHeader } from "@/components/ui/file-list-item";
import { useState } from "react";

export default function SuperAdminCriteriaPage() {
  const [files, setFiles] = useState([
    { id: "1", name: "Tech design requirements.pdf", size: "200 KB", progress: 100, type: "PDF" as const },
    { id: "2", name: "Dashboard prototype.mp4", size: "16 MB", progress: 70, type: "MP4" as const },
    { id: "3", name: "Dashboard prototype FINAL.fig", size: "4.2 MB", progress: 70, type: "FIG" as const },
  ]);

  return (
    <PageContainer
      role="super-admin"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav />
      <div className="space-y-6">
        <FileUpload 
          onFileSelect={(selectedFiles) => {
             console.log("Selected files:", selectedFiles);
             // Implement upload logic here
          }}
        />

        <div className="space-y-4">
           {files.map((file) => (
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
           <CriteriaHeader 
             title="Evaluation Criteria Attachments" 
             description="Files and assets that have been attached to this project." 
           />
           {/* Add additional items if needed */}
        </div>
      </div>
    </PageContainer>
  );
}
