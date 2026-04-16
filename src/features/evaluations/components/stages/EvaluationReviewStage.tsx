"use client";

import React from "react";
import { Users, FileText, CheckCircle2, Clock, AlertTriangle, Check, ArrowRight, Building2, ChevronDown, Package, Mail, Phone, MapPin, Map, Globe, Flag, Navigation, Ungroup, Database, ChevronRight, Search, Eye, Files, EllipsisVertical } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface EvaluationReviewStageProps {
  activeInternalStep: number;
  setActiveInternalStep: (step: number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isEvaluating: boolean;
  setIsEvaluating: (evaluating: boolean) => void;
  staffAllocationList: any[];
  documentList: any[];
  equipmentList: any[];
  completedSteps: number[];
  setCompletedSteps: React.Dispatch<React.SetStateAction<number[]>>;
  activeMajorStep: number;
  setActiveMajorStep: (step: number) => void;
  handleNext: () => void;
}

export const EvaluationReviewStage: React.FC<EvaluationReviewStageProps> = ({
  activeInternalStep,
  setActiveInternalStep,
  activeTab,
  setActiveTab,
  isEvaluating,
  setIsEvaluating,
  staffAllocationList,
  documentList,
  equipmentList,
  completedSteps,
  setCompletedSteps,
  activeMajorStep,
  handleNext,
}) => {
  const tabs = ["General", "Address", "Personnel", "About"];

  return (
    <div className="flex-1 bg-white overflow-y-auto no-scrollbar min-h-0 flex flex-col items-center w-full">
      {activeInternalStep === 0 && (
        <>
          <div className="max-w-md mx-auto flex items-center mt-8 gap-4 mb-12 w-full">
            <button 
              onClick={() => setActiveInternalStep(0)} // Or whatever 'Back' should do
              className="flex-1 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={isEvaluating ? handleNext : () => setIsEvaluating(true)}
              className="flex-1 py-3 bg-[var(--primary)] text-white rounded-sm text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              {isEvaluating ? "Next" : "Start Evaluation"}
            </button>
          </div>

          <div className="flex justify-between mb-4 gap-10 w-full max-w-md">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "py-3 text-sm cursor-pointer transition-all relative",
                  activeTab === tab ? "text-[#0A77FF]" : "text-slate-400 hover:text-slate-600"
                )}
              >
                {tab}
                
              </button>
            ))}
          </div>

          <div className="max-w-md mx-auto space-y-8 w-full pb-20">
            {activeTab === "General" && (
              <div className="grid grid-cols-1 gap-8">
                <div className="space-y-2">
                  <label className="text-[13px] text-slate-700">Name of Institution</label>
                  <div className="relative mt-2">
                    <input
                      readOnly
                      className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                      type="text"
                      value="ETrainer Academy"
                    />
                    <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 text-left">
                    <label className="text-[13px] text-slate-700">Institution Type</label>
                    <div className="relative mt-2">
                      <select
                        disabled
                        defaultValue="Private Vocational Center"
                        className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-500 appearance-none bg-white cursor-default"
                      >
                        <option value="Private Vocational Center">
                          Private Vocational Center
                        </option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-slate-700">P.O Box</label>
                    <div className="relative mt-2">
                      <input
                        readOnly
                        className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                        value="P.O. Box 1234, Kigali"
                      />
                      <Package className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] text-slate-700">Email Address</label>
                  <div className="relative mt-2">
                    <input
                      readOnly
                      className="w-full px-4 py-3 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                      value="janesmith@example.com"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] text-slate-700">Phone Number</label>
                  <div className="flex mt-2">
                    <div className="relative">
                      <select
                        disabled
                        defaultValue="+250"
                        className="pl-4 pr-10 py-3 rounded-l-sm border border-r-0 border-slate-200 text-sm text-slate-500 bg-slate-50 cursor-default appearance-none"
                      >
                        <option value="+250">+250</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300 pointer-events-none" />
                    </div>
                    <div className="relative flex-1">
                      <input
                        readOnly
                        className="w-full px-4 py-3 rounded-r-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                        value="791-234-567"
                      />
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
                      <input
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                        value="Western"
                      />
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-slate-700">District</label>
                    <div className="relative mt-2">
                      <input
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                        value="Nyabihu"
                      />
                      <Map className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[13px] text-slate-700">Sector</label>
                    <div className="relative mt-2">
                      <input
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                        value="Mukamira"
                      />
                      <Globe className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] text-slate-700">Cell</label>
                    <div className="relative mt-2">
                      <input
                        readOnly
                        className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                        value="Mukamira"
                      />
                      <Flag className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] text-slate-700">Village/City</label>
                  <div className="relative mt-2">
                    <input
                      readOnly
                      className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                      value="Mukamira Urban"
                    />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] text-slate-700">Address Line</label>
                  <div className="relative mt-2">
                    <input
                      readOnly
                      className="w-full px-4 py-3 pr-12 rounded-sm border border-slate-200 text-sm text-slate-700 focus:outline-none bg-white cursor-default"
                      value="Mukamira Road, Avenue 4, Plot 12"
                    />
                    <Navigation className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-300" />
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Personnel" && (
              <div className="grid grid-cols-1 gap-8 w-full">
                <div className="border border-slate-100 rounded-sm overflow-hidden bg-white">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-slate-100">
                        <th className="w-10 pl-6 pr-2 py-4">
                          <div className="h-5 w-5 rounded-sm border border-slate-200 bg-white" />
                        </th>
                        <th className="py-4 text-[13px] font-normal text-slate-500">Name</th>
                        <th className="py-4 text-[13px] font-normal text-slate-500">Position</th>
                        <th className="py-4 text-[13px] font-normal text-slate-500 pr-6">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {[
                        { name: "Natali Craig", gender: "Female", position: "Deputy Director", email: "natali.craig...", phone: "+250 78..." },
                        { name: "Drew Cano", gender: "Male", position: "Deputy Director", email: "drew.cano...", phone: "+250 71..." },
                        { name: "Natali Craig", gender: "Female", position: "Deputy Director", email: "natali.craig...", phone: "+250 78..." },
                        { name: "Drew Cano", gender: "Male", position: "Deputy Director", email: "drew.cano...", phone: "+250 71..." },
                        { name: "Natali Craig", gender: "Female", position: "Deputy Director", email: "natali.craig...", phone: "+250 78..." }
                      ].map((person, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/30 transition-colors">
                          <td className="w-10 pl-6 pr-2 py-5">
                            <div className="h-5 w-5 rounded-sm border border-slate-200 bg-white" />
                          </td>
                          <td className="py-5">
                            <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center">
                                <Users className="h-5 w-5 text-slate-400 stroke-[1.2]" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-medium text-slate-900 leading-tight">{person.name}</span>
                                <span className="text-[12px] text-slate-400">{person.gender}</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-5">
                            <span className="text-[13px] text-slate-500">{person.position}</span>
                          </td>
                          <td className="py-5 pr-6">
                            <div className="flex flex-col text-[13px] text-slate-500">
                              <span>{person.email}</span>
                              <span>{person.phone}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "About" && (
              <div className="grid grid-cols-1 gap-8 w-full">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700 flex items-center gap-2">Institution Mission</label>
                    <div className="relative">
                      <textarea
                        readOnly
                        className="w-full px-4 py-4 rounded-sm border border-slate-200 text-sm text-slate-600 focus:outline-none bg-white cursor-default leading-relaxed min-h-[100px] resize-none no-scrollbar"
                        value="To provide high-quality technical education and vocational training that meets domestic and international standards, empowering students with the skills needed for the global workforce."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700 flex items-center gap-2">Institution Vision</label>
                    <div className="relative">
                      <textarea
                        readOnly
                        className="w-full px-4 py-4 rounded-sm border border-slate-200 text-sm text-slate-600 focus:outline-none bg-white cursor-default leading-relaxed min-h-[100px] resize-none no-scrollbar"
                        value="To be a center of excellence in technical innovation and vocational training, recognized for producing highly skilled professionals who drive economic growth and sustainability."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[13px] font-medium text-slate-700 flex items-center gap-2">Key Objectives</label>
                    <div className="relative">
                      <textarea
                        readOnly
                        className="w-full px-4 py-4 rounded-sm border border-slate-200 text-sm text-slate-600 focus:outline-none bg-white cursor-default leading-relaxed min-h-[120px] resize-none no-scrollbar"
                        value="1. Maintain 95% student placement rate within 6 months of graduation. 2. Establish 5+ international industry partnerships annually. 3. Continuously upgrade laboratory and workshop facilities to match current industry technologies."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {activeInternalStep !== 0 && (
        <div className=" max-w-4xl py-12 px-10">
          {activeInternalStep === 1 && (
            <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
              <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                <Ungroup className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-xl text-slate-900 mb-2">Trade & Module Selected</h2>
              <p className="text-sm text-slate-500 mb-8">Select the trade you are applying for accreditation in.</p>
              
              <div className="flex items-center w-full justify-start gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#0A77FF] bg-white text-[13px] text-[#0A77FF]">
                  <Ungroup className="h-4 w-4" />
                  Masonry
                  <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                    <ChevronDown className="h-3 w-3 text-white rotate-180" />
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300" />
                <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#0A77FF] bg-white text-[13px] text-[#0A77FF]">
                  <Database className="h-4 w-4" />
                  Data Structures & Algorithms
                  <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-white">✓</div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full mb-12">
                <button 
                  onClick={() => setActiveInternalStep(0)} 
                  className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm hover:opacity-90 transition-opacity"
                >
                  Next
                </button>
              </div>

              <div className="w-full space-y-4">
                <h3 className="text-sm text-slate-800">Add Comment (Optional)</h3>
                <div className="space-y-1">
                  <label className="text-[12px] text-slate-500">Comment Input</label>
                  <div className="relative">
                    <textarea 
                      placeholder="Text..." 
                      className="w-full border border-slate-200 rounded-sm p-4 min-h-[140px] text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all resize-none no-scrollbar"
                    />
                    <div className="absolute bottom-4 right-4 text-[11px] text-slate-400">275 characters left</div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-[#0A77FF] text-white rounded-sm text-sm hover:opacity-90 transition-all cursor-pointer">
                  Add Comment
                  <span className="flex items-center justify-center w-4 h-4 border border-white/50 rounded-sm text-[10px] cursor-pointer">+</span>
                </button>
              </div>
            </div>
          )}

          {activeInternalStep === 2 && (
            <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
              <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                <Package className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-xl text-slate-900 mb-2">Equipment & Facilities</h2>
              <p className="text-sm text-slate-500 mb-8 text-center px-4">Specify the competencies offered under the selected trade.</p>

              <div className="flex items-center justify-start w-full gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-3 rounded-sm border border-[#0A77FF] bg-white text-[13px] text-[#0A77FF]">
                  <Ungroup className="h-4 w-4" />
                  Masonry
                  <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center ml-1">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full mb-10">
                <button 
                  onClick={() => setActiveInternalStep(1)} 
                  className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </div>

              <div className="w-full space-y-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">{equipmentList.length} equipment</span>
                  </div>
                  <div className="relative">
                    <input 
                      placeholder="Search" 
                      className="w-full pl-10 pr-4 py-3 rounded-sm border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#0A77FF] transition-all" 
                      type="text" 
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  </div>
                </div>

                <div className="space-y-4">
                  {equipmentList.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-slate-100 rounded-sm hover:border-slate-200 transition-all bg-white group">
                      <div className="h-16 w-24 bg-slate-100 rounded-sm overflow-hidden shrink-0 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                          <Database className="h-6 w-6" />
                          <span className="text-[8px] font-bold">Image</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-slate-900">{item.name}</h4>
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
            <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
              <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                <Files className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-xl text-slate-900 mb-2">Curriculum Documents</h2>
              <p className="text-sm text-slate-500 mb-8 text-center px-4">Upload curriculum and training materials.</p>

              <div className="flex items-center gap-4 w-full mb-10">
                <button 
                  onClick={() => setActiveInternalStep(2)} 
                  className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </div>

              <div className="w-full border border-slate-100 rounded-sm overflow-hidden bg-white">
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm text-slate-900">Curriculum Documents</h3>
                    <p className="text-[11px] text-slate-400">Files and assets that have been attached to this project.</p>
                  </div>
                  <button className="h-8 w-8 rounded-sm hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors cursor-pointer">
                    <EllipsisVertical className="h-4 w-4" />
                  </button>
                </div>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="w-10 p-4 text-center">
                        <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                      </th>
                      <th className="px-3 py-3 text-left text-[12px] font-normal text-slate-400">File name</th>
                      <th className="px-3 py-3 text-left text-[12px] font-normal text-slate-400 w-[120px]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {documentList.map((file: any, idx: number) => (
                      <tr key={idx} className="hover:bg-slate-50/30 transition-colors group">
                        <td className="w-10 p-4 text-center">
                          <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                        </td>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-3">
                            <div className="relative h-12 w-10 shrink-0">
                              <svg viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <path d="M0 4C0 1.79086 1.79086 0 4 0H22L32 10V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#E1412E" />
                                <path d="M22 0L32 10H26C23.7909 10 22 8.20914 22 6V0Z" fill="white" fillOpacity="0.3" />
                                <text x="16" y="30" fill="white" fontSize="7" fontWeight="900" textAnchor="middle" className="select-none" style={{ fontFamily: "Inter, sans-serif" }}>PDF</text>
                              </svg>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm text-slate-900 line-clamp-1">{file.name}</span>
                              <span className="text-[11px] text-slate-400">{file.size}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-3">
                          <div className="flex items-center gap-3">
                            <button className="text-[12px] text-slate-600 hover:text-slate-900 transition-colors">Download</button>
                            <button className="text-[12px] text-[#0A77FF] hover:opacity-80 transition-opacity">Open</button>
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
            <div className="max-w-4xl mx-auto flex flex-col items-center w-full">
              <div className="h-12 w-12 rounded-sm border border-slate-100 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-slate-400" />
              </div>
              <h2 className="text-xl text-slate-900 mb-2">Staff Allocation</h2>
              <p className="text-sm text-slate-500 mb-8 text-center px-4">Review the staff allocated for this accreditation program.</p>

              <div className="flex items-center gap-4 w-full mb-10">
                <button 
                  onClick={() => setActiveInternalStep(3)} 
                  className="flex-1 py-3 border border-slate-200 rounded-sm cursor-pointer text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  Back
                </button>
                <button 
                  onClick={handleNext} 
                  className="flex-1 py-3 bg-[#0A77FF] text-white rounded-sm cursor-pointer text-sm hover:opacity-90 transition-opacity"
                >
                  Finish Evaluation
                </button>
              </div>

              <div className="w-full border border-slate-100 rounded-sm overflow-hidden bg-white">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                      <th className="w-10 p-4 text-center">
                        <div className="h-4 w-4 border border-slate-200 rounded-[3px] mx-auto" />
                      </th>
                      <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400">Position & Qualification</th>
                      <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400">Count</th>
                      <th className="px-3 py-4 text-left text-[11px] font-normal text-slate-400">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {staffAllocationList.map((item: any) => (
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
                              <span className="text-sm text-slate-900">{item.position}</span>
                              <span className="text-[11px] text-slate-400">{item.qualification}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-4 text-sm text-slate-600">{item.count}</td>
                        <td className="px-3 py-4">
                          {item.status === "Approved" && (
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-green-100 text-[10px] text-green-600">
                              Approved
                              <Check className="h-2.5 w-2.5" />
                            </div>
                          )}
                          {item.status === "Pending" && (
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-blue-100 text-[10px] text-blue-600">
                              Pending
                              <Clock className="h-2.5 w-2.5" />
                            </div>
                          )}
                          {item.status === "Rejected" && (
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm border border-red-100 text-[10px] text-red-600">
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
        </div>
      )}
    </div>
  );
};
