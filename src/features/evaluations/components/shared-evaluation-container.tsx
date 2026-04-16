"use client";

import React from "react";
import {
  Users,
  UserPlus,
  Calendar,
  Clock,
  CheckCircle2,
  Mail,
  ArrowRight,
  Building2,
  FileText,
  ChevronRight,
  MoreVertical,
  ChevronLeft,
  X,
  Search,
  Filter,
  Download,
  Printer,
  ArrowLeft,
  UngroupIcon,
  User,
  Files,
  ToolCase,
  ChevronDown,
  Package,
  Phone,
  Database,
  Ungroup,
  Eye,
  Check,
  File,
  AlertTriangle,
  PlusSquare,
  MapPin,
  Map,
  Globe,
  Flag,
  Navigation,
  Target,
  Activity,
  CheckCheck,
  RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useRouter } from "next/navigation";
import { mockApplications } from "@/lib/utils/application-utils";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { AddEvaluatorModal } from "./add-evaluator-modal";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Import Modular Stages
import { AssignEvaluatorsStage } from "./stages/AssignEvaluatorsStage";
import { ScheduleDueDiligenceStage } from "./stages/ScheduleDueDiligenceStage";
import { PerformDueDiligenceStage } from "./stages/PerformDueDiligenceStage";
import { DecisionMakingStage } from "./stages/DecisionMakingStage";
import { EvaluationReviewStage } from "./stages/EvaluationReviewStage";

// --- Sub-components ---

const HorizontalStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: "Initial Review", sub: "Documents Review" },
    { label: "Schedule Due Diligence", sub: "Website and location" },
    { label: "Perform Due Diligence", sub: "Start collaborating" },
    { label: "Final Review", sub: "Start collaborating" },
    { label: "Decision Making", sub: "Automatic sharing" },
  ];

  return (
    <div className="flex items-start justify-between w-full mt-4 mb-6 px-1 pt-1 relative overflow-visible">
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        const isCompleted = idx < currentStep;

        return (
          <div key={idx} className="flex flex-col items-start text-start relative flex-1">
            {/* Connector Line Segments */}
            {idx > 0 && (
              <div
                className={cn(
                  "absolute top-[12px] left-[-100%] right-[calc(100%-12px)] ml-[12px] h-[1px] z-0",
                  idx <= currentStep ? "bg-[var(--primary)] h-[1.5px]" : "bg-slate-100"
                )}
              />
            )}

            <div className={cn(
              "h-6 w-6 rounded-full border flex items-center justify-center mb-3 transition-all duration-300 shrink-0 relative z-10",
              isActive ? "border-[var(--primary)] bg-[var(--primary)] shadow-[0_0_0_4px_rgba(9,119,255,0.15)]" :
                isCompleted ? "border-[var(--primary)] bg-[var(--primary)]" : "border-slate-200 bg-white"
            )}>
              {isCompleted ? (
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
              ) : isActive ? (
                <div className="h-1.5 w-1.5 rounded-full bg-white" />
              ) : (
                <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
              )}
            </div>
            <span className={cn(
              "text-[11px]  block mb-0.5 whitespace-nowrap",
              idx <= currentStep ? "text-slate-900" : "text-slate-400"
            )}>
              {step.label}
            </span>
            <span className="text-[10px] text-slate-400 whitespace-nowrap">{step.sub}</span>
          </div>
        );
      })}
    </div>
  );
};

