
"use client";

import { EvaluatorEvaluationsHeader } from "@/features/evaluations";
import { FileText, FolderOpen, CalendarCheck2, Search, CalendarDays, Filter, ChevronLeft, ChevronRight, Trash2, Edit2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import svgPaths from "./icon-paths";
import avatar from "@/app/evaluator/_components/assets/avatar.png";
import avatar1 from "@/app/evaluator/_components/assets/avatar-2.png";
import rtbLogo from "@/app/evaluator/_components/assets/rtb-logo.png";

const imgAvatar = typeof avatar === "string" ? avatar : avatar.src;
const imgAvatar1 = typeof avatar1 === "string" ? avatar1 : avatar1.src;
const imgRtbLogo = typeof rtbLogo === "string" ? rtbLogo : rtbLogo.src;

const metrics = [
  { icon: <FileText className="w-7 h-7 text-[#0A77FF]" />, label: "Total Assigned Visits", value: 12 },
  { icon: <FolderOpen className="w-7 h-7 text-[#FDB022]" />, label: "Today's Visits", value: 1 },
  { icon: <CalendarCheck2 className="w-7 h-7 text-[#12B76A]" />, label: "Completed Visits", value: 4 },
  { icon: <CalendarCheck2 className="w-7 h-7 text-[#F04438]" />, label: "Overdue Visits", value: 2 },
  { icon: <CalendarCheck2 className="w-7 h-7 text-[#F04438]" />, label: "Cancelled Visits", value: 1 },
];

const statusColors = {
  Pending: "bg-[#F2F4F7] text-[#6941C6]",
  Cancelled: "bg-[#FEF3F2] text-[#F04438]",
  Completed: "bg-[#ECFDF3] text-[#12B76A]",
  Rejected: "bg-[#FEF3F2] text-[#F04438]",
} as const;

const rows: Array<{
  institution: string;
  phone: string;
  trade: string;
  visitDate: string;
  status: keyof typeof statusColors;
  location: string;
}> = [
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Pending", location: "Province/District/Sector/Cell/Village" },
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Pending", location: "Province/District/Sector/Cell/Village" },
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Cancelled", location: "Province/District/Sector/Cell/Village" },
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Completed", location: "Province/District/Sector/Cell/Village" },
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Rejected", location: "Province/District/Sector/Cell/Village" },
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Completed", location: "Province/District/Sector/Cell/Village" },
  { institution: "Command+R", phone: "+250-79-000-000-000", trade: "JavaScript", visitDate: "19/12/2025 2:00 PM", status: "Pending", location: "Province/District/Sector/Cell/Village" },
];

export default function EvaluationsDueDiligenceSchedule() {
  // Simulate active tab detection
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";
  const isApplications = pathname.includes("/evaluator/evaluations/applications");
  const isCriteria = pathname.includes("/evaluator/evaluations/criteria");
  const isSchedule = pathname.includes("/evaluator/evaluations/schedule");

  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-1 pb-4 md:px-6 md:pt-1 md:pb-6 lg:px-8 lg:pt-2 lg:pb-8">
      <EvaluatorEvaluationsHeader />

      {/* Sub Navigation Tabs */}
      <div className="mb-6 flex flex-row items-center gap-4" style={{height: 40}}>
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

      {/* Metrics */}
      <div className="mb-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(207.2px, 1fr))'}}>
        {metrics.map((m, i) => (
          <div
            key={i}
            className="flex flex-col items-start p-6 gap-5 isolation-auto w-full max-w-[207.2px] h-[166px] bg-white border border-[#EAECF0] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] rounded-[12px] flex-none order-0 flex-grow z-0 mx-auto"
            style={{ boxSizing: 'border-box' }}
          >
            <div
              className="flex items-center justify-center border border-[#EAECF0] rounded-[10px] w-12 h-12 mb-2 shadow-[0px_1px_2px_rgba(16,24,40,0.05)]"
              style={{ boxSizing: 'border-box', filter: 'drop-shadow(0px 1px 2px rgba(16,24,40,0.05))' }}
            >
              {m.icon}
            </div>
            <div className="flex flex-col items-start gap-2 w-[159.2px] h-[50px]">
              <span
                className="font-['Nunito_Sans',sans-serif] font-light text-xs leading-[18px] text-[#475467] w-[159.2px] h-[18px]"
                style={{ fontVariationSettings: "'YTLC' 500" }}
              >
                {m.label}
              </span>
              <div className="flex flex-row flex-wrap items-center gap-x-4 gap-y-3 w-[159.2px] h-6">
                <span className="font-['Montserrat',sans-serif] font-medium text-[16px] leading-6 text-[#101828] w-4 h-6">
                  {m.value}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Date Picker and Filters */}
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div
          className="flex flex-row justify-center items-center px-3 gap-1 w-auto h-10 bg-white border border-[#D0D5DD] rounded-[8px] box-border whitespace-nowrap"
          style={{ boxSizing: 'border-box', minWidth: 0 }}
        >
          <CalendarDays className="w-5 h-5 text-[#344054] min-w-[20px]" style={{ width: 20, height: 20 }} />
          <span className="flex flex-row justify-center items-center px-1 font-['Nunito_Sans',sans-serif] font-medium text-[14px] leading-5 text-[#344054] whitespace-nowrap" style={{ minWidth: 0 }}>
            Jan 6, 2024 – Jan 13, 2024
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="group h-11 gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50">All time</button>
          <button className="group h-11 gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50">Pending</button>
          <button className="h-11 gap-2 rounded-xl border border-slate-200 bg-white px-4 text-[13px] font-medium shadow-xs transition-all hover:bg-slate-50 flex items-center"><Filter className="w-4 h-4 mr-1" />More filters</button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4 relative w-full max-w-md">
        <input className="h-11 w-full rounded-xl border-slate-200 pl-10 text-sm shadow-sm transition-all placeholder:font-medium placeholder:text-slate-400 focus:border-[#0A77FF]/50 focus:ring-0" placeholder="Search" />
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 stroke-[2]" />
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/10">
        <div className="overflow-x-auto">
          <table className="min-w-[980px] w-full border-collapse text-left text-sm">
            <thead className="border-b border-slate-100 bg-white text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400">
              <tr>
                <th className="w-12 px-4 py-4"><input type="checkbox" className="h-5 w-5 rounded-lg border-2 border-slate-200 bg-white text-[#0A77FF] transition-all focus:ring-[#0A77FF]" /></th>
                <th className="px-4 py-4 font-medium">Institution</th>
                <th className="px-4 py-4 font-medium">Trade</th>
                <th className="px-4 py-4 font-medium">Visit Date</th>
                <th className="px-4 py-4 font-medium">Visit Status</th>
                <th className="px-4 py-4 font-medium">Location</th>
                <th className="px-4 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {rows.map((row, i) => (
                <tr key={i} className="group/row cursor-default transition-all hover:bg-blue-50/20">
                  <td className="px-4 py-4"><input type="checkbox" className="h-5 w-5 rounded-lg border-2 border-slate-200 bg-white text-[#0A77FF] transition-all focus:ring-[#0A77FF]" /></td>
                  <td className="px-4 py-4 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-100">
                      <Image src={avatar} alt={row.institution} width={28} height={28} className="rounded-full" />
                    </span>
                    <div>
                      <div className="font-medium text-slate-900">{row.institution}</div>
                      <div className="text-xs text-slate-400">{row.phone}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4">{row.trade}</td>
                  <td className="px-4 py-4">{row.visitDate}</td>
                  <td className="px-4 py-4">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusColors[row.status] || ''}`}>{row.status}
                      {row.status === 'Completed' && <span className="ml-1 text-green-500">&#10003;</span>}
                    </span>
                  </td>
                  <td className="px-4 py-4">{row.location}</td>
                  <td className="px-4 py-4 flex gap-2">
                    <button className="text-[#0A77FF] hover:underline"><Edit2 className="w-4 h-4 inline" /></button>
                    <button className="text-rose-500 hover:underline"><Trash2 className="w-4 h-4 inline" /></button>
                    <button className="hover:underline">
                      <span className="inline-flex items-center justify-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.1665 8.33203V11.6654H12.4998" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M9.1665 11.668L10.4457 10.3305C10.924 9.87073 11.5053 9.53187 12.141 9.34208C12.7768 9.15229 13.4487 9.11706 14.1008 9.23933C14.7529 9.36161 15.3664 9.63784 15.8902 10.045C16.414 10.4523 16.833 10.9787 17.1123 11.5805" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M13.3335 1.66797V5.0013" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17.5 15L16.2209 16.3375C15.7425 16.7972 15.1613 17.1361 14.5255 17.3259C13.8898 17.5157 13.2179 17.5509 12.5658 17.4286C11.9136 17.3064 11.3002 17.0301 10.7763 16.6229C10.2525 16.2157 9.83352 15.6893 9.5542 15.0875" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17.4998 18.3333V15H14.1665" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M17.5 7.08203V4.9987C17.5 4.55667 17.3244 4.13275 17.0118 3.82019C16.6993 3.50763 16.2754 3.33203 15.8333 3.33203H4.16667C3.72464 3.33203 3.30072 3.50763 2.98816 3.82019C2.67559 4.13275 2.5 4.55667 2.5 4.9987V16.6654C2.5 17.1074 2.67559 17.5313 2.98816 17.8439C3.30072 18.1564 3.72464 18.332 4.16667 18.332H7.75" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M2.5 8.33203H5.83333" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M6.6665 1.66797V5.0013" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100">
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-3 py-1 rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"><ChevronLeft className="w-4 h-4" />Previous</button>
            <button className="flex items-center gap-1 px-3 py-1 rounded border border-slate-200 bg-white text-slate-500 hover:bg-slate-50">Next<ChevronRight className="w-4 h-4" /></button>
          </div>
          <div className="text-xs text-slate-400">Page 1 of 10</div>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Tabs">
      <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#353e49] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Evaluation
        </p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
        <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
          <div className="absolute inset-[-8.33%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
              <path d={svgPaths.p3ec8f700} id="Icon" stroke="var(--stroke-0, #D0D5DD)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#0a77ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Due Diligence Schedule
        </p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-white col-1 ml-0 mt-[11px] relative rounded-[6px] row-1 w-[40px]" data-name="_Nav item button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[inherit] w-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="message">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <div className="absolute inset-[-3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6667 17.6668">
                  <path d={svgPaths.p32139b00} id="Vector" stroke="var(--stroke-0, #323539)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e5e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <div className="bg-[#fef3f2] col-1 content-stretch flex items-center ml-[28px] mt-0 px-[8px] py-[2px] relative rounded-[9999px] row-1" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#fecdca] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#ff383c] text-[12px] text-center whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <Group />
      <div className="bg-white content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0 w-[40px]" data-name="_Nav item button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="bell-01">
          <div className="absolute inset-[8.33%_13.59%]" data-name="Icon">
            <div className="absolute inset-[-5%_-5.72%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2317 18.3333">
                <path d={svgPaths.p232d0100} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function Content() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Content">
      <Actions />
      <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="Dropdown">
        <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
          <ContrastBorder />
        </div>
      </button>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Breadcrumbs">
        <Tabs />
      </div>
      <Content />
    </div>
  );
}

function TextAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Manage Accreditation Evalutions
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`View & manage active elders and requests`}</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center min-h-px min-w-[320px] relative" data-name="Avatar">
      <TextAndSupportingText />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">New Evaluation</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="bg-[#0a77ff] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="plus">
            <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
              <div className="absolute inset-[-0.5px_-4.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6667 1">
                  <path d="M0.5 0.5H12.1667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
              <div className="absolute inset-[-4.29%_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 12.6667">
                  <path d="M0.5 0.5V12.1667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0a77ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_16px] items-start relative shrink-0 w-full" data-name="Content">
      <Avatar />
      <Actions1 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Page header">
      <Frame1 />
      <Content1 />
      <div className="h-px relative shrink-0 w-full" data-name="Divider">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1132 1">
          <path clipRule="evenodd" d="M1132 1H0V0H1132V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <PageHeader />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="notepad-text">
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_16.67%_8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-2.78%_-3.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
              <path d={svgPaths.p30fc0400} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_41.67%_58.33%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
              <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[58.33%_33.33%_41.67%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
              <path d="M0.5 0.5H8.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-1/4 left-[33.33%] right-[45.83%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-0.5px_-10%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
              <path d="M0.5 0.5H5.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#353e49] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Applications
      </p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="folder-open">
        <div className="absolute inset-[12.5%_8.32%_16.67%_8.33%]" data-name="Vector">
          <div className="absolute inset-[-2.94%_-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0035 18.0001">
              <path d={svgPaths.p2f0f29c0} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#353e49] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria Files
      </p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-check-2">
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p24377f80} id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <path d="M0.5 0.5H18.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[66.67%] right-[8.33%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
              <path d="M0.5 2.5L2.5 4.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a77ff] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Due Diligence Schedule
      </p>
    </div>
  );
}

function SubNavigation() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Sub navigation">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content2 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Jan 6, 2024 – Jan 13, 2024
      </p>
    </div>
  );
}

function ButtonsButton() {
  return (
    <button className="bg-white cursor-pointer relative rounded-[8px] shrink-0" data-name="Buttons/Button">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar">
          <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
            <div className="absolute inset-[-5%_-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 18.3333">
                <path d={svgPaths.p16594900} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
        <TextPadding1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function NumberAndBadge() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">12</p>
    </div>
  );
}

function HeadingAndNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Total Assigned Visits
      </p>
      <NumberAndBadge />
    </div>
  );
}

function NumberAndBadge1() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeadingAndNumber1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Today’s Visits
      </p>
      <NumberAndBadge1 />
    </div>
  );
}

function NumberAndBadge2() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">4</p>
    </div>
  );
}

function HeadingAndNumber2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Completed Visits
      </p>
      <NumberAndBadge2 />
    </div>
  );
}

function NumberAndBadge3() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">2</p>
    </div>
  );
}

function HeadingAndNumber3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Overdue Visits
      </p>
      <NumberAndBadge3 />
    </div>
  );
}

function NumberAndBadge4() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">1</p>
    </div>
  );
}

function HeadingAndNumber4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Cancelled Visits
      </p>
      <NumberAndBadge4 />
    </div>
  );
}

function MetricGroup() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] h-[166px] items-start relative shrink-0 w-full" data-name="Metric group">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metric item">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="notepad-text">
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-12.5%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
                    <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-12.5%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
                    <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-12.5%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
                    <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_16.67%_8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-2.78%_-3.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 19">
                    <path d={svgPaths.p30fc0400} id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_41.67%_58.33%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
                    <path d="M0.5 0.5H6.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[58.33%_33.33%_41.67%_33.33%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 1">
                    <path d="M0.5 0.5H8.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-[33.33%] right-[45.83%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-0.5px_-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                    <path d="M0.5 0.5H5.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <HeadingAndNumber />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metric item">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="clipboard-clock">
              <div className="absolute inset-[58.33%_26.67%_28.33%_66.67%]" data-name="Vector">
                <div className="absolute inset-[-15.62%_-31.25%_-15.63%_-31.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.60007 4.20007">
                    <path d="M0.5 0.5V2.7L2.1 3.7" id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_16.67%_71.53%_66.67%]" data-name="Vector">
                <div className="absolute inset-[-17.66%_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3.832">
                    <path d={svgPaths.p30861000} id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_66.67%_8.33%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-2.78%_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 19">
                    <path d={svgPaths.p1758f680} id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_8.33%_8.33%_41.67%]" data-name="Vector">
                <div className="absolute inset-[-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p1ff05e00} id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-12.5%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
                    <path d={svgPaths.p254c0000} id="Vector" stroke="var(--stroke-0, #FF8D28)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <HeadingAndNumber1 />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metric item">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="check-check">
              <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                <div className="absolute inset-[-4.55%_-3.13%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 12">
                    <path d="M16.5 0.5L5.5 11.5L0.5 6.5" id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                <div className="absolute inset-[-6.67%_-5.56%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8.5">
                    <path d="M9.5 0.5L2 8L0.5 6.5" id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <HeadingAndNumber2 />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metric item">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="triangle-alert">
              <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
                <div className="absolute inset-[-2.78%_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0159 19.014">
                    <path d={svgPaths.p10c739c0} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-12.5%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
                    <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-4999.89%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01 1">
                    <path d="M0.5 0.5H0.51" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <HeadingAndNumber3 />
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Metric item">
        <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="triangle-alert">
              <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
                <div className="absolute inset-[-2.78%_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0159 19.014">
                    <path d={svgPaths.p10c739c0} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-12.5%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
                    <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-4999.89%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.01 1">
                    <path d="M0.5 0.5H0.51" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <HeadingAndNumber4 />
        </div>
      </div>
      <button className="absolute content-stretch cursor-pointer flex flex-col items-start right-[-1264px] top-[2609px]" data-name="Dropdown">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="dots-vertical">
          <div className="absolute inset-[16.67%_45.83%]" data-name="Icon">
            <div className="absolute inset-[-6.25%_-50%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 15">
                <g id="Icon">
                  <path d={svgPaths.p3ed2dd80} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p3815c300} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p39ad1980} stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-end relative shrink-0 w-full" data-name="Container">
      <ButtonsButton />
      <MetricGroup />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] font-light items-start leading-[18px] min-h-px min-w-px relative text-[12px]" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Due Diligence Schedule
      </p>
      <p className="relative shrink-0 text-[#475467] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Manage applications by different institutions right here
      </p>
    </div>
  );
}

function HeaderSupportingText() {
  return (
    <div className="content-stretch flex gap-[20px] items-center min-w-[320px] relative shrink-0 w-full" data-name="Header & Supporting Text">
      <TextAndSupportingText1 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="search-lg">
        <div className="absolute inset-[12.5%]" data-name="Icon">
          <div className="absolute inset-[-5.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p3190da80} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[14px] text-ellipsis text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <Input />
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        All time
      </p>
    </div>
  );
}

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Pending
      </p>
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        More filters
      </p>
    </div>
  );
}

function Dropdowns() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Dropdowns">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding2 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                  <path d={svgPaths.p3f40eb80} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding3 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="x-close">
            <div className="absolute inset-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                  <path d={svgPaths.p3f40eb80} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="filter-lines">
            <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%_-5.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 11.6667">
                  <path d={svgPaths.p132a37e0} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <TextPadding4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[120px] items-center min-h-px min-w-px relative" data-name="Content">
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel />
      </button>
      <Dropdowns />
    </div>
  );
}

function FiltersBar() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="Filters bar">
      <Content5 />
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function ContrastBorder3() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function ContrastBorder4() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function ContrastBorder5() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function ContrastBorder6() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function ContrastBorder7() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        +250-79-000-000-000
      </p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Institution
              </p>
              <div className="overflow-clip relative shrink-0 size-[16px]" data-name="arrow-down">
                <div className="absolute inset-[20.83%]" data-name="Icon">
                  <div className="absolute inset-[-7.14%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667">
                      <path d={svgPaths.p1d836680} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder1 />
            </div>
            <TextAndSupportingText2 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder2 />
            </div>
            <TextAndSupportingText3 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder3 />
            </div>
            <TextAndSupportingText4 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder4 />
            </div>
            <TextAndSupportingText5 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder5 />
            </div>
            <TextAndSupportingText6 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder6 />
            </div>
            <TextAndSupportingText7 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar1} />
              <ContrastBorder7 />
            </div>
            <TextAndSupportingText8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Trade
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText9 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText10 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText11 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText12 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText13 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText14 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText16() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function TextAndSupportingText17() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function TextAndSupportingText18() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function TextAndSupportingText19() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function TextAndSupportingText20() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function TextAndSupportingText21() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function TextAndSupportingText22() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-light h-full items-start leading-[18px] relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        19/12/2025
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2:00 PM
      </p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Visit Date
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText16 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText17 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText18 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText19 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText20 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText21 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Visit Status `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="clipboard-clock">
                <div className="absolute inset-[58.33%_26.67%_28.33%_66.67%]" data-name="Vector">
                  <div className="absolute inset-[-31.25%_-62.51%_-31.25%_-62.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.80007 2.60007">
                      <path d="M0.5 0.5V1.6L1.3 2.1" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_16.67%_71.53%_66.67%]" data-name="Vector">
                  <div className="absolute inset-[-35.31%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2.416">
                      <path d={svgPaths.p2fa3c580} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_66.67%_8.33%_16.67%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
                      <path d={svgPaths.p8f4dd80} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_8.33%_41.67%]" data-name="Vector">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                      <path d={svgPaths.p362cca00} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-25%_-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
                      <path d={svgPaths.p2b01c000} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="clipboard-clock">
                <div className="absolute inset-[58.33%_26.67%_28.33%_66.67%]" data-name="Vector">
                  <div className="absolute inset-[-31.25%_-62.51%_-31.25%_-62.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.80007 2.60007">
                      <path d="M0.5 0.5V1.6L1.3 2.1" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_16.67%_71.53%_66.67%]" data-name="Vector">
                  <div className="absolute inset-[-35.31%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2.416">
                      <path d={svgPaths.p2fa3c580} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_66.67%_8.33%_16.67%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
                      <path d={svgPaths.p8f4dd80} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_8.33%_41.67%]" data-name="Vector">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                      <path d={svgPaths.p362cca00} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-25%_-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
                      <path d={svgPaths.p2b01c000} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#ff383c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Cancelled
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="triangle-alert">
                <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
                  <div className="absolute inset-[-5.55%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.008 10.007">
                      <path d={svgPaths.p390d6e80} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-25%_-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
                      <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
                  <div className="absolute inset-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.005 1">
                      <path d="M0.5 0.5H0.505" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#34c759] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Completed
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-check">
                <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                  <div className="absolute inset-[-9.09%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                      <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-13.33%_-11.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 4.75">
                      <path d="M5 0.5L1.25 4.25L0.5 3.5" id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#ff383c] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Rejected
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="triangle-alert">
                <div className="absolute inset-[12.44%_8.34%_12.5%_8.26%]" data-name="Vector">
                  <div className="absolute inset-[-5.55%_-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.008 10.007">
                      <path d={svgPaths.p390d6e80} id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[45.83%] left-1/2 right-1/2 top-[37.5%]" data-name="Vector">
                  <div className="absolute inset-[-25%_-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
                      <path d="M0.5 0.5V2.5" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-[29.17%] left-1/2 right-[49.96%] top-[70.83%]" data-name="Vector">
                  <div className="absolute inset-[-0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.005 1">
                      <path d="M0.5 0.5H0.505" id="Vector" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#34c759] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Completed
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-check">
                <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                  <div className="absolute inset-[-9.09%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                      <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-13.33%_-11.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 4.75">
                      <path d="M5 0.5L1.25 4.25L0.5 3.5" id="Vector" stroke="var(--stroke-0, #34C759)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fefeff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="clipboard-clock">
                <div className="absolute inset-[58.33%_26.67%_28.33%_66.67%]" data-name="Vector">
                  <div className="absolute inset-[-31.25%_-62.51%_-31.25%_-62.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.80007 2.60007">
                      <path d="M0.5 0.5V1.6L1.3 2.1" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_16.67%_71.53%_66.67%]" data-name="Vector">
                  <div className="absolute inset-[-35.31%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2.416">
                      <path d={svgPaths.p2fa3c580} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[16.67%_66.67%_8.33%_16.67%]" data-name="Vector">
                  <div className="absolute inset-[-5.56%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 10">
                      <path d={svgPaths.p8f4dd80} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_8.33%_41.67%]" data-name="Vector">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
                      <path d={svgPaths.p362cca00} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-3/4 left-[33.33%] right-[33.33%] top-[8.33%]" data-name="Vector">
                  <div className="absolute inset-[-25%_-12.5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
                      <path d={svgPaths.p2b01c000} id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[205px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Location
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px relative text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Province/District/Sector/Cell/Village
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[16px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="calendar-sync">
              <div className="absolute inset-[41.67%_37.5%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M0.5 0.5V3.83333H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_14.44%_41.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.p3871d300} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-[47.77%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-20%_-6.29%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.94595 3.50001">
                    <path d={svgPaths.pb48dc80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[8.33%] left-[70.83%] right-[12.5%] top-3/4" data-name="Vector">
                <div className="absolute inset-[-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 4.33333">
                    <path d="M3.83333 3.83333V0.5H0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                    <path d={svgPaths.p1deb6420} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[41.67%_70.83%_58.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-15%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.33333 1">
                    <path d="M0.5 0.5H3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
                <div className="absolute inset-[-15%_-0.5px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 4.33333">
                    <path d="M0.5 0.5V3.83333" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Eye">
              <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-4.29%_-3%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6675 12.6656">
                    <path d={svgPaths.p2001f180} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-10%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
                    <path d={svgPaths.pa2c5b80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="trash-01">
              <div className="absolute inset-[8.33%_12.5%]" data-name="Icon">
                <div className="absolute inset-[-3%_-3.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.6667">
                    <path d={svgPaths.p1fbcf580} id="Icon" stroke="var(--stroke-0, #FF383C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Actions
              </p>
            </div>
          </div>
        </div>
      </div>
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function TextPadding5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Previous</p>
    </div>
  );
}

function TextPadding6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Next</p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-start min-h-px min-w-px relative" data-name="Actions">
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <TextPadding5 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <TextPadding6 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Table() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Content7 />
        <div className="relative shrink-0 w-full" data-name="Pagination">
          <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[12px] items-center justify-center pb-[16px] pt-[12px] px-[24px] relative w-full">
              <Actions2 />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Page 1 of 10</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <FiltersBar />
      <Table />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Section">
      <HeaderSupportingText />
      <Container2 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-name="Main">
      <Container />
      <SubNavigation />
      <Container1 />
      <Section />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start p-[32px] right-0 top-0 w-[1196px]">
      <Main />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <div className="h-[31px] relative shrink-0 w-[50px]" data-name="rtb-logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRtbLogo} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#353e49] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        RTB Accreditation
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#0a77ff] text-[10px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluator Portal
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="house">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-5.56%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p2a6eea00} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-2.63%_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.0005">
              <path d={svgPaths.p231d8ac0} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="badge-check">
        <div className="absolute inset-[8.35%_8.35%_8.32%_8.29%]" data-name="Vector">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0061 20.9983">
              <path d={svgPaths.pa015e00} id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
              <path d="M0.5 2.5L2.5 4.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluations
      </p>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="user">
        <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.33%_-3.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
              <path d={svgPaths.p2349cb97} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path d={svgPaths.p2a600700} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Profile
      </p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bell">
        <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
          <div className="absolute inset-[-50.01%_-14.44%_-50%_-14.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.46417 2">
              <path d={svgPaths.p1c6a3f80} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-3.33%_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9996 16">
              <path d={svgPaths.p3d2da200} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Notifications
      </p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Navigation">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content9 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content10 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content11 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content12 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative shrink-0 w-full" data-name="Navigation">
      <Frame />
      <Navigation1 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="life-buoy-01">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.pb379100} id="Icon" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Support</p>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="settings-01">
        <div className="absolute inset-[8.33%]" data-name="Icon">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <g id="Icon">
                <path d={svgPaths.p2acf2900} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d={svgPaths.p218c3700} stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Settings</p>
    </div>
  );
}

function Navigation2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Navigation">
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content13 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content14 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder8() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText23() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Regular',sans-serif] font-normal items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="leading-[20px] relative shrink-0 text-[#344054] text-[14px]">Olivia Rhye</p>
      <p className="leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]">olivia@company.com</p>
    </div>
  );
}

function Account() {
  return (
    <div className="relative shrink-0 w-full" data-name="Account">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[16px] items-start pl-[8px] pr-[32px] pt-[24px] relative w-full">
        <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Avatar label group">
          <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
            <ContrastBorder8 />
          </div>
          <TextAndSupportingText23 />
        </div>
        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[8px] right-0 rounded-[8px] top-[16px]" data-name="Buttons/Button">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="log-out-01">
            <div className="absolute inset-[12.5%]" data-name="Icon">
              <div className="absolute inset-[-5.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                  <path d={svgPaths.p2629f200} id="Icon" stroke="var(--stroke-0, #475467)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative shrink-0 w-[196px]" data-name="Footer">
      <Navigation2 />
      <Account />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Content">
      <Navigation />
      <Footer />
    </div>
  );
}

// Duplicate export removed to fix build error
