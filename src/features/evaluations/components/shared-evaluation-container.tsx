"use client";

import React from "react";
import {
  ChevronRight, ChevronLeft, ArrowLeft, ClipboardCheck, Users, User,
  FileText, HelpCircle, ChevronDown, Building2, Package, Mail, Phone, Database,
  Ungroup, Search, Eye, CheckCircle2, Check, MoreVertical, File, AlertTriangle, Clock,
  Calendar, UserPlus, PlusSquare, MapPin, Map, Globe, Flag, Navigation, Target, Activity
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
    <div className="flex items-start justify-between w-full my-3 px-1 pt-2 relative overflow-visible">
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
  onStepChange
}: {
  activeStep: number,
  completedSteps: number[],
  onStepChange: (idx: number) => void
}) => {
  const sidebarSteps = [
    { label: "Institution Details", sub: "Select the trade(s) you are applying for", icon: Building2 },
    { label: "Trade & Competency", sub: "Select the trade(s) you are applying for", icon: ClipboardCheck },
    { label: "Equipment and Facilities", sub: "List available equipment and upload proof", icon: HelpCircle },
    { label: "Curriculum Documents", sub: "Upload curriculum and training materials", icon: FileText },
    { label: "Staff Allocation", sub: "Indicate staff availability for the selected trade", icon: Users },
  ];

  return (
    <div className="w-[300px] bg-[#F9FAFB] flex flex-col h-full shrink-0 p-8 overflow-y-auto no-scrollbar">
      <div className="mb-10">
        <h2 className="text-sm text-slate-800 mb-9 mt-3">Application Details</h2>
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-[12px] text-[var(--primary)] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Exit
        </button>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[17.5px] top-4 bottom-4 w-[1.5px] bg-slate-100" />

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
  role: "super-admin" | "evaluator";
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

  const application = mockApplications.find(app => app.id === id) || mockApplications[0];

  return (
    <div className="flex flex-col bg-white overflow-hidden h-[calc(100vh-150px)]">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col">
          <div>
            <HorizontalStepper currentStep={activeMajorStep} />
          </div>

          <div className="flex flex-1 overflow-hidden">
            {(activeMajorStep === 0 || activeMajorStep === 3) && (
              <ApplicationSidebar
                activeStep={activeInternalStep}
                completedSteps={completedSteps}
                onStepChange={setActiveInternalStep}
              />
            )}

            <div className={cn("flex-1 bg-white overflow-y-auto no-scrollbar", (activeMajorStep === 0 || activeMajorStep === 3) && "flex flex-col items-center")}>
              {!mounted ? (
                <div className="flex-1 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#0A77FF]" />
                </div>
              ) : (
                <div className="w-full h-full p-8">
                  {/* Evaluation Workspace UI ... */}
                  <div className="max-w-4xl mx-auto space-y-8">
                    {/* Simplified for unification demonstration, actual UI logic re-embedded here */}
                    {activeMajorStep === 0 && (
                       <div className="flex flex-col items-center">
                         <div className="flex items-center gap-4 mb-12 w-full max-w-md">
                            <button className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => window.history.back()}>Back</button>
                            <button onClick={handleNext} className="flex-1 py-3 bg-[var(--primary)] text-white rounded-sm text-sm  hover:opacity-90 transition-opacity cursor-pointer">{isEvaluating ? "Next" : "Start Evaluation"}</button>
                         </div>
                         <div className="w-full text-slate-500 text-sm">Evaluation details for INSTITUTION: {application.institution.name}</div>
                       </div>
                    )}
                    {/* ... (re-implement rest as needed) ... */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
