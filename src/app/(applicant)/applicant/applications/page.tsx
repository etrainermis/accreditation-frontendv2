"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Blocks,
  Hexagon,
  Briefcase,
  FileText,
  Users,
  Plus,
  Check,
  ChevronRight,
  Minus,
  UploadCloud,
  X,
  Pencil,
  Trash2,
  FolderPlus,
  UserPlus,
  ChevronDown,
  CheckCheck,
  CheckCircle2,
  ChevronUp
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";

const stepsList = [
  {
    id: 1,
    title: "Trade Selection",
    subtitle: "Select the trade(s) you are applying for",
    icon: Blocks,
  },
  {
    id: 2,
    title: "Competencies",
    subtitle: "Specify the competencies offered under the selected trade",
    icon: Hexagon,
  },
  {
    id: 3,
    title: "Equipment and Facilities",
    subtitle: "List available equipment and upload proof",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Curriculum Documents",
    subtitle: "Upload curriculum and training materials",
    icon: FileText,
  },
  {
    id: 5,
    title: "Staff Allocation",
    subtitle: "Indicate staff availability for the selected trade",
    icon: Users,
  },
];

const trades = [
  { id: "1", name: "Masonry" },
  { id: "2", name: "Plumbing" },
  { id: "3", name: "Electrical" },
  { id: "4", name: "Software Engineering & Embedded Systems" },
  { id: "5", name: "Carpentry" },
  { id: "6", name: "Welding" },
  { id: "7", name: "HVAC" },
];

const competenciesList = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "Fundamentals Of Programming Using C" },
  { id: "3", name: "Masonry" },
  { id: "4", name: "Data Structures & Algorithms" },
  { id: "5", name: "Software Engineering & Embedded Systems" },
  { id: "6", name: "Carpentry Basics" },
  { id: "7", name: "Advanced Wiring" },
];

