"use client";

import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  AlertCircle,
  Award,
  BarChart3,
  Bell,
  Briefcase,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  Eye,
  EyeOff,
  Globe,
  GraduationCap,
  Loader2,
  Lock,
  Save,
  Shield,
  User,
} from "lucide-react";

import { getMe } from "@/lib/api/auth/auth-api";
import { useEvaluatorAssignments, useEvaluatorStats } from "@/hooks/queries/useEvaluationQueries";
import { cn } from "@/lib/utils/cn";
import { UserRole } from "@/types/auth";

interface SharedProfileContainerProps {
  role: UserRole;
  userName?: string;
  userEmail?: string;
}

const SIDEBAR_ITEMS = [
  { id: "personal", label: "Personal Information", icon: User },
  { id: "security", label: "Security & Password", icon: Shield },
  { id: "notifications", label: "Notification Preferences", icon: Bell },
];

const EVALUATOR_ONLY_TABS = [
  { id: "professional", label: "Professional Profile", icon: Briefcase },
  { id: "activity", label: "Evaluation Activity", icon: BarChart3 },
];

function getRoleName(profile: any, fallback: UserRole) {
  return profile?.roles?.[0]?.name?.toLowerCase?.() || profile?.role?.toLowerCase?.() || fallback;
}

function getRoleLabel(role: string) {
  return role === "super-admin"
    ? "Super Administrator"
    : role === "supervisor"
      ? "Supervisor"
      : role === "evaluator"
        ? "Accreditation Evaluator"
        : role === "curriculum-evaluator"
          ? "Curriculum Evaluator"
          : "Applicant";
}

