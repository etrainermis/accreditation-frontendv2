"use client";

import React, { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { ScheduleContent } from "@/features/evaluations/components/schedule-content";

export default function EvaluatorSchedulePage() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 6),
    to: new Date(2024, 0, 13),
  });

  return (
    <PageContainer
      role="evaluator"
      title="Manage Accreditation Evalutions"
      description="View & manage active elders and requests"
    >
      <EvaluationsSubNav role="evaluator">
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </EvaluationsSubNav>
      <ScheduleContent />
    </PageContainer>
  );
}
