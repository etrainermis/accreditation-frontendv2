"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MoreVertical } from "lucide-react";

const modules = [
  { id: "#1", name: "JavaScript", percentage: 10.3, color: "#0A77FF" },
  { id: "#2", name: "Fundamentals Of Programming", percentage: 8.30, color: "#0A77FF" },
  { id: "#3", name: "Embedded Systems", percentage: 8.00, color: "#0A77FF" },
  { id: "#4", name: "Cyber Security", percentage: 4.02, color: "#0A77FF" },
  { id: "#5", name: "Machine Learing", percentage: 3.40, color: "#0A77FF" },
];

export function MostRequestedModules() {
  return (
    <Card className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up h-full">
      <CardContent className="h-full p-4 flex flex-col">
        <div className="flex items-start  justify-between ">
          <div className="space-y-1 w-full">
            <h3 className="text-sm  text-slate-900">Most Requested Modules</h3>
            <p className="text-[11px] text-slate-400 font-medium   min-w-[240px] leading-snug">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <MoreVertical className="h-4 w-4 text-slate-400 cursor-pointer" />
        </div>

        <div className="mt-4 pt-2 flex border-t items-baseline gap-2">
          <span className="text-2xl font-bold text-slate-900">230</span>
          <span className="text-[11px] font-medium text-slate-400">Modules</span>
        </div>

        <div className="mt-4 space-y-4">
          {modules.map((mod) => (
            <div key={mod.id} className="flex items-center gap-4">
              <span className="text-xs text-slate-400 w-4">{mod.id}</span>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px]  text-slate-700">{mod.name}</span>
                  <span className="text-[11px] font-bold text-slate-900">{mod.percentage.toFixed(2)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                  <div 
                    className="h-full bg-[#0A77FF] rounded-full transition-all duration-1000" 
                    style={{ width: `${(mod.percentage / 12) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-end">
          <button className="px-4 py-1.5 text-xs  text-slate-600 border border-slate-200 rounded-[6px] hover:bg-slate-50 transition-colors">
            View full report
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
