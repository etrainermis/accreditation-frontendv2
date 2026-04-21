"use client";
import React, { useState } from "react";
import { CheckCircle2, CheckCheck, User, UserPlus, Loader2, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { DateRange } from "@/components/ui/date-range-picker";
import { InviteUserModal, InviteUserData } from "@/features/users/components/InviteUserModal";
import { useSubmitEvaluationDecision } from "@/hooks/queries/useEvaluationQueries";

interface DecisionMakingStageProps {
  role: "super-admin" | "evaluator" | "supervisor";
  application: any;
  assignmentId?: string;
  assignedPrincipal: string | null;
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  setActiveMajorStep: (step: number) => void;
}

export const DecisionMakingStage: React.FC<DecisionMakingStageProps> = ({
  role,
  application,
  assignmentId,
  assignedPrincipal,
  dateRange,
  setDateRange,
  setActiveMajorStep,
}) => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [invitationStatus, setInvitationStatus] = useState<'idle' | 'pending' | 'sent'>('idle');
  const [selectedSupervisor, setSelectedSupervisor] = useState<string | null>(null);
  const [decision, setDecision] = useState<"APPROVE" | "REJECT" | "PENDING">("PENDING");
  const [comments, setComments] = useState("");

  const submitMutation = useSubmitEvaluationDecision();

  const handleInviteSupervisor = (data: InviteUserData) => {
    setInvitationStatus('pending');
    console.log("Inviting supervisor:", data);
    setTimeout(() => {
      setInvitationStatus('sent');
      setSelectedSupervisor(data.email);
    }, 1000);
  };

  const handleSubmitDecision = async () => {
    if (decision === "PENDING") {
      alert("Please select a decision (Approve or Reject)");
      return;
    }

    if (!assignmentId) {
      alert("Unable to find the evaluator assignment for this application.");
      return;
    }

    try {
      await submitMutation.mutateAsync({
        assignmentId,
        decision: decision,
        comments: comments || "Evaluation complete."
      });
      alert("Decision submitted successfully!");
      window.history.back();
    } catch (err) {
      console.error(err);
      alert("Failed to submit decision. Please try again.");
    }
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
            
            <div className="space-y-4">
              <label className="text-sm font-medium text-slate-700">Final Decision</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setDecision("APPROVE")}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 py-3 rounded-sm border transition-all",
                    decision === "APPROVE" 
                      ? "bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm" 
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <ThumbsUp className={cn("h-4 w-4", decision === "APPROVE" ? "text-emerald-500" : "text-slate-400")} />
                  <span className="text-sm font-medium">Recommend Approval</span>
                </button>
                <button
                  onClick={() => setDecision("REJECT")}
                  className={cn(
                    "flex items-center justify-center gap-2 px-4 py-3 rounded-sm border transition-all",
                    decision === "REJECT" 
                      ? "bg-rose-50 border-rose-200 text-rose-700 shadow-sm" 
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  )}
                >
                  <ThumbsDown className={cn("h-4 w-4", decision === "REJECT" ? "text-rose-500" : "text-slate-400")} />
                  <span className="text-sm font-medium">Recommend Rejection</span>
                </button>
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="text-sm font-medium text-slate-700">Official Comments</label>
              <textarea
                placeholder="Enter your final evaluation summary and recommendations..."
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                className="w-full min-h-[120px] p-3 text-sm text-slate-900 border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] focus:border-[var(--primary)] resize-none"
              />
            </div>

            <div 
              onClick={() => setShowInviteModal(true)}
              className="border border-dashed rounded-sm p-4 w-full transition-colors cursor-pointer group border-slate-200 hover:bg-slate-50 mt-2"
            >
              <div className="flex items-center gap-3 w-full">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                  <UserPlus className="h-4 w-4 text-slate-400" />
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[13px] text-slate-900">Invite Notification</h4>
                    {invitationStatus === 'sent' && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded-full">Invited</span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-400 leading-tight">Notify supervisor of your decision</p>
                </div>
              </div>
            </div>

            {/* Confirm / Cancel Buttons */}
            <div className="flex items-center gap-4 w-full mt-2">
              <button onClick={() => setActiveMajorStep(3)} className="flex-1 py-2.5 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
              <button 
                onClick={handleSubmitDecision} 
                disabled={decision === "PENDING" || submitMutation.isPending}
                className="flex-1 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Confirm Decision"
                )}
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 shrink-0 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200">
                <User className="h-4 w-4 text-slate-400 stroke-2" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] text-slate-500 leading-tight">Submitted by</span>
                <span className="text-[13px] text-slate-900 leading-tight">John Smith</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 bg-transparent rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                  <img src={`https://ui-avatars.com/api/?name=${application.institution.name}&background=FF8A65&color=fff&rounded=true`} alt="logo" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-slate-900 leading-tight">{application.institution.name}</span>
                  <span className="text-[11px] text-slate-500">{application.institution.email || "No institution email"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Invite User Modal */}
      <InviteUserModal 
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        onInvite={handleInviteSupervisor}
        variant="simple"
        defaultRole="Supervisor"
        title="Invite Supervisor"
        description="Invited supervisors will receive access to review evaluation results and grant certificates."
      />
    </div>
  );
};
