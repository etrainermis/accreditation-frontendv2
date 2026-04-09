"use client";

import React from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface FileUploadProps {
  onFileSelect?: (files: FileList | null) => void;
  className?: string;
}

export function FileUpload({ onFileSelect, className }: FileUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    onFileSelect?.(e.dataTransfer.files);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        "relative flex flex-col items-center justify-center w-full p-8 transition-all duration-200 border-2 rounded-sm cursor-pointer group border-[#0A77FF]",
        isDragging
          ? "bg-[var(--primary)]/5 border-dashed"
          : "hover:bg-slate-50 border-solid",
        className
      )}
      onClick={() => document.getElementById("file-input")?.click()}
    >
      <input
        id="file-input"
        type="file"
        multiple
        className="hidden"
        onChange={(e) => onFileSelect?.(e.target.files)}
      />
      
      <div className="p-3 mb-4 rounded-sm border border-[#EAECF0] bg-white group-hover:scale-110 transition-transform duration-200">
        <UploadCloud className="w-6 h-6 text-slate-500" />
      </div>

      <div className="text-center">
        <p className="text-sm font-medium text-slate-700">
          <span className="text-[var(--primary)] ">Click to upload</span> or drag and drop
        </p>
        <p className="mt-1 text-xs text-slate-500">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>

      {/* JPG preview icon on the right as seen in image */}
      <div className="absolute right-6 bottom-6 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
        <div className="relative">
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H20L32 12V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" fill="#F2F4F7"/>
            <rect x="4" y="24" width="24" height="8" rx="1" fill="#6155F5"/>
            <text x="16" y="30" fontSize="6" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">JPG</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
