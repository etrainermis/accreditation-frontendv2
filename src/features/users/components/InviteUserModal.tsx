"use client";

import React, { useState } from "react";
import { UserPlus, X, Mail } from "lucide-react";
import { FormInput, FormSelect } from "@/components/ui/form-field";

interface InviteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInvite: (userData: InviteUserData) => void;
}

export interface InviteUserData {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export function InviteUserModal({ isOpen, onClose, onInvite }: InviteUserModalProps) {
  const [formData, setFormData] = useState<InviteUserData>({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInvite(formData);
    onClose();
    setFormData({ firstName: "", lastName: "", email: "", role: "" });
  };

  const roleOptions = [
    { label: "Supervisor", value: "Supervisor" },
    { label: "Curriculum evaluator", value: "Curriculum evaluator" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 p-4 transition-opacity font-sans">
      <div className="w-full max-w-lg bg-white rounded-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-100">
          <div className="flex items-start gap-4">
            <div className="h-10 w-13 mt-2 rounded-sm border border-slate-100 flex items-center justify-center shrink-0">
              <UserPlus className="h-5 w-5 text-[#0A77FF]" />
            </div>
            <div>
              <h3 className="text-lg text-[#323539] font-medium">Invite User</h3>
              <p className="text-sm text-[#858C95] w-full">
                Invited users will receive access to manage applications and perform evaluations.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 cursor-pointer h-10 mt-2 hover:bg-slate-100 rounded-sm transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="First Name"
              value={formData.firstName}
              onChange={(value) => setFormData({ ...formData, firstName: value })}
              placeholder="First name"
              required
            />
            <FormInput
              label="Last Name"
              value={formData.lastName}
              onChange={(value) => setFormData({ ...formData, lastName: value })}
              placeholder="Last name"
              required
            />
          </div>

          <FormInput
            label="Email"
            value={formData.email}
            onChange={(value) => setFormData({ ...formData, email: value })}
            placeholder="Enter his/her email"
            type="email"
            required
            icon={Mail}
          />

          <FormSelect
            label="Role"
            value={formData.role}
            onChange={(value) => setFormData({ ...formData, role: value })}
            options={roleOptions}
            placeholder="Select a role"
            required
          />

          <p className="text-xs text-slate-400 italic">He/she will receive an invitation email</p>

          <div className="flex items-center gap-3 pt-2">
            <button 
              type="button" 
              onClick={onClose}
              className="flex-1 py-2.5 text-sm font-medium cursor-pointer text-slate-700 bg-white border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors"
            >
              Exit
            </button>
            <button 
              type="submit" 
              className="flex-1 py-2.5 text-sm font-medium cursor-pointer text-white bg-[#0A77FF] rounded-sm hover:bg-[#0966ff] transition-colors shadow-sm active:scale-[0.98]"
            >
              Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
