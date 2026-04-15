"use client";

import React, { useEffect } from "react";
import { ExternalLink, FileText, ImageIcon, Video, X } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type ViewerType = "pdf" | "image" | "video" | "text" | "web" | "fallback";

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  fileUrl: string;
  fileTypeLabel: string;
  fileSize?: string;
  note?: string;
  showDownload?: boolean;
  previewContent?: string[];
}

function getViewerType(fileUrl: string, fileTypeLabel: string): ViewerType {
  const lowerUrl = fileUrl.toLowerCase();
  const lowerType = fileTypeLabel.toLowerCase();

  if (lowerUrl.endsWith(".pdf") || lowerType === "pdf") return "pdf";
  if (/\.(png|jpg|jpeg|gif|webp|svg)$/.test(lowerUrl) || lowerType === "img") return "image";
  if (/\.(mp4|webm|ogg)$/.test(lowerUrl) || lowerType === "mp4") return "video";
  if (/\.(txt|md|csv)$/.test(lowerUrl)) return "text";
  if (/\.(html|htm)$/.test(lowerUrl) || lowerType === "fig") return "web";

  return "fallback";
}

export function DocumentViewerModal({
  isOpen,
  onClose,
  title,
  fileUrl,
  fileTypeLabel,
  fileSize,
  note,
  showDownload = false,
  previewContent,
}: DocumentViewerModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const viewerType = getViewerType(fileUrl, fileTypeLabel);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/45 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="flex h-[min(88vh,920px)] w-full max-w-6xl flex-col overflow-hidden rounded-md border border-slate-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <div className="space-y-1">
            <h3 className="text-md text-[#101828]">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
              <span className="rounded-sm bg-slate-100 px-2 py-1 font-medium text-slate-600">{fileTypeLabel}</span>
              {fileSize ? <span>{fileSize}</span> : null}
              {note ? <span>{note}</span> : null}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={fileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <ExternalLink className="h-4 w-4" />
              Open
            </a>
            {showDownload ? (
              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-3 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                Download
              </a>
            ) : null}
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-sm border border-slate-200 bg-white p-2 text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
              aria-label="Close document viewer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-slate-50 p-4 sm:p-5">
          <div className="h-full overflow-hidden rounded-sm border border-slate-200 bg-white">
            {viewerType === "pdf" && previewContent?.length ? (
              <div className="h-full overflow-y-auto bg-slate-50 p-4 sm:p-8">
                <div className="mx-auto max-w-3xl rounded-sm border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="border-b border-slate-100 pb-4">
                    <p className="text-[11px] font-medium tracking-[0.08em] text-slate-500">Curriculum document preview</p>
                    <h4 className="mt-2 text-md text-[#101828]">{title}</h4>
                    {note ? <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{note}</p> : null}
                  </div>

                  <div className="space-y-4 pt-5">
                    {previewContent.map((paragraph, index) => (
                      <p key={`${title}-${index}`} className="text-[13px] leading-7 text-slate-700">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ) : viewerType === "pdf" ? (
              <iframe src={fileUrl} title={title} className="h-full w-full" />
            ) : null}

            {viewerType === "image" && (
              <div className="flex h-full items-center justify-center bg-slate-50 p-4">
                <img src={fileUrl} alt={title} className="max-h-full max-w-full object-contain" />
              </div>
            )}

            {viewerType === "video" && (
              <div className="flex h-full items-center justify-center bg-slate-950 p-4">
                <video src={fileUrl} controls className="max-h-full max-w-full rounded-sm" />
              </div>
            )}

            {(viewerType === "text" || viewerType === "web") && (
              <iframe src={fileUrl} title={title} className="h-full w-full" />
            )}

            {viewerType === "fallback" && (
              <div className="flex h-full items-center justify-center p-6">
                <div className="w-full max-w-md rounded-md border border-slate-200 bg-white p-6 text-center">
                  <div
                    className={cn(
                      "mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full",
                      fileTypeLabel === "IMG"
                        ? "bg-emerald-50 text-emerald-600"
                        : fileTypeLabel === "MP4"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-slate-100 text-slate-600",
                    )}
                  >
                    {fileTypeLabel === "IMG" ? (
                      <ImageIcon className="h-5 w-5" />
                    ) : fileTypeLabel === "MP4" ? (
                      <Video className="h-5 w-5" />
                    ) : (
                      <FileText className="h-5 w-5" />
                    )}
                  </div>
                  <h4 className="text-[13px] font-medium text-slate-900">Preview is not available for this file type</h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
                    Open the document in a new tab to review the original file.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}
