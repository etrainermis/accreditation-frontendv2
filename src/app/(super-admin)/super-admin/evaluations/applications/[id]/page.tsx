"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import { ChevronRight, ArrowLeft, Home, Bell, User, LayoutGrid, ClipboardCheck, Users, FileText, Settings, HelpCircle, LogOut, ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { useRouter } from "next/navigation";

import { mockApplications } from "@/lib/utils/application-utils";

// --- Components ---

const HorizontalStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { label: "Initial Review", sub: "Documents Review" },
    { label: "Schedule Due Diligence", sub: "Website and location" },
    { label: "Perform Due Diligence", sub: "Start collaborating" },
    { label: "Final Review", sub: "Start collaborating" },
    { label: "Decision Making", sub: "Automatic sharing" },
  ];

  return (
    <div className="flex items-start justify-between w-full my-3 relative">
      {/* Connector Line - Only spans from first to last step */}
      <div className="absolute top-[11px] left-[11px] right-[calc(100%/5-11px)] h-[1px] bg-slate-200 -z-0" />
      
      {steps.map((step, idx) => {
        const isActive = idx === currentStep;
        const isCompleted = idx < currentStep;
        
        return (
          <div key={idx} className="flex flex-col items-start text-center relative z-10 flex-1 px-1">
            <div className={cn(
              "h-[22px] w-[22px] rounded-full border-2 flex items-center justify-center mb-3 transition-all",
              isActive ? "border-[var(--primary)] bg-[var(--primary)] shadow-[0_0_0_4px_rgba(9,119,255,0.1)]" : 
              isCompleted ? "border-[var(--primary)] bg-[var(--primary)]" : "border-slate-200 bg-white"
            )}>
              {isActive && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
              {isCompleted && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
            </div>
            <span className={cn(
              "text-[11px] font-semibold block mb-0.5 whitespace-nowrap",
              idx <= currentStep ? "text-slate-900" : "text-slate-400"
            )}>
              {step.label}
            </span>
            <span className="text-[10px] text-slate-500 whitespace-nowrap">{step.sub}</span>
          </div>
        );
      })}
    </div>
  );
};

const ApplicationSidebar = ({ activeStep, onStepChange }: { activeStep: number, onStepChange: (idx: number) => void }) => {
  const sidebarSteps = [
    { label: "Institution Details", sub: "Select the trade(s) you are applying for", icon: LayoutGrid },
    { label: "Trade & Competency", sub: "Select the trade(s) you are applying for", icon: ClipboardCheck },
    { label: "Equipment and Facilities", sub: "List available equipment and upload proof", icon: HelpCircle },
    { label: "Curriculum Documents", sub: "Upload curriculum and training materials", icon: FileText },
    { label: "Staff Allocation", sub: "Indicate staff availability for the selected trade", icon: Users },
  ];

  return (
    <div className="w-[260px] border-r border-slate-100 flex flex-col h-full bg-white space-y-8 shrink-0">
      <div className="flex flex-col gap-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-[17.5px] top-4 bottom-4 w-[1.5px] bg-slate-100" />
        
        {sidebarSteps.map((step, idx) => (
          <div 
            key={idx} 
            className={cn(
              "flex gap-4 cursor-pointer group relative", 
              idx === activeStep ? "opacity-100" : "opacity-50 hover:opacity-100"
            )}
            onClick={() => onStepChange(idx)}
          >
            <div className={cn(
              "h-9 w-9 rounded-md border flex items-center justify-center shrink-0 bg-white relative z-10 transition-all",
              idx === activeStep ? "border-slate-200 shadow-sm" : "border-slate-100 bg-[#f9fafb]"
            )}>
              <step.icon className={cn("h-4 w-4", idx === activeStep ? "text-[var(--primary)]" : "text-slate-400")} />
            </div>
            <div className="flex flex-col pt-0.5 justify-center">
              <span className={cn(
                "text-[12px] font-semibold transition-colors leading-none mb-1",
                idx === activeStep ? "text-slate-900" : "text-slate-500"
              )}>
                {step.label}
              </span>
              <span className="text-[10px] text-slate-400 leading-tight pr-2">
                {step.sub}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pt-4 border-t border-slate-50">
          <button 
             onClick={() => window.history.back()}
             className="flex items-center gap-2 text-[12px] text-[var(--primary)] font-semibold hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            Exit
          </button>
      </div>
    </div>
  );
};

// --- Page Component ---

export default function ApplicationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [activeInternalStep, setActiveInternalStep] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState("General");
  
  const application = mockApplications.find(app => app.id === id) || mockApplications[0];

  return (
    <PageContainer
      role="super-admin"
      hideSidebar={false}
      title={`${application.institution.name} ${application.trade.name} Accreditation Application`}
      description="Create and manage your accreditation applications for the selected trades."
      breadcrumbs={[
        { label: "Evaluations", href: "/super-admin/evaluations" },
        { label: "Applications", href: "/super-admin/evaluations/applications" },
        { label: `${application.institution.name} ${application.trade.name}`, href: "#" },
      ]}
    >
      <div className="flex flex-col bg-white overflow-hidden min-h-[calc(100vh-200px)]">
        <div className="flex h-full flex-1">
          {/* Main Content Area */}
          <div className="flex flex-1 flex-col">
            <div >
              <HorizontalStepper currentStep={0} />
            </div>

            <div className="flex flex-1">
               {/* Left Internal Nav */}
               <ApplicationSidebar activeStep={activeInternalStep} onStepChange={setActiveInternalStep} />

               {/* Form Content */}
               <div className="flex-1 p-8 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                      <button className="px-6 py-2 border border-slate-200 rounded-sm text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                        Back
                      </button>
                      <button className="px-8 py-2 bg-[var(--primary)] text-white rounded-sm text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
                        Start Evaluation
                      </button>
                  </div>

                  {/* Tabs */}
                  <div className="flex border-b border-slate-100 mb-8 overflow-x-auto no-scrollbar">
                    {["General", "Address", "Personnel", "About"].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                          "px-6 py-4 text-sm font-medium transition-all relative",
                          activeTab === tab ? "text-[var(--primary)]" : "text-slate-400 hover:text-slate-600"
                        )}
                      >
                        {tab}
                        {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--primary)]" />
                        )}
                      </button>
                    ))}
                  </div>

                   {/* Form Fields */}
                  <div className="max-w-3xl space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                       <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-700">Name of Institution</label>
                          <input 
                            type="text" 
                            defaultValue={application.institution.name} 
                            className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                          />
                       </div>

                       <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-1.5 text-left">
                            <label className="text-sm font-medium text-slate-700">Institution Type</label>
                            <div className="relative">
                              <select className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] appearance-none">
                                <option>SPE</option>
                                <option>Other</option>
                              </select>
                              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-sm font-medium text-slate-700">P.O Box</label>
                            <input 
                              type="text" 
                              defaultValue="P.O. Box 123, Kigali" 
                              className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                            />
                          </div>
                       </div>

                       <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-700">Email</label>
                          <input 
                            type="email" 
                            defaultValue={application.applicant.email} 
                            className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                          />
                       </div>

                       <div className="space-y-1.5">
                          <label className="text-sm font-medium text-slate-700">Phone Number</label>
                          <div className="flex">
                            <div className="relative">
                               <select className="pl-4 pr-10 py-3 rounded-l-sm border border-r-0 border-slate-200 text-sm text-slate-500 focus:outline-none focus:ring-1 focus:ring-[var(--primary)] appearance-none bg-slate-50">
                                  <option>+250</option>
                               </select>
                               <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                            </div>
                            <input 
                              type="text" 
                              defaultValue="791-234-567" 
                              className="flex-1 px-4 py-3 rounded-r-sm border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-1 focus:ring-[var(--primary)]"
                            />
                          </div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
