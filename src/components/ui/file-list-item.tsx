"use client";

import React from "react";
import { Check, Loader2, MoreVertical, FileText, Video, Box } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { FileIcon, FileType } from "@/components/ui/file-icon";

interface FileListItemProps {
  name: string;
  size: string;
  progress: number;
  type: FileType;
  onRemove?: () => void;
}

export function FileListItem({ name, size, progress, type }: FileListItemProps) {
  const isCompleted = progress === 100;

  return (
    <div className={cn("relative flex items-center justify-between p-4 bg-white border border-[#EAECF0] rounded-sm transition-all duration-200 group overflow-hidden", isCompleted?"":"bg-[#EAECF0]")}>
      <div className="flex items-center gap-4 flex-1">
        <FileIcon type={type} className="relative h-12 w-10 shrink-0" />

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-col justify-between items-start mb-1">
             <span className="text-sm font-medium text-slate-900 truncate pr-4">{name}</span>
             <span className="text-xs text-slate-500 shrink-0">{size} – {progress}% uploaded</span>
          </div>
        </div>
      </div>

      <div className="flex items-top -mt-6 gap-3 ml-4 relative z-10">
        {isCompleted ? (
          <div className="h-5 w-5 rounded-[2px] bg-[var(--primary)] flex items-center justify-center text-white">
            <Check className="h-3 w-3 stroke-[3]" />
          </div>
        ) : (
          <div className="h-5 w-5 flex items-center justify-center">
            <Loader2 className="h-4 w-4 text-[var(--primary)] animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
}

export function CriteriaHeader({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex items-center justify-between py-6 px-1 border-t border-slate-100 mt-8 first:mt-4 first:border-0">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500 mt-0.5">{description}</p>
      </div>
      <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-900">
        <MoreVertical className="h-5 w-5" />
      </button>
    </div>
  );
}
