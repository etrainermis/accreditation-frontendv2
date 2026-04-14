"use client";

import React, { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import { CertificateAccessContent } from "@/features/certificates/components/certificate-access-content";

export default function SupervisorCertificatesPage() {
  return (
    <PageContainer
      role="supervisor"
      title="Certificate Access Management"
      description="Grant certificate access to approved applications"
    >
      <CertificateAccessContent />
    </PageContainer>
  );
}