const ApplicationSidebar = ({
  activeStep,
  completedSteps,
  onStepChange,
  onExit
}: {
  activeStep: number,
  completedSteps: number[],
  onStepChange: (idx: number) => void,
  onExit?: () => void
}) => {
  const sidebarSteps = [
    { label: "Institution Details", sub: "Select the trade(s) you are applying for", icon: Building2 },
    { label: "Trade & Competency", sub: "Select the trade(s) you are applying for", icon: UngroupIcon },
    { label: "Equipment and Facilities", sub: "List available equipment and upload proof", icon: ToolCase },
    { label: "Curriculum Documents", sub: "Upload curriculum and training materials", icon: Files },
    { label: "Staff Allocation", sub: "Indicate staff availability for the selected trade", icon: Users },
  ];

  return (
    <div className="w-[300px] bg-[#F9FAFB] flex flex-col h-full shrink-0 p-8 overflow-y-auto no-scrollbar">
      <div className="mb-10">
        <h2 className="text-sm text-slate-800 mb-9 mt-3">Application Details</h2>
        <button
          onClick={onExit || (() => window.history.back())}
          className="flex items-center gap-2 text-[12px] text-[var(--primary)] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Exit
        </button>
      </div>

      <div className="flex flex-col gap-6 relative">
     
        {sidebarSteps.map((step, idx) => {
          const isCompleted = completedSteps.includes(idx);
          const isActive = idx === activeStep;

          return (
            <div
              key={idx}
              className={cn(
                "flex gap-4 cursor-pointer group relative",
                isActive || isCompleted ? "opacity-100" : "opacity-40 hover:opacity-100"
              )}
              onClick={() => onStepChange(idx)}
            >
              <div className={cn(
                "h-9 w-9 rounded-sm border flex items-center justify-center shrink-0 relative z-10 transition-all",
                isActive ? "border-slate-100  " :
                  isCompleted ? "border-green-500 text-green-500 " : "border-slate-100 "
              )}>
                {isCompleted ? (
                  <step.icon strokeWidth={1} className="h-5 w-5 text-green-500" />
                ) : (
                  <step.icon strokeWidth={1.2} className={cn("h-5 w-5", isActive ? "text-slate-400" : "text-slate-400")} />
                )}
              </div>
              <div className="flex flex-col pt-0.5 justify-center">
                <span className={cn(
                  "text-[12px] transition-colors mb-1",
                  isActive ? "text-slate-900 " :
                    isCompleted ? " " : "text-slate-500"
                )}>
                  {step.label}
                </span>
                <span className="text-[10px] text-slate-400 leading-tight pr-2">
                  {step.sub}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// --- Container ---

interface SharedEvaluationContainerProps {
  id: string;
  role: "super-admin" | "evaluator" | "supervisor";
}

export function SharedEvaluationContainer({ id, role }: SharedEvaluationContainerProps) {
  const [activeInternalStep, setActiveInternalStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [activeTab, setActiveTab] = React.useState("General");
  const [isEvaluating, setIsEvaluating] = React.useState(false);
  const [activeMajorStep, setActiveMajorStep] = React.useState(0);
  const [mounted, setMounted] = React.useState(false);
  const [dateRange, setDateRange] = React.useState<DateRange>({
    from: new Date(2024, 0, 6),
    to: new Date(2024, 0, 13)
  });
  const [evaluationNote, setEvaluationNote] = React.useState("");
  // Evaluator Assignments - Initial Review
  const [assignedInitialPrincipal, setAssignedInitialPrincipal] = React.useState<string | null>("evaluator1@mis.gov.rw");
  const [assignedInitialSecondary1, setAssignedInitialSecondary1] = React.useState<string | null>("evaluator2@mis.gov.rw");
  const [assignedInitialSecondary2, setAssignedInitialSecondary2] = React.useState<string | null>(null);
  const [assignedInitialPrincipalStatus, setAssignedInitialPrincipalStatus] = React.useState<'pending' | 'accepted' | null>('accepted');
  const [assignedInitialSecondary1Status, setAssignedInitialSecondary1Status] = React.useState<'pending' | 'accepted' | null>('pending');
  const [assignedInitialSecondary2Status, setAssignedInitialSecondary2Status] = React.useState<'pending' | 'accepted' | null>(null);

  // Evaluator Assignments - Scheduled Due Diligence
  const [assignedScheduledPrincipal, setAssignedScheduledPrincipal] = React.useState<string | null>(null);
  const [assignedScheduledSecondary1, setAssignedScheduledSecondary1] = React.useState<string | null>(null);
  const [assignedScheduledSecondary2, setAssignedScheduledSecondary2] = React.useState<string | null>(null);
  const [assignedScheduledPrincipalStatus, setAssignedScheduledPrincipalStatus] = React.useState<'pending' | 'accepted' | null>(null);
  const [assignedScheduledSecondary1Status, setAssignedScheduledSecondary1Status] = React.useState<'pending' | 'accepted' | null>(null);
  const [assignedScheduledSecondary2Status, setAssignedScheduledSecondary2Status] = React.useState<'pending' | 'accepted' | null>(null);

  const [showInitialReview, setShowInitialReview] = React.useState(role !== "super-admin");
  const [pendingEvaluatorRole, setPendingEvaluatorRole] = React.useState<string | null>(null);
  const [showConsensus, setShowConsensus] = React.useState(false);
  const [initialReviewConsensus, setInitialReviewConsensus] = React.useState([
    { name: "Principal Evaluator", status: "Accept", comment: "Documents look correct and complete." },
    { name: "Supporting Evaluator 1", status: "Accept", comment: "No issues found in the trade modules." },
    { name: "Supporting Evaluator 2", status: "Comment", comment: "Curriculum needs minor clarification on workshop hours." },
  ]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = ["General", "Address", "Personnel", "About"];

  const handleNext = () => {
    if (activeInternalStep === 0) {
      if (!isEvaluating) {
        setIsEvaluating(true);
        setActiveTab(tabs[0]);
      } else {
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) setActiveTab(tabs[currentIndex + 1]);
        else {
          setCompletedSteps(prev => [...new Set([...prev, 0])]);
          setActiveInternalStep(1);
        }
      }
    } else if (activeInternalStep === 1) {
      setCompletedSteps(prev => [...new Set([...prev, 1])]);
      setActiveInternalStep(2);
    } else if (activeInternalStep === 2) {
      setCompletedSteps(prev => [...new Set([...prev, 2])]);
      setActiveInternalStep(3);
    } else if (activeInternalStep === 3) {
      setCompletedSteps(prev => [...new Set([...prev, 3])]);
      setActiveInternalStep(4);
    } else if (activeInternalStep === 4) {
      setCompletedSteps(prev => [...new Set([...prev, 4])]);
      if (activeMajorStep === 0) {
        setActiveMajorStep(1);
        setActiveInternalStep(0);
      } else if (activeMajorStep === 3) setActiveMajorStep(4);
    }
  };

  const equipmentList = [
    { id: 1, name: "Server", quantity: "2 Pieces" },
    { id: 2, name: "Server", quantity: "2 Pieces" },
    { id: 3, name: "Server", quantity: "2 Pieces" },
  ];

  const documentList = [
    { id: 1, name: "Evaluation Criteria One", size: "200 KB" },
    { id: 2, name: "Evaluation Criteria One", size: "200 KB" },
    { id: 3, name: "Evaluation Criteria One", size: "200 KB" },
    { id: 4, name: "Evaluation Criteria One", size: "200 KB" },
  ];

  const staffAllocationList = [
    { id: 1, position: "Position", qualification: "Qualification", count: 2, status: "Rejected" },
    { id: 2, position: "Position", qualification: "Qualification", count: 2, status: "Pending" },
    { id: 3, position: "Position", qualification: "Qualification", count: 2, status: "Rejected" },
    { id: 4, position: "Position", qualification: "Qualification", count: 2, status: "Approved" },
    { id: 5, position: "Position", qualification: "Qualification", count: 2, status: "Pending" },
  ];

  const dueDiligenceEquipment = [
    { id: 1, name: "Server", quantity: "2 Pieces", found: true, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=100&h=80&fit=crop" },
    { id: 2, name: "Server", quantity: "2 Pieces", found: true, image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?w=100&h=80&fit=crop" },
  ];


  const application = mockApplications.find(app => app.id === id) || mockApplications[0];

  return (
    <div className="flex flex-col bg-white h-full overflow-hidden">
      <div className="flex flex-1 overflow-hidden min-h-0">
        <div className="flex flex-1 flex-col min-h-0 mx-6">
          <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm">
            <HorizontalStepper currentStep={activeMajorStep} />
          </div>

          <div className="flex flex-1 overflow-hidden min-h-0">
            {((activeMajorStep === 0 && showInitialReview) || activeMajorStep === 3) && (
              <ApplicationSidebar
                activeStep={activeInternalStep}
                completedSteps={completedSteps}
                onStepChange={setActiveInternalStep}
                onExit={() => {
                  if (activeMajorStep === 0) {
                    setShowInitialReview(false);
                    setIsEvaluating(false);
                  } else {
                    window.history.back();
                  }
                }}
              />
            )}

            <div className={cn("flex-1 bg-white overflow-y-auto no-scrollbar min-h-0", ((activeMajorStep === 0 && showInitialReview) || activeMajorStep === 3) && "flex flex-col items-center")}>
              {!mounted ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A77FF]" />
                </div>
              ) : (
                    <>
                      {activeMajorStep === 0 && !showInitialReview ? (
                        <AssignEvaluatorsStage
                          assignedInitialPrincipal={assignedInitialPrincipal}
                          assignedInitialSecondary1={assignedInitialSecondary1}
                          assignedInitialSecondary2={assignedInitialSecondary2}
                          assignedInitialPrincipalStatus={assignedInitialPrincipalStatus}
                          assignedInitialSecondary1Status={assignedInitialSecondary1Status}
                          assignedInitialSecondary2Status={assignedInitialSecondary2Status}
                          setPendingEvaluatorRole={setPendingEvaluatorRole}
                          setActiveMajorStep={setActiveMajorStep}
                          setShowInitialReview={setShowInitialReview}
                          setIsEvaluating={setIsEvaluating}
                        />
                      ) : (activeMajorStep === 0 && showInitialReview) || activeMajorStep === 3 ? (
                        <EvaluationReviewStage
                          activeInternalStep={activeInternalStep}
                          setActiveInternalStep={setActiveInternalStep}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                          isEvaluating={isEvaluating}
                          setIsEvaluating={setIsEvaluating}
                          staffAllocationList={staffAllocationList}
                          documentList={documentList}
                          equipmentList={equipmentList}
                          completedSteps={completedSteps}
                          setCompletedSteps={setCompletedSteps}
                          activeMajorStep={activeMajorStep}
                          setActiveMajorStep={setActiveMajorStep}
                          handleNext={handleNext}
                        />
                      ) : activeMajorStep === 1 ? (
                        <ScheduleDueDiligenceStage
                          dateRange={dateRange}
                          setDateRange={setDateRange}
                          role={role}
                          assignedScheduledPrincipal={assignedScheduledPrincipal}
                          assignedScheduledSecondary1={assignedScheduledSecondary1}
                          assignedScheduledSecondary2={assignedScheduledSecondary2}
                          assignedScheduledPrincipalStatus={assignedScheduledPrincipalStatus}
                          assignedScheduledSecondary1Status={assignedScheduledSecondary1Status}
                          assignedScheduledSecondary2Status={assignedScheduledSecondary2Status}
                          setPendingEvaluatorRole={setPendingEvaluatorRole}
                          setActiveMajorStep={setActiveMajorStep}
                          setShowInitialReview={setShowInitialReview}
                        />
                      ) : activeMajorStep === 2 ? (
                        <PerformDueDiligenceStage
                          dateRange={dateRange}
                          setDateRange={setDateRange}
                          role={role}
                          evaluationNote={evaluationNote}
                          setEvaluationNote={setEvaluationNote}
                          dueDiligenceEquipment={dueDiligenceEquipment}
                          setActiveMajorStep={setActiveMajorStep}
                          setActiveInternalStep={setActiveInternalStep}
                          setActiveTab={setActiveTab}
                          setIsEvaluating={setIsEvaluating}
                        />
                      ) : activeMajorStep === 4 ? (
                        <DecisionMakingStage
                          role={role}
                          application={application}
                          assignedPrincipal={assignedInitialPrincipal}
                          setActiveMajorStep={setActiveMajorStep}
                          dateRange={dateRange}
                          setDateRange={setDateRange}
                        />
                      ) : null}
                    </>
            )}
            </div>
          </div>
        </div>
      </div>
      {/* Modals */}
      {pendingEvaluatorRole && (
        <AddEvaluatorModal 
          onClose={() => setPendingEvaluatorRole(null)}
          title={`Invite ${pendingEvaluatorRole}`}
          onInvite={(email) => {
            if (pendingEvaluatorRole === "Initial Principal") {
              setAssignedInitialPrincipal(email);
              setAssignedInitialPrincipalStatus('accepted');
            }
            else if (pendingEvaluatorRole === "Initial Secondary 1") {
              setAssignedInitialSecondary1(email);
              setAssignedInitialSecondary1Status('accepted');
            }
            else if (pendingEvaluatorRole === "Initial Secondary 2") {
              setAssignedInitialSecondary2(email);
              setAssignedInitialSecondary2Status('accepted');
            }
            else if (pendingEvaluatorRole === "Scheduled Principal") {
              setAssignedScheduledPrincipal(email);
              setAssignedScheduledPrincipalStatus('accepted');
            }
            else if (pendingEvaluatorRole === "Scheduled Secondary 1") {
              setAssignedScheduledSecondary1(email);
              setAssignedScheduledSecondary1Status('accepted');
            }
            else if (pendingEvaluatorRole === "Scheduled Secondary 2") {
              setAssignedScheduledSecondary2(email);
              setAssignedScheduledSecondary2Status('accepted');
            }
            setPendingEvaluatorRole(null);
          }}
        />
      )}
    </div>
  );
}
