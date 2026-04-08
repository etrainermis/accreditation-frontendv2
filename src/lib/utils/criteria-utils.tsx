import React from "react";
import { Column } from "@/components/ui/data-table";
import { FileIcon, FileType } from "@/components/ui/file-icon";

export interface CriteriaAttachment {
  id: string;
  name: string;
  size: string;
  type: FileType;
  dateUploaded: string;
  lastUpdated: string;
  uploadedBy: {
    name: string;
    email: string;
    avatar: string;
  };
}

export const mockCriteriaAttachments: CriteriaAttachment[] = [
  {
    id: "1",
    name: "Evaluation Criteria One",
    size: "200 KB",
    type: "PDF",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    uploadedBy: { 
      name: "Olivia Rhye", 
      email: "olivia@untitledui.com", 
      avatar: "https://i.pravatar.cc/150?u=olivia" 
    },
  },
  {
    id: "2",
    name: "Evaluation Criteria One",
    size: "720 KB",
    type: "PDF",
    dateUploaded: "Jan 4, 2022",
    lastUpdated: "Jan 4, 2022",
    uploadedBy: { 
      name: "Phoenix Baker", 
      email: "phoenix@untitledui.com", 
      avatar: "https://i.pravatar.cc/150?u=phoenix" 
    },
  },
  {
    id: "3",
    name: "Evaluation Criteria One",
    size: "16 MB",
    type: "PDF",
    dateUploaded: "Jan 2, 2022",
    lastUpdated: "Jan 2, 2022",
    uploadedBy: { 
      name: "Lana Steiner", 
      email: "lana@untitledui.com", 
      avatar: "https://i.pravatar.cc/150?u=lana" 
    },
  },
  {
    id: "4",
    name: "Evaluation Criteria One",
    size: "4.2 MB",
    type: "PDF",
    dateUploaded: "Jan 6, 2022",
    lastUpdated: "Jan 6, 2022",
    uploadedBy: { 
      name: "Demi Wilkinson", 
      email: "demi@untitledui.com", 
      avatar: "https://i.pravatar.cc/150?u=demi" 
    },
  },
  {
    id: "5",
    name: "Evaluation Criteria One",
    size: "400 KB",
    type: "PDF",
    dateUploaded: "Jan 8, 2022",
    lastUpdated: "Jan 8, 2022",
    uploadedBy: { 
      name: "Candice Wu", 
      email: "candice@untitledui.com", 
      avatar: "https://i.pravatar.cc/150?u=candice" 
    },
  },
];

export const getCriteriaColumns = (): Column<CriteriaAttachment>[] => [
  {
    header: "File name",
    accessor: (item) => (
      <div className="flex items-center gap-3">
        <FileIcon type={item.type} className="h-10 w-8 shrink-0" />
        <div className="flex flex-col">
          <span className="text-[13px] font-medium text-[#101828]">{item.name}</span>
          <span className="text-[11px] text-[#475467]">{item.size}</span>
        </div>
      </div>
    ),
  },
  {
    header: "File size",
    accessor: (item) => <span className="text-[13px] text-[#475467]">{item.size}</span>,
  },
  {
    header: "Date uploaded",
    accessor: (item) => <span className="text-[13px] text-[#475467]">{item.dateUploaded}</span>,
  },
  {
    header: "Last updated",
    accessor: (item) => <span className="text-[13px] text-[#475467]">{item.lastUpdated}</span>,
  },
  {
    header: "Uploaded by",
    accessor: (item) => (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
          <img src={item.uploadedBy.avatar} alt="avatar" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-medium text-[#101828]">{item.uploadedBy.name}</span>
          <span className="text-[11px] text-[#475467]">{item.uploadedBy.email}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Action",
    accessor: () => (
      <div className="flex items-center gap-4">
        <button className="text-[13px] font-medium text-[#475467] hover:text-[#101828] transition-colors">Delete</button>
        <button className="text-[13px] font-medium text-[#6155F5] hover:text-[#4A3AFF] transition-colors">Edit</button>
      </div>
    ),
    className: "text-right",
  },
];
