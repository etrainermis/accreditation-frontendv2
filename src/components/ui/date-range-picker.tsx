"use client";

import * as React from "react";
import { Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

interface DateRangePickerProps {
  className?: string;
  value?: DateRange;
  onChange?: (range: DateRange) => void;
  placeholder?: string;
}

export function DateRangePicker({
  className,
  value,
  onChange,
  placeholder = "Select date range",
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [month, setMonth] = React.useState(new Date());
  const [hoverDate, setHoverDate] = React.useState<Date | null>(null);
  
  const [range, setRange] = React.useState<DateRange>(
    value || { from: undefined, to: undefined }
  );

  // Synchronize with external value
  React.useEffect(() => {
    if (value) setRange(value);
  }, [value]);

  const handleDateClick = (date: Date) => {
    let newRange: DateRange;
    
    if (!range.from || (range.from && range.to)) {
      newRange = { from: date, to: undefined };
    } else if (date < range.from) {
      newRange = { from: date, to: undefined };
    } else if (date.getTime() === range.from.getTime()) {
      // Toggle off if same date clicked twice as start
      newRange = { from: undefined, to: undefined };
    } else {
      newRange = { from: range.from, to: date };
    }
    
    setRange(newRange);
    onChange?.(newRange);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const displayText = range.from
    ? range.to
      ? `${formatDate(range.from)} – ${formatDate(range.to)}`
      : formatDate(range.from)
    : placeholder;

  // Calendar Helper Logic
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const currentYear = month.getFullYear();
  const currentMonth = month.getMonth();
  
  const days = [];
  const totalDays = daysInMonth(currentYear, currentMonth);
  const startDay = firstDayOfMonth(currentYear, currentMonth);

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(currentYear, currentMonth, i));
  }

  const isSelected = (date: Date) => {
    if (!range.from) return false;
    if (range.from.toDateString() === date.toDateString()) return true;
    if (range.to && range.to.toDateString() === date.toDateString()) return true;
    return false;
  };

  const isInRange = (date: Date) => {
    const from = range.from;
    const to = range.to || hoverDate;
    if (!from || !to) return false;
    
    const dTime = date.getTime();
    const fTime = from.getTime();
    const tTime = to.getTime();
    
    if (fTime < tTime) {
      return dTime > fTime && dTime < tTime;
    } else {
      return dTime > tTime && dTime < fTime;
    }
  };

  const nextMonth = () => setMonth(new Date(currentYear, currentMonth + 1, 1));
  const prevMonth = () => setMonth(new Date(currentYear, currentMonth - 1, 1));

  return (
    <div className={cn("grid gap-2", className)}>
      <button 
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-sm border border-[#EAECF0] bg-white shadow-[0_1px_2px_0_rgba(16,24,40,0.05)] cursor-pointer hover:bg-slate-50 transition-colors outline-none",
          open && "ring-1 ring-[var(--primary)] border-[var(--primary)]"
        )}
      >
        <Calendar className="h-4 w-4 text-[#344054]" strokeWidth={1.5} />
        <span className="text-sm font-medium text-[#344054] whitespace-nowrap">{displayText}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-slate-900/80 transition-opacity" 
            onClick={() => setOpen(false)}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-[360px] bg-white rounded-md shadow-2xl border border-slate-200 p-6 animate-in zoom-in-95 duration-200"
            onMouseLeave={() => setHoverDate(null)}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-900">
                {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h3>
              <div className="flex gap-1">
                <button 
                  type="button"
                  onClick={prevMonth} 
                  className="p-1 hover:bg-slate-100 rounded-md transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 text-slate-600" />
                </button>
                <button 
                  type="button"
                  onClick={nextMonth} 
                  className="p-1 hover:bg-slate-100 rounded-md transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-slate-600" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                <span key={d} className="text-[11px] font-medium text-slate-400 uppercase tracking-tight">
                  {d}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {days.map((date, i) => {
                if (!date) return <div key={`empty-${i}`} className="h-8 w-8" />;
                
                const selected = isSelected(date);
                const inRange = isInRange(date);
                const isStart = range.from && date.toDateString() === range.from.toDateString();
                const isEnd = (range.to && date.toDateString() === range.to.toDateString()) || 
                            (!range.to && hoverDate && date.toDateString() === hoverDate.toDateString());

                return (
                  <button
                    key={date.toISOString()}
                    type="button"
                    onMouseEnter={() => range.from && !range.to && setHoverDate(date)}
                    onClick={() => handleDateClick(date)}
                    className={cn(
                      "h-8 w-8 text-xs rounded-md flex items-center justify-center transition-all relative",
                      selected && "bg-[var(--primary)] text-white font-bold z-10",
                      !selected && inRange && "bg-[var(--primary)]/10 text-[var(--primary)] rounded-none",
                      !selected && !inRange && "hover:bg-slate-100 text-slate-700",
                      isStart && (range.to || hoverDate) && "rounded-r-none",
                      isEnd && range.from && "rounded-l-none",
                      !range.to && hoverDate && date.toDateString() === hoverDate.toDateString() && "bg-[var(--primary)]/50 text-white"
                    )}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex justify-between items-center gap-2 pt-4 border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => {
                    const empty = { from: undefined, to: undefined };
                    setRange(empty);
                    onChange?.(empty);
                  }}
                  className="text-xs cursor-pointer text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
                >
                  <X className="h-3 w-3 cursor-pointer" /> Clear selection
                </button>
                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-xs cursor-pointer px-3 py-1.5 border border-slate-200 rounded-sm hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="button"
                    onClick={() => setOpen(false)}
                    className="text-xs  bg-[var(--primary)] text-white px-4 py-1.5 rounded-sm cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    Apply Range
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
