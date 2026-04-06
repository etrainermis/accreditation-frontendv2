"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";

const trades = [
  { name: "Software Engineering & Embe...", value: 45, color: "#0A77FF" },
  { name: "Masonry", value: 25, color: "#59A8FF" },
  { name: "Welding", value: 15, color: "#84C3FF" },
  { name: "Music & Arts", value: 10, color: "#D1E9FF" },
  { name: "Tailoring", value: 5, color: "#EFF8FF" },
];

export function ApplicationsByTradeChart() {
  return (
    <Card className="rounded-md border border-slate-200 bg-white shadow-none overflow-hidden animate-slide-up h-full">
      <CardContent className="h-full p-4 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="relative h-60 w-60">
            {/* Simple CSS-based Pie Chart for High Fidelity */}
            <div 
              className="h-full w-full rounded-full" 
              style={{
                background: `conic-gradient(
                  #0A77FF 0.0% 45.0%, 
                  #59A8FF 45.0% 70.0%, 
                  #84C3FF 70.0% 85.0%, 
                  #D1E9FF 85.0% 95.0%, 
                  #EFF8FF 95.0% 100.0%
                )`
              }}
            />
          </div>
          
          <div className="flex flex-col gap-3">
            {trades.map((trade) => (
              <div key={trade.name} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: trade.color }} />
                <span className="text-[11px] text-slate-500 font-semibold truncate max-w-[140px]">
                  {trade.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-1">
          <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Applications By Trade</h4>
          <p className="text-[11px] text-slate-400 font-medium">Total Applications</p>
          <div className="flex items-baseline gap-3 pt-1">
            <span className="text-2xl font-bold text-slate-900">230</span>
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#34C759]">
              <MoveUpRight className="h-3 w-3" strokeWidth={3} />
              <span>3.4%</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-end">
          <button className="px-4 py-1.5 text-xs font-semibold text-slate-600 border border-slate-200 rounded-[6px] hover:bg-slate-50 transition-colors">
            View full report
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
