"use client";

import { useState, useEffect } from "react";
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
  Folder,
  UserPlus,
  ChevronDown,
  CheckCheck,
  CheckCircle2,
  ChevronUp,
  Loader2
} from "lucide-react";
import { PrimaryButton } from "@/components/ui/primary-button";
import { toast } from "sonner";
import { 
  getAllTrades, 
  getCompetenciesByTrade, 
  createTrainingEquipment, 
  addTechnicalStaff, 
  createApplication,
  type Trade,
  type Competence
} from "@/lib/api/application-api";

const stepsList = [
  {
    id: 1,
    title: "Training Program(s) Selection",
    subtitle: "Select the training program(s) you are applying for",
    icon: Blocks,
  },
  {
    id: 2,
    title: "Competencies",
    subtitle: "Specify the competencies offered under the selected training program(s)",
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
    subtitle: "Indicate staff availability for the selected training program(s)",
    icon: Users,
  },
];

interface ApplicationWizardProps {
  onQuit?: () => void;
  onSubmit?: () => void;
}

export function ApplicationWizard({ onQuit, onSubmit }: ApplicationWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTrade, setSelectedTrade] = useState<string | null>(null);
  const [selectedCompetency, setSelectedCompetency] = useState<string | null>(null);

  const [tradeSearch, setTradeSearch] = useState("");
  const [competencySearch, setCompetencySearch] = useState("");

  // Step 3 state
  const [equipmentName, setEquipmentName] = useState("");
  const [equipmentStatus, setEquipmentStatus] = useState("");
  const [equipmentNumber, setEquipmentNumber] = useState(1);
  const [equipmentProof, setEquipmentProof] = useState<string | null>(null);
  const [equipmentProofName, setEquipmentProofName] = useState<string | null>(null);
  const [equipmentFile, setEquipmentFile] = useState<File | null>(null);
  const [equipments, setEquipments] = useState<Array<{ id: string; name: string; quantity: number; status: string; proof: string | null; proofName: string | null }>>([]);

  // Step 4 state
  const [curriculumDocs, setCurriculumDocs] = useState<Array<{ id: string; name: string; size: string; extension: string; progress: number }>>([]);
  const [curriculumFiles, setCurriculumFiles] = useState<File[]>([]);

  // Step 5 state
  const [staffQualification, setStaffQualification] = useState("");
  const [staffPosition, setStaffPosition] = useState("");
  const [staffSpecialization, setStaffSpecialization] = useState("");
  const [staffStatus, setStaffStatus] = useState("");
  const [staffNumber, setStaffNumber] = useState(1);
  const [staffFile, setStaffFile] = useState<File | null>(null);
  const [staffFileName, setStaffFileName] = useState<string | null>(null);
  const [allocations, setAllocations] = useState<Array<{ id: string; qualification: string; position: string; specialization: string; quantity: number; status: string }>>([]);

  // Step 6 state
  const [expandedReviewSection, setExpandedReviewSection] = useState<number | null>(null);

  // Dynamic Data State
  const [trades, setTrades] = useState<Trade[]>([]);
  const [competencies, setCompetencies] = useState<Competence[]>([]);
  const [persistedEquipmentIds, setPersistedEquipmentIds] = useState<string[]>([]);
  const [persistedStaffIds, setPersistedStaffIds] = useState<string[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch Trades on mount
  useEffect(() => {
    async function fetchTrades() {
      try {
        const res = await getAllTrades();
        if (res.success) setTrades(res.data);
      } catch (error) {
        console.error("Failed to fetch trades:", error);
        toast.error("Failed to load training programs");
      }
    }
    fetchTrades();
  }, []);

  // Fetch Competencies when trade changes
  useEffect(() => {
    async function fetchCompetencies() {
      if (!selectedTrade) {
        setCompetencies([]);
        return;
      }
      setIsDataLoading(true);
      try {
        const res = await getCompetenciesByTrade(selectedTrade);
        if (res.success) setCompetencies(res.data);
      } catch (error) {
        console.error("Failed to fetch competencies:", error);
        toast.error("Failed to load competencies for selected trade");
      } finally {
        setIsDataLoading(false);
      }
    }
    fetchCompetencies();
  }, [selectedTrade]);

  // Handlers
  const handleTradeContinue = () => { if (selectedTrade) setCurrentStep(2); };
  const handleCompetencyBack = () => { setCurrentStep(1); };
  const handleCompetencyContinue = () => { if (selectedCompetency) setCurrentStep(3); };
  const handleEquipmentBack = () => { setCurrentStep(2); };
  const handleEquipmentContinue = () => { setCurrentStep(4); };
  const handleCurriculumBack = () => { setCurrentStep(3); };
  const handleCurriculumContinue = () => { setCurrentStep(5); };

  const handleEquipmentProofUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setEquipmentFile(file);
      setEquipmentProofName(file.name);
      setEquipmentProof(URL.createObjectURL(file));
      e.target.value = '';
    }
  };

  const handleAddEquipment = async () => {
    if (equipmentName.trim() && equipmentNumber > 0 && equipmentStatus && equipmentProofName) {
      setIsDataLoading(true);
      try {
        const eqFormData = new FormData();
        eqFormData.append("name", equipmentName);
        eqFormData.append("number", String(equipmentNumber));
        eqFormData.append("description", equipmentStatus);
        
        // Match backend @RequestParam("equipmentOwnership") List<MultipartFile>
        // We know equipmentProof is a blob URL, but we need the original File.
        // For now, if proof was uploaded, we should have the file reference.
        // Assuming proofName exists, we find the file from the input e.target.files (need to store that)
        // ALternatively, just use the blob URL fetch if needed, but better to store File object in state.
        
        if (equipmentFile) {
           eqFormData.append("equipmentOwnership", equipmentFile);
        }

        const res = await createTrainingEquipment(eqFormData);
        if (res.success && res.data.length > 0) {
          const newEq = res.data[0];
          setEquipments([...equipments, {
            id: newEq.id,
            name: newEq.name,
            quantity: newEq.number,
            status: newEq.description || equipmentStatus, // description maps to status in DTO
            proof: equipmentProof,
            proofName: equipmentProofName
          }]);
          setPersistedEquipmentIds([...persistedEquipmentIds, newEq.id]);
          
          setEquipmentName("");
          setEquipmentStatus("");
          setEquipmentNumber(1);
          setEquipmentProof(null);
          setEquipmentProofName(null);
          setEquipmentFile(null);
          toast.success("Equipment added and saved");
        }
      } catch (error) {
        toast.error("Failed to add equipment to database");
        console.error(error);
      } finally {
        setIsDataLoading(false);
      }
    }
  };

  const removeEquipment = (id: string) => { setEquipments(equipments.filter(eq => eq.id !== id)); };

  const handleAddStaff = async () => {
    if (staffQualification && staffPosition && staffStatus && staffNumber > 0) {
      setIsDataLoading(true);
      try {
        const staffFormData = new FormData();
        staffFormData.append("qualification", staffQualification);
        staffFormData.append("position", staffPosition);
        staffFormData.append("specialization", staffSpecialization);
        staffFormData.append("numberStaff", String(staffNumber));
        staffFormData.append("availabilityStatus", staffStatus);
        
        if (staffFile) {
          staffFormData.append("document", staffFile);
        }

        const res = await addTechnicalStaff(staffFormData);
        if (res.success) {
          setAllocations([...allocations, {
            id: res.data.id,
            qualification: staffQualification,
            position: staffPosition,
            specialization: staffSpecialization,
            quantity: staffNumber,
            status: staffStatus
          }]);
          setPersistedStaffIds([...persistedStaffIds, res.data.id]);
          
          setStaffQualification("");
          setStaffPosition("");
          setStaffSpecialization("");
          setStaffStatus("");
          setStaffNumber(1);
          setStaffFile(null);
          setStaffFileName(null);
          toast.success("Staff record saved");
        }
      } catch (error) {
        toast.error("Failed to add staff to database");
      } finally {
        setIsDataLoading(false);
      }
    }
  };

  const removeAllocation = (id: string) => { setAllocations(allocations.filter(a => a.id !== id)); };

  const handleCurriculumUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setCurriculumFiles(prev => [...prev, ...newFiles]);

      const newDocs = newFiles.map(file => {
        const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';
        const sizeRounded = file.size > 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`;
        return {
          id: Math.random().toString(),
          name: file.name,
          size: sizeRounded,
          extension: ext,
          progress: 100
        };
      });

      setCurriculumDocs(prev => [...prev, ...newDocs]);
      e.target.value = '';
    }
  };

  const removeCurriculumDoc = (id: string) => { setCurriculumDocs(prev => prev.filter(d => d.id !== id)); };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    try {
      const selectedT = trades.find(t => t.id === selectedTrade);
      const selectedC = competencies.find(c => c.id === selectedCompetency);
      
      const appFormData = new FormData();
      if (selectedTrade) appFormData.append("tradeId", selectedTrade);
      if (selectedT) appFormData.append("tradeName", selectedT.tradeName);
      if (selectedCompetency) appFormData.append("competenceId", selectedCompetency);
      if (selectedC) appFormData.append("competenceName", selectedC.name);
      
      // equipmentIds and staffIds as List<UUID> in DTO - use repeated keys
      persistedEquipmentIds.forEach(id => appFormData.append("equipmentIds", id));
      persistedStaffIds.forEach(id => appFormData.append("staffIds", id));
      
      appFormData.append("comments", "Short Course Application submitted via Wizard");

      // Curriculum files
      curriculumFiles.forEach(file => appFormData.append("curriculumDocuments", file));

      await createApplication(appFormData);
      toast.success("Application submitted successfully!");
      if (onSubmit) onSubmit();
    } catch (error) {
      toast.error("Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedTradeName = trades.find(t => t.id === selectedTrade)?.tradeName || "Unknown";
  const selectedCompetencyName = competencies.find(c => c.id === selectedCompetency)?.name || "Unknown";

  return (
    <div className="flex flex-1 overflow-hidden rounded-2xl border border-slate-100 bg-white min-h-[700px]">
      {/* Wizard Sidebar */}
      <div className="w-[300px] shrink-0 bg-[#FAFAFA] p-8 transition-colors duration-200">
        <h2 className="mb-10 text-[15px]  text-slate-700">
          Short Course Application
        </h2>
        <button
          onClick={onQuit}
          className="mb-12 flex items-center gap-2 text-[13px] font-medium text-[#0A77FF] hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2} />
          Quit
        </button>

        {/* Stepper */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute bottom-[20px] left-[23.5px] top-[20px] border-l border-slate-200" />

          <div className="flex flex-col gap-10">
            {stepsList.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;

              return (
                <div key={step.id} className="relative z-10 flex gap-4">
                  <div className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] bg-white text-slate-400 transition-all duration-200 ${isActive ? "shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200" : "ring-1 ring-slate-100"}`}>
                    <Icon className={`h-[22px] w-[22px] transition-colors ${isActive ? "text-[#0A77FF]" : ""}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col justify-center pt-0.5">
                    <p className={`text-[13px] transition-colors ${isActive ? " text-slate-900" : "font-medium text-slate-400"}`}>
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
      <div className="flex flex-1 flex-col overflow-y-auto bg-white px-8 md:px-[100px] py-14 no-scrollbar">
        <div className="mx-auto flex w-full max-w-[600px] flex-col">

          {/* STEP 1: TRADE SELECTION */}
          {currentStep === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                  <Blocks className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-[17px]  text-slate-900">Training Program(s) Selection</h2>
                <p className="mt-1.5 text-[13px] text-slate-500">
                  Select the training program(s) you are applying for accreditation in.
                </p>
              </div>

              <div className="mt-10">
                <p className="mb-3 text-[12px] text-slate-500">{trades.length} training program(s) available for you to choose</p>
                <div className="relative mb-6">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={tradeSearch}
                    onChange={(e) => setTradeSearch(e.target.value)}
                    className="w-full rounded-sm border border-slate-200 py-2.5 pl-10 pr-4 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                  />
                </div>
                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(tradeSearch 
                    ? trades.filter(t => t.tradeName.toLowerCase().includes(tradeSearch.toLowerCase()))
                    : trades.slice(0, 6)
                  ).map((trade) => {
                    const isSelected = selectedTrade === trade.id;
                    return (
                      <div
                        key={trade.id}
                        onClick={() => setSelectedTrade(trade.id)}
                        className={`flex cursor-pointer items-center justify-between rounded-sm border p-3.5 transition-all ${isSelected ? "border-[#0A77FF] bg-blue-50/30" : "border-slate-200 hover:border-[#0A77FF]"}`}
                      >
                        <div className="flex items-center gap-3">
                          <Blocks className="h-[15px] w-[15px] text-[#0A77FF]" strokeWidth={2} />
                          <span className="line-clamp-1 text-[12px] font-medium text-slate-600">{trade.tradeName}</span>
                        </div>
                        <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition-colors ${isSelected ? "border-[#0A77FF] bg-[#0A77FF]" : "border-slate-300 bg-white"}`}>
                          {isSelected && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full gap-3">
                  <PrimaryButton
                    label="Back"
                    onClick={onQuit}
                    variant="outline"
                    className="flex-1"
                    hideIcon={true}
                  />
                  <PrimaryButton
                    label="Continue"
                    onClick={handleTradeContinue}
                    disabled={!selectedTrade}
                    variant="primary"
                    className="flex-1"
                    hideIcon={true}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: COMPETENCIES */}
          {currentStep === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                  <Hexagon className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-[17px]  text-slate-900">Competencies</h2>
                <p className="mt-1.5 text-[13px] text-slate-500">Specify the competencies offered under the selected training program(s).</p>
              </div>
              <div className="col-span-full mt-8 flex flex-col items-center">
                <div className="mb-8 flex w-fit min-w-[140px] items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-4 ring-[#0A77FF]/5">
                  <div className="flex items-center gap-2">
                    <Blocks className="h-4 w-4 text-[#0A77FF]" strokeWidth={2} />
                    <span className="tracking-tight text-[12px] font-medium text-slate-600">{selectedTradeName}</span>
                  </div>
                  <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 shadow-sm shadow-emerald-200">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="mb-3 text-[12px] text-slate-500">24 competencies under this training program(s)</p>
                <div className="relative mb-6">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={competencySearch}
                    onChange={(e) => setCompetencySearch(e.target.value)}
                    className="w-full rounded-sm border border-slate-200 py-2.5 pl-10 pr-4 text-[13px] text-slate-900 placeholder:text-slate-400 focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]"
                  />
                </div>
                <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {isDataLoading ? (
                    <div className="col-span-full flex flex-col items-center py-10 gap-2">
                       <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                       <p className="text-slate-400 text-sm">Loading competencies...</p>
                    </div>
                  ) : (
                    competencies.filter(c => c.name.toLowerCase().includes(competencySearch.toLowerCase())).map((comp) => {
                      const isSelected = selectedCompetency === comp.id;
                      return (
                        <div
                          key={comp.id}
                          onClick={() => setSelectedCompetency(comp.id)}
                          className={`flex cursor-pointer items-center justify-between rounded-sm border p-3.5 transition-all ${isSelected ? "border-[#0A77FF] bg-blue-50/30" : "border-slate-200 hover:border-[#0A77FF]"}`}
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
                    })
                  )}
                </div>
                <div className="flex w-full gap-3">
                  <PrimaryButton
                    label="Back"
                    onClick={handleCompetencyBack}
                    variant="outline"
                    className="flex-1"
                    hideIcon={true}
                  />
                  <PrimaryButton
                    label="Continue"
                    onClick={handleCompetencyContinue}
                    disabled={!selectedCompetency}
                    variant="primary"
                    className="flex-1"
                    hideIcon={true}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: EQUIPMENT AND FACILITIES */}
          {currentStep === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
               <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                  <Briefcase className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-[17px]  text-slate-900">Equipment and Facilities</h2>
                <p className="mt-1.5 text-[13px] text-slate-500">List available equipment and upload proof.</p>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-2 ring-[#0A77FF]/5">
                    <div className="flex items-center gap-2 text-[#0A77FF]">
                      <Blocks className="h-4 w-4" strokeWidth={2} />
                      <span className="text-[12px] font-medium text-slate-600 tracking-tight">{selectedTradeName}</span>
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                   <div className="flex items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-2 ring-[#0A77FF]/5">
                    <div className="flex items-center gap-2 text-[#0A77FF]">
                      <Hexagon className="h-4 w-4" strokeWidth={2} />
                      <span className="text-[12px] font-medium text-slate-600 tracking-tight">{selectedCompetencyName}</span>
                    </div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
                <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-slate-700  uppercase tracking-wide text-[11px] text-slate-400">Equipment Name <span className="text-red-500">*</span></label>
                      <input type="text" placeholder="Select ..." value={equipmentName} onChange={(e) => setEquipmentName(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]" />
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-slate-700  uppercase tracking-wide text-[11px] text-slate-400">Status <span className="text-red-500">*</span></label>
                      <div className="relative"><select className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 font-medium bg-white focus:border-[#0A77FF] focus:outline-none" value={equipmentStatus} onChange={(e) => setEquipmentStatus(e.target.value)}><option value="" disabled>Select ..</option><option value="In good condition">In good condition</option><option value="Not working">Not working</option></select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" /></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-slate-700  uppercase tracking-wide text-[11px] text-slate-400">Number <span className="text-red-500">*</span></label>
                      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                        <div className="flex items-center gap-2"><Briefcase className="h-3.5 w-3.5 text-slate-400" /><span className="w-8 text-[13px] font-medium">{equipmentNumber}</span></div>
                        <div className="flex items-center gap-1">
                          <button onClick={() => setEquipmentNumber(prev => prev + 1)} className="rounded p-1 hover:bg-slate-100"><Plus className="h-4 w-4 text-slate-600" /></button>
                          <button onClick={() => setEquipmentNumber(prev => Math.max(1, prev - 1))} className="rounded p-1 hover:bg-slate-100"><Minus className="h-4 w-4 text-slate-600" /></button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-[13px] font-medium text-slate-700  uppercase tracking-wide text-[11px] text-slate-400">Proof <span className="text-red-500">*</span></label>
                      <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white px-0 items-center">
                        <div className="flex-1 truncate border-r border-slate-200 px-3 py-2 text-[13px] text-slate-400 leading-tight">{equipmentProofName || "Select ..."}</div>
                        <label className="flex cursor-pointer items-center gap-2 bg-slate-50 px-4 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-100"><UploadCloud className="h-4 w-4 text-slate-500" />Upload<input id="equipment-upload" type="file" accept="image/*" className="hidden" onChange={handleEquipmentProofUpload} /></label>
                      </div>
                    </div>
                  </div>
                </div>
                <PrimaryButton label="Add Equipment" icon={FolderPlus} iconPosition="right" onClick={handleAddEquipment} className="mb-8 w-fit" disabled={isDataLoading} />
                <div className="mb-8 flex w-full gap-3">
                  <PrimaryButton
                    label="Back"
                    onClick={handleEquipmentBack}
                    variant="outline"
                    className="flex-1"
                    hideIcon={true}
                  />
                  <PrimaryButton
                    label="Continue"
                    onClick={handleEquipmentContinue}
                    disabled={equipments.length === 0}
                    variant="primary"
                    className="flex-1"
                    hideIcon={true}
                  />
                </div>
                {/* Training Workshop Setup (Folder View) */}
                {equipments.length > 0 && (
                  <div className="mt-8 mb-8 w-full animate-in fade-in slide-in-from-top-4 duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A77FF]/10 text-[#0A77FF]">
                        <Folder className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-slate-800">Training Workshop Setup</h3>
                        <p className="text-[12px] text-slate-500 font-medium">Photos of arrangement of tools and equipment in the workshop</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-slate-50/50 p-4">
                      {equipments.map(eq => (
                        <div key={eq.id} className="group relative flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm hover:shadow-md transition-all">
                          <div className="h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-slate-100 border border-slate-100">
                            {eq.proof ? (
                              <img src={eq.proof} alt="" className="h-full w-full object-cover" />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center bg-slate-50 text-[10px] font-bold text-slate-400">NO IMAGE</div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="truncate text-[13px] font-bold text-slate-800">{eq.name}</p>
                            <p className="mt-0.5 text-[11px] font-medium text-slate-400">Qty: {eq.quantity} • {eq.status}</p>
                          </div>
                          <div className="flex flex-col gap-2 shrink-0">
                             <button onClick={() => removeEquipment(eq.id)} className="rounded-lg p-1.5 text-slate-300 hover:bg-red-50 hover:text-red-500 transition-all">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

          {/* STEP 4: CURRICULUM DOCUMENTS */}
          {currentStep === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
               <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                  <FileText className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-[17px]  text-slate-900">Curriculum Documents</h2>
                <p className="mt-1.5 text-[13px] text-slate-500">Upload curriculum and related training documents.</p>
              </div>
              <div className="mt-8 flex flex-col items-center">
                 <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-2 ring-[#0A77FF]/5">
                    <div className="flex items-center gap-2 text-[#0A77FF]"><Blocks className="h-4 w-4" strokeWidth={2} /><span className="text-[12px] font-medium text-slate-600 tracking-tight">{selectedTradeName}</span></div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 shadow-sm"><Check className="h-3 w-3 text-white" strokeWidth={3} /></div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                   <div className="flex items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-2 ring-[#0A77FF]/5">
                    <div className="flex items-center gap-2 text-[#0A77FF]"><Hexagon className="h-4 w-4" strokeWidth={2} /><span className="text-[12px] font-medium text-slate-600 tracking-tight">{selectedCompetencyName}</span></div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500 shadow-sm"><Check className="h-3 w-3 text-white" strokeWidth={3} /></div>
                  </div>
                </div>
              </div>
              <div className="mt-2 mb-8 w-full text-left">
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/30 py-12 transition-all hover:bg-slate-50 hover:border-[#0A77FF]/30 group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-transform group-hover:scale-110"><UploadCloud className="h-6 w-6 text-slate-500 group-hover:text-[#0A77FF]" strokeWidth={1.5} /></div>
                  <p className="text-[14px] text-slate-500"><span className=" text-[#0A77FF]">Click to upload</span> or drag and drop</p>
                  <p className="mt-1 text-[11px] font-medium text-slate-400">PDF, DOCX, MP4 or FIG (max. 100MB)</p>
                  <input id="curriculum-upload" type="file" multiple className="hidden" onChange={handleCurriculumUpload} />
                </label>
              </div>
              {curriculumDocs.length > 0 && (
                <div className="mb-8 flex w-full flex-col gap-3">
                  {curriculumDocs.map(doc => {
                    const isDone = doc.progress === 100;
                    const colors:Record<string,string> = { PDF: "bg-red-500", MP4: "bg-blue-500", FIG: "bg-purple-500", DOCX: "bg-blue-400", DOC: "bg-blue-400" };
                    const iconBg = colors[doc.extension] || "bg-slate-500";
                    return (
                      <div key={doc.id} className="relative flex flex-col justify-center rounded-sm border border-slate-200 bg-white p-4 shadow-sm">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className="relative mt-0.5 flex h-10 w-8 items-center justify-center rounded-sm border border-slate-200 bg-slate-50 shadow-sm overflow-hidden"><div className={`absolute bottom-0 left-0 right-0 h-4 flex items-center justify-center ${iconBg}`}><span className="text-[8px] font-bold text-white tracking-widest">{doc.extension}</span></div></div>
                            <div className="flex flex-col"><p className="text-[14px]  text-slate-800 line-clamp-1">{doc.name}</p><p className="text-[11px] font-medium text-slate-400">{doc.size}</p></div>
                          </div>
                          <div>{isDone ? <input type="checkbox" checked readOnly className="h-4 w-4 rounded-sm border-slate-300 text-[#0A77FF] focus:ring-[#0A77FF]" /> : <button onClick={() => removeCurriculumDoc(doc.id)} className="text-slate-400 hover:text-red-500 transition-colors"><Trash2 className="h-5 w-5" /></button>}</div>
                        </div>
                        <div className="mt-4 flex items-center gap-3"><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-[#0A77FF] transition-all duration-300" style={{ width: `${doc.progress}%` }} /></div><span className="w-8 text-right text-[11px] font-bold text-slate-500 tracking-tighter">{doc.progress}%</span></div>
                      </div>
                    );
                  })}
                </div>
              )}
              <div className="flex w-full gap-3 mb-8">
                <PrimaryButton
                  label="Back"
                  onClick={handleCurriculumBack}
                  variant="outline"
                  className="flex-1"
                  hideIcon={true}
                />
                <PrimaryButton
                  label="Continue"
                  onClick={handleCurriculumContinue}
                  disabled={curriculumDocs.length === 0 || curriculumDocs.some(d => d.progress < 100)}
                  variant="primary"
                  className="flex-1"
                  hideIcon={true}
                />
              </div>
            </div>
          )}

          {/* STEP 5: STAFF ALLOCATION */}
          {currentStep === 5 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
               <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200">
                  <Users className="h-6 w-6 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-[17px]  text-slate-900">Staff Allocation</h2>
                <p className="mt-1.5 text-[13px] text-slate-500">Indicate staff availability by qualification and position.</p>
              </div>
              <div className="mt-8 flex flex-col items-center">
                 <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                  <div className="flex items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-2 ring-[#0A77FF]/5">
                    <div className="flex items-center gap-2 text-[#0A77FF]"><Blocks className="h-4 w-4" strokeWidth={2} /><span className="text-[12px] font-medium text-slate-600 tracking-tight">{selectedTradeName}</span></div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500"><Check className="h-3 w-3 text-white" strokeWidth={3} /></div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300" strokeWidth={1.5} />
                   <div className="flex items-center justify-between gap-6 rounded-sm border border-[#0A77FF] bg-white px-3.5 py-2 ring-2 ring-[#0A77FF]/5">
                    <div className="flex items-center gap-2 text-[#0A77FF]"><Hexagon className="h-4 w-4" strokeWidth={2} /><span className="text-[12px] font-medium text-slate-600 tracking-tight">{selectedCompetencyName}</span></div>
                    <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emerald-500"><Check className="h-3 w-3 text-white" strokeWidth={3} /></div>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-left">
                <div className="mb-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="mb-2 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Qualification <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 font-medium bg-white focus:border-[#0A77FF] focus:outline-none" value={staffQualification} onChange={(e) => setStaffQualification(e.target.value)}>
                          <option value="" disabled>Select ..</option>
                          <option value="CERTIFICATE">Certificate</option>
                          <option value="A3">A3</option>
                          <option value="A2">A2</option>
                          <option value="A1">A1 (Diploma)</option>
                          <option value="A0">A0 (Bachelor's)</option>
                          <option value="BACHELORS">Bachelor's Degree</option>
                          <option value="MASTERS">Master's Degree</option>
                          <option value="PHD">PhD</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Position <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 font-medium bg-white focus:border-[#0A77FF] focus:outline-none" value={staffPosition} onChange={(e) => setStaffPosition(e.target.value)}>
                          <option value="" disabled>Select ..</option>
                          <option value="INSTRUCTOR">Instructor</option>
                          <option value="LAB_ASSISTANT">Lab Assistant</option>
                          <option value="TECHNICAL_COORDINATOR">Technical Coordinator</option>
                          <option value="MANAGER">Manager</option>
                          <option value="PRINCIPAL">Principal</option>
                          <option value="HEADTEACHER">Headteacher</option>
                          <option value="LEGAL_ADVISOR">Legal Advisor</option>
                          <option value="CEO">CEO</option>
                          <option value="MANAGING_DIRECTOR">Managing Director</option>
                          <option value="DIRECTOR_GENERAL">Director General</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label className="mb-2 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Specialization <span className="text-red-500">*</span></label>
                    <input type="text" placeholder="e.g. AI, Civil Eng, etc." value={staffSpecialization} onChange={(e) => setStaffSpecialization(e.target.value)} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] focus:border-[#0A77FF] focus:outline-none focus:ring-1 focus:ring-[#0A77FF]" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="mb-2 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Number <span className="text-red-500">*</span></label>
                      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2"><span className="w-8 text-[13px] font-bold text-slate-700 ml-1">{staffNumber}</span><div className="flex items-center gap-1"><button onClick={() => setStaffNumber(s => s + 1)} className="rounded p-1 hover:bg-slate-50"><Plus className="h-4 w-4 text-slate-600" /></button><button onClick={() => setStaffNumber(s => Math.max(1, s - 1))} className="rounded p-1 hover:bg-slate-50"><Minus className="h-4 w-4 text-slate-600" /></button></div></div>
                    </div>
                    <div>
                      <label className="mb-2 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Availability Status <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 text-[13px] text-slate-700 font-medium bg-white focus:border-[#0A77FF] focus:outline-none" value={staffStatus} onChange={(e) => setStaffStatus(e.target.value)}>
                          <option value="" disabled>Select ..</option>
                          <option value="FULL_TIME">Full Time</option>
                          <option value="PART_TIME">Part Time</option>
                          <option value="VISITING">Visiting</option>
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="mb-2 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Supporting Training Program Document <span className="text-red-500">*</span></label>
                    <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white px-0 items-center">
                      <div className="flex-1 truncate border-r border-slate-200 px-3 py-2 text-[13px] text-slate-400 leading-tight">{staffFileName || "Select ..."}</div>
                      <label className="flex cursor-pointer items-center gap-2 bg-slate-50 px-4 py-2.5 text-[13px] font-medium text-slate-700 hover:bg-slate-100">
                        <UploadCloud className="h-4 w-4 text-slate-500" />Upload
                        <input id="staff-doc-upload" type="file" accept="*" className="hidden" onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) { setStaffFile(file); setStaffFileName(file.name); e.target.value = ''; }
                        }} />
                      </label>
                    </div>
                  </div>
                </div>
                <PrimaryButton label="Add Staff" icon={UserPlus} iconPosition="right" onClick={handleAddStaff} className="mb-8 w-fit" disabled={isDataLoading} />
                {allocations.length > 0 && (
                  <div className="mb-8 w-full flex flex-col gap-3">
                    {allocations.map(alloc => (
                      <div key={alloc.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm group hover:border-[#0A77FF] transition-colors">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[13px] font-bold text-slate-800">{alloc.position} ({alloc.specialization})</p>
                            <p className="text-[11px] font-medium text-slate-500">{alloc.qualification} • {alloc.status}</p>
                          </div>
                          <PrimaryButton
                            label=""
                            icon={Trash2}
                            hideIcon={false}
                            className="h-8 w-8 p-0 bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100"
                            onClick={() => removeAllocation(alloc.id)}
                          />
                        </div>
                        <p className="mt-3 text-[10px] font-bold text-[#0A77FF] uppercase tracking-widest bg-blue-50 w-fit px-2 py-0.5 rounded-full">Qty: {alloc.quantity}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mb-8 flex w-full gap-3">
                  <PrimaryButton
                    label="Back"
                    onClick={() => setCurrentStep(4)}
                    variant="outline"
                    className="flex-1"
                    hideIcon={true}
                  />
                  <PrimaryButton
                    label="Continue"
                    onClick={() => setCurrentStep(6)}
                    variant="primary"
                    className="flex-1"
                    hideIcon={true}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: APPLICATION REVIEW */}
          {currentStep === 6 && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] ring-1 ring-slate-200"><CheckCheck className="h-6 w-6 text-slate-500" /></div>
                <h2 className="text-[17px]  text-slate-900">Application Review</h2>
                <p className="mt-1.5 text-[13px] text-slate-500">Review all information provided before submitting your application for evaluation.</p>
              </div>
              <div className="mt-6 flex w-full gap-3 mb-8">
                <PrimaryButton
                  label="Back"
                  onClick={() => setCurrentStep(5)}
                  variant="outline"
                  className="flex-1"
                  hideIcon={true}
                />
                <PrimaryButton
                  label="Submit Application"
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                  variant="primary"
                  className="flex-1"
                  hideIcon={true}
                >
                  {isSubmitting && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                </PrimaryButton>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  { id: 1, title: "Training Program(s) Selection Completed", desc: "Select the training program(s) you are applying for" },
                  { id: 2, title: "Competencies Selected", desc: "Specify the competencies offered under the selected training program(s)" },
                  { id: 3, title: "Equipment and Facilities Added", desc: "List available equipment and upload proof" },
                  { id: 4, title: "Curriculum Documents", desc: "Upload curriculum and training materials" },
                  { id: 5, title: "Staff Allocation", desc: "Indicate staff availability for the selected training program(s)" },
                ].map((section) => {
                  const isExpanded = expandedReviewSection === section.id;
                  return (
                    <div key={section.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:border-[#0A77FF]/30 transition-colors">
                      <button onClick={() => setExpandedReviewSection(isExpanded ? null : section.id)} className="flex w-full items-center justify-between p-4 outline-none">
                        <div className="flex gap-4 items-center">
                          <div className="flex items-center justify-center rounded-full bg-emerald-50 h-9 w-9 ring-1 ring-emerald-100 flex-shrink-0"><CheckCircle2 className="h-5 w-5 text-emerald-500" strokeWidth={2} /></div>
                          <div className="flex flex-col items-start px-2"><p className="text-[14px] font-bold text-slate-700 tracking-tight">{section.title}</p><p className="text-[11px] font-medium text-slate-400 mt-0.5 line-clamp-1 text-left">{section.desc}</p></div>
                        </div>
                        <div className="pl-4">{isExpanded ? <ChevronUp className="h-5 w-5 text-slate-400" /> : <ChevronDown className="h-5 w-5 text-slate-400" />}</div>
                      </button>
                      {isExpanded && (
                        <div className="border-t border-slate-100 bg-slate-50/20 p-6 animate-in slide-in-from-top-2 duration-200">
                          {section.id === 1 && (<div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Selected Training Program(s)</p><p className="text-[14px] text-slate-800 ">{selectedTradeName}</p></div>)}
                          {section.id === 2 && (<div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Selected Competency</p><p className="text-[14px] text-slate-800 ">{selectedCompetencyName}</p></div>)}
                          {section.id === 3 && (
                            <div>
                              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Training Workshop Setup</p>
                              {equipments.length === 0 ? (
                                <p className="text-[13px] text-slate-400 italic">No equipment added.</p>
                              ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {equipments.map(eq => (
                                    <div key={eq.id} className="flex items-center gap-3 bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
                                      <div className="h-10 w-12 shrink-0 overflow-hidden rounded-lg bg-slate-50 border border-slate-100">
                                        {eq.proof && <img src={eq.proof} alt="" className="h-full w-full object-cover" />}
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <p className="text-[13px] font-bold text-slate-800 leading-tight truncate mb-0.5">{eq.name}</p>
                                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-tight">Qty: {eq.quantity} • {eq.status}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                          {section.id === 4 && (<div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Curriculum Documents</p>{curriculumDocs.length === 0 ? (<p className="text-[13px] text-slate-400 italic">No documents uploaded.</p>) : (<ul className="space-y-2">{curriculumDocs.map(doc => (<li key={doc.id} className="flex justify-between items-center bg-white border border-slate-100 p-3 rounded-xl shadow-sm"><span className="text-[13px] font-bold text-slate-700">{doc.name}</span><span className="text-slate-400 text-[11px] font-bold uppercase">{doc.size}</span></li>))}</ul>)}</div>)}
                          {section.id === 5 && (<div><p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Staff Allocations</p>{allocations.length === 0 ? (<p className="text-[13px] text-slate-400 italic">No staff members allocated.</p>) : (<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{allocations.map(alloc => (<div key={alloc.id} className="bg-white border border-slate-100 p-3.5 rounded-xl shadow-sm"><p className="text-[13px] font-bold text-slate-800 leading-none mb-1">{alloc.position}</p><p className="text-[11px] text-slate-500 font-medium mb-2">{alloc.qualification}</p><p className="text-[10px] font-bold text-white uppercase tracking-widest bg-[#0A77FF] w-fit px-2 py-0.5 rounded-full">{alloc.status} • {alloc.quantity}</p></div>))}</div>)}</div>)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
