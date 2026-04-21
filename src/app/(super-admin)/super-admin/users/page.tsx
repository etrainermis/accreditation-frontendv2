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

import { useGetUsers, useChangeUserStatus } from "@/hooks/queries/useSuperAdminQueries";

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

export default function SuperAdminUsersPage() {
  const [isInviteModalOpen, setIsInviteModalOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"curriculum-evaluator" | "supervisor" | "evaluator">("curriculum-evaluator");

  const { data: usersResponse, isLoading } = useGetUsers();
  
  const users: UserRecord[] = React.useMemo(() => {
    if (!usersResponse?.data) return [];
    return usersResponse.data.map(user => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.firstName}%20${user.lastName}`,
      role: user.role.replace(/_/g, " ").toLowerCase(),
      status: (user.status.charAt(0).toUpperCase() + user.status.slice(1).toLowerCase()) as StatusType,
      dateAdded: new Date(user.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      lastActive: "Today", // Placeholder for last active
    }));
  }, [usersResponse]);

  const handleInvite = (data: InviteUserData) => {
    console.log("Inviting user:", data);
  };

  const filteredUsers = users.filter(user => 
    user.role === activeTab.replace("-", " ")
  );

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

  const getStats = () => {
    switch(activeTab) {
      case "evaluator":
        return [
          { label: "Total Evaluators", value: "18", icon: Users, color: "rgb(10, 119, 255)" },
          { label: "Active", value: "12", icon: User, color: "rgb(52, 199, 89)" },
          { label: "Available", value: "4", icon: CheckCheck, color: "rgb(203, 48, 224)" },
          { label: "Pending", value: "2", icon: ClipboardClock, color: "rgb(97, 85, 245)" },
          { label: "Deactivated", value: "0", icon: TriangleAlert, color: "rgb(255, 56, 60)" },
        ];
      case "supervisor":
        return [
          { label: "Total Supervisors", value: "24", icon: Users, color: "rgb(10, 119, 255)" },
          { label: "Active", value: "18", icon: User, color: "rgb(52, 199, 89)" },
          { label: "Available", value: "4", icon: CheckCheck, color: "rgb(203, 48, 224)" },
          { label: "Pending", value: "2", icon: ClipboardClock, color: "rgb(97, 85, 245)" },
          { label: "Deactivated", value: "0", icon: TriangleAlert, color: "rgb(255, 56, 60)" },
        ];
      default:
        return [
          { label: "Total Curriculum Evaluators", value: "48", icon: Users, color: "rgb(10, 119, 255)" },
          { label: "Active", value: "32", icon: User, color: "rgb(52, 199, 89)" },
          { label: "Available", value: "12", icon: CheckCheck, color: "rgb(203, 48, 224)" },
          { label: "Pending", value: "4", icon: ClipboardClock, color: "rgb(97, 85, 245)" },
          { label: "Deactivated", value: "2", icon: TriangleAlert, color: "rgb(255, 56, 60)" },
        ];
    }
  };

  const stats = getStats();

  return (
    <PageContainer
      role="super-admin"
      title="User Management"
      description="Manage roles and access for evaluators and supervisors."
    >
      <div className="space-y-6">
        {/* Custom Tabs / Sub-navigation */}
        <div className="flex w-full justify-start items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2">
          <button 
            onClick={() => setActiveTab("curriculum-evaluator")}
            className={cn(
              "relative group flex items-center justify-center gap-2 px-6 py-3 rounded-sm transition-all duration-200 whitespace-nowrap cursor-pointer",
              activeTab === "curriculum-evaluator" ? "text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50 hover:text-[var(--primary)]"
            )}
          >
            {activeTab === "curriculum-evaluator" && (
              <div className="absolute inset-0 bg-[#F9FAFB] rounded-sm z-0" />
            )}
            <User className={cn("relative z-10 h-4 w-4 transition-colors duration-200", activeTab === "curriculum-evaluator" ? "text-[var(--primary)]" : "text-[#353E49] group-hover:text-[var(--primary)]")} strokeWidth={1.5} />
            <span className="relative z-10 text-sm font-medium transition-colors duration-200">Curriculum Evaluator</span>
          </button>
          
          <button 
            onClick={() => setActiveTab("evaluator")}
            className={cn(
              "relative group flex items-center justify-center gap-2 px-6 py-3 rounded-sm transition-all duration-200 whitespace-nowrap cursor-pointer",
              activeTab === "evaluator" ? "text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50 hover:text-[var(--primary)]"
            )}
          >
            {activeTab === "evaluator" && (
              <div className="absolute inset-0 bg-[#F9FAFB] rounded-sm z-0" />
            )}
            <User className={cn("relative z-10 h-4 w-4 transition-colors duration-200", activeTab === "evaluator" ? "text-[var(--primary)]" : "text-[#353E49] group-hover:text-[var(--primary)]")} strokeWidth={1.5} />
            <span className="relative z-10 text-sm font-medium transition-colors duration-200">Evaluators</span>
          </button>

          <button 
            onClick={() => setActiveTab("supervisor")}
            className={cn(
              "relative group flex items-center justify-center gap-2 px-6 py-3 rounded-sm transition-all duration-200 whitespace-nowrap cursor-pointer",
              activeTab === "supervisor" ? "text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50 hover:text-[var(--primary)]"
            )}
          >
            {activeTab === "supervisor" && (
              <div className="absolute inset-0 bg-[#F9FAFB] rounded-sm z-0" />
            )}
            <Users className={cn("relative z-10 h-4 w-4 transition-colors duration-200", activeTab === "supervisor" ? "text-[var(--primary)]" : "text-[#353E49] group-hover:text-[var(--primary)]")} strokeWidth={1.5} />
            <span className="relative z-10 text-sm font-medium transition-colors duration-200">Supervisors</span>
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid gap-4 md:grid-cols-2 mb-6 relative z-10 bg-white shadow-[0_-20px_40px_white,0_20px_40px_white] xl:grid-cols-5">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up">
              <div className="p-5 flex flex-col gap-4">
                <div className="w-fit p-2.5 rounded-sm border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
                  <stat.icon className="h-5 w-5" style={{ color: stat.color }} strokeWidth={1.5} />
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
          data={filteredUsers}
          columns={columns}
          title={activeTab === "curriculum-evaluator" ? "All Curriculum Evaluators" : activeTab === "evaluator" ? "All Evaluators" : "All Supervisors"}
          description={activeTab === "curriculum-evaluator" ? "Manage curriculum evaluators right here" : activeTab === "evaluator" ? "Manage evaluators right here" : "Manage supervisors right here"}
          headerAction={
            activeTab !== "supervisor" ? (
              <PrimaryButton 
                label="Invite" 
                icon={Plus} 
                onClick={() => setIsInviteModalOpen(true)}
              />
            ) : undefined
          }
          showPagination
          currentPage={1}
          totalPages={10}
        />
      </div>

      <InviteUserModal 
        isOpen={isInviteModalOpen} 
        onClose={() => setIsInviteModalOpen(false)} 
        onInvite={handleInvite}
        variant="simple"
        defaultRole="Curriculum evaluator"
      />
    </PageContainer>
  );
}
