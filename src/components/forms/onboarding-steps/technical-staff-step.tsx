"use client";

import { UserPlus, Plus, Minus, Pencil, Trash2, CheckCheck } from "lucide-react";
import { FormSelect } from "@/components/ui/form-field";

export interface TechnicalStaff {
  qualification: string;
  position: string;
  status: string;
}

export interface TechnicalStaffEntry extends TechnicalStaff {
  number: number;
}

interface TechnicalStaffStepProps {
  newStaff: TechnicalStaff;
  setNewStaff: (staff: TechnicalStaff | ((prev: TechnicalStaff) => TechnicalStaff)) => void;
  staffNumber: number;
  setStaffNumber: (num: number | ((prev: number) => number)) => void;
  staffList: TechnicalStaffEntry[];
  setStaffList: (list: TechnicalStaffEntry[] | ((prev: TechnicalStaffEntry[]) => TechnicalStaffEntry[])) => void;
  editingStaffIdx: number | null;
  setEditingStaffIdx: (idx: number | null) => void;
  onDeleteStaff: (idx: number) => void;
}

export function TechnicalStaffStep({
  newStaff,
  setNewStaff,
  staffNumber,
  setStaffNumber,
  staffList,
  setStaffList,
  editingStaffIdx,
  setEditingStaffIdx,
  onDeleteStaff,
}: TechnicalStaffStepProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
        <FormSelect
          label="Qualification"
          value={newStaff.qualification}
          onChange={(v) => setNewStaff({ ...newStaff, qualification: v })}
          required
          options={[
            { label: "PhD", value: "PhD" },
            { label: "Master's Degree", value: "Master's Degree" },
            { label: "Bachelor's Degree", value: "Bachelor's Degree" },
            { label: "Diploma", value: "Diploma" },
            { label: "Certificate", value: "Certificate" },
          ]}
        />
        <FormSelect
          label="Position"
          value={newStaff.position}
          onChange={(v) => setNewStaff({ ...newStaff, position: v })}
          required
          options={[
            { label: "Professor", value: "Professor" },
            { label: "Senior Lecturer", value: "Senior Lecturer" },
            { label: "Lecturer", value: "Lecturer" },
            { label: "Assistant Lecturer", value: "Assistant Lecturer" },
            { label: "Administrator", value: "Administrator" },
            { label: "Technician", value: "Technician" },
          ]}
        />

        <div className="grid grid-cols-2 gap-4">
          <label className="space-y-2 flex flex-col">
            <span className="text-[13px] font-medium text-slate-700">
              Number <span className="text-red-500">*</span>
            </span>
            <div className="flex rounded-md border border-slate-200 h-[42px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20 bg-white overflow-hidden transition-colors">
              <input
                type="number"
                value={staffNumber || ""}
                onChange={(e) => setStaffNumber(Number(e.target.value) || 0)}
                placeholder="0"
                className="w-full flex-1 appearance-none border-none bg-transparent px-3 text-sm text-slate-600 outline-none placeholder:text-slate-400 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [-moz-appearance:textfield]"
              />
              <div className="flex border-l border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setStaffNumber((s) => s + 1)}
                  className="flex items-center justify-center px-3 hover:bg-slate-50 transition-colors border-r border-slate-200 text-slate-500 active:bg-slate-100 cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setStaffNumber((s) => Math.max(0, s - 1))}
                  className="flex items-center justify-center px-3 hover:bg-slate-50 transition-colors text-slate-500 active:bg-slate-100 cursor-pointer"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </label>

          <FormSelect
            label="Availability Status"
            value={newStaff.status}
            onChange={(v) => setNewStaff({ ...newStaff, status: v })}
            required
            options={[
              { label: "Full Time", value: "Full Time" },
              { label: "Part Time", value: "Part Time" },
              { label: "Visiting", value: "Visiting" },
            ]}
          />
        </div>
      </div>

      <div className="flex justify-start gap-4">
        <button
          type="button"
          onClick={() => {
            if (newStaff.qualification && newStaff.position && newStaff.status && staffNumber > 0) {
              if (editingStaffIdx !== null) {
                const updatedList = [...staffList];
                updatedList[editingStaffIdx] = { ...newStaff, number: staffNumber };
                setStaffList(updatedList);
                setEditingStaffIdx(null);
              } else {
                setStaffList([...staffList, { ...newStaff, number: staffNumber }]);
              }
              setNewStaff({ qualification: "", position: "", status: "" });
              setStaffNumber(0);
            }
          }}
          disabled={!newStaff.qualification || !newStaff.position || !newStaff.status || staffNumber === 0}
          className="flex items-center gap-2 rounded-md bg-[#0066FF] px-4 py-3 text-sm font-semibold !text-white shadow-sm transition hover:bg-blue-700 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {editingStaffIdx !== null ? "Update Staff" : "Add Staff"} <UserPlus className="h-4 w-4" />
        </button>

        {editingStaffIdx !== null && (
          <button
            type="button"
            onClick={() => {
              setEditingStaffIdx(null);
              setNewStaff({ qualification: "", position: "", status: "" });
              setStaffNumber(0);
            }}
            className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-[0.98] cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>

      {staffList.length > 0 && (
        <div className="space-y-4 pt-4">
          <div className="space-y-3">
            {staffList.map((staff, idx) => (
              <div key={idx} className="rounded-sm border border-slate-200 bg-white p-5 space-y-5 shadow-sm transition hover:border-slate-300">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[12px] text-slate-500">Qualification</span>
                    <p className="text-[13.5px] font-medium text-slate-800">{staff.qualification}</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[12px] text-slate-500">Position</span>
                    <p className="text-[13.5px] font-medium text-slate-800">{staff.position}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[13.5px] text-slate-500">{staff.number} Staffs</span>
                    <div className="flex items-center gap-1.5 rounded-sm border border-[#34C759] bg-[#34C759] px-2.5 py-1 text-[13px] font-medium text-[#16a34a]">
                      <CheckCheck className="h-4 w-4" />
                      {staff.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-sm bg-slate-50 px-3 py-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        setNewStaff({
                          qualification: String(staff.qualification),
                          position: String(staff.position),
                          status: String(staff.status),
                        });
                        setStaffNumber(typeof staff.number === 'number' ? staff.number : 0);
                        setEditingStaffIdx(idx);
                      }}
                      className="text-blue-600 hover:text-blue-700 transition-colors active:scale-95 cursor-pointer"
                    >
                      <Pencil className="h-[17px] w-[17px]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onDeleteStaff(idx)}
                      className="text-[#FF5B5B] hover:text-red-500 transition-colors active:scale-95 cursor-pointer"
                    >
                      <Trash2 className="h-[17px] w-[17px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
