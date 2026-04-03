"use client";

import { ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Text Input ────────────────────────────────────────────────────────────────
interface FormInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  icon?: LucideIcon;
  className?: string;
}

export function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  icon: Icon,
  className = "",
}: FormInputProps) {
  return (
    <label className={`space-y-2.5 flex flex-col ${className}`}>
      <span className="text-xs font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-sm border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 placeholder:text-slate-400"
          placeholder={placeholder}
        />
        {Icon && (
          <Icon className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
        )}
      </div>
    </label>
  );
}

// ─── Select Dropdown ───────────────────────────────────────────────────────────
interface FormSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
  placeholder?: string;
  required?: boolean;
  className?: string;
}

export function FormSelect({
  label,
  value,
  onChange,
  options,
  placeholder = "Select ...",
  required = false,
  className = "",
}: FormSelectProps) {
  return (
    <label className={`space-y-2.5 flex flex-col ${className}`}>
      <span className="text-xs font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none rounded-sm border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 ${
            !value ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
      </div>
    </label>
  );
}

// ─── Phone Input with country code ─────────────────────────────────────────────
interface FormPhoneProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  icon?: LucideIcon;
  className?: string;
}

export function FormPhone({
  label,
  value,
  onChange,
  required = false,
  icon: Icon,
  className = "",
}: FormPhoneProps) {
  return (
    <label className={`space-y-2.5 flex flex-col ${className}`}>
      <span className="text-xs font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </span>
      <div className="relative flex rounded-sm border border-slate-200 bg-white transition focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/20">
        <div className="flex items-center justify-center border-r border-slate-200 px-3 text-sm text-slate-600 gap-1 cursor-pointer hover:bg-slate-50 transition-colors rounded-l-sm">
          +250 <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-0.5" />
        </div>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 w-full bg-transparent px-3 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
          placeholder="XXX-XXX-XXX"
        />
        {Icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon className="h-4 w-4 text-slate-400" />
          </div>
        )}
      </div>
    </label>
  );
}

// ─── Textarea with character counter ───────────────────────────────────────────
interface FormTextareaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  rows?: number;
  placeholder?: string;
  className?: string;
}

export function FormTextarea({
  label,
  value,
  onChange,
  maxLength = 275,
  rows = 4,
  placeholder,
  className = "",
}: FormTextareaProps) {
  const currentLen = value.length;
  const remaining = maxLength - currentLen;

  return (
    <label className={`flex flex-col space-y-3 ${className}`}>
      <span className="text-[14px] text-slate-700">{label}</span>
      <textarea
        rows={rows}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-none rounded-md border border-slate-200 p-4 text-[13.5px] text-slate-600 outline-none transition focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 placeholder:text-slate-500/70"
        placeholder={placeholder}
      />
      <div className="flex justify-between items-center pr-1">
        <span
          className={`text-[12.5px] transition-colors ${
            remaining === 0
              ? "text-red-500 font-medium"
              : remaining <= 30
                ? "text-orange-500"
                : "text-slate-400"
          }`}
        >
          {remaining} character{remaining === 1 ? "" : "s"} left
        </span>
        {currentLen > 0 && (
          <span className="text-[12px] font-medium text-slate-300">
            {currentLen} / {maxLength}
          </span>
        )}
      </div>
    </label>
  );
}
