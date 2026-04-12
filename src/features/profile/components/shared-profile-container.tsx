"use client";

import React, { useState } from "react";
import { UserRole } from "@/types/auth";
import { cn } from "@/lib/utils/cn";
import { User, Shield, Bell, Upload, Save } from "lucide-react";

interface SharedProfileContainerProps {
  role: UserRole;
  userName?: string;
  userEmail?: string;
}

export function SharedProfileContainer({ 
  role, 
  userName = "System Administrator", 
  userEmail = "admin@accreditation.gov.rw" 
}: SharedProfileContainerProps) {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 shrink-0 space-y-1">
        <button
          onClick={() => setActiveTab("personal")}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors",
            activeTab === "personal" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <User className="h-4 w-4" />
          <span>Personal Information</span>
        </button>
        <button
          onClick={() => setActiveTab("security")}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors",
            activeTab === "security" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <Shield className="h-4 w-4" />
          <span>Security & Password</span>
        </button>
        <button
          onClick={() => setActiveTab("notifications")}
          className={cn(
            "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-sm transition-colors",
            activeTab === "notifications" ? "bg-[#F9FAFB] text-[var(--primary)]" : "text-[#353E49] hover:bg-slate-50"
          )}
        >
          <Bell className="h-4 w-4" />
          <span>Notification Preferences</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0">
        {activeTab === "personal" && (
          <div className="space-y-6">
            <div className="pb-4 border-b border-slate-100 flex items-center gap-6">
              <div className="h-20 w-20 rounded-sm bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center relative group">
                <User className="h-8 w-8 text-slate-400" />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <Upload className="h-4 w-4 text-white mb-1" />
                  <span className="text-[10px] font-medium text-white">Upload</span>
                </div>
              </div>
              <div>
                <h3 className="text-sm  text-slate-900">Profile Picture</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  Upload a high-resolution image to represent your account. Recommended size: 256x256px.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">Full Name</label>
                <input 
                  type="text" 
                  defaultValue={userName}
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">Email Address</label>
                <input 
                  type="email" 
                  defaultValue={userEmail}
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-slate-50"
                  readOnly
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">Job Title / Role</label>
                <input 
                  type="text" 
                  defaultValue={role === "super-admin" ? "Super Administrator" : "Evaluator"}
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-slate-50"
                  readOnly
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+250 123 456 789"
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-white"
                />
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <button className="flex items-center gap-2 bg-[var(--primary)] hover:bg-blue-600 active:bg-blue-700 text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors">
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="space-y-6">
            <h3 className="text-sm  text-slate-900 border-b border-slate-100 pb-4">Update Password</h3>
            <div className="space-y-5 max-w-md">
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">Current Password</label>
                <input 
                  type="password" 
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">New Password</label>
                <input 
                  type="password" 
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-white"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs text-[#344054] font-medium">Confirm New Password</label>
                <input 
                  type="password" 
                  className="w-full h-10 px-3 text-sm text-[#101828] border border-[#D0D5DD] rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] transition-all bg-white"
                />
              </div>
            </div>
            <div className="pt-6 flex justify-start">
              <button className="flex items-center gap-2 bg-[#353E49] hover:bg-slate-800 text-white px-5 py-2.5 rounded-sm text-sm font-medium transition-colors">
                Update Security
              </button>
            </div>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="space-y-6">
            <h3 className="text-sm  text-slate-900 border-b border-slate-100 pb-4">Email Preferences</h3>
            <div className="space-y-4 max-w-xl">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded-sm border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)] bg-white h-4 w-4" defaultChecked />
                <div>
                  <h4 className="text-sm font-medium text-slate-900">Application Updates</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receive an email whenever an institution submits or updates an application.</p>
                </div>
              </label>
              
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded-sm border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)] bg-white h-4 w-4" defaultChecked />
                <div>
                  <h4 className="text-sm font-medium text-slate-900">System Alerts</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receive immediate notifications regarding maintenance and security events.</p>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" className="mt-0.5 rounded-sm border-slate-300 text-[var(--primary)] focus:ring-[var(--primary)] bg-white h-4 w-4" />
                <div>
                  <h4 className="text-sm font-medium text-slate-900">Weekly Summaries</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Receive a consolidated weekly digest of system activity and pending tasks.</p>
                </div>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