export default function ApplicantApplicationsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTrade, setSelectedTrade] = useState<string | null>(null);
  const [selectedCompetency, setSelectedCompetency] = useState<string | null>(null);

  const [tradeSearch, setTradeSearch] = useState("");
  const [competencySearch, setCompetencySearch] = useState("");

  // Step 3 state
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState(1);
  const [equipmentProof, setEquipmentProof] = useState<string | null>(null);
  const [equipmentProofName, setEquipmentProofName] = useState<string | null>(null);
  const [equipments, setEquipments] = useState<Array<{ id: string; name: string; quantity: number; proof: string | null }>>([]);

  // Step 4 state
  const [curriculumDocs, setCurriculumDocs] = useState<Array<{ id: string; name: string; size: string; extension: string; progress: number }>>([]);

  // Step 5 state
  const [staffQualification, setStaffQualification] = useState("");
  const [staffPosition, setStaffPosition] = useState("");
  const [staffNumber, setStaffNumber] = useState(1);
  const [staffStatus, setStaffStatus] = useState("");
  const [allocations, setAllocations] = useState<Array<{ id: string; qualification: string; position: string; quantity: number; status: string }>>([]);

  // Step 6 state
  const [expandedReviewSection, setExpandedReviewSection] = useState<number | null>(null);

  // Handlers Step 1 -> 2
  const handleTradeContinue = () => {
    if (selectedTrade) setCurrentStep(2);
  };
  const handleCompetencyBack = () => {
    setCurrentStep(1);
  };

  // Handlers Step 2 -> 3
  const handleCompetencyContinue = () => {
    if (selectedCompetency) setCurrentStep(3);
  };
  const handleEquipmentBack = () => {
    setCurrentStep(2);
  };

  // Handlers Step 3 -> 4
  const handleEquipmentContinue = () => {
    setCurrentStep(4);
  };
  const handleCurriculumBack = () => {
    setCurrentStep(3);
  };

  // Handlers Step 4 -> 5
  const handleCurriculumContinue = () => {
    setCurrentStep(5);
  };

  const handleProofUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setEquipmentProofName(file.name);
      setEquipmentProof(URL.createObjectURL(file));
      e.target.value = '';
    }
  };

  const handleAddEquipment = () => {
    if (equipmentName.trim() && equipmentNumber > 0) {
      setEquipments([...equipments, { id: Math.random().toString(), name: equipmentName, quantity: equipmentNumber, proof: equipmentProof }]);
      setEquipmentName("");
      setEquipmentNumber(1);
      setEquipmentProof(null);
      setEquipmentProofName(null);
    }
  };

  const removeEquipment = (id: string) => {
    setEquipments(equipments.filter(eq => eq.id !== id));
  };

  const handleAddStaff = () => {
    if (staffQualification && staffPosition && staffStatus) {
      setAllocations([...allocations, {
        id: Math.random().toString(),
        qualification: staffQualification,
        position: staffPosition,
        quantity: staffNumber,
        status: staffStatus
      }]);
      setStaffQualification("");
      setStaffPosition("");
      setStaffStatus("");
      setStaffNumber(1);
    }
  };

  const removeAllocation = (id: string) => {
    setAllocations(allocations.filter(a => a.id !== id));
  };

  const handleCurriculumUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map(file => {
        const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';
        const sizeRounded = file.size > 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`;
        return {
          id: Math.random().toString(),
          name: file.name,
          size: sizeRounded,
          extension: ext,
          progress: 0
        };
      });

      setCurriculumDocs(prev => [...prev, ...newFiles]);

      // Simulate upload progress
      newFiles.forEach(file => {
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += Math.floor(Math.random() * 20) + 10;
          if (currentProgress >= 100) {
            currentProgress = 100;
            clearInterval(interval);
          }
          setCurriculumDocs(prev => prev.map(d => d.id === file.id ? { ...d, progress: currentProgress } : d));
        }, 400);
      });
      e.target.value = '';
    }
  };

  const removeCurriculumDoc = (id: string) => {
    setCurriculumDocs(prev => prev.filter(d => d.id !== id));
  };

  const selectedTradeName = trades.find(t => t.id === selectedTrade)?.name || "Unknown";
  const selectedCompetencyName = competenciesList.find(c => c.id === selectedCompetency)?.name || "Unknown";

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="flex items-start justify-between pb-4">
        <div>
          <h1 className="text-[17px] font-semibold text-slate-900">
            Apply For Short Course
          </h1>
          <p className="mt-0.5 text-[13px] text-slate-500">
            Create and manage your accreditation applications for the selected trades.
          </p>
        </div>
        <PrimaryButton label="New Application" iconPosition="right" />
      </div>

      <div className="mb-4 h-[1px] w-full shrink-0 bg-slate-100" />

      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden rounded-2xl border border-slate-100 bg-white">
        {/* Wizard Sidebar */}
        <div className="w-[300px] shrink-0 bg-[#FAFAFA] p-8">
          <h2 className="mb-10 text-[15px] font-semibold text-slate-700">
            Short Course Application
          </h2>
          <button className="mb-12 flex items-center gap-2 text-[13px] font-medium text-[#0A77FF]">
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Quit
          </button>

          {/* Stepper */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute bottom-[20px] left-[23px] top-[20px] border-l border-slate-200 w-[#E4E7EC]" />

            <div className="flex flex-col gap-10">
              {stepsList.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep === step.id;

                return (
                  <div key={step.id} className="relative z-10 flex gap-4">
                    <div className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-white text-slate-400 transition-colors ${isActive ? "shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200" : "ring-1 ring-slate-100"}`}>
                      <Icon className="h-[22px] w-[22px]" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col justify-center pt-0.5">
                      <p className={`text-[13px] transition-colors ${isActive ? "font-semibold text-slate-900" : "font-medium text-slate-400"}`}>
                        {step.title}
                      </p>
                      <p className={`mt-0.5 text-[11px] leading-[1.6] text-slate-400 transition-opacity ${isActive ? "" : "opacity-60"}`}>
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Wizard Content */}
        <div className="flex flex-1 flex-col overflow-y-auto bg-white px-[100px] py-14">
          <div className="mx-auto flex w-full max-w-[600px] flex-col">

            {/* STEP 1: TRADE SELECTION */}
            {currentStep === 1 && (
              <>
                {/* Step Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                    <Blocks className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[17px] font-semibold text-slate-900">Trade Selection</h2>
                  <p className="mt-1.5 text-[13px] text-slate-500">
                    Select the trade you are applying for accreditation in.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="mb-3 text-[12px] text-slate-500">
                    24 trades available for you to choose
                  </p>

                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={tradeSearch}
                      onChange={(e) => setTradeSearch(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                    />
                  </div>

                  {/* Radio Grid */}
                  <div className="mb-10 grid grid-cols-2 gap-3">
                    {trades.map((trade) => {
                      const isSelected = selectedTrade === trade.id;
                      return (
                        <div
                          key={trade.id}
                          onClick={() => setSelectedTrade(trade.id)}
                          className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-colors ${isSelected ? "border-[#0A77FF] bg-blue-50/30" : "border-slate-200 hover:border-[#0A77FF]"}`}
                        >
                          <div className="flex items-center gap-3">
                            <Blocks className="h-[15px] w-[15px] text-[#0A77FF]" strokeWidth={2} />
                            <span className="line-clamp-1 text-[12px] font-medium text-slate-600">{trade.name}</span>
                          </div>
                          <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${isSelected ? "border-[#0A77FF] bg-[#0A77FF]" : "border-slate-300 bg-white"}`}>
                            {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex w-full gap-3">
                    <button className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                      Back
                    </button>
                    <button
                      onClick={handleTradeContinue}
                      disabled={!selectedTrade}
                      className={`flex flex-1 items-center justify-center rounded-xl py-3 text-[13px] font-semibold text-white transition-colors ${selectedTrade ? "bg-[#0A77FF] hover:bg-[#0864d6]" : "bg-blue-300 cursor-not-allowed"}`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* STEP 2: COMPETENCIES */}
            {currentStep === 2 && (
              <>
                {/* Step Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                    <Hexagon className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[17px] font-semibold text-slate-900">Competencies</h2>
                  <p className="mt-1.5 text-[13px] text-slate-500">
                    Specify the competencies offered under the selected trade.
                  </p>
                </div>

                <div className="col-span-full mt-8 flex flex-col items-center">
                  {/* Selected Trade Badge */}
                  <div className="mb-8 flex w-fit min-w-[140px] items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                    <div className="flex items-center gap-2">
                      <Blocks className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                      <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedTradeName}</span>
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <p className="mb-3 text-[12px] text-slate-500">
                    24 competencies under this trade
                  </p>

                  {/* Search */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      value={competencySearch}
                      onChange={(e) => setCompetencySearch(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                    />
                  </div>

                  {/* Radio Grid for Competencies */}
                  <div className="mb-10 grid grid-cols-2 gap-3">
                    {competenciesList.map((comp) => {
                      const isSelected = selectedCompetency === comp.id;
                      return (
                        <div
                          key={comp.id}
                          onClick={() => setSelectedCompetency(comp.id)}
                          className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 transition-colors ${isSelected ? "border-[#0A77FF] bg-blue-50/30" : "border-slate-200 hover:border-[#0A77FF]"}`}
                        >
                          <div className="flex items-center gap-3">
                            <Hexagon className="h-[15px] w-[15px] text-[#0A77FF]" strokeWidth={2} />
                            <span className="line-clamp-1 text-[12px] font-medium text-slate-600">{comp.name}</span>
                          </div>
                          <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${isSelected ? "border-[#0A77FF] bg-[#0A77FF]" : "border-slate-300 bg-white"}`}>
                            {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex w-full gap-3">
                    <button onClick={handleCompetencyBack} className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                      Back
                    </button>
                    <button
                      onClick={handleCompetencyContinue}
                      disabled={!selectedCompetency}
                      className={`flex flex-1 items-center justify-center rounded-xl py-3 text-[13px] font-semibold text-white transition-colors ${selectedCompetency ? "bg-[#0A77FF] hover:bg-[#0864d6]" : "bg-blue-300 cursor-not-allowed"}`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* STEP 3: EQUIPMENT AND FACILITIES */}
            {currentStep === 3 && (
              <>
                {/* Step Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                    <Briefcase className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[17px] font-semibold text-slate-900">Equipment and Facilities</h2>
                  <p className="mt-1.5 text-[13px] text-slate-500">
                    List the available equipment and upload supporting proof.
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  {/* Badges Row */}
                  <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                      <div className="flex items-center gap-2">
                        <Blocks className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                        <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedTradeName}</span>
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                    <div className="flex items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                      <div className="flex items-center gap-2">
                        <Hexagon className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                        <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedCompetencyName}</span>
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-left">
                  {/* Equipment Form Box */}
                  <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                    {/* Top Row: Name */}
                    <div className="mb-5">
                      <label className="mb-2 block text-[13px] font-medium text-slate-700">
                        Equipment Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Select ..."
                        value={equipmentName}
                        onChange={(e) => setEquipmentName(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                      />
                    </div>

                    {/* Bottom Row: Number & Proof */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-slate-700">
                          Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-3.5 w-3.5 text-slate-400" />
                            <span className="w-8 text-[13px] font-medium outline-none">{equipmentNumber}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button onClick={() => setEquipmentNumber(prev => prev + 1)} className="rounded p-1 hover:bg-slate-100">
                              <Plus className="h-4 w-4 text-slate-600" />
                            </button>
                            <button onClick={() => setEquipmentNumber(prev => Math.max(1, prev - 1))} className="rounded p-1 hover:bg-slate-100">
                              <Minus className="h-4 w-4 text-slate-600" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-slate-700">
                          Proof <span className="text-red-500">*</span>
                        </label>
                        <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white px-0 items-center">
                          <div className="flex-1 truncate border-r border-slate-200 px-3 py-2 text-[13px] text-slate-400">
                            {equipmentProofName ? equipmentProofName : "Select ..."}
                          </div>
                          <label className="flex cursor-pointer items-center gap-2 bg-slate-50 px-4 py-2.5 text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-100">
                            <UploadCloud className="h-4 w-4 text-slate-500" />
                            Upload
                            <input type="file" accept="image/*" className="hidden" onChange={handleProofUpload} />
                          </label>
                        </div>
                        <p className="mt-1.5 text-[10px] uppercase font-medium text-slate-400">*.png, jpeg, jpg</p>
                      </div>
                    </div>
                  </div>

                  <PrimaryButton
                    label="Add Equipment"
                    icon={FolderPlus}
                    iconPosition="right"
                    onClick={handleAddEquipment}
                    className="mb-8 w-fit"
                  />

                  <div className="mb-8 flex w-full gap-3">
                    <button onClick={handleEquipmentBack} className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                      Back
                    </button>
                    <button
                      onClick={handleEquipmentContinue}
                      className="flex flex-1 items-center justify-center rounded-xl bg-[#0A77FF] py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#0864d6]"
                    >
                      Continue
                    </button>
                  </div>

                  {/* Uploaded Equipments */}
                  {equipments.length > 0 && (
                    <div className="flex flex-col gap-3">
                      {equipments.map(eq => (
                        <div key={eq.id} className="relative flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3">
                          <div className="h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100">
                            {eq.proof ? (
                              <img src={eq.proof} alt="proof" className="h-full w-full object-cover" />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">No Image</div>
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="text-[13px] font-medium text-slate-800">{eq.name}</p>
                            <p className="mt-0.5 text-[11px] text-slate-500">Quantity: {eq.quantity} Pieces</p>
                          </div>

                          <button onClick={() => removeEquipment(eq.id)} className="absolute right-3 top-3 text-slate-400 hover:text-slate-600">
                            <X className="h-4 w-4" />
                          </button>

                          <div className="absolute bottom-3 right-3 flex gap-2">
                            <button className="text-[#0A77FF] hover:text-blue-600">
                              <Pencil className="h-4 w-4" />
                            </button>
                            <button onClick={() => removeEquipment(eq.id)} className="text-red-400 hover:text-red-600">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </>
            )}

            {/* STEP 4: CURRICULUM DOCUMENTS */}
            {currentStep === 4 && (
              <>
                {/* Step Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                    <FileText className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[17px] font-semibold text-slate-900">Curriculum Documents</h2>
                  <p className="mt-1.5 text-[13px] text-slate-500">
                    Upload curriculum and related training documents.
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  {/* Badges Row */}
                  <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                      <div className="flex items-center gap-2">
                        <Blocks className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                        <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedTradeName}</span>
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                    <div className="flex items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                      <div className="flex items-center gap-2">
                        <Hexagon className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                        <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedCompetencyName}</span>
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 mb-8 w-full text-left">
                  <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-10 transition-colors hover:bg-slate-50">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                      <UploadCloud className="h-5 w-5 text-slate-500" strokeWidth={1.5} />
                    </div>
                    <p className="text-[13px] text-slate-500">
                      <span className="font-medium text-[#0A77FF]">Click to upload</span> or drag and drop
                    </p>
                    <p className="mt-1 text-[11px] text-slate-400">PDF, DOCX, MP4 or FIG (max. 100MB)</p>
                    <input type="file" multiple className="hidden" onChange={handleCurriculumUpload} />
                  </label>
                </div>

                {/* Uploaded Files */}
                {curriculumDocs.length > 0 && (
                  <div className="mb-8 flex w-full flex-col gap-3">
                    {curriculumDocs.map(doc => {
                      const isDone = doc.progress === 100;
                      let iconBg = "bg-slate-500";
                      if (doc.extension === "PDF") iconBg = "bg-red-500";
                      else if (doc.extension === "MP4") iconBg = "bg-blue-500";
                      else if (doc.extension === "FIG") iconBg = "bg-purple-500";
                      else if (doc.extension === "DOCX" || doc.extension === "DOC") iconBg = "bg-blue-400";

                      return (
                        <div key={doc.id} className="relative flex flex-col justify-center rounded-xl border border-slate-200 bg-white p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-4">
                              {/* Extension Icon */}
                              <div className="relative mt-0.5 flex h-10 w-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 shadow-sm">
                                <div className={`absolute bottom-1 left-1.5 right-1.5 flex items-center justify-center rounded-[3px] ${iconBg} px-1 py-0.5`}>
                                  <span className="tracking-widest text-[8px] font-bold text-white">{doc.extension}</span>
                                </div>
                              </div>
                              <div className="flex flex-col pt-0.5">
                                <p className="text-[13px] font-medium text-slate-800">{doc.name}</p>
                                <p className="text-[11px] text-slate-500">{doc.size}</p>
                              </div>
                            </div>
                            {/* Right Action */}
                            <div className="pt-0.5">
                              {isDone ? (
                                <div className="flex h-[22px] w-[22px] items-center justify-center rounded-md bg-[#0A77FF]">
                                  <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                                </div>
                              ) : (
                                <button onClick={() => removeCurriculumDoc(doc.id)} className="transition-colors text-slate-400 hover:text-red-500">
                                  <Trash2 className="h-5 w-5" />
                                </button>
                              )}
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="mt-4 flex items-center gap-3">
                            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className="h-full bg-[#0A77FF] ease-in-out transition-all duration-300"
                                style={{ width: `${doc.progress}%` }}
                              />
                            </div>
                            <span className="w-8 text-right text-[12px] font-medium text-slate-500">{doc.progress}%</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="flex w-full gap-3 mb-8">
                  <button onClick={handleCurriculumBack} className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-50">
                    Back
                  </button>
                  <button
                    onClick={handleCurriculumContinue}
                    disabled={curriculumDocs.length === 0 || curriculumDocs.some(d => d.progress < 100)}
                    className={`flex flex-1 items-center justify-center rounded-xl py-3 text-[13px] font-semibold text-white transition-colors ${(curriculumDocs.length > 0 && curriculumDocs.every(d => d.progress === 100)) ? "bg-[#0A77FF] hover:bg-[#0864d6]" : "bg-blue-300 cursor-not-allowed"}`}
                  >
                    Continue
                  </button>
                </div>
              </>
            )}

            {/* STEP 5: STAFF ALLOCATION */}
            {currentStep === 5 && (
              <>
                {/* Step Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                    <Users className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[17px] font-semibold text-slate-900">Staff Allocation</h2>
                  <p className="mt-1.5 text-[13px] text-slate-500">
                    Indicate staff availability by qualification and position.
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-center">
                  {/* Badges Row */}
                  <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                    <div className="flex items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                      <div className="flex items-center gap-2">
                        <Blocks className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                        <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedTradeName}</span>
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                    <div className="flex items-center justify-between gap-6 rounded-xl border border-[#0A77FF] bg-white px-3.5 py-2">
                      <div className="flex items-center gap-2">
                        <Hexagon className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                        <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedCompetencyName}</span>
                      </div>
                      <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                        <Check className="h-3 w-3 text-white" strokeWidth={3} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2 text-left">
                  {/* Staff Form Box */}
                  <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="grid grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-slate-700">
                          Qualification <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 bg-white focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                            value={staffQualification}
                            onChange={(e) => setStaffQualification(e.target.value)}
                          >
                            <option value="" disabled>Select ..</option>
                            <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                            <option value="Master's Degree">Master&apos;s Degree</option>
                            <option value="PhD">PhD</option>
                            <option value="Diploma">Diploma</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 mt-[1px] top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-slate-700">
                          Position <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 bg-white focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                            value={staffPosition}
                            onChange={(e) => setStaffPosition(e.target.value)}
                          >
                            <option value="" disabled>Select ..</option>
                            <option value="Instructor">Instructor</option>
                            <option value="Teaching Assistant">Teaching Assistant</option>
                            <option value="Lab Technician">Lab Technician</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 mt-[1px] top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-slate-700">
                          Number <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                          <div className="flex items-center gap-2">
                            <span className="w-8 text-[13px] font-medium outline-none ml-1">{staffNumber}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button onClick={() => setStaffNumber(s => s + 1)} className="rounded p-1 hover:bg-slate-100">
                              <Plus className="h-4 w-4 text-slate-600" />
                            </button>
                            <button onClick={() => setStaffNumber(s => Math.max(1, s - 1))} className="rounded p-1 hover:bg-slate-100">
                              <Minus className="h-4 w-4 text-slate-600" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="mb-2 block text-[13px] font-medium text-slate-700">
                          Availability Status <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 bg-white focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                            value={staffStatus}
                            onChange={(e) => setStaffStatus(e.target.value)}
                          >
                            <option value="" disabled>Select ..</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Contract">Contract</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 mt-[1px] top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" strokeWidth={1.5} />
                        </div>
                      </div>

                    </div>
                  </div>

                  <PrimaryButton
                    label="Add Staff"
                    icon={UserPlus}
                    iconPosition="right"
                    onClick={handleAddStaff}
                    className="mb-8 w-fit"
                  />

                  {/* Render Staff Allocations */}
                  {allocations.length > 0 && (
                    <div className="mb-8 w-full flex flex-col gap-3">
                      {allocations.map(alloc => (
                        <div key={alloc.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="text-[13px] font-semibold text-slate-800">{alloc.position}</p>
                              <p className="text-[12px] text-slate-500">{alloc.qualification} • {alloc.status}</p>
                            </div>
                            <button onClick={() => removeAllocation(alloc.id)} className="text-red-400 hover:text-red-600 transition-colors">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="mt-2 text-[11px] font-medium text-slate-400 uppercase tracking-wide">Count: {alloc.quantity}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-8 flex w-full gap-3">
                    <button onClick={() => setCurrentStep(4)} className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-white bg-white w-full shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                      Back
                    </button>
                    <button
                      onClick={() => setCurrentStep(6)}
                      className="flex flex-1 items-center justify-center rounded-xl bg-[#0A77FF] py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#0864d6] w-full"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* STEP 6: APPLICATION REVIEW */}
            {currentStep === 6 && (
              <>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                    <CheckCheck className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-[17px] font-semibold text-slate-900">Application Review</h2>
                  <p className="mt-1.5 text-[13px] text-slate-500">
                    Review all information provided before submitting your application for evaluation.
                  </p>
                </div>

                <div className="mt-6 flex w-full gap-3 mb-8">
                  <button onClick={() => setCurrentStep(5)} className="flex flex-1 items-center justify-center rounded-xl border border-slate-200 py-3 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 bg-white">
                    Back
                  </button>
                  <button className="flex flex-1 items-center justify-center rounded-xl bg-[#0A77FF] py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#0864d6]">
                    Submit Application
                  </button>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { id: 1, title: "Trade Selection Completed", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
                    { id: 2, title: "Competencies Selected", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
                    { id: 3, title: "Equipment and Facilities Added with Proofs", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
                    { id: 4, title: "Curriculum Documents", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
                    { id: 5, title: "Staff Allocation", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum dolor." },
                  ].map((section) => {
                    const isExpanded = expandedReviewSection === section.id;
                    return (
                      <div key={section.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-200 shadow-sm">
                        <button
                          onClick={() => setExpandedReviewSection(isExpanded ? null : section.id)}
                          className="flex w-full items-center justify-between p-4"
                        >
                          <div className="flex gap-4">
                            <div className="flex items-center justify-center rounded-full bg-emerald-50 h-9 w-9 ring-1 ring-emerald-100">
                              <CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col items-start px-2">
                              <p className="text-[14px] font-semibold text-slate-700">{section.title}</p>
                              <p className="text-[12px] text-slate-400 mt-0.5 line-clamp-1 text-left">{section.desc}</p>
                            </div>
                          </div>
                          <div className="pl-4">
                            {isExpanded ? (
                              <ChevronUp className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
                            )}
                          </div>
                        </button>

                        {isExpanded && (
                          <div className="border-t border-slate-100 bg-slate-50/50 p-5 p-6">
                            {section.id === 1 && (
                              <div>
                                <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Selected Trade</p>
                                <p className="text-[14px] text-slate-800 font-medium">{selectedTradeName}</p>
                              </div>
                            )}
                            {section.id === 2 && (
                              <div>
                                <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Selected Competency</p>
                                <p className="text-[14px] text-slate-800 font-medium">{selectedCompetencyName}</p>
                              </div>
                            )}
                            {section.id === 3 && (
                              <div>
                                <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Allocated Equipment</p>
                                {equipments.length === 0 ? (
                                  <p className="text-[13px] text-slate-400 italic">No equipment added.</p>
                                ) : (
                                  <ul className="space-y-4">
                                    {equipments.map(eq => (
                                      <li key={eq.id} className="flex items-center gap-3">
                                        <div className="h-10 w-14 shrink-0 overflow-hidden rounded bg-slate-200">
                                          {eq.proof ? (
                                            <img src={eq.proof} alt="" className="h-full w-full object-cover" />
                                          ) : null}
                                        </div>
                                        <div>
                                          <p className="text-[13px] font-medium text-slate-700">{eq.name}</p>
                                          <p className="text-[12px] text-slate-500">Qty: {eq.quantity}</p>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                            {section.id === 4 && (
                              <div>
                                <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Curriculum Documents</p>
                                {curriculumDocs.length === 0 ? (
                                  <p className="text-[13px] text-slate-400 italic">No curriculum documents uploaded.</p>
                                ) : (
                                  <ul className="space-y-2">
                                    {curriculumDocs.map(doc => (
                                      <li key={doc.id} className="flex justify-between items-center text-[13px] bg-white border border-slate-100 p-2.5 rounded-lg">
                                        <span className="font-medium text-slate-700">{doc.name}</span>
                                        <span className="text-slate-400 text-[11px]">{doc.size}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            )}
                            {section.id === 5 && (
                              <div>
                                <p className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Staff Allocations</p>
                                {allocations.length === 0 ? (
                                  <p className="text-[13px] text-slate-400 italic">No staff members allocated.</p>
                                ) : (
                                  <div className="grid grid-cols-2 gap-3">
                                    {allocations.map(alloc => (
                                      <div key={alloc.id} className="bg-white border border-slate-100 p-3 rounded-lg">
                                        <p className="text-[13px] font-semibold text-slate-800">{alloc.position}</p>
                                        <p className="text-[12px] text-slate-500 mt-0.5">{alloc.qualification}</p>
                                        <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-2 bg-slate-50 w-fit px-1.5 py-0.5 rounded">{alloc.status} • {alloc.quantity}</p>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
