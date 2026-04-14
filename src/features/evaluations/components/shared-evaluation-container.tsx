"use client";

import React from "react";
import {
  ChevronRight, ChevronLeft, ArrowLeft, UngroupIcon, Users, User,
  Files, ToolCase, ChevronDown, Building2, Package, Mail, Phone, Database,
  Ungroup, Search, Eye, CheckCircle2, Check, MoreVertical, File, AlertTriangle, Clock,
  Calendar, UserPlus, PlusSquare, MapPin, Map, Globe, Flag, Navigation, Target, Activity,
  CheckCheck, X, RefreshCw
} from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useRouter } from "next/navigation";
import { mockApplications } from "@/lib/utils/application-utils";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";

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
              "text-[11px] font-medium block mb-0.5 whitespace-nowrap",
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
  const [assignedPrincipal, setAssignedPrincipal] = React.useState<string | null>(null);
  const [assignedSecondary1, setAssignedSecondary1] = React.useState<string | null>(null);
  const [assignedSecondary2, setAssignedSecondary2] = React.useState<string | null>(null);
  const [showInitialReview, setShowInitialReview] = React.useState(false);
  const [showConsensus, setShowConsensus] = React.useState(false);
  const [initialReviewConsensus, setInitialReviewConsensus] = React.useState([
    { name: "Principal Evaluator", status: "Accept", comment: "Documents look correct and complete." },
    { name: "Secondary Evaluator 1", status: "Accept", comment: "No issues found in the trade modules." },
    { name: "Secondary Evaluator 2", status: "Comment", comment: "Curriculum needs minor clarification on workshop hours." },
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
                    {(activeMajorStep === 0 || activeMajorStep === 3) && (
                      <>
                    {activeMajorStep === 0 && !showInitialReview ? (
                      <div className="max-w-xl mx-auto py-12 px-6 w-full flex flex-col items-center">
                        <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                          <Users className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-xl text-slate-900 mb-1">Assign Evaluators</h2>
                        <p className="text-sm text-slate-500 mb-10 text-center">
                          Assign evaluators to the application. You can optionally review the documents before scheduling.
                        </p>

                        <div className="w-full space-y-4 mb-10">
                          <h4 className="text-sm font-medium text-slate-700">Assign Evaluating Team</h4>
                          
                          <div 
                            className={cn(
                              "border rounded-sm p-4 flex w-full items-center justify-left gap-3 transition-colors cursor-pointer group",
                              assignedPrincipal ? "border-[var(--primary)] bg-blue-50/30" : "border-slate-200 bg-slate-50/50 hover:border-[#0A77FF]/50"
                            )}
                            onClick={() => setAssignedPrincipal("Principal Evaluator")}
                          >
                            <div className="h-10 w-10 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#0A77FF] transition-colors shrink-0">
                              <UserPlus className="h-4 w-4 text-[#0A77FF]" />
                            </div>
                            <div className="text-left flex-1">
                              <h4 className="text-sm text-slate-900">{assignedPrincipal || "Principal Evaluator"}</h4>
                              <p className="text-[11px] text-slate-400 leading-tight">Lead evaluator & decision maker</p>
                            </div>
                            {!assignedPrincipal && <span className="text-[10px] uppercase font-bold text-slate-400">Required</span>}
                          </div>

                          <div 
                            className={cn(
                              "border border-dashed rounded-sm p-4 flex w-full items-center justify-left gap-3 transition-colors cursor-pointer group",
                              assignedSecondary1 ? "border-solid border-[var(--primary)] bg-blue-50/30" : "border-slate-200 hover:bg-slate-50"
                            )}
                            onClick={() => setAssignedSecondary1("Secondary Evaluator 1")}
                          >
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                              <UserPlus className="h-4 w-4 text-slate-400" />
                            </div>
                            <div className="text-left flex-1">
                              <h4 className="text-[13px] font-medium text-slate-900">{assignedSecondary1 || "Secondary Evaluator 1"}</h4>
                              <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
                            </div>
                          </div>

                          <div 
                            className={cn(
                              "border border-dashed rounded-sm p-4 flex w-full items-center justify-left gap-3 transition-colors cursor-pointer group",
                              assignedSecondary2 ? "border-solid border-[var(--primary)] bg-blue-50/30" : "border-slate-200 hover:bg-slate-50"
                            )}
                            onClick={() => setAssignedSecondary2("Secondary Evaluator 2")}
                          >
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors shrink-0">
                              <UserPlus className="h-4 w-4 text-slate-400" />
                            </div>
                            <div className="text-left flex-1">
                              <h4 className="text-[13px] font-medium text-slate-900">{assignedSecondary2 || "Secondary Evaluator 2"}</h4>
                              <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
                            </div>
                          </div>
                        </div>

                        {assignedPrincipal && (
                          <div className="w-full space-y-4 mb-10 p-6 bg-slate-50 border border-slate-100 rounded-sm">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-sm font-medium text-slate-700">Initial Review Consensus</h4>
                              <div className="flex items-center gap-2 px-2 py-0.5 rounded-sm bg-green-50 border border-green-100 text-[10px] font-bold text-green-600 uppercase tracking-widest">
                                Majority: Accept
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              {initialReviewConsensus.map((resp, idx) => (
                                <div key={idx} className="flex flex-col gap-1 p-3 bg-white border border-slate-100 rounded-sm">
                                  <div className="flex items-center justify-between">
                                    <span className="text-[12px] font-bold text-slate-700">{resp.name}</span>
                                    <span className={cn(
                                      "text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-sm border",
                                      resp.status === "Accept" ? "text-green-500 bg-green-50 border-green-100" :
                                      resp.status === "Rejected" ? "text-red-500 bg-red-50 border-red-100" :
                                      "text-blue-500 bg-blue-50 border-blue-100"
                                    )}>
                                      {resp.status}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 italic">"{resp.comment}"</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="flex flex-col gap-3 w-full">
                          <button 
                            onClick={() => setActiveMajorStep(1)}
                            disabled={!assignedPrincipal}
                            className="w-full py-4 bg-[var(--primary)] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                          >
                            Proceed to Scheduling
                          </button>
                          <button 
                            onClick={() => {
                              setShowInitialReview(true);
                              setIsEvaluating(false);
                            }}
                            className="w-full py-4 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            View Initial Review (Optional)
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                    {activeInternalStep === 0 && (
                  <>
                    {/* Top Action Buttons */}
                    <div className="max-w-md mx-auto flex items-center mt-8 gap-4 mb-12 w-full">
                      <button className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => {
                        if (isEvaluating) {
                          const currentIndex = tabs.indexOf(activeTab);
                          if (currentIndex > 0) {
                            setActiveTab(tabs[currentIndex - 1]);
                          } else {
                            setIsEvaluating(false);
                            if (activeMajorStep === 0) {
                              setShowInitialReview(false);
                            } else {
                              window.history.back();
                            }
                          }
                        } else {
                          if (activeMajorStep === 0) {
                            setShowInitialReview(false);
                          } else {
                            window.history.back();
                          }
                        }
                      }}>
                        Back
                      </button>
                      <button
                        onClick={handleNext}
                        className="flex-1 py-3 bg-[var(--primary)] text-white rounded-sm text-sm  hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        {isEvaluating ? "Next" : "Start Evaluation"}
                      </button>
                    </div>

                    {/* Tabs */}
                    {/* Tabs */}
                    <div className="flex justify-between mb-4 gap-10 w-full max-w-md">
                      {tabs.map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={cn(
                            "py-3 text-sm cursor-pointer transition-all relative",
                            activeTab === tab
                              ? "text-[#0A77FF]"
                              : "text-slate-400 hover:text-slate-600"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Form Container */}
                    <div className="max-w-md mx-auto space-y-8 w-full">
                      {activeTab === "General" && (
                        <div className="grid grid-cols-1 gap-8">
                          {/* Institution Name */}
                          <div className="space-y-2">
                            <label className="text-[13px]  text-slate-700">Name of Institution</label>
                            <div className="relative mt-2">
                              <input
                                type="text"
                                readOnly
                                defaultValue={application.institution.name}
                                className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                              />
                              <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-left">
                              <label className="text-[13px]  text-slate-700">Institution Type</label>
                              <div className="relative mt-2">
                                <select disabled defaultValue="SPE" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-500 appearance-none bg-white cursor-default">
                                  <option value="SPE">SPE</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[13px]  text-slate-700">P.O Box</label>
                              <div className="relative mt-2">
                                <input readOnly defaultValue="P.O. Box 1234, Kigali" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <Package className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[13px]  text-slate-700">Email Address</label>
                            <div className="relative mt-2">
                              <input readOnly defaultValue={application.applicant.email} className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[13px]  text-slate-700">Phone Number</label>
                            <div className="flex mt-2">
                              <div className="relative">
                                <select disabled defaultValue="+250" className="pl-4 pr-10 py-3 rounded-l-sm border border-r-0 border-slate-200 text-sm text-slate-500 bg-slate-50 cursor-default appearance-none">
                                  <option>+250</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                              </div>
                              <div className="relative flex-1">
                                <input readOnly defaultValue="791-234-567" className="w-full px-4 py-3 rounded-r-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "Address" && (
                        <div className="grid grid-cols-1 gap-8">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-[13px] text-slate-700">Province</label>
                              <div className="relative mt-2">
                                <input readOnly defaultValue="Western" className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[13px] text-slate-700">District</label>
                              <div className="relative mt-2">
                                <input readOnly defaultValue="Nyabihu" className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <Map className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-[13px] text-slate-700">Sector</label>
                              <div className="relative mt-2">
                                <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <Globe className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[13px] text-slate-700">Cell</label>
                              <div className="relative mt-2">
                                <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <Flag className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] text-slate-700">Village/City</label>
                            <div className="relative mt-2">
                              <input readOnly defaultValue="Mukamira Urban" className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                              <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[13px] text-slate-700">Address Line</label>
                            <div className="relative mt-2">
                              <input readOnly defaultValue="Mukamira Road, Avenue 4, Plot 12" className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                              <Navigation className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "Personnel" && (
                        <div className="border border-slate-100 rounded-sm overflow-hidden bg-white">
                          <table className="w-full text-left">
                            <thead>
                              <tr className="border-b border-slate-100">
                                <th className="w-10 pl-6 pr-2 py-4">
                                  <div className="h-5 w-5 rounded-sm border border-slate-200 bg-white" />
                                </th>
                                <th className="py-4 text-[13px] font-normal text-slate-500">Name</th>
                                <th className="py-4 text-[13px] font-normal text-slate-500">Position</th>
                                <th className="py-4 text-[13px] font-normal text-slate-500 pr-6">Position</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              {[
                                { name: "Natali Craig", gender: "Female", role: "Deputy Director", email: "natali.craig@itbz.rw", phone: "+250 788 123 456" },
                                { name: "Drew Cano", gender: "Male", role: "Deputy Director", email: "drew.cano@itbz.rw", phone: "+250 712 345 678" },
                                { name: "Natali Craig", gender: "Female", role: "Deputy Director", email: "natali.craig@itbz.rw", phone: "+250 788 123 456" },
                                { name: "Drew Cano", gender: "Male", role: "Deputy Director", email: "drew.cano@itbz.rw", phone: "+250 712 345 678" },
                                { name: "Natali Craig", gender: "Female", role: "Deputy Director", email: "natali.craig@itbz.rw", phone: "+250 788 123 456" }
                              ].map((person, idx) => (
                                <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                                  <td className="w-10 pl-6 pr-2 py-5">
                                    <div className="h-5 w-5 rounded-sm border border-slate-200 bg-white" />
                                  </td>
                                  <td className="py-5">
                                    <div className="flex items-center gap-4">
                                      <div className="h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                                        <User className="h-5 w-5 text-slate-400 stroke-[1.2]" />
                                      </div>
                                      <div className="flex flex-col">
                                        <span className="text-sm font-medium text-slate-900 leading-tight">{person.name}</span>
                                        <span className="text-[12px] text-slate-400">{person.gender}</span>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="py-5">
                                    <span className="text-[13px] text-slate-500">{person.role}</span>
                                  </td>
                                  <td className="py-5 pr-6">
                                    <div className="flex flex-col text-[13px] text-slate-500">
                                      <span>{person.email.split('@')[0]}...</span>
                                      <span>{person.phone.substring(0, 7)}...</span>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {activeTab === "About" && (
                        <div className="grid grid-cols-1 gap-8">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <label className="text-[13px] font-medium text-slate-700 flex items-center gap-2">
                               Institution Mission
                              </label>
                              <div className="relative">
                                <textarea readOnly defaultValue="To provide high-quality technical education and vocational training that meets domestic and international standards, empowering students with the skills needed for the global workforce." className="w-full px-4 py-4 rounded-sm border border-slate-200 text-sm text-slate-600 focus:outline-none bg-white cursor-default leading-relaxed min-h-[100px] resize-none no-scrollbar" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[13px] font-medium text-slate-700 flex items-center gap-2">
                                Institution Vision
                              </label>
                              <div className="relative">
                                <textarea readOnly defaultValue="To be a center of excellence in technical innovation and vocational training, recognized for producing highly skilled professionals who drive economic growth and sustainability." className="w-full px-4 py-4 rounded-sm border border-slate-200 text-sm text-slate-600 focus:outline-none bg-white cursor-default leading-relaxed min-h-[100px] resize-none no-scrollbar" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[13px] font-medium text-slate-700 flex items-center gap-2">

                             Key Objectives
                              </label>
                              <div className="relative">
                                <textarea readOnly defaultValue="1. Maintain 95% student placement rate within 6 months of graduation.&#10;2. Establish 5+ international industry partnerships annually.&#10;3. Continuously upgrade laboratory and workshop facilities to match current industry technologies." className="w-full px-4 py-4 rounded-sm border border-slate-200 text-sm text-slate-600 focus:outline-none bg-white cursor-default leading-relaxed min-h-[120px] resize-none no-scrollbar" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {activeInternalStep === 1 && (
                  <div className="max-w-4xl  mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <Ungroup className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl  text-slate-900 mb-2">Trade & Module Selected</h2>
                    <p className="text-sm text-slate-500 mb-8">Select the trade you are applying for accreditation in.</p>
                    <div className="flex items-center w-full justify-start gap-4 mb-8">
                      <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#0A77FF] bg-white text-[13px]  text-[#0A77FF]">
                        <Ungroup className="h-4 w-4" />Masonry
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center"><ChevronDown className="h-3 w-3 text-white rotate-180" /></div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                      <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#0A77FF] bg-white text-[13px]  text-[#0A77FF]">
                        <Database className="h-4 w-4" />Data Structures & Algorithms
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full mb-12">
                      <button onClick={() => setActiveInternalStep(0)} className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">Next</button>
                    </div>
                    <div className="w-full space-y-4">
                      <h3 className="text-sm text-slate-800">Add Comment (Optional)</h3>
                      <div className="space-y-1">
                        <label className="text-[12px] text-slate-500">Comment Input</label>
                        <div className="relative">
                          <textarea placeholder="Text..." className="w-full border border-slate-200 rounded-sm p-4 min-h-[140px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none" />
                          <div className="absolute bottom-4 right-4 text-[11px] text-slate-400">275 characters left</div>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 px-6 py-3 bg-[#0A77FF] text-white rounded-sm text-sm  hover:opacity-90 transition-all cursor-pointer">Add Comment<span className="flex items-center justify-center w-4 h-4 border border-white/50 rounded-sm text-[10px] cursor-pointer">+</span></button>
                    </div>
                  </div>
                )}

                {activeInternalStep === 2 && (
                  <div className="max-w-4xl  mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <Package className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl text-slate-900 mb-2">Equipment & Facilities</h2>
                    <p className="text-sm text-slate-500 mb-8 text-center px-4">Specify the competencies offered under the selected trade.</p>

                    <div className="flex items-center justify-start w-full gap-4 mb-8">
                      <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#0A77FF] bg-white text-[13px]  text-[#0A77FF]">
                        <Ungroup className="h-4 w-4" />Masonry
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center ml-1">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full mb-10">
                      <button onClick={() => setActiveInternalStep(1)} className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">Continue</button>
                    </div>

                    <div className="w-full space-y-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm  text-slate-600">24 equipment</span>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-3 rounded-sm border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all"
                          />
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        {equipmentList.map((item) => (
                          <div key={item.id} className="flex items-center gap-4 p-4 border border-slate-100 rounded-sm hover:border-slate-200 transition-all bg-white group">
                            <div className="h-16 w-24 bg-slate-100 rounded-sm overflow-hidden shrink-0 flex items-center justify-center">
                              {/* Using a placeholder for the equipment image */}
                              <div className="flex flex-col items-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                                <Database className="h-6 w-6" />
                                <span className="text-[8px]  font-bold">Image</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm  text-slate-900">{item.name}</h4>
                              <p className="text-xs text-slate-500">Quantity: {item.quantity}</p>
                            </div>
                            <button className="h-8 w-8 rounded-sm hover:bg-slate-50 flex items-end justify-center text-slate-400 transition-colors cursor-pointer self-end">
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeInternalStep === 3 && (
                  <div className="max-w-4xl  mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <Files className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl text-slate-900 mb-2">Curriculum Documents</h2>
                    <p className="text-sm text-slate-500 mb-8 text-center px-4">Upload curriculum and training materials.</p>

                    <div className="flex items-center gap-4 w-full mb-10">
                      <button onClick={() => setActiveInternalStep(2)} className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">Continue</button>
                    </div>

                    <div className="w-full border border-slate-100 rounded-sm overflow-hidden bg-white ">
                      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <div>
                          <h3 className="text-sm  text-slate-900">Curriculum Documents</h3>
                          <p className="text-[11px] text-slate-400">Files and assets that have been attached to this project.</p>
                        </div>
                        <button className="h-8 w-8 rounded-sm hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors cursor-pointer">
                          <MoreVertical className="h-4 w-4" />
                        </button>
                      </div>

                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="w-10 p-4 text-center">
                              <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                            </th>
                            <th className="px-3 py-3 text-left text-[12px] font-normal  text-slate-400 ">File name</th>
                            <th className="px-3 py-3 text-left text-[12px] font-normal text-slate-400  w-[120px]">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {documentList.map((doc) => (
                            <tr key={doc.id} className="hover:bg-slate-50/30 transition-colors group">
                              <td className="w-10 p-4 text-center">
                                <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                              </td>
                              <td className="px-3 py-3">
                                <div className="flex items-center gap-3">
                                  <div className="relative h-12 w-10 shrink-0">
                                    <svg viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                      <path d="M0 4C0 1.79086 1.79086 0 4 0H22L32 10V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#E1412E"></path>
                                      <path d="M22 0L32 10H26C23.7909 10 22 8.20914 22 6V0Z" fill="white" fillOpacity="0.3"></path>
                                      <text x="16" y="30" fill="white" fontSize="7" fontWeight="900" textAnchor="middle" className="select-none" style={{ fontFamily: "Inter, sans-serif" }}>PDF</text>
                                    </svg>
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm  text-slate-900 line-clamp-1">{doc.name}</span>
                                    <span className="text-[11px] text-slate-400">{doc.size}</span>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-3">
                                <div className="flex items-center gap-3">
                                  <button className="text-[12px]  text-slate-600 hover:text-slate-900 transition-colors">Download</button>
                                  <button className="text-[12px]  text-[#0A77FF] hover:opacity-80 transition-opacity">Open</button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeInternalStep === 4 && (
                  <div className="max-w-4xl  mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <Users className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl text-slate-900 mb-2">Staff Allocation</h2>
                    <p className="text-sm text-slate-500 mb-8 text-center px-4">Indicate staff availability for the selected trade.</p>

                    <div className="flex items-center gap-4 w-full mb-10">
                      <button onClick={() => setActiveInternalStep(3)} className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">
                        {activeMajorStep === 3 ? "Proceed to  Decision" : "Continue"}
                      </button>
                    </div>

                    <div className="w-full border border-slate-100 rounded-sm overflow-hidden bg-white">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50/50 border-b border-slate-100">
                            <th className="w-10 p-4 text-center">
                              <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                            </th>
                            <th className="px-3 py-4 text-left text-[11px] font-normal  text-slate-400 ">Position & Qualification</th>
                            <th className="px-3 py-4 text-left text-[11px] font-normal  text-slate-400 ">Count</th>
                            <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400 ">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {staffAllocationList.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50/30 transition-colors group">
                              <td className="w-10 p-4 text-center">
                                <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                              </td>
                              <td className="px-3 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                    <Users className="h-4 w-4 text-slate-500" />
                                  </div>
                                  <div className="flex flex-col">
                                    <span className="text-sm  text-slate-900">{item.position}</span>
                                    <span className="text-[11px] text-slate-400">{item.qualification}</span>
                                  </div>
                                </div>
                              </td>
                              <td className="px-3 py-4 text-sm text-slate-600">{item.count}</td>
                              <td className="px-3 py-4">
                                {item.status === "Approved" && (
                                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-green-100  text-[10px] text-green-600">
                                    Approved
                                    <Check className="h-2.5 w-2.5" />
                                  </div>
                                )}
                                {item.status === "Pending" && (
                                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-blue-100  text-[10px] text-blue-600">
                                    Pending
                                    <Clock className="h-2.5 w-2.5" />
                                  </div>
                                )}
                                {item.status === "Rejected" && (
                                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-red-100  text-[10px] text-red-600">
                                    Rejected
                                    <AlertTriangle className="h-2.5 w-2.5" />
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
                  </>
                )
              }
                </>
              )}

                {activeMajorStep === 1 && (
                  <div className="w-full py-8 px-0 flex flex-col items-start">
                    <div className="w-full flex gap-12 text-left">
                      {/* Left Column: Institution Location */}
                      <div className="flex-1 max-w-lg">
                        <div className="mb-6">
                          <h2 className="text-md font-medium text-slate-900">Institution Location</h2>
                          <p className="text-sm text-slate-500">Consider the location while scheduling the Due Diligence</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5 ">
                              <label className="text-[13px] text-slate-700">Province</label>
                              <input readOnly defaultValue="Western" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[13px] text-slate-700">District</label>
                              <input readOnly defaultValue="Nyabihu" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[13px] text-slate-700">Sector</label>
                              <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[13px] text-slate-700">Cell</label>
                              <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[13px] text-slate-700">Village</label>
                              <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[13px] text-slate-700">City</label>
                              <input readOnly defaultValue="Mukamira" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[13px] text-slate-700">Address Line</label>
                            <input readOnly defaultValue="Mukamira Road" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white cursor-default" />
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Date Selection and Evaluator Assignment */}
                      <div className="flex-1 flex flex-col gap-8 max-w-sm">
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-slate-700">Date Selection</label>
                          <DateRangePicker
                            value={dateRange}
                            onChange={setDateRange}
                            className="w-full"
                          />
                        </div>

                        {role === "super-admin" && (
                          <div className="space-y-3">
                            <h4 className="text-sm font-medium text-slate-700">Assign Evaluating Team</h4>
                            
                            <div 
                              className={cn(
                                "border rounded-sm p-4 flex w-full items-center justify-left gap-3 transition-colors cursor-pointer group",
                                assignedPrincipal ? "border-[var(--primary)] bg-white border-solid" : "border-slate-200 bg-slate-50/50 hover:border-[#0A77FF]/50"
                              )}
                              onClick={() => setAssignedPrincipal("Principal Evaluator")}
                            >
                              <div className={cn(
                                "h-10 w-10 rounded-full border flex items-center justify-center transition-colors shrink-0",
                                assignedPrincipal ? "bg-blue-50 border-[var(--primary)]" : "bg-white border-slate-200 group-hover:border-[#0A77FF]"
                              )}>
                                <UserPlus className={cn("h-4 w-4", assignedPrincipal ? "text-[var(--primary)]" : "text-[#0A77FF]")} />
                              </div>
                              <div className="text-left flex-1">
                                <h4 className="text-sm text-slate-900">{assignedPrincipal || "Principal Evaluator"}</h4>
                                <p className="text-[11px] text-slate-400 leading-tight">Lead evaluator & decision maker</p>
                              </div>
                              {!assignedPrincipal && <span className="text-[10px] uppercase font-bold text-slate-400">Required</span>}
                            </div>

                            <div 
                              className={cn(
                                "border border-dashed rounded-sm p-4 flex w-full items-center justify-left gap-3 transition-colors cursor-pointer group",
                                assignedSecondary1 ? "border-solid border-[var(--primary)] bg-white" : "border-slate-200 hover:bg-slate-50"
                              )}
                              onClick={() => setAssignedSecondary1("Secondary Evaluator 1")}
                            >
                              <div className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center transition-colors shrink-0",
                                assignedSecondary1 ? "bg-blue-50 border-[var(--primary)] border" : "bg-slate-100 group-hover:bg-slate-200"
                              )}>
                                <UserPlus className={cn("h-4 w-4", assignedSecondary1 ? "text-[var(--primary)]" : "text-slate-400")} />
                              </div>
                              <div className="text-left flex-1">
                                <h4 className="text-[13px] font-medium text-slate-900">{assignedSecondary1 || "Secondary Evaluator 1"}</h4>
                                <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
                              </div>
                            </div>

                            <div 
                              className={cn(
                                "border border-dashed rounded-sm p-4 flex w-full items-center justify-left gap-3 transition-colors cursor-pointer group",
                                assignedSecondary2 ? "border-solid border-[var(--primary)] bg-white" : "border-slate-200 hover:bg-slate-50"
                              )}
                              onClick={() => setAssignedSecondary2("Secondary Evaluator 2")}
                            >
                              <div className={cn(
                                "h-10 w-10 rounded-full flex items-center justify-center transition-colors shrink-0",
                                assignedSecondary2 ? "bg-blue-50 border-[var(--primary)] border" : "bg-slate-100 group-hover:bg-slate-200"
                              )}>
                                <UserPlus className={cn("h-4 w-4", assignedSecondary2 ? "text-[var(--primary)]" : "text-slate-400")} />
                              </div>
                              <div className="text-left flex-1">
                                <h4 className="text-[13px] font-medium text-slate-900">{assignedSecondary2 || "Secondary Evaluator 2"}</h4>
                                <p className="text-[11px] text-slate-400 leading-tight">Assistant & commenter</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {role !== "super-admin" && (
                          <div className="border border-dashed border-slate-200 rounded-sm p-4 flex w-full items-center justify-left gap-3 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                              <UserPlus className="h-5 w-5 text-slate-400" />
                            </div>
                            <div className="text-left">
                              <h4 className="text-sm text-slate-900  ">Assign Evaluator</h4>
                              <p className="text-[11px] text-slate-400">Click to select evaluator</p>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-4 mt-auto pt-4">
                          <button
                            onClick={() => {
                              setActiveMajorStep(0);
                              setShowInitialReview(false);
                            }}
                            className="flex-1 py-3 px-4 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => setActiveMajorStep(2)}
                            className="flex-[2] py-3 px-4 bg-[#0A77FF] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                          >
                            Schedule Due Diligence
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeMajorStep === 2 && (
                  <div className="w-full py-8 px-0 flex flex-col items-start">
                    <div className="w-full flex gap-12 text-left">
                      {/* Left Column: Date, Hour, Evaluator, Notes */}
                      <div className="w-[450px] shrink-0 flex flex-col gap-8">
                        <div className="space-y-3">
                          <label className="text-sm font-medium text-slate-700">Date Selection</label>
                          <DateRangePicker value={dateRange} onChange={setDateRange} className="w-full" />
                        </div>

                        <div className="space-y-3">
                          <label className="text-sm font-medium text-slate-700">Visit Hour</label>
                          <div className="relative">
                            <input defaultValue="Western" className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 bg-white" />
                          </div>
                        </div>

                        {role === "super-admin" && (
                          <div className="space-y-4">
                            <h4 className="text-sm font-medium text-slate-700">Due Diligence Consensus</h4>
                            
                            <div className="border border-slate-200 rounded-sm p-4 flex w-full flex-col gap-3 bg-white">
                              <div className="flex items-start gap-3 w-full">
                                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0 border border-slate-200">
                                  <User className="h-5 w-5 text-slate-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-[13px] font-bold text-slate-900">Principal Evaluator</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-50 px-2 py-0.5 rounded-sm border border-green-100">Accept</span>
                                  </div>
                                  <p className="text-[12px] text-slate-600 mt-1">Infrastructure meets all minimum requirements. Validated the networking lab.</p>
                                </div>
                              </div>
                            </div>

                            <div className="border border-slate-100 rounded-sm p-4 flex w-full flex-col gap-3 bg-slate-50/50">
                              <div className="flex items-start gap-3 w-full">
                                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200">
                                  <User className="h-4 w-4 text-slate-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-[12px] font-bold text-slate-700">Secondary Evaluator 1</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-50 px-2 py-0.5 rounded-sm border border-green-100">Accept</span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 mt-1">Confirmed all PC models match invoices.</p>
                                </div>
                              </div>
                            </div>

                            <div className="border border-slate-100 rounded-sm p-4 flex w-full flex-col gap-3 bg-slate-50/50">
                              <div className="flex items-start gap-3 w-full">
                                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-200">
                                  <User className="h-4 w-4 text-slate-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <h4 className="text-[12px] font-bold text-slate-700">Secondary Evaluator 2</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-100">Comment</span>
                                  </div>
                                  <p className="text-[11px] text-slate-500 mt-1">Building ventilation needs slight improvement.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {role !== "super-admin" && (
                          <div className="border border-dashed border-slate-200 rounded-sm p-4 h-fit flex w-full items-center justify-left gap-4 hover:bg-slate-50 transition-colors cursor-pointer group">
                            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                              <UserPlus className="h-5 w-5 text-slate-400" />
                            </div>
                            <div className="text-left">
                              <h4 className="text-sm  text-slate-900">Assign Evaluator</h4>
                              <p className="text-[11px] text-slate-400">Click to select evaluator</p>
                            </div>
                          </div>
                        )}

                        <div className="space-y-4">
                          <h4 className="text-sm font-medium text-slate-700">Addition Evaluation Note?</h4>
                          <div className="relative">
                            <textarea
                              placeholder="Text..."
                              value={evaluationNote}
                              onChange={(e) => setEvaluationNote(e.target.value)}
                              className="w-full border border-slate-200 rounded-sm p-4 min-h-[140px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none no-scrollbar"
                            />
                            <div className="absolute bottom-4 right-4 text-[11px] text-slate-400">{275 - evaluationNote.length} characters left</div>
                          </div>
                          <button className="flex items-center gap-2 px-8 py-3 bg-[#0A77FF] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-all cursor-pointer">
                            Add Note
                            <PlusSquare className="h-4 w-4 text-white/70" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Equipment Verification */}
                      <div className="flex-1 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500">24 equipment</span>
                        </div>
                        <div className="relative max-w-xl">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                          <input placeholder="Search" className="w-full pl-11 pr-4 py-3 rounded-sm border border-slate-200 text-sm focus:outline-none focus:border-[#0A77FF]" />
                        </div>

                        <div className="flex flex-col gap-3 overflow-y-auto no-scrollbar max-h-[600px] max-w-xl">
                          {dueDiligenceEquipment.map((item) => (
                            <div key={item.id} className="border border-slate-100 rounded-sm p-4 bg-white flex items-center gap-4 group hover:border-slate-200 transition-colors">
                              <div className="h-20 w-32 rounded-sm overflow-hidden bg-slate-100 shrink-0 relative">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className="text-sm  text-slate-900">{item.name}</h4>
                                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-sm text-[10px] text-slate-500 transition-colors">
                                    Found at Site
                                    <div className={cn("h-4 w-4 rounded-sm border border-slate-200 flex items-center justify-center transition-all", item.found ? "bg-green-500 border-green-500" : "bg-white")}>
                                      {item.found && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                                    </div>
                                  </div>
                                </div>
                                <p className="text-[11px] text-slate-400">Quantity: {item.quantity}</p>
                                <div className="flex justify-end mt-2">
                                  <button className="h-7 w-7 rounded-sm border border-slate-100 flex items-center justify-center hover:bg-slate-50 text-blue-500 transition-colors cursor-pointer">
                                    <Eye className="h-3.5 w-3.5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center gap-4 mt-12 w-full max-w-sm">
                      <button
                        onClick={() => setActiveMajorStep(1)}
                        className="flex-1 py-3 px-4 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                         onClick={() => {
                           setActiveMajorStep(3);
                           setActiveInternalStep(0);
                           setActiveTab("General");
                           setIsEvaluating(false);
                         }}
                         className="flex-[2] py-3 px-4 bg-[#0A77FF] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        Complete Due Diligence
                      </button>
                    </div>
                  </div>
                )}

                {activeMajorStep === 4 && (
                  <div className="w-full py-8 px-0 flex flex-col items-start">
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
                            <span className="text-sm font-medium text-slate-700">Application Status</span>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-full">
                              <CheckCheck className="h-4 w-4 text-blue-600" />
                              <span className="text-sm font-medium text-blue-600">Approved</span>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 pt-2">
                            <div>
                              <span className="text-xs text-slate-500">Institution</span>
                              <p className="text-sm font-medium text-slate-900">{application.institution.name}</p>
                            </div>
                            <div>
                              <span className="text-xs text-slate-500">Trade</span>
                              <p className="text-sm font-medium text-slate-900">{application.trade.name}</p>
                            </div>
                            <div>
                              <span className="text-xs text-slate-500">Evaluation Date</span>
                              <p className="text-sm font-medium text-slate-900">{new Date().toLocaleDateString()}</p>
                            </div>
                            <div>
                              <span className="text-xs text-slate-500">Principal Evaluator</span>
                              <p className="text-sm font-medium text-slate-900">{assignedPrincipal || "Not Assigned"}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-lg p-6 space-y-4">
                          <h3 className="text-sm font-semibold text-slate-900">Certificate Access Control</h3>
                          <p className="text-sm text-slate-600">Grant the applicant access to download their accreditation certificate.</p>
                          
                          <div className="flex items-center gap-4 pt-4">
                            <button 
                              onClick={() => alert("Certificate access granted successfully!")}
                              className="flex-1 py-3 bg-blue-600 text-white rounded-sm text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
                            >
                              <CheckCircle2 className="h-4 w-4" />
                              Grant Certificate Access
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => window.history.back()}
                            className="flex-1 py-3 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            Back to Applications
                          </button>
                        </div>
                      </div>
                    ) : (
                      // Super-Admin/Evaluator View - Decision Making
                    <div className="w-full flex gap-12 text-left">
                       {/* Left Column */}
                       <div className="w-[450px] shrink-0 flex flex-col gap-6">
                         <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-500">24 equipment</span>
                         </div>
                         <div className="relative max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            <input placeholder="Search" className="w-full pl-11 pr-4 py-3 rounded-sm border border-slate-200 text-sm focus:outline-none focus:border-[#0A77FF]" />
                         </div>

                         {/* Decision Radio Badges */}
                         <div className="flex gap-4">
                           <label className="flex-1 flex items-center justify-between p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-[#0A77FF] group transition-colors">
                             <div className="flex items-center gap-2">
                               <CheckCheck className="h-4 w-4 text-[#0A77FF]" />
                               <span className="text-sm font-medium text-slate-700">Approved</span>
                             </div>
                             <input type="radio" name="decision" className="h-4 w-4 text-[#0A77FF] focus:ring-[#0A77FF] cursor-pointer" />
                           </label>
                           <label className="flex-1 flex items-center justify-between p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-[#0A77FF] group transition-colors">
                             <div className="flex items-center gap-2">
                               <X className="h-4 w-4 text-[#0A77FF]" />
                               <span className="text-sm font-medium text-slate-700">Rejected</span>
                             </div>
                             <input type="radio" name="decision" className="h-4 w-4 text-[#0A77FF] focus:ring-[#0A77FF] cursor-pointer" />
                           </label>
                           <label className="flex-1 flex items-center justify-between p-3 border border-slate-200 rounded-sm cursor-pointer hover:border-[#0A77FF] group transition-colors">
                             <div className="flex items-center gap-2">
                               <RefreshCw className="h-4 w-4 text-[#0A77FF]" />
                               <span className="text-sm font-medium text-slate-700">Reverted</span>
                             </div>
                             <input type="radio" name="decision" className="h-4 w-4 text-[#0A77FF] focus:ring-[#0A77FF] cursor-pointer" />
                           </label>
                         </div>

                         {/* Confirm / Cancel Buttons */}
                         <div className="flex items-center gap-4 w-full mt-2">
                           <button onClick={() => setActiveMajorStep(3)} className="flex-1 py-2.5 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">Cancel</button>
                           <button onClick={() => alert("Confirm decision")} className="flex-1 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer">Confirm</button>
                         </div>

                         {/* Comment Box */}
                         <div className="space-y-4 mt-2">
                           <h4 className="text-sm font-medium text-slate-700">Any addition comment?</h4>
                           <div className="relative">
                             <textarea placeholder="Text..." className="w-full border border-slate-200 rounded-sm p-4 min-h-[100px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none no-scrollbar" />
                             <div className="absolute bottom-[-24px] left-0 text-[11px] text-slate-400">275 characters left</div>
                           </div>
                           <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-all cursor-pointer mt-8">
                             Add Note
                             <PlusSquare className="h-4 w-4 text-white/70" strokeWidth={1.5} />
                           </button>
                         </div>

                       </div>

                       {/* Right Column */}
                       <div className="flex-1 flex flex-col gap-6">
                         <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-3">
                             <label className="text-[13px] font-medium text-slate-700">Date Selection</label>
                             <div className="relative">
                                <DateRangePicker value={dateRange} onChange={setDateRange} className="w-full" />
                             </div>
                           </div>
                           <div className="space-y-3">
                             <label className="text-[13px] font-medium text-slate-700">Visit Hour</label>
                             <div className="relative">
                               <input defaultValue="Western" className="w-full px-4 py-[10px] rounded-sm border border-slate-200 text-[13px] text-slate-700 bg-white focus:outline-none focus:border-[#0A77FF]" />
                             </div>
                           </div>
                         </div>

                         <div className="grid grid-cols-2 gap-4 mt-2">
                            <div className="flex items-center gap-3">
                               <div className="h-10 w-10 shrink-0 bg-transparent rounded-full flex items-center justify-center overflow-hidden border border-slate-100">
                                 <img src="https://ui-avatars.com/api/?name=Command+R&background=FF8A65&color=fff&rounded=true" alt="logo" className="h-full w-full object-cover" />
                               </div>
                               <div className="flex flex-col">
                                 <span className="text-[13px] font-medium text-slate-900 leading-tight">Command+R</span>
                                 <span className="text-[11px] text-slate-500">cmdr.ai</span>
                               </div>
                            </div>

                            <div className="flex items-center gap-3">
                               <div className="h-10 w-10 shrink-0 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200">
                                 <User className="h-4 w-4 text-slate-400 stroke-2" />
                               </div>
                               <div className="flex flex-col">
                                 <span className="text-[11px] text-slate-500 leading-tight">Submitted by</span>
                                 <span className="text-[13px] font-medium text-slate-900 leading-tight">John Smith</span>
                               </div>
                            </div>
                         </div>
                       </div>
                    </div>
                    )}
                  </div>
                )}
              </>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
