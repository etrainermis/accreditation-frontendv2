"use client";

import React from "react";
import { cn } from "@/lib/utils/cn";
import { ArrowDown, Search, X, ListFilter } from "lucide-react";

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
  title?: string;
  description?: string;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  filters?: React.ReactNode;
  headerAction?: React.ReactNode;
  showPagination?: boolean;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function DataTable<T extends { id: string | number }>({ 
  data, 
  columns, 
  onRowClick, 
  className,
  title,
  description,
  searchPlaceholder = "Search",
  searchValue,
  onSearchChange,
  filters,
  headerAction,
  showPagination = false,
  currentPage = 1,
  totalPages = 10,
  onPageChange
}: DataTableProps<T>) {
  return (
    <div className={cn("flex flex-col", className)}>
      {/* Table Header/Toolbar - OUTSIDE the border container */}
      {(title || description) && (
        <div className="mb-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-md text-[#101828]">{title}</h2>
              <p className="text-xs text-[#64748B]">{description}</p>
            </div>
            {headerAction && (
              <div className="shrink-0">
                {headerAction}
              </div>
            )}
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm rounded-sm focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-all border border-slate-100 bg-white" 
                type="text" 
              />
            </div>
            
            <div className="flex items-center gap-2">
              {filters ? (
                filters
              ) : (
                <>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs text-[#344054] border border-slate-100 bg-white">
                    <span>All time</span>
                    <X className="h-3 w-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs text-[#344054] border border-slate-100 bg-white">
                    <span>US, AU, +4</span>
                    <X className="h-3 w-3 text-slate-400 cursor-pointer hover:text-slate-600 transition-colors" />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-3 rounded-sm text-xs text-[#344054] hover:bg-slate-100 transition-colors border border-slate-100 bg-white">
                    <ListFilter className="h-4 w-4 text-slate-500" />
                    <span>More filters</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Table Container - Bordered and Rounded */}
      <div className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="w-full border-collapse text-left min-w-[1000px]">
            <thead>
              <tr className="border-b border-[#EAECF0]">
                <th className="pl-6 pr-2 py-4 w-10 text-right">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 rounded-sm border-[#D0D5DD] text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                  />
                </th>
                {columns.map((col, idx) => (
                  <th 
                    key={idx} 
                    className={cn(
                      "pr-6 pl-2 py-4 text-[13px] text-[#475467] font-normal",
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
                  <td className="pl-6 pr-2 py-4 text-right">
                    <input 
                      type="checkbox" 
                      className="h-4 w-4 rounded-sm border-[#D0D5DD] text-[var(--primary)] focus:ring-[var(--primary)] cursor-pointer" 
                    />
                  </td>
                  {columns.map((col, idx) => (
                    <td key={idx} className={cn("pr-6 pl-2 py-4 align-middle", col.className)}>
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

        {showPagination && (
          <div className="p-6 flex items-center justify-between border-t border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => onPageChange?.(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-4 py-3 text-xs cursor-pointer text-[#344054] rounded-sm bg-slate-50 hover:bg-slate-100 transition-all border border-[#D0D5DD] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button 
                onClick={() => onPageChange?.(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="px-4 py-3 text-xs cursor-pointer text-[#344054] bg-slate-50 rounded-sm hover:bg-slate-100 transition-all border border-[#D0D5DD] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <span className="text-xs text-slate-500">
              Page {currentPage} of {totalPages}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
