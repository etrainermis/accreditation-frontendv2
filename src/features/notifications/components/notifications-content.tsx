"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserRole } from "@/types/auth";

interface NotificationsContentProps {
  role: UserRole;
}

export function NotificationsContent({ role }: NotificationsContentProps) {
  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-none">
      <CardContent className="p-6 text-sm text-slate-500">
        No notifications for {role === "super-admin" ? "Super Admin" : "Evaluator"} at this time.
      </CardContent>
    </Card>
  );
}
