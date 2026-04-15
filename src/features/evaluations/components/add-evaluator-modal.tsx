"use client";

import React from "react";
import { X, Mail, UserPlus } from "lucide-react";

interface AddEvaluatorModalProps {
  onClose: () => void;
  onInvite: (email: string) => void;
  title?: string;
}

export function AddEvaluatorModal({ onClose, onInvite, title = "Add Evaluator" }: AddEvaluatorModalProps) {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onInvite(email);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 p- transition-opacity font-sans">
      <div className="w-full max-w-lg bg-white rounded-sm overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="flex items-top justify-between p-6 border-b border-slate-100">
          <div className="flex items-top gap-4">
            <div className="h-10 w-13 mt-2 rounded-sm border border-slate-100 flex items-center justify-center">
              <UserPlus className="h-5 w-5 text-[#0A77FF]" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg text-[#323539]">{title}</h3>
              <p className="text-sm text-[#858C95] w-full">
                Invited evaluators will receive access to evaluate applications and perform site visits.
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

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm text-slate-700">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 pr-12 py-3 bg-white border mt-2 border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all"
              />
              <Mail className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 h-4 w-4 text-slate-400" />
            </div>
            <p className="text-xs text-slate-400 italic">
              He/she will receive an invitation email
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 text-sm cursor-pointer text-slate-700 bg-white border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors"
            >
              Exit
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 text-sm cursor-pointer text-white bg-[#0A77FF] rounded-sm hover:bg-[#0966ff] transition-colors shadow-sm active:scale-[0.98]"
            >
              Invite
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
