"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { ArrowDown } from "lucide-react";

export interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
  headerClassName?: string;
  sortable?: boolean;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  className?: string;
}

export function DataTable<T extends { id: string | number }>({ 
  data, 
  columns, 
  onRowClick, 
  className 
}: DataTableProps<T>) {
  return (
    <div className={cn("overflow-x-auto no-scrollbar", className)}>
      <table className="w-full border-collapse text-left min-w-[1000px]">
        <thead>
          <tr className="border-b border-[#EAECF0]">
            <th className="px-6 py-4 w-12 text-center">
              <input 
                type="checkbox" 
                className="h-4 w-4 rounded border-[#D0D5DD] text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
              />
            </th>
            {columns.map((col, idx) => (
              <th 
                key={idx} 
                className={cn(
                  "px-6 py-4 text-[13px] text-[#475467]",
                  col.headerClassName
                )}
              >
                <div 
                  className={cn(
                    "flex items-start gap-1 select-none group",
                    col.sortable && "cursor-pointer"
                  )}
                >
                  <span>{col.header}</span>
                  {col.sortable && (
                    <ArrowDown className="h-4 w-4 text-[#667085] opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.map((item) => (
            <tr 
              key={item.id} 
              onClick={() => onRowClick?.(item)}
              className={cn(
                "group transition-all duration-200 hover:bg-slate-50/80",
                "odd:bg-[#FAFDFF]",
                onRowClick && "cursor-pointer"
              )}
            >
              <td className="px-6 py-4 text-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-[#D0D5DD] text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                />
              </td>
              {columns.map((col, idx) => (
                <td key={idx} className={cn("px-6 py-4 align-middle", col.className)}>
                  {typeof col.accessor === "function" 
                    ? col.accessor(item) 
                    : (item[col.accessor] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
