"use client";

import React from "react";
import { Users, UserPlus, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface AssignEvaluatorsStageProps {
  assignedInitialPrincipal: string | null;
  assignedInitialSecondary1: string | null;
  assignedInitialSecondary2: string | null;
  assignedInitialPrincipalStatus: 'pending' | 'accepted' | null;
  assignedInitialSecondary1Status: 'pending' | 'accepted' | null;
  assignedInitialSecondary2Status: 'pending' | 'accepted' | null;
  setPendingEvaluatorRole: (role: string) => void;
  setActiveMajorStep: (step: number) => void;
  setShowInitialReview: (show: boolean) => void;
  setIsEvaluating: (evaluating: boolean) => void;
}

export const AssignEvaluatorsStage: React.FC<AssignEvaluatorsStageProps> = ({
  assignedInitialPrincipal,
  assignedInitialSecondary1,
  assignedInitialSecondary2,
  assignedInitialPrincipalStatus,
  assignedInitialSecondary1Status,
  assignedInitialSecondary2Status,
  setPendingEvaluatorRole,
  setActiveMajorStep,
  setShowInitialReview,
  setIsEvaluating,
}) => {
  const isProceedDisabled = !assignedInitialPrincipal || !assignedInitialSecondary1 || !assignedInitialSecondary2;

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 w-full flex flex-col md:grid md:grid-cols-2 gap-12 items-stretch h-full">
      {/* 1. Header (Order 1 on mobile, Left Top on MD) */}
      <div className="order-1 md:col-start-1 md:row-start-1 flex flex-col items-center md:items-start text-center md:text-left pt-5">
        <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
          <Users className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
        </div>
        <h2 className="text-xl text-slate-900 mb-1">Assign Evaluators</h2>
        <p className="text-sm text-slate-500 mb-6">
          Assign evaluators to the application. You can optionally review the documents before scheduling.
        </p>
      </div>

      {/* 2. Cards (Order 2 on mobile, Right Span on MD) */}
      <div className="order-2 md:col-start-2 md:row-start-1 md:row-span-2 w-full">
        <div className="w-full space-y-4 mb-10">
          <h4 className="text-sm text-slate-700">Assign Evaluating Team</h4>
          
          {/* Principal Evaluator Card */}
          <div 
            className={cn(
              "border rounded-sm p-4 w-full transition-colors cursor-pointer group",
              assignedInitialPrincipal ? "border-[var(--primary)] bg-blue-50/10" : "border-slate-200 bg-slate-50/50 hover:border-[#0A77FF]/50"
            )}
            onClick={() => setPendingEvaluatorRole("Initial Principal")}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#0A77FF] transition-colors shrink-0">
                {assignedInitialPrincipalStatus === 'accepted' ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : assignedInitialPrincipalStatus === 'pending' ? (
                  <Clock className="h-4 w-4 text-amber-500" />
                ) : (
                  <UserPlus className="h-4 w-4 text-[#0A77FF]" />
                )}
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm text-slate-900">{assignedInitialPrincipal || "Principal Evaluator"}</h4>
                  {assignedInitialPrincipalStatus && (
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full capitalize",
                      assignedInitialPrincipalStatus === 'accepted' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {assignedInitialPrincipalStatus}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Lead evaluator & decision maker</p>
              </div>
            </div>
            
            {assignedInitialPrincipalStatus === 'accepted' && (
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 font-medium">Review Response</span>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Accept</span>
                </div>
                <p className="text-[11px] text-slate-500 italic">"Documents look correct and complete."</p>
              </div>
            )}
          </div>

          {/* Secondary Evaluator 1 Card */}
          <div 
            className={cn(
              "border border-dashed rounded-sm p-4 w-full transition-colors cursor-pointer group",
              assignedInitialSecondary1 ? "border-solid border-[var(--primary)] bg-blue-50/10" : "border-slate-200 hover:bg-slate-50"
            )}
            onClick={() => setPendingEvaluatorRole("Initial Secondary 1")}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                {assignedInitialSecondary1Status === 'accepted' ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : assignedInitialSecondary1Status === 'pending' ? (
                  <Clock className="h-4 w-4 text-amber-500" />
                ) : (
                  <UserPlus className="h-4 w-4 text-slate-400" />
                )}
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-[13px] text-slate-900">{assignedInitialSecondary1 || "Secondary Evaluator 1"}</h4>
                  {assignedInitialSecondary1Status && (
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full capitalize",
                      assignedInitialSecondary1Status === 'accepted' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {assignedInitialSecondary1Status}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
              </div>
            </div>

            {assignedInitialSecondary1Status === 'accepted' && (
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 font-medium">Review Response</span>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">Accept</span>
                </div>
                <p className="text-[11px] text-slate-500 italic">"No issues found in the trade modules."</p>
              </div>
            )}
          </div>

          {/* Secondary Evaluator 2 Card */}
          <div 
            className={cn(
              "border border-dashed rounded-sm p-4 w-full transition-colors cursor-pointer group",
              assignedInitialSecondary2 ? "border-solid border-[var(--primary)] bg-blue-50/10" : "border-slate-200 hover:bg-slate-50"
            )}
            onClick={() => setPendingEvaluatorRole("Initial Secondary 2")}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                {assignedInitialSecondary2Status === 'accepted' ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : assignedInitialSecondary2Status === 'pending' ? (
                  <Clock className="h-4 w-4 text-amber-500" />
                ) : (
                  <UserPlus className="h-4 w-4 text-slate-400" />
                )}
              </div>
              <div className="text-left flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-[13px] text-slate-900">{assignedInitialSecondary2 || "Secondary Evaluator 2"}</h4>
                  {assignedInitialSecondary2Status && (
                    <span className={cn(
                      "text-[10px] px-1.5 py-0.5 rounded-full capitalize",
                      assignedInitialSecondary2Status === 'accepted' ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                    )}>
                      {assignedInitialSecondary2Status}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
              </div>
            </div>
            
            {assignedInitialSecondary2Status === 'accepted' && (
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 font-medium">Review Response</span>
                  <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Comment</span>
                </div>
                <p className="text-[11px] text-slate-500 italic">"Curriculum needs minor clarification."</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Buttons (Order 3 on mobile, Left Bottom on MD) */}
      <div className="order-3 md:col-start-1 md:row-start-2 flex flex-col gap-3 w-full max-w-sm md:mt-auto pb-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="w-full">
              <button 
                onClick={() => setActiveMajorStep(1)}
                disabled={isProceedDisabled}
                className="w-full py-3 bg-[var(--primary)] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                Proceed to Scheduling
              </button>
            </div>
          </TooltipTrigger>
          {isProceedDisabled && (
            <TooltipContent>
              <p>Assign all evaluators before proceeding</p>
            </TooltipContent>
          )}
        </Tooltip>
        <button 
          onClick={() => {
            setShowInitialReview(true);
            setIsEvaluating(false);
          }}
          className="w-full py-3 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          View Initial Review (Optional)
        </button>
      </div>
    </div>
  );
};
