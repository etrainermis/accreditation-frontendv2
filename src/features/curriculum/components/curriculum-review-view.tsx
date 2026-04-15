"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle,
  MessageSquare,
  RotateCcw,
  XCircle,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { DocumentViewerModal } from "@/components/ui/document-viewer-modal";
import { FileListItem } from "@/components/ui/file-list-item";
import { PrimaryButton } from "@/components/ui/primary-button";
import { cn } from "@/lib/utils/cn";
import { mockApplications } from "@/lib/utils/application-utils";

export function CurriculumReviewView({ id }: { id: string }) {
  const router = useRouter();
  const application = mockApplications.find((app) => app.id === id) || mockApplications[0];
  const [status, setStatus] = useState<"approve" | "reject" | "revert" | null>(null);
  const [comment, setComment] = useState("");
  const [selectedDocumentId, setSelectedDocumentId] = useState<string | null>(null);

  const documents = [
    {
      id: "1",
      name: "Trade Course Outline.pdf",
      size: "2.4 MB",
      type: "PDF" as const,
      note: "Maps modules to competency levels",
      url: "/documents/curriculum/trade-course-outline.pdf",
      previewContent: [
        "Institution: Sample Technical Institute",
        "Program: Automotive Technology",
        "Purpose: Outline curriculum structure and outcomes.",
        "Module 1 covers workshop safety and compliance requirements before learners access equipment and supervised practice.",
        "Module 2 introduces engine systems fundamentals with theory blocks connected to guided lab sessions and recorded competencies.",
        "Module 3 focuses on diagnostics and maintenance, including outcome mapping for practical troubleshooting tasks.",
        "Each module references the expected accreditation criteria and the evidence package submitted with the application.",
      ],
    },
    {
      id: "2",
      name: "Syllabus_2026_Final.pdf",
      size: "1.8 MB",
      type: "PDF" as const,
      note: "Shows weekly delivery and outcomes",
      url: "/documents/curriculum/syllabus-2026-final.pdf",
      previewContent: [
        "Semester duration: 16 weeks.",
        "Delivery mode: blended theory sessions and workshop practice.",
        "Assessment mix: continuous assessment, applied project, and final practical evaluation.",
        "Weeks 1 to 4 cover foundation knowledge, tool handling, and learner orientation.",
        "Weeks 5 to 10 focus on core technical instruction with supervised laboratory and workshop activities.",
        "Weeks 11 to 16 concentrate on applied tasks, revision, and final competency evaluation aligned to the submitted outcomes.",
      ],
    },
    {
      id: "3",
      name: "Practical_Workshop_Manual.pdf",
      size: "5.6 MB",
      type: "PDF" as const,
      note: "Supports hands-on learning evidence",
      url: "/documents/curriculum/practical-workshop-manual.pdf",
      previewContent: [
        "Safety checks must be completed before each session and logged by the supervising instructor.",
        "Learners rotate through instructor-led and supervised stations to demonstrate the required practical competencies.",
        "The manual defines tools, equipment handling rules, and expected task completion standards per module.",
        "Evidence includes observation sheets, task rubrics, workshop logs, and moderation notes.",
        "All practical sessions are cross-referenced to the curriculum map so evaluators can confirm alignment between delivery and outcomes.",
      ],
    },
    {
      id: "4",
      name: "Assessment_Guidelines.pdf",
      size: "1.2 MB",
      type: "PDF" as const,
      note: "Defines grading and verification criteria",
      url: "/documents/curriculum/assessment-guidelines.pdf",
      previewContent: [
        "Theory weight: 40 percent.",
        "Practical weight: 50 percent.",
        "Portfolio and attendance: 10 percent.",
        "Each assessment tool references a learning outcome, competency level, and verification method.",
        "Borderline decisions require moderation, supporting evaluator notes, and traceable approval in the results package.",
        "Rubrics and marked evidence are retained with the final curriculum review submission.",
      ],
    },
  ];
  const selectedDocument = documents.find((doc) => doc.id === selectedDocumentId) ?? null;

  const reviewAreas = [
    {
      title: "Learning Outcomes Alignment",
      status: "Needs verification",
      description: "Confirm that module outcomes align with accreditation criteria and the required competency level.",
    },
    {
      title: "Assessment Evidence",
      status: "Partially evidenced",
      description: "Check whether practical and theory assessments adequately measure the stated outcomes.",
    },
    {
      title: "Module Structure",
      status: "Ready to review",
      description: "Verify sequencing, contact hours, and balance between theory and practice.",
    },
    {
      title: "Supporting Documents",
      status: "Needs clarification",
      description: "Ensure manuals, syllabi, and curriculum guides are complete, current, and mutually consistent.",
    },
  ];

  return (
    <div className="flex w-full max-w-5xl flex-col gap-6 text-left lg:max-w-6xl xl:max-w-7xl">
      <button
        onClick={() => router.push("/curriculum-evaluator/applications")}
        className="group flex w-fit items-center gap-2 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-800"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Applications
      </button>

      <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-md border border-slate-200 bg-white p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-2">
                <h3 className="text-md text-[#101828]">{application.institution.name}</h3>
                <p className="text-[13px] text-[#64748B]">
                  Review the curriculum package for {application.trade.name} and confirm whether the submitted materials support accreditation requirements.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="border-0 bg-slate-100 normal-case tracking-normal text-slate-700">
                  {application.trade.name}
                </Badge>
                <Badge className="border-0 bg-blue-50 normal-case tracking-normal text-blue-700">
                  {application.stage}
                </Badge>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6">
            <div className="mb-6">
              <div>
                <h3 className="text-md text-[#101828]">Curriculum Materials</h3>
                <p className="text-[13px] text-[#64748B]">
                  Review the submitted package before making a curriculum decision.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setSelectedDocumentId(doc.id)}
                    className="block w-full rounded-sm text-left transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0A77FF]/20"
                  >
                    <FileListItem name={doc.name} size={doc.size} progress={100} type={doc.type} />
                  </button>
                  <div className="flex items-center justify-between gap-3 pl-1">
                    <p className="text-[11px] font-medium text-slate-500">{doc.note}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedDocumentId(doc.id)}
                      className="text-[13px] font-medium text-[#0A77FF] transition-colors hover:text-[#085fca]"
                    >
                      View document
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6">
            <h3 className="text-md text-[#101828]">Curriculum Review Checklist</h3>
            <p className="mb-4 text-[13px] text-[#64748B]">
              Follow the same review rhythm used elsewhere in the portal, but keep the content focused on curriculum evidence.
            </p>

            <div className="space-y-3">
              {reviewAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-sm border border-slate-100 bg-white p-4 transition-colors hover:bg-slate-50/70"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-1">
                      <p className="text-[13px] font-medium text-slate-900">{area.title}</p>
                      <p className="text-[13px] leading-relaxed text-slate-500">{area.description}</p>
                    </div>
                    <Badge
                      className={cn(
                        "w-fit border-0 normal-case tracking-normal",
                        area.status === "Ready to review"
                          ? "bg-emerald-50 text-emerald-700"
                          : area.status === "Partially evidenced"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-rose-50 text-rose-700",
                      )}
                    >
                      {area.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6">
            <h3 className="text-md text-[#101828]">Reviewer Guidance</h3>
            <p className="mb-4 text-[13px] text-[#64748B]">Reference notes for this curriculum review.</p>
            <p className="whitespace-pre-line text-[13px] leading-relaxed text-slate-600">
              Start by confirming that the submitted curriculum package is complete and internally consistent.
              Then verify whether the learning outcomes, module structure, and assessment tools clearly support the required accreditation standards for {application.trade.name}.
              {"\n\n"}
              Use the supporting documents to identify missing evidence, inconsistent descriptions, or unclear competency mapping. If anything is incomplete, return the package with precise corrective remarks.
            </p>
          </div>
        </div>

        <div className="h-fit space-y-6 lg:sticky lg:top-6">
          <div className="rounded-md border border-slate-200 bg-white p-6 shadow-none">
            <h3 className="text-md text-[#101828]">Evaluation Decision</h3>
            <p className="mb-6 text-[13px] text-[#64748B]">Use the existing decision flow and keep remarks explicit.</p>

            <div className="mb-8 flex flex-col gap-3">
              <button
                onClick={() => setStatus("approve")}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm border p-4 text-left transition-all sm:items-center",
                  status === "approve" ? "border-emerald-500 bg-emerald-50 font-bold text-emerald-700" : "border-slate-100 font-medium text-slate-600 hover:bg-slate-50",
                )}
              >
                <CheckCircle className={cn("h-5 w-5", status === "approve" ? "text-emerald-500" : "text-slate-400")} />
                <span className="text-[13px]">Approve Curriculum</span>
              </button>

              <button
                onClick={() => setStatus("revert")}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm border p-4 text-left transition-all sm:items-center",
                  status === "revert" ? "border-orange-500 bg-orange-50 font-bold text-orange-700" : "border-slate-100 font-medium text-slate-600 hover:bg-slate-50",
                )}
              >
                <RotateCcw className={cn("h-5 w-5", status === "revert" ? "text-orange-500" : "text-slate-400")} />
                <span className="text-[13px]">Revert for Correction</span>
              </button>

              <button
                onClick={() => setStatus("reject")}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-sm border p-4 text-left transition-all sm:items-center",
                  status === "reject" ? "border-red-500 bg-red-50 font-bold text-red-700" : "border-slate-100 font-medium text-slate-600 hover:bg-slate-50",
                )}
              >
                <XCircle className={cn("h-5 w-5", status === "reject" ? "text-red-500" : "text-slate-400")} />
                <span className="text-[13px]">Reject Application</span>
              </button>
            </div>

            {(status === "revert" || status === "reject") && (
              <div className="mb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                <label className="mb-2 block text-[13px] font-medium text-slate-500">Evaluator remarks (required)</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-slate-400" />
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder={status === "revert" ? "Explain what needs correction..." : "Explain grounds for rejection..."}
                    className="min-h-[120px] w-full rounded-sm border border-slate-200 bg-slate-50 p-4 pl-12 text-[13px] transition-all focus:border-[#0A77FF] focus:outline-none"
                  />
                </div>
              </div>
            )}

            <PrimaryButton
              label={status ? `Confirm ${status.charAt(0).toUpperCase() + status.slice(1)}` : "Select Decision"}
              className="w-full py-3 text-[13px] transition-all"
              hideIcon={true}
              disabled={!status || ((status === "revert" || status === "reject") && !comment)}
              onClick={() => {
                alert(`Decision submitted: ${status}\nComment: ${comment}`);
                router.push("/curriculum-evaluator/applications");
              }}
            />
          </div>

          <div className="rounded-md border border-slate-200 bg-white p-6 text-slate-900">
            <h3 className="text-md text-[#101828]">Application Info</h3>
            <p className="mb-4 text-[13px] text-[#64748B]">Summary details for the selected curriculum package.</p>
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-[11px] text-slate-500">Institution</p>
                <p className="text-[13px] font-medium text-slate-900">{application.institution.name}</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] text-slate-500">Trade Program</p>
                <p className="text-[13px] font-medium text-slate-900">{application.trade.name} ({application.trade.category})</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] text-slate-500">Review Scope</p>
                <p className="text-[13px] font-medium text-slate-900">Curriculum structure, outcomes, and assessment evidence</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] text-slate-500">Applicant</p>
                <p className="text-[13px] font-medium text-slate-900">{application.applicant.name}</p>
              </div>

              <div className="rounded-sm border border-slate-100 bg-slate-50 p-4">
                <p className="mb-2 text-[13px] font-medium text-slate-900">Checklist</p>
                <ul className="space-y-2 text-[13px] text-slate-500">
                  <li>Confirm documents are complete</li>
                  <li>Check outcome-to-module alignment</li>
                  <li>Validate assessment support</li>
                  <li>Record decision with clear remarks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DocumentViewerModal
        isOpen={Boolean(selectedDocument)}
        onClose={() => setSelectedDocumentId(null)}
        title={selectedDocument?.name ?? ""}
        fileUrl={selectedDocument?.url ?? ""}
        fileTypeLabel={selectedDocument?.type ?? "PDF"}
        fileSize={selectedDocument?.size}
        note={selectedDocument?.note}
        previewContent={selectedDocument?.previewContent}
        showDownload={true}
      />
    </div>
  );
}
