"use client";

import React from "react";

export type FileType = "PDF" | "MP4" | "FIG" | "IMG";

interface FileIconProps {
  type: FileType;
  className?: string;
}

export const FileIcon = ({ type, className }: FileIconProps) => {
  const config = {
    PDF: { color: "#E1412E" },
    MP4: { color: "#1560DA" },
    FIG: { color: "#845ADF" },
    IMG: { color: "#16A34A" },
  }[type] || { color: "#667085" };

  return (
    <div className={className || "relative h-10 w-8 shrink-0"}>
      <svg viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Simple file shape with folded corner */}
        <path 
          d="M0 4C0 1.79086 1.79086 0 4 0H22L32 10V36C32 38.2091 30.2091 40 28 40H4C1.79086 40 0 38.2091 0 36V4Z" 
          fill={config.color}
        />
        {/* Folded corner overlay */}
        <path 
          d="M22 0L32 10H26C23.7909 10 22 8.20914 22 6V0Z" 
          fill="white" 
          fillOpacity="0.3"
        />
        {/* Extension Text */}
        <text 
          x="16" 
          y="30" 
          fill="white" 
          fontSize="7" 
          fontWeight="900" 
          textAnchor="middle" 
          className="select-none"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {type}
        </text>
      </svg>
    </div>
  );
};