export function SharedProfileContainer({
  role: initialRole,
  userName: initialName,
  userEmail: initialEmail,
}: SharedProfileContainerProps) {
  const [activeTab, setActiveTab] = useState("personal");
  const [showCurrentPw, setShowCurrentPw] = useState(false);
  const [showNewPw, setShowNewPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: profile, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => getMe(),
    retry: 1,
  });

  const role = getRoleName(profile, initialRole);
  const isEvaluator = role === "evaluator";
  const evaluatorId = profile?.id || "";
  const { data: evaluatorStats } = useEvaluatorStats();
  const { data: assignments, isLoading: assignmentsLoading } = useEvaluatorAssignments(evaluatorId);

  if (isLoading || (isEvaluator && evaluatorId && assignmentsLoading)) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-96">
        <Loader2 className="h-10 w-10 animate-spin text-[var(--primary)]" />
        <p className="mt-4 text-sm text-slate-500 font-medium">Loading profile information...</p>
      </div>
    );
  }

  const displayName = profile ? `${profile.firstName || ""} ${profile.lastName || ""}`.trim() : initialName || "User";
  const displayEmail = profile?.email || initialEmail || "user@accreditation.gov.rw";
  const displayPhone = profile?.phoneNumber || "";
  const roleLabel = getRoleLabel(role);
  const allTabs = [...SIDEBAR_ITEMS, ...(isEvaluator ? EVALUATOR_ONLY_TABS : [])];
  const initials = displayName
    .split(" ")
    .filter(Boolean)
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const assignmentList = assignments ?? [];
  const completedAssignments = assignmentList.filter((item) => item.status === "COMPLETED").length;
  const pendingAssignments = assignmentList.filter((item) => item.status !== "COMPLETED" && item.status !== "REJECTED").length;
  const specializationList = Array.from(
    new Set(assignmentList.map((item) => item.application.tradeName || item.application.type).filter(Boolean))
  ).slice(0, 6);
  const recentAssignmentActivity = assignmentList.slice(0, 5);
  const evaluatorCards = [
    {
      label: "Assigned",
      value: evaluatorStats?.totalAssigned ?? assignmentList.length,
      color: "text-[#0A77FF]",
    },
    {
      label: "Completed",
      value: evaluatorStats?.completedEvaluations ?? completedAssignments,
      color: "text-green-600",
    },
    {
      label: "Pending",
      value: evaluatorStats?.pendingEvaluations ?? pendingAssignments,
      color: "text-orange-500",
    },
  ];

  const settingsWriteSupported = !isEvaluator;

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="rounded-sm border border-slate-100 bg-white overflow-hidden shadow-sm">
        <div className="h-24 bg-gradient-to-r from-[#0A77FF]/10 via-[#6155F5]/10 to-[#0A77FF]/5" />
        <div className="px-6 pb-5 -mt-10 flex items-end gap-5">
          <div className="relative group">
            <div className="h-20 w-20 rounded-sm bg-gradient-to-br from-[#0A77FF] to-[#6155F5] flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-sm">
              {initials || "U"}
            </div>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/50 rounded-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
            >
              <Camera className="h-4 w-4 text-white mb-0.5" />
              <span className="text-[9px] font-medium text-white">Change</span>
            </button>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" />
          </div>

          <div className="pb-1">
            <h2 className="text-base font-semibold text-slate-900">{displayName}</h2>
            <p className="text-sm text-slate-500">{roleLabel}</p>
            <p className="text-xs text-slate-400 mt-0.5">{displayEmail}</p>
          </div>

          {isEvaluator && (
            <div className="ml-auto pb-1 hidden md:flex items-center gap-6 text-center">
              {evaluatorCards.map((item, index) => (
                <React.Fragment key={item.label}>
                  {index > 0 && <div className="h-8 w-px bg-slate-100" />}
                  <div>
                    <p className={cn("text-xl font-bold", item.color)}>{item.value}</p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full min-h-0">
        <div className="w-full md:w-56 shrink-0">
          <div className="rounded-sm border border-slate-100 bg-white p-2 space-y-0.5 shadow-sm">
            {allTabs.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-sm transition-colors text-left",
                    isActive ? "bg-[#F0F5FF] text-[var(--primary)] font-medium" : "text-[#353E49] hover:bg-slate-50"
                  )}
                >
                  <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-[var(--primary)]" : "text-slate-400")} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="rounded-sm border border-slate-100 bg-white p-6 shadow-sm">
            {activeTab === "personal" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Personal Information</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Review your personal details and contact info.</p>
                </div>

                {isEvaluator && !settingsWriteSupported && (
                  <div className="rounded-sm border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
                    The current backend exposes evaluator profile read endpoints, but not profile update endpoints yet.
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#344054] font-medium">First Name</label>
                    <input type="text" defaultValue={profile?.firstName || ""} readOnly={isEvaluator} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#344054] font-medium">Last Name</label>
                    <input type="text" defaultValue={profile?.lastName || ""} readOnly={isEvaluator} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#344054] font-medium">Email Address</label>
                    <input type="email" defaultValue={displayEmail} readOnly className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-slate-50 cursor-not-allowed" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#344054] font-medium">Phone Number</label>
                    <input type="tel" defaultValue={displayPhone} readOnly={isEvaluator} placeholder="+250 123 456 789" className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-white" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#344054] font-medium">Job Title / Role</label>
                    <input type="text" defaultValue={roleLabel} readOnly className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-slate-50 cursor-not-allowed" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-[#344054] font-medium">Gender</label>
                    <select defaultValue={profile?.gender || ""} disabled={isEvaluator} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-white">
                      <option value="">Select gender</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-50 flex justify-end">
                  <button
                    disabled={!settingsWriteSupported}
                    className="flex items-center gap-2 bg-[var(--primary)] hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-500 text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors shadow-sm"
                  >
                    <Save className="h-4 w-4" />
                    {settingsWriteSupported ? "Save Changes" : "Update Endpoint Unavailable"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Security & Password</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Review password controls for your account.</p>
                </div>

                {isEvaluator && (
                  <div className="rounded-sm border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
                    No evaluator password change endpoint was present in the backend specification you shared.
                  </div>
                )}

                <div className="space-y-5 max-w-md">
                  {[
                    { label: "Current Password", show: showCurrentPw, toggle: () => setShowCurrentPw((value) => !value) },
                    { label: "New Password", show: showNewPw, toggle: () => setShowNewPw((value) => !value) },
                    { label: "Confirm New Password", show: showConfirmPw, toggle: () => setShowConfirmPw((value) => !value) },
                  ].map(({ label, show, toggle }) => (
                    <div key={label} className="space-y-1.5">
                      <label className="text-xs text-[#344054] font-medium">{label}</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                        <input type={show ? "text" : "password"} readOnly={isEvaluator} className="w-full h-10 pl-9 pr-10 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-white" />
                        <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-50 flex justify-start">
                  <button
                    disabled={!settingsWriteSupported}
                    className="flex items-center gap-2 bg-[#353E49] hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-500 text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors"
                  >
                    <Shield className="h-4 w-4" />
                    {settingsWriteSupported ? "Update Password" : "Password Endpoint Unavailable"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "notifications" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Notification Preferences</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Choose how and when you receive system notifications.</p>
                </div>

                {isEvaluator && (
                  <div className="rounded-sm border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-800">
                    Notification preference persistence is not currently exposed by the backend specification.
                  </div>
                )}

                <div className="space-y-4 max-w-xl">
                  {[
                    {
                      title: "Application Updates",
                      desc: "Receive an email whenever an institution submits or updates an application.",
                      defaultChecked: true,
                    },
                    {
                      title: "Assignment Notifications",
                      desc: "Get notified when you are assigned to a new evaluation or due diligence visit.",
                      defaultChecked: true,
                    },
                    {
                      title: "System Alerts",
                      desc: "Receive immediate notifications regarding maintenance and security events.",
                      defaultChecked: true,
                    },
                    {
                      title: "Schedule Reminders",
                      desc: "Get reminded before an upcoming due diligence visit.",
                      defaultChecked: true,
                    },
                    {
                      title: "Weekly Summaries",
                      desc: "Receive a consolidated weekly digest of system activity and pending tasks.",
                      defaultChecked: false,
                    },
                  ].map(({ title, desc, defaultChecked }) => (
                    <label key={title} className="flex items-start gap-3 cursor-pointer group">
                      <input type="checkbox" defaultChecked={defaultChecked} disabled={isEvaluator} className="mt-0.5 h-4 w-4 rounded-sm border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)] bg-white transition-all" />
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 group-hover:text-[var(--primary)] transition-colors">{title}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{desc}</p>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-50 flex justify-end">
                  <button
                    disabled={!settingsWriteSupported}
                    className="flex items-center gap-2 bg-[var(--primary)] hover:bg-blue-600 disabled:bg-slate-200 disabled:text-slate-500 text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors shadow-sm"
                  >
                    <Save className="h-4 w-4" />
                    {settingsWriteSupported ? "Save Preferences" : "Notification Endpoint Unavailable"}
                  </button>
                </div>
              </div>
            )}

            {activeTab === "professional" && isEvaluator && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Professional Profile</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Evaluator expertise derived from your current assignments and portal account.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-[var(--primary)]" />
                    <h4 className="text-sm font-semibold text-slate-800">Specializations & Expertise</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#344054] font-medium">Primary Domain</label>
                      <input type="text" readOnly value={specializationList[0] || "No evaluator assignments yet"} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-slate-50" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#344054] font-medium">Active Assignments</label>
                      <input type="text" readOnly value={String(evaluatorStats?.totalAssigned ?? assignmentList.length)} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-slate-50" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-[var(--primary)]" />
                    <h4 className="text-sm font-semibold text-slate-800">Account Qualification Snapshot</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#344054] font-medium">Full Name</label>
                      <input type="text" readOnly value={displayName} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-slate-50" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs text-[#344054] font-medium">Portal Role</label>
                      <input type="text" readOnly value={roleLabel} className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm bg-slate-50" />
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-[var(--primary)]" />
                    <h4 className="text-sm font-semibold text-slate-800">Covered Trade Areas</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(specializationList.length ? specializationList : ["No trade areas available yet"]).map((item) => (
                      <div key={item} className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-sm text-xs font-medium text-slate-700">
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "activity" && isEvaluator && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Evaluation Activity</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Live overview of your evaluator assignments and outcomes.</p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Total Assigned", value: String(evaluatorStats?.totalAssigned ?? assignmentList.length), icon: BarChart3, color: "text-[#0A77FF]", bg: "bg-blue-50" },
                    { label: "Completed", value: String(evaluatorStats?.completedEvaluations ?? completedAssignments), icon: CheckCircle2, color: "text-green-600", bg: "bg-green-50" },
                    { label: "Pending", value: String(evaluatorStats?.pendingEvaluations ?? pendingAssignments), icon: Clock, color: "text-orange-500", bg: "bg-orange-50" },
                  ].map(({ label, value, icon: Icon, color, bg }) => (
                    <div key={label} className="rounded-sm border border-slate-100 p-4 flex items-center gap-3">
                      <div className={cn("h-9 w-9 rounded-sm flex items-center justify-center", bg)}>
                        <Icon className={cn("h-4 w-4", color)} />
                      </div>
                      <div>
                        <p className={cn("text-xl font-bold", color)}>{value}</p>
                        <p className="text-xs text-slate-500">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Recent Assignments</h4>
                  {recentAssignmentActivity.length === 0 && (
                    <div className="rounded-sm border border-slate-100 p-4 text-sm text-slate-500">
                      No evaluator activity has been returned yet.
                    </div>
                  )}
                  {recentAssignmentActivity.map((item) => {
                    const isCompleted = item.status === "COMPLETED";
                    return (
                      <div key={item.id} className="flex items-center gap-4 p-3 rounded-sm border border-slate-100 hover:bg-slate-50 transition-colors group">
                        <div className={cn("h-8 w-8 rounded-sm flex items-center justify-center shrink-0", isCompleted ? "bg-green-50" : "bg-orange-50")}>
                          {isCompleted ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <AlertCircle className="h-4 w-4 text-orange-500" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 truncate">{item.application.institution.name}</p>
                          <p className="text-xs text-slate-500">
                            {item.application.tradeName || item.application.type} · {new Date(item.assignedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span className={cn("shrink-0 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase", isCompleted ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700")}>
                          {item.status.replaceAll("_", " ")}
                        </span>
                        <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
