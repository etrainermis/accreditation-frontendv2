"use client";

import React, { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { EvaluationsSubNav } from "@/components/navigation/evaluations-sub-nav";
import { DateRangePicker, DateRange } from "@/components/ui/date-range-picker";
import { ScheduleContent } from "@/features/evaluations/components/schedule-content";

export default function SupervisorSchedulePage() {
  const [dateRange, setDateRange] = useState<DateRange>({
    from: new Date(2024, 0, 6),
    to: new Date(2024, 0, 13),
  });

  return (
    <PageContainer
      role="supervisor"
      title="Due Diligence Schedule"
      description="View evaluation schedules"
    >
      <EvaluationsSubNav role="supervisor">
        <DateRangePicker value={dateRange} onChange={setDateRange} />
      </EvaluationsSubNav>
      <ScheduleContent role="supervisor" />
    </PageContainer>
  );
}
