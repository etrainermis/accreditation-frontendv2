"use client";

import React from "react";
import { 
  Users, 
  User, 
  CheckCheck, 
  ClipboardClock, 
  TriangleAlert, 
  Trash2, 
  Pencil,
  Plus
} from "lucide-react";
import { PageContainer } from "@/components/layout/page-container";
import { DataTable, Column } from "@/components/ui/data-table";
import { StatusBadge, StatusType } from "@/components/ui/status-badge";
import { cn } from "@/lib/utils/cn";
import { PrimaryButton } from "@/components/ui/primary-button";
import { InviteUserModal, InviteUserData } from "@/features/users/components/InviteUserModal";

interface UserRecord {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: StatusType;
  dateAdded: string;
  lastActive: string;
}

const mockUsers: UserRecord[] = [
  {
    id: "1",
    name: "Natali Craig",
    email: "natali@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Natali Craig",
    role: "Curriculum evaluator",
    status: "Active",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 14, 2022",
  },
  {
    id: "2",
    name: "Drew Cano",
    email: "drew@untitledui.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Drew Cano",
    role: "Supervisor",
    status: "Pending",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 12, 2022",
  },
  {
    id: "3",
    name: "Orlando Diggs",
    email: "orlando@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Orlando Diggs",
    role: "Curriculum evaluator",
    status: "Deactivated",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 12, 2022",
  },
  {
    id: "4",
    name: "Andi Lane",
    email: "andi@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Andi Lane",
    role: "Supervisor",
    status: "Active",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 14, 2022",
  },
  {
    id: "5",
    name: "Kate Morrison",
    email: "kate@gmail.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kate Morrison",
    role: "Curriculum evaluator",
    status: "Pending",
    dateAdded: "Feb 22, 2022",
    lastActive: "Mar 13, 2022",
  },
];

export default function SuperAdminUsersPage() {
  const [isInviteModalOpen, setIsInviteModalOpen] = React.useState(false);

  const handleInvite = (data: InviteUserData) => {
    console.log("Inviting user:", data);
    // In a real app, this would be an API call
  };

  const columns: Column<UserRecord>[] = [
    {
      header: "Name",
      accessor: (user) => (
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 overflow-hidden">
            <img alt={user.name} className="h-full w-full object-cover" src={user.avatar} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#101828] font-medium">{user.name}</span>
            <span className="text-xs text-[#475467]">{user.email}</span>
          </div>
        </div>
      ),
    },
    {
      header: "Role",
      accessor: "role",
      className: "text-[#475467] text-sm",
    },
    {
      header: "Status",
      accessor: (user) => <StatusBadge status={user.status} />,
    },
    {
      header: "Date added",
      accessor: "dateAdded",
      className: "text-[#475467] text-sm",
    },
    {
      header: "Last active",
      accessor: "lastActive",
      className: "text-[#475467] text-sm",
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

  const stats = [
    { label: "Supervisors", value: "48", icon: Users, color: "rgb(10, 119, 255)" },
    { label: "Curriculum evaluators", value: "32", icon: User, color: "rgb(52, 199, 89)" },
    { label: "Available", value: "12", icon: CheckCheck, color: "rgb(203, 48, 224)" },
    { label: "Pending", value: "4", icon: ClipboardClock, color: "rgb(97, 85, 245)" },
    { label: "Deactivated", value: "2", icon: TriangleAlert, color: "rgb(255, 56, 60)" },
  ];

  return (
    <PageContainer
      role="super-admin"
      title="User Management"
      description="Manage roles and access for evaluators and supervisors."
      action={
        <PrimaryButton 
          label="Add user" 
          icon={Plus} 
          onClick={() => setIsInviteModalOpen(true)}
        />
      }
    >
      <div className="space-y-6">
        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-2 mb-6 relative z-10 bg-transparent xl:grid-cols-5">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up">
              <div className="p-5 flex flex-col gap-4">
                <div className="w-fit p-2.5 rounded-sm border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                  <stat.icon className="h-5 w-5" style={{ color: stat.color }} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* User Table */}
        <DataTable
          data={mockUsers}
          columns={columns}
          title="All Users"
          description="Manage users right here"
          showPagination
          currentPage={1}
          totalPages={10}
        />
      </div>

      <InviteUserModal 
        isOpen={isInviteModalOpen} 
        onClose={() => setIsInviteModalOpen(false)} 
        onInvite={handleInvite}
      />
    </PageContainer>
  );
}
