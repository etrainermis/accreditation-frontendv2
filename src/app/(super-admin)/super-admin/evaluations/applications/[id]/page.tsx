"use client";

import React from "react";
import { PageContainer } from "@/components/layout/page-container";
import {
  ChevronRight, ArrowLeft, ClipboardCheck, Users,
  FileText, HelpCircle, ChevronDown, Building2, Package, Mail, Phone, Database,
  Ungroup, Search, Eye, CheckCircle2, Check, MoreVertical, File
} from "lucide-react";
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
              {(isActive || isCompleted) ? (
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
            <span className="text-[10px] text-slate-500 whitespace-nowrap">{step.sub}</span>
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
          className="flex items-center gap-2 text-[12px] text-[var(--primary)] hover:opacity-80 transition-opacity"
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
                isActive || isCompleted ? "opacity-100" : "opacity-50 hover:opacity-100"
              )}
              onClick={() => onStepChange(idx)}
            >
              <div className={cn(
                "h-9 w-9 rounded-sm border flex items-center justify-center shrink-0 relative z-10 transition-all",
                isActive ? "border-[var(--primary)]" :
                  isCompleted ? "border-green-500 text-green-500" : "border-slate-100 bg-[#f9fafb]"
              )}>
                {isCompleted ? (
                  <step.icon strokeWidth={1} className="h-5 w-5 text-green-500" />
                ) : (
                  <step.icon strokeWidth={1} className={cn("h-5 w-5", isActive ? "text-[#353E49]" : "text-slate-400")} />
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

// --- Page Component ---

export default function ApplicationDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [activeInternalStep, setActiveInternalStep] = React.useState(0);
  const [completedSteps, setCompletedSteps] = React.useState<number[]>([]);
  const [activeTab, setActiveTab] = React.useState("General");
  const [isEvaluating, setIsEvaluating] = React.useState(false);

  const tabs = ["General", "Address", "Personnel", "About"];

  const handleNext = () => {
    if (activeInternalStep === 0) {
      if (!isEvaluating) {
        setIsEvaluating(true);
        setActiveTab(tabs[0]);
      } else {
        const currentIndex = tabs.indexOf(activeTab);
        if (currentIndex < tabs.length - 1) {
          setActiveTab(tabs[currentIndex + 1]);
        } else {
          // Last tab finished, move to step 1
          setCompletedSteps(prev => [...new Set([...prev, 0])]);
          setActiveInternalStep(1);
        }
      }
    } else if (activeInternalStep === 1) {
      // Transition to Equipment and Facilities (Step 2)
      setCompletedSteps(prev => [...new Set([...prev, 1])]);
      setActiveInternalStep(2);
    } else if (activeInternalStep === 2) {
      // Transition to Curriculum Documents (Step 3)
      setCompletedSteps(prev => [...new Set([...prev, 2])]);
      setActiveInternalStep(3);
    } else if (activeInternalStep === 3) {
      // Transition to Staff Allocation (Step 4)
      setCompletedSteps(prev => [...new Set([...prev, 3])]);
      setActiveInternalStep(4);
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

  const application = mockApplications.find(app => app.id === id) || mockApplications[0];

  return (
    <PageContainer
      role="super-admin"
      hideSidebar={false}
      title={`${application.institution.name} ${application.trade.name} Accreditation Application`}
      description="Create and manage your accreditation applications for the selected trades."
      breadcrumbs={[
        { label: "Evaluations", href: "/super-admin/evaluations/applications" },
        { label: "Applications", href: "/super-admin/evaluations/applications" },
        { label: `${application.institution.name} ${application.trade.name}`, href: "#" },
      ]}
    >
      <div className="flex flex-col bg-white overflow-hidden h-[calc(100vh-150px)]">
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content Area */}
          <div className="flex flex-1 flex-col">
            <div >
              <HorizontalStepper currentStep={0} />
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Left Internal Nav */}
              <ApplicationSidebar
                activeStep={activeInternalStep}
                completedSteps={completedSteps}
                onStepChange={setActiveInternalStep}
              />

              {/* Form Content */}
              <div className="flex-1 p-8 bg-white justify-center overflow-y-auto no-scrollbar">
                {activeInternalStep === 0 && (
                  <>
                    {/* Top Action Buttons */}
                    <div className="max-w-md mx-auto flex items-center gap-4 mb-12">
                      <button className="flex-1 py-2 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => {
                        if (isEvaluating) {
                          const currentIndex = tabs.indexOf(activeTab);
                          if (currentIndex > 0) {
                            setActiveTab(tabs[currentIndex - 1]);
                          } else {
                            setIsEvaluating(false);
                          }
                        } else {
                          window.history.back();
                        }
                      }}>
                        Back
                      </button>
                      <button
                        onClick={handleNext}
                        className="flex-1 py-2 bg-[var(--primary)] text-white rounded-sm text-sm  hover:opacity-90 transition-opacity cursor-pointer"
                      >
                        {isEvaluating ? "Next" : "Start Evaluation"}
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-between max-w-md mb-5 overflow-x-auto mx-auto no-scrollbar">
                      {["General", "Address", "Personnel", "About"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={cn(
                            " py-2 text-start text-sm cursor-pointer  transition-all relative",
                            activeTab === tab ? "text-[var(--primary)]" : "text-slate-400 hover:text-slate-600"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Form Container */}
                    <div className="max-w-md mx-auto space-y-8">
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
                                className="w-full px-4 py-2 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                              />
                              <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-left">
                              <label className="text-[13px]  text-slate-700">Institution Type</label>
                              <div className="relative mt-2">
                                <select disabled defaultValue="SPE" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-500 appearance-none bg-white cursor-default">
                                  <option value="SPE">SPE</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <label className="text-[13px]  text-slate-700">P.O Box</label>
                              <div className="relative mt-2">
                                <input readOnly defaultValue="P.O. Box 1234, Kigali" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" />
                                <Package className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[13px]  text-slate-700">Email Address</label>
                            <div className="relative mt-2">
                              <input readOnly defaultValue={application.applicant.email} className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" />
                              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-[13px]  text-slate-700">Phone Number</label>
                            <div className="flex mt-2">
                              <div className="relative">
                                <select disabled defaultValue="+250" className="pl-4 pr-10 py-2 rounded-l-sm border border-r-0 border-slate-200 text-sm text-slate-500 bg-slate-50 cursor-default appearance-none">
                                  <option>+250</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                              </div>
                              <div className="relative flex-1">
                                <input readOnly defaultValue="791-234-567" className="w-full px-4 py-2 rounded-r-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default" />
                                <Phone className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "Address" && (
                        <div className="grid grid-cols-1 gap-8">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2"><label className="text-[13px]  text-slate-700">Province</label><input readOnly defaultValue="Western" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                            <div className="space-y-2"><label className="text-[13px]  text-slate-700">District</label><input readOnly defaultValue="Nyabihu" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2"><label className="text-[13px]  text-slate-700">Sector</label><input readOnly defaultValue="Mukamira" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                            <div className="space-y-2"><label className="text-[13px]  text-slate-700">Cell</label><input readOnly defaultValue="Mukamira" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2"><label className="text-[13px]  text-slate-700">Village</label><input readOnly defaultValue="Mukamira" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                            <div className="space-y-2"><label className="text-[13px]  text-slate-700">City</label><input readOnly defaultValue="Mukamira" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                          </div>
                          <div className="space-y-2"><label className="text-[13px]  text-slate-700">Address Line</label><input readOnly defaultValue="Mukamira Road" className="w-full px-4 py-2 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2" /></div>
                        </div>
                      )}

                      {activeTab === "Personnel" && (
                        <div className="border border-slate-100 rounded-sm overflow-hidden bg-white">
                          <table className="w-full text-left">
                            <thead><tr className="border-b border-slate-100"><th className="w-10 pl-4 pr-2 py-4"><div className="h-4 w-4 rounded border border-slate-200" /></th><th className=" py-4 text-[11px] text-slate-400 ">Name</th><th className=" py-4 text-[11px] text-slate-400 ">Position</th><th className=" py-4 text-[11px] text-slate-400 ">Contact</th></tr></thead>
                            <tbody className="divide-y divide-slate-50">{[{ name: "Natali Craig", role: "Deputy Director", email: "natali...", phone: "+250..." }].map((person, idx) => (<tr key={idx} className="hover:bg-slate-50/50 transition-colors"><td className="w-10 pl-4 pr-2 py-4"><div className="h-4 w-4 rounded border border-slate-200" /></td><td className=" py-4"><div className="flex items-center gap-3"><div className="h-9 w-9 rounded-full bg-slate-100 flex items-center justify-center"><Users className="h-4 w-4 text-slate-400" /></div><div><div className="text-sm text-slate-900">{person.name}</div></div></div></td><td className=" py-4 text-sm text-slate-600">{person.role}</td><td className=" py-4 text-[11px] text-slate-500">{person.email}<br />{person.phone}</td></tr>))}</tbody>
                          </table>
                        </div>
                      )}

                      {activeTab === "About" && (
                        <div className="grid grid-cols-1 gap-8">
                          {["Mission", "Vision", "Objects"].map((label) => (
                            <div key={label} className="space-y-2">
                              <label className="text-[13px]  text-slate-700">{label}</label>
                              <textarea readOnly defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development." className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default mt-2 min-h-[120px] resize-none" />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {activeInternalStep === 1 && (
                  <div className="max-w-xl mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <Ungroup className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl  text-slate-900 mb-2">Trade & Module Selected</h2>
                    <p className="text-sm text-slate-500 mb-8">Select the trade you are applying for accreditation in.</p>
                    <div className="flex items-center w-full justify-start gap-4 mb-8">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-sm border border-[#0A77FF] bg-white text-[13px]  text-[#0A77FF]">
                        <Ungroup className="h-4 w-4" />Masonry
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center"><ChevronDown className="h-3 w-3 text-white rotate-180" /></div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-slate-300" />
                      <div className="flex items-center gap-2 px-4 py-2 rounded-sm border border-[#0A77FF] bg-white text-[13px]  text-[#0A77FF]">
                        <Database className="h-4 w-4" />Data Structures & Algorithms
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 w-full mb-12">
                      <button onClick={() => setActiveInternalStep(0)} className="flex-1 py-2 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-2 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">Next</button>
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
                      <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0A77FF] text-white rounded-sm text-sm  hover:opacity-90 transition-all ">Add Comment<span className="flex items-center justify-center w-4 h-4 border border-white/50 rounded-sm text-[10px]">+</span></button>
                    </div>
                  </div>
                )}

                {activeInternalStep === 2 && (
                  <div className="max-w-xl mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <Package className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl text-slate-900 mb-2">Equipment & Facilities</h2>
                    <p className="text-sm text-slate-500 mb-8 text-center px-4">Specify the competencies offered under the selected trade.</p>

                    <div className="flex items-center justify-start w-full gap-4 mb-8">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-sm border border-[#0A77FF] bg-white text-[13px]  text-[#0A77FF]">
                        <Ungroup className="h-4 w-4" />Masonry
                        <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center ml-1">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full mb-10">
                      <button onClick={() => setActiveInternalStep(1)} className="flex-1 py-2 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-2 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">Continue</button>
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
                            className="w-full pl-10 pr-4 py-2 rounded-sm border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all"
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
                                <span className="text-[8px] uppercase font-bold">Image</span>
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
                  <div className="max-w-xl mx-auto flex flex-col items-center">
                    <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                      <FileText className="h-6 w-6 text-slate-400" strokeWidth={1.5} />
                    </div>
                    <h2 className="text-xl text-slate-900 mb-2">Curriculum Documents</h2>
                    <p className="text-sm text-slate-500 mb-8 text-center px-4">Upload curriculum and training materials.</p>

                    <div className="flex items-center gap-4 w-full mb-10">
                      <button onClick={() => setActiveInternalStep(2)} className="flex-1 py-2 border border-slate-200 rounded-sm cursor-pointer text-sm  text-slate-600 hover:bg-slate-50 transition-colors">Back</button>
                      <button onClick={handleNext} className="flex-1 py-2 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm  hover:opacity-90 transition-opacity ">Continue</button>
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
                            <th className="px-3 py-2 text-left text-[12px]  text-slate-400 ">File name</th>
                            <th className="px-3 py-2 text-left text-[12px]  text-slate-400  w-[120px]">Action</th>
                            <th className="w-10 p-4 text-right">
                              <div className="h-4 w-4 border border-slate-200 rounded-[3px] ml-auto" />
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {documentList.map((doc) => (
                            <tr key={doc.id} className="hover:bg-slate-50/30 transition-colors group">
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
                              <td className="w-10 p-4 text-right">
                                <div className="h-4 w-4 border border-slate-200 rounded-[3px] ml-auto" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
