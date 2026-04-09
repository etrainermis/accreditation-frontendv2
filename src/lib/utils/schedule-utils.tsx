import React from "react";
import { Column } from "@/components/ui/data-table";
import { StatusBadge, StatusType } from "@/components/ui/status-badge";
import { Trash2, Eye, CalendarRange } from "lucide-react";

export interface ScheduleItem {
  id: string;
  institution: {
    name: string;
    phone: string;
    logo: string;
  };
  evaluator: {
    name: string;
    email: string;
    avatar: string;
  };
  trade: string;
  spe: string;
  visitDate: string;
  visitTime: string;
  status: StatusType;
  location: string;
}

export const mockSchedule: ScheduleItem[] = [
  {
    id: "1",
    institution: {
      name: "Command...",
      phone: "+250-79-00..",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C",
    },
    evaluator: {
      name: "Drew Cano",
      email: "drew@untitledui.c..",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Drew",
    },
    trade: "JavaScript",
    spe: "SPE",
    visitDate: "19/12/2025",
    visitTime: "2:00 PM",
    status: "Pending",
    location: "Province/District/Sector/Cell/Village",
  },
  {
    id: "2",
    institution: {
      name: "Command...",
      phone: "+250-79-00..",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=R",
    },
    evaluator: {
      name: "Natali Craig",
      email: "natali@gmail.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Natali",
    },
    trade: "JavaScript",
    spe: "SPE",
    visitDate: "19/12/2025",
    visitTime: "2:00 PM",
    status: "Pending",
    location: "Province/District/Sector/Cell/Village",
  },
  {
    id: "3",
    institution: {
      name: "Command...",
      phone: "+250-79-00..",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C",
    },
    evaluator: {
      name: "Drew Cano",
      email: "drew@untitledui.c..",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Drew",
    },
    trade: "JavaScript",
    spe: "SPE",
    visitDate: "19/12/2025",
    visitTime: "2:00 PM",
    status: "Cancelled",
    location: "Province/District/Sector/Cell/Village",
  },
  {
    id: "4",
    institution: {
      name: "Command...",
      phone: "+250-79-00..",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=R",
    },
    evaluator: {
      name: "Natali Craig",
      email: "natali@gmail.com",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Natali",
    },
    trade: "JavaScript",
    spe: "SPE",
    visitDate: "19/12/2025",
    visitTime: "2:00 PM",
    status: "Completed",
    location: "Province/District/Sector/Cell/Village",
  },
  {
    id: "5",
    institution: {
      name: "Command...",
      phone: "+250-79-00..",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=C",
    },
    evaluator: {
      name: "Drew Cano",
      email: "drew@untitledui.c..",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Drew",
    },
    trade: "JavaScript",
    spe: "SPE",
    visitDate: "19/12/2025",
    visitTime: "2:00 PM",
    status: "Rejected",
    location: "Province/District/Sector/Cell/Village",
  },
];

export const getScheduleColumns = (): Column<ScheduleItem>[] => [
  {
    header: "Institution",
    accessor: (item) => (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 overflow-hidden">
          <img src={item.institution.logo} alt="logo" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-[#101828]">{item.institution.name}</span>
          <span className="text-xs text-[#475467]">{item.institution.phone}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Assigned Evaluator",
    accessor: (item) => (
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 overflow-hidden">
          <img src={item.evaluator.avatar} alt="avatar" className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-[#101828]">{item.evaluator.name}</span>
          <span className="text-xs text-[#475467]">{item.evaluator.email}</span>
        </div>
      </div>
    ),
  },
  {
    header: "Trade",
    accessor: (item) => (
      <div className="flex flex-col">
        <span className="text-sm text-[#101828]">{item.trade}</span>
        <span className="text-xs text-[#475467]">{item.spe}</span>
      </div>
    ),
  },
  {
    header: "Visit Date",
    accessor: (item) => (
      <div className="flex flex-col">
        <span className="text-sm text-[#101828]">{item.visitDate}</span>
        <span className="text-xs text-[#475467]">{item.visitTime}</span>
      </div>
    ),
  },
  {
    header: "Visit Status",
    accessor: (item) => <StatusBadge status={item.status} />,
  },
  {
    header: "Location",
    accessor: (item) => (
      <div className="text-xs text-[#475467] max-w-[160px] whitespace-normal leading-relaxed">
        {item.location}
      </div>
    ),
  },
  {
    header: "Actions",
    accessor: () => (
      <div className="flex items-center justify-start gap-3">
        <CalendarRange className="h-4 w-4 text-[#475467] cursor-pointer hover:text-[#7F56D9]" />
        <Eye className="h-4 w-4 text-[#475467] cursor-pointer hover:text-[#7F56D9]" />
        <Trash2 className="h-4 w-4 text-[#475467] cursor-pointer hover:text-red-500" />
      </div>
    ),
  },
];
