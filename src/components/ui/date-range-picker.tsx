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

const presets = [
  { label: "Today", getValue: () => ({ from: new Date(), to: new Date() }) },
  {
    label: "Yesterday",
    getValue: () => {
      const d = new Date();
      d.setDate(d.getDate() - 1);
      return { from: d, to: d };
    }
  },
  {
    label: "This week",
    getValue: () => {
      const now = new Date();
      const first = now.getDate() - now.getDay();
      return { from: new Date(now.setDate(first)), to: new Date() };
    }
  },
  {
    label: "Last week",
    getValue: () => {
      const now = new Date();
      const last = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const first = last.getDate() - last.getDay();
      const end = first + 6;
      return { from: new Date(last.setDate(first)), to: new Date(last.setDate(end)) };
    }
  },
  {
    label: "This month",
    getValue: () => {
      const now = new Date();
      return { from: new Date(now.getFullYear(), now.getMonth(), 1), to: now };
    }
  },
  {
    label: "Last month",
    getValue: () => {
      const now = new Date();
      return {
        from: new Date(now.getFullYear(), now.getMonth() - 1, 1),
        to: new Date(now.getFullYear(), now.getMonth(), 0)
      };
    }
  },
  {
    label: "This year",
    getValue: () => {
      const now = new Date();
      return { from: new Date(now.getFullYear(), 0, 1), to: now };
    }
  },
  {
    label: "Last year",
    getValue: () => {
      const now = new Date();
      return {
        from: new Date(now.getFullYear() - 1, 0, 1),
        to: new Date(now.getFullYear() - 1, 11, 31)
      };
    }
  },
  { label: "All time", getValue: () => ({ from: undefined, to: undefined }) },
];

export function DateRangePicker({
  className,
  value,
  onChange,
  placeholder = "Select date range",
}: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [leftMonth, setLeftMonth] = React.useState(new Date());
  const [hoverDate, setHoverDate] = React.useState<Date | null>(null);

  const [range, setRange] = React.useState<DateRange>(
    value || { from: undefined, to: undefined }
  );

  React.useEffect(() => {
    if (value) setRange(value);
  }, [value]);

  const handleDateClick = (date: Date) => {
    let newRange: DateRange;
    if (!range.from || (range.from && range.to)) {
      newRange = { from: date, to: undefined };
    } else if (date < range.from) {
      newRange = { from: date, to: undefined };
    } else {
      newRange = { from: range.from, to: date };
    }
    setRange(newRange);
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return "";
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const rightMonth = new Date(leftMonth.getFullYear(), leftMonth.getMonth() + 1, 1);

  const renderCalendar = (monthDate: Date, showLeftNav = false, showRightNav = false) => {
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) days.push(null); // Adjust for Mo-Su
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));

    return (
      <div className="w-[280px]">
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
            {showLeftNav && (
              <button
                type="button"
                onClick={() => setLeftMonth(new Date(year, month - 1, 1))}
                className="p-1 hover:bg-slate-100 rounded-md cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4 text-slate-500" />
              </button>
            )}
          </div>
          <h4 className="text-sm font-medium text-slate-900">
            {monthDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </h4>
          <div className="flex items-center gap-2">
            {showRightNav && (
              <button
                type="button"
                onClick={() => setLeftMonth(new Date(leftMonth.getFullYear(), leftMonth.getMonth() + 1, 1))}
                className="p-1 hover:bg-slate-100 rounded-md cursor-pointer"
              >
                <ChevronRight className="h-4 w-4 text-slate-500" />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-y-1 text-center mb-2">
          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
            <span key={d} className="text-[11px] font-medium text-slate-400 uppercase">{d}</span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-0.5">
          {days.map((date, i) => {
            if (!date) return <div key={i} className="h-9 w-9" />;

            const isFrom = range.from && date.toDateString() === range.from.toDateString();
            const isTo = range.to && date.toDateString() === range.to.toDateString();
            const isHover = !range.to && hoverDate && date.toDateString() === hoverDate.toDateString();

            const inRange = range.from && (range.to || hoverDate) && (
              (date > range.from && date < (range.to || (hoverDate as Date))) ||
              (date < range.from && date > (range.to || (hoverDate as Date)))
            );

            return (
              <button
                key={date.toISOString()}
                type="button"
                onMouseEnter={() => range.from && !range.to && setHoverDate(date)}
                onClick={() => handleDateClick(date)}
                className={cn(
                  "h-9 w-9 text-xs flex items-center justify-center transition-all relative group cursor-pointer",
                  (isFrom || isTo || isHover) && "z-10",
                  isFrom && "bg-[var(--primary)] text-white rounded-full font-bold",
                  isTo && "bg-[var(--primary)] text-white rounded-full font-bold",
                  isHover && "bg-[var(--primary)]/50 text-white rounded-full",
                  inRange && "bg-[var(--primary)]/5 text-[var(--primary)]"
                )}
              >
                {/* Indicator dot as seen in image */}
                {date.getDate() === 24 && !isFrom && !isTo && (
                   <div className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[var(--primary)]" />
                )}
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const handleApply = () => {
    onChange?.(range);
    setOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 mt-2 cursor-pointer px-3 py-3 rounded-sm border border-[#EAECF0] bg-white hover:bg-slate-50 transition-colors"
      >
        <Calendar className="h-4 w-4 text-[#344054]" strokeWidth={1.5} />
        <span className="text-sm font-medium text-[#344054]">
          {range.from ? (range.to ? `${formatDate(range.from)} – ${formatDate(range.to)}` : formatDate(range.from)) : placeholder}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-900/80 ">
          <div
            className="absolute inset-0"
            onClick={() => setOpen(false)}
          />

          <div className="relative flex bg-white rounded-sm  border border-slate-200 overflow-hidden max-w-[840px] animate-in fade-in zoom-in-95 duration-200">
            {/* Sidebar Presets */}
            <div className="w-[180px] border-r border-slate-100 p-2 flex flex-col gap-0.5">
              {presets.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => {
                    const val = p.getValue();
                    setRange(val);
                  }}
                  className="w-full text-left px-4 py-3 text-[13px] text-slate-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex p-6 gap-8">
                {renderCalendar(leftMonth, true, false)}
                {renderCalendar(rightMonth, false, true)}
              </div>

              {/* Footer */}
              <div className="mt-auto border-t border-slate-100 p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 min-w-[120px]">
                    {range.from ? formatDate(range.from) : "Start date"}
                  </div>
                  <span className="text-slate-400">–</span>
                  <div className="px-3 py-3 border border-slate-200 rounded-sm text-sm text-slate-600 min-w-[120px]">
                    {range.to ? formatDate(range.to) : "End date"}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-sm hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleApply}
                    className="px-8 py-3 text-sm font-medium text-white bg-[var(--primary)] rounded-sm hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    Apply
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
