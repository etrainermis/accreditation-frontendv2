"use client";
import React, { useState } from "react";
import { CheckCircle2, CheckCheck, Search, X, RefreshCw, PlusSquare, User, UserPlus, Mail } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";

interface DecisionMakingStageProps {
  role: "super-admin" | "evaluator" | "supervisor";
  application: any;
  assignedPrincipal: string | null;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  setActiveMajorStep: (step: number) => void;
}

export const DecisionMakingStage: React.FC<DecisionMakingStageProps> = ({
  role,
  application,
  assignedPrincipal,
  dateRange,
  setDateRange,
  setActiveMajorStep,
}) => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [invitationStatus, setInvitationStatus] = useState<'idle' | 'pending' | 'sent'>('idle');
  const [email, setEmail] = useState("");

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    setInvitationStatus('pending');
    // Simulate API call
    setTimeout(() => {
      setInvitationStatus('sent');
      setShowInviteModal(false);
    }, 1500);
  };

  return (
    <div className="w-full py-8 px-0 flex flex-col items-start relative">
      {role === "supervisor" ? (
        // Supervisor View - Certificate Granting
        <div className="w-full max-w-2xl mx-auto space-y-6">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">Evaluation Complete</h2>
            <p className="text-sm text-slate-500">Review the evaluation results and grant certificate access</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Application Status</span>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                <CheckCheck className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-600">Approved</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <span className="text-xs text-slate-500">Institution</span>
                <p className="text-sm text-slate-900">{application.institution.name}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500">Trade</span>
                <p className="text-sm text-slate-900">{application.trade.name}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500">Evaluation Date</span>
                <p className="text-sm text-slate-900">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500">Principal Evaluator</span>
                <p className="text-sm text-slate-900">{assignedPrincipal || "Not Assigned"}</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-900">Certificate Access Control</h3>
            <p className="text-sm text-slate-600">Grant the applicant access to download their accreditation certificate.</p>
            
            <div className="flex items-center gap-4 pt-4">
              <button 
                onClick={() => alert("Certificate access granted successfully!")}
                className="flex-1 py-3 bg-blue-600 text-white rounded-sm text-sm hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="h-4 w-4" />
                Grant Certificate Access
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Back to Applications
            </button>
          </div>
        </div>
      ) : (
        // Super-Admin / Evaluator View
        <div className="w-full flex gap-12 text-left">
          {/* Left Column */}
          <div className="w-[450px] shrink-0 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">Evaluation Decision</span>
            </div>
            
            <div 
              onClick={() => setShowInviteModal(true)}
              className="border border-dashed rounded-sm p-4 w-full transition-colors cursor-pointer group border-slate-200 hover:bg-slate-50"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                  <UserPlus className="h-4 w-4 text-slate-400" />
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[13px] text-slate-900">Supervisor</h4>
                    {invitationStatus === 'sent' && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">Invited</span>
                    )}
                    {invitationStatus === 'pending' && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded-full">Pending</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">Final reviewer & decision maker</p>
                </div>
              </div>
            </div>

            {/* Confirm / Cancel Buttons */}
            <div className="flex items-center gap-4 w-full mt-2">
              <button onClick={() => setActiveMajorStep(3)} className="flex-1 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
              <button onClick={() => alert("Confirm decision")} className="flex-1 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer">Confirm</button>
            </div>

               <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 bg-transparent rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                  <img src={`https://ui-avatars.com/api/?name=${application.institution.name}&background=FF8A65&color=fff&rounded=true`} alt="logo" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-slate-900 leading-tight">{application.institution.name}</span>
                  <span className="text-[11px] text-slate-500">{application.institution.email}</span>
                </div>
              </div>
     
     
            </div>

        
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
  

         


    {/* Comment Box */}
            <div className="space-y-4 mt-2">
              <h4 className="text-sm text-slate-700">Any addition comment?</h4>
              <div className="relative">
                <textarea placeholder="Text..." className="w-full border border-slate-200 rounded-sm p-4 min-h-[70px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none no-scrollbar" />
                <div className="absolute bottom-[-14px] left-0 text-[11px] text-slate-400">275 characters left</div>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-all cursor-pointer mt-7">
                Add Note
                <PlusSquare className="h-4 w-4 text-white/70" strokeWidth={1.5} />
              </button>
            </div>

                     <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200">
                  <User className="h-4 w-4 text-slate-400 stroke-2" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-500 leading-tight">Submitted by</span>
                  <span className="text-[13px] text-slate-900 leading-tight">John Smith</span>
                </div>
              </div>
          </div>
        </div>
      )}

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 p-4 transition-opacity font-sans">
          <div className="w-full max-w-lg bg-white rounded-sm overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-start justify-between p-6 border-b border-slate-100">
              <div className="flex items-start gap-4">
                <div className="h-10 w-13 mt-2 rounded-sm border border-slate-100 flex items-center justify-center p-2">
                  <UserPlus className="h-5 w-5 text-[#0A77FF]" />
                </div>
                <div>
                  <h3 className="text-lg text-[#323539]">Assign Supervisor</h3>
                  <p className="text-sm text-[#858C95] w-full">The assigned supervisor will receive access to review evaluation results and grant certificate access.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowInviteModal(false)}
                className="p-2 cursor-pointer h-10 mt-2 hover:bg-slate-100 rounded-sm transition-colors text-slate-400 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleInvite} className="p-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-slate-700">Email</label>
                <div className="relative">
                  <input 
                    id="email" 
                    placeholder="Enter your email" 
                    required 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-4 pr-12 py-3 bg-white border mt-2 border-slate-200 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/10 focus:border-[#0A77FF] transition-all" 
                  />
                  <Mail className="absolute right-4 top-1/2 mt-1 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
                <p className="text-xs text-slate-400 italic">He/she will receive an invitation email</p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowInviteModal(false)}
                  className="flex-1 py-2.5 text-sm cursor-pointer text-slate-700 bg-white border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors"
                >
                  Exit
                </button>
                <button 
                  type="submit" 
                  disabled={invitationStatus === 'pending'}
                  className="flex-1 py-2.5 text-sm cursor-pointer text-white bg-[#0A77FF] rounded-sm hover:bg-[#0966ff] transition-colors shadow-sm active:scale-[0.98] disabled:opacity-50"
                >
                  {invitationStatus === 'pending' ? 'Inviting...' : 'Invite'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
