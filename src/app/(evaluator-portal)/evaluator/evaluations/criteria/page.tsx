
"use client";

import { EvaluatorEvaluationsHeader } from "@/features/evaluations";
import { FileText, FolderOpen, CalendarCheck2, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import avatar from "@/app/evaluator/_components/assets/avatar.png";
import avatar4 from "@/app/evaluator/_components/assets/avatar-4.png";

const attachments = [
  {
    name: "Evaluation Criteria One",
    size: "200 KB",
    uploaded: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploader: { name: "Olivia Rhye", email: "olivia@untitledui.com", avatar: avatar },
  },
  {
    name: "Evaluation Criteria One",
    size: "720 KB",
    uploaded: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploader: { name: "Phoenix Baker", email: "phoenix@untitledui.com", avatar: avatar4 },
  },
  {
    name: "Evaluation Criteria One",
    size: "16 MB",
    uploaded: "Jan 2, 2022",
    updated: "Jan 2, 2022",
    uploader: { name: "Lana Steiner", email: "lana@untitledui.com", avatar: avatar },
  },
  {
    name: "Evaluation Criteria One",
    size: "4.2 MB",
    uploaded: "Jan 6, 2022",
    updated: "Jan 6, 2022",
    uploader: { name: "Demi Wilkinson", email: "demi@untitledui.com", avatar: avatar },
  },
  {
    name: "Evaluation Criteria One",
    size: "400 KB",
    uploaded: "Jan 8, 2022",
    updated: "Jan 8, 2022",
    uploader: { name: "Candice Wu", email: "candice@untitledui.com", avatar: avatar },
  },
  {
    name: "Evaluation Criteria One",
    size: "12 MB",
    uploaded: "Jan 6, 2022",
    updated: "Jan 6, 2022",
    uploader: { name: "Natali Craig", email: "natali@untitledui.com", avatar: avatar },
  },
  {
    name: "Evaluation Criteria One",
    size: "800 KB",
    uploaded: "Jan 4, 2022",
    updated: "Jan 4, 2022",
    uploader: { name: "Drew Cano", email: "drew@untitledui.com", avatar: avatar },
  },
];

export default function EvaluationCriteriaPage() {
  const pathname = usePathname();
  const isApplications = pathname?.includes("/evaluator/evaluations/applications");
  const isCriteria = pathname?.includes("/evaluator/evaluations/criteria");
  const isSchedule = pathname?.includes("/evaluator/evaluations/schedule");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-1 pb-4 md:px-6 md:pt-1 md:pb-6 lg:px-8 lg:pt-2 lg:pb-8">
      <EvaluatorEvaluationsHeader />

      {/* Sub Navigation Tabs */}
      <div className="mb-6 flex flex-row items-center gap-4" style={{height: 40}}>
        {/* Applications Tab */}
        <Link
          href="/evaluator/evaluations/applications"
          className={`flex flex-row items-center gap-3 px-3 py-2 rounded-[6px] ${isApplications ? 'bg-[#F9FAFB]' : 'bg-white'}`}
          style={{width: 374.67, height: 40}}
        >
          <div className="flex flex-row items-center gap-3" style={{width: 127, height: 20}}>
            <FileText className={`w-5 h-5 ${isApplications ? 'text-[var(--primary)]' : 'text-slate-500'}`} strokeWidth={2} />
            <span className={`${isApplications ? 'text-[var(--primary)]' : 'text-slate-500'} font-medium text-sm font-sans`} style={{fontSize: 14, lineHeight: '20px'}}>Applications</span>
          </div>
        </Link>
        {/* Evaluation Criteria Files Tab */}
        <Link
          href="/evaluator/evaluations/criteria"
          className={`flex flex-row items-center gap-3 px-3 py-2 rounded-[6px] ${isCriteria ? 'bg-[#F9FAFB]' : 'bg-white'}`}
          style={{width: 374.67, height: 40}}
        >
          <div className="flex flex-row items-center gap-3" style={{width: 207, height: 20}}>
            <FolderOpen className={`w-5 h-5 ${isCriteria ? 'text-[var(--primary)]' : 'text-slate-500'}`} strokeWidth={2} />
            <span className={`${isCriteria ? 'text-[var(--primary)]' : 'text-slate-500'} font-medium text-sm font-sans`} style={{fontSize: 14, lineHeight: '20px'}}>Evaluation Criteria Files</span>
          </div>
        </Link>
        {/* Due Diligence Schedule Tab */}
        <Link
          href="/evaluator/evaluations/schedule"
          className={`flex flex-row items-center gap-3 px-3 py-2 rounded-[6px] ${isSchedule ? 'bg-[#F9FAFB]' : 'bg-white'}`}
          style={{width: 374.67, height: 40}}
        >
          <div className="flex flex-row items-center gap-3" style={{width: 208, height: 20}}>
            <CalendarCheck2 className={`w-5 h-5 ${isSchedule ? 'text-[var(--primary)]' : 'text-slate-500'}`} strokeWidth={2} />
            <span className={`${isSchedule ? 'text-[var(--primary)]' : 'text-slate-500'} font-medium text-sm font-sans`} style={{fontSize: 14, lineHeight: '20px'}}>Due Diligence Schedule</span>
          </div>
        </Link>
      </div>

      {/* Attachments Card/Table */}
      <div className="rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/10">
        <div className="border-b border-slate-100 px-6 py-4 text-[15px] font-semibold text-slate-900">Evaluation Criteria Attachments</div>
        <div className="p-6">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-xs">
              <input className="h-11 w-full rounded-xl border-slate-200 pl-10 text-sm shadow-sm transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-[#0A77FF]/50 focus:ring-0" placeholder="Search for trades" />
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 stroke-[2]" />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="group h-11 gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50">All time</button>
              <button className="group h-11 gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50">Pending</button>
              <button className="h-11 gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50">More filters</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[980px] w-full border-collapse text-left text-sm">
              <thead className="border-b border-slate-100 bg-white text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
                <tr>
                  <th className="w-12 px-4 py-4"><input type="checkbox" className="h-5 w-5 rounded-lg border-2 border-slate-200 bg-white text-[#0A77FF] transition-all focus:ring-[#0A77FF]" /></th>
                  <th className="px-4 py-4 font-medium">File name</th>
                  <th className="px-4 py-4 font-medium">File size</th>
                  <th className="px-4 py-4 font-medium">Date uploaded</th>
                  <th className="px-4 py-4 font-medium">Last updated</th>
                  <th className="px-4 py-4 font-medium">Uploaded by</th>
                  <th className="px-4 py-4 font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {attachments.map((file, i) => (
                  <tr key={i} className="group/row cursor-default transition-all hover:bg-blue-50/20">
                    <td className="px-4 py-4"><input type="checkbox" className="h-5 w-5 rounded-lg border-2 border-slate-200 bg-white text-[#0A77FF] transition-all focus:ring-[#0A77FF]" /></td>
                    <td className="px-4 py-4 flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-100">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#D92D20"/>
                          <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white"/>
                          <path d="M11.7491 32V25.4545H14.3315C14.8279 25.4545 15.2508 25.5494 15.6003 25.739C15.9497 25.9265 16.216 26.1875 16.3993 26.522C16.5847 26.8544 16.6773 27.2379 16.6773 27.6726C16.6773 28.1072 16.5836 28.4908 16.3961 28.8232C16.2086 29.1555 15.9369 29.4144 15.5811 29.5998C15.2274 29.7852 14.7991 29.8778 14.2963 29.8778H12.6503V28.7688H14.0726C14.3389 28.7688 14.5584 28.723 14.731 28.6314C14.9057 28.5376 15.0356 28.4087 15.1209 28.2447C15.2082 28.0785 15.2519 27.8878 15.2519 27.6726C15.2519 27.4553 15.2082 27.2656 15.1209 27.1037C15.0356 26.9396 14.9057 26.8129 14.731 26.7234C14.5562 26.6317 14.3347 26.5859 14.0662 26.5859H13.1329V32H11.7491ZM19.8965 32H17.5762V25.4545H19.9157C20.5741 25.4545 21.1408 25.5856 21.616 25.8477C22.0911 26.1076 22.4565 26.4815 22.7122 26.9695C22.97 27.4574 23.0989 28.0412 23.0989 28.7209C23.0989 29.4027 22.97 29.9886 22.7122 30.4787C22.4565 30.9687 22.089 31.3448 21.6096 31.6069C21.1323 31.869 20.5613 32 19.8965 32ZM18.9601 30.8143H19.839C20.2481 30.8143 20.5922 30.7418 20.8713 30.5969C21.1526 30.4499 21.3635 30.223 21.5041 29.9162C21.6469 29.6072 21.7183 29.2088 21.7183 28.7209C21.7183 28.2372 21.6469 27.842 21.5041 27.5352C21.3635 27.2283 21.1536 27.0025 20.8745 26.8576C20.5954 26.7127 20.2513 26.6403 19.8422 26.6403H18.9601V30.8143ZM24.1241 32V25.4545H28.4579V26.5955H25.5079V28.1552H28.1702V29.2962H25.5079V32H24.1241Z" fill="white"/>
                        </svg>
                      </span>
                      <div>
                        <div className="font-medium text-slate-900">{file.name}</div>
                        <div className="text-xs text-slate-400">{file.size}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4">{file.size}</td>
                    <td className="px-4 py-4">{file.uploaded}</td>
                    <td className="px-4 py-4">{file.updated}</td>
                    <td className="px-4 py-4 flex items-center gap-2">
                      <Image
                        src={file.uploader.avatar ? file.uploader.avatar : "/evaluator/_components/assets/avatar.png"}
                        alt={file.uploader.name}
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium text-slate-900">{file.uploader.name}</div>
                        <div className="text-xs text-slate-400">{file.uploader.email}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <button className="text-rose-500 font-medium mr-2">Delete</button>
                      <button className="text-[#0A77FF] font-medium">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
