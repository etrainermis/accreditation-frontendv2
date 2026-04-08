import React from "react";
import { Column } from "@/components/ui/data-table";
import { StatusBadge, StatusType } from "@/components/ui/status-badge";
import { Trash2, Pencil } from "lucide-react";

export interface Evaluator {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: StatusType;
  dateAdded: string;
  lastActive: string;
}

export const mockEvaluators: Evaluator[] = [
  {
    id: "1",
    name: "Natali Craig",
    email: "natali@gmail.com",
    avatar: "NC",
    status: "Active",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 14, 2022",
  },
  {
    id: "2",
    name: "Drew Cano",
    email: "drew@untitledui.com",
    avatar: "DC",
    status: "Pending",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 12, 2022",
  },
  {
    id: "3",
    name: "Natali Craig",
    email: "natali@gmail.com",
    avatar: "NC",
    status: "Deactivated",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 12, 2022",
  },
  {
    id: "4",
    name: "Drew Cano",
    email: "drew@untitledui.com",
    avatar: "DC",
    status: "Active",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 14, 2022",
  },
  {
    id: "5",
    name: "Natali Craig",
    email: "natali@gmail.com",
    avatar: "NC",
    status: "Pending",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 13, 2022",
  },
];

export const getEvaluatorColumns = (): Column<Evaluator>[] => [
  {
    header: "Name",
    sortable: true,
    accessor: (item) => (
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 overflow-hidden">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} 
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-[#101828]">{item.name}</span>
          <span className="text-xs text-[#475467]">{item.email}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Status",
    accessor: (item) => <StatusBadge status={item.status} />,
  },
  {
    header: "Date added",
    accessor: (item) => <span className="text-sm text-[#475467]">{item.dateAdded}</span>,
  },
  {
    header: "Last active",
    accessor: (item) => <span className="text-sm text-[#475467]">{item.lastActive}</span>,
  },
  {
    header: "Actions",
    accessor: () => (
      <div className="flex items-center justify-start gap-3">
        <Trash2 className="h-4 w-4 text-[#475467] cursor-pointer hover:text-red-500 transition-colors" />
        <Pencil className="h-4 w-4 text-[#475467] cursor-pointer hover:text-[#7F56D9] transition-colors" />
      </div>
    ),
  },
];
