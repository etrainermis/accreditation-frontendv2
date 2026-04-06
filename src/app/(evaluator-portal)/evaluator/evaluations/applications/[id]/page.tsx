"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ChevronRight, 
  Bell, 
  Plus, 
  ArrowLeft, 
  Building2, 
  Ungroup, 
  Briefcase, 
  Files, 
  Users,
  Search,
  CheckCircle2,
  ChevronDown,
  Eye,
  FileText,
  MoreVertical,
  Download,
  ExternalLink,
  Clock,
  AlertCircle,
  X
} from "lucide-react";
import avatar from "@/components/evaluator/assets/avatar.png";
import avatar2 from "@/components/evaluator/assets/avatar-2.png";
import avatar3 from "@/components/evaluator/assets/avatar-3.png";
import avatar4 from "@/components/evaluator/assets/avatar-4.png";
import avatar5 from "@/components/evaluator/assets/avatar-5.png";
import avatar6 from "@/components/evaluator/assets/avatar-6.png";

type HorizontalStep = "Initial Review" | "Due Diligence" | "Final Review" | "Decision";
type VerticalStep = "Institution Details" | "Trade & Competency" | "Equipment & Facilities" | "Curriculum" | "Staff" | "Decision Making";
type InstitutionTab = "General" | "Address" | "Personnel" | "About";

const horizontalSteps: HorizontalStep[] = ["Initial Review", "Due Diligence", "Final Review", "Decision"];
const personnelAvatars = [avatar2, avatar3, avatar4, avatar5, avatar6];

function MessageIconSvg() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2.49328 13.6194C2.61581 13.9285 2.64309 14.2672 2.57161 14.5919L1.68411 17.3335C1.65552 17.4726 1.66291 17.6166 1.70559 17.752C1.74827 17.8874 1.82483 18.0096 1.928 18.1071C2.03117 18.2046 2.15754 18.2741 2.29511 18.3091C2.43269 18.3441 2.57691 18.3433 2.71411 18.3069L5.55828 17.4752C5.86471 17.4144 6.18205 17.441 6.47411 17.5519C8.2536 18.3829 10.2694 18.5587 12.1659 18.0483C14.0624 17.5379 15.7177 16.3741 16.8397 14.7622C17.9617 13.1503 18.4784 11.1939 18.2985 9.23817C18.1187 7.28246 17.2539 5.4531 15.8567 4.07288C14.4595 2.69265 12.6197 1.85025 10.6619 1.69429C8.70416 1.53834 6.75423 2.07887 5.15615 3.2205C3.55807 4.36213 2.41456 6.0315 1.92736 7.93408C1.44016 9.83666 1.64059 11.8502 2.49328 13.6194Z" stroke="#323539" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PackageIcon16() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7.33333 14.4879C7.53603 14.6049 7.76595 14.6665 8 14.6665C8.23405 14.6665 8.46397 14.6049 8.66667 14.4879L13.3333 11.8212C13.5358 11.7043 13.704 11.5362 13.821 11.3338C13.938 11.1314 13.9998 10.9017 14 10.6679V5.33457C13.9998 5.10075 13.938 4.87111 13.821 4.66868C13.704 4.46625 13.5358 4.29815 13.3333 4.18124L8.66667 1.51457C8.46397 1.39755 8.23405 1.33594 8 1.33594C7.76595 1.33594 7.53603 1.39755 7.33333 1.51457L2.66667 4.18124C2.46418 4.29815 2.29599 4.46625 2.17897 4.66868C2.06196 4.87111 2.00024 5.10075 2 5.33457V10.6679C2.00024 10.9017 2.06196 11.1314 2.17897 11.3338C2.29599 11.5362 2.46418 11.7043 2.66667 11.8212L7.33333 14.4879Z" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14.6667V8" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.19336 4.66797L8.00003 8.0013L13.8067 4.66797" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 2.84766L11 6.28099" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon16() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14.6667 4.66797L8.67271 8.48597C8.4693 8.60411 8.23827 8.66634 8.00304 8.66634C7.76782 8.66634 7.53678 8.60411 7.33337 8.48597L1.33337 4.66797" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.3334 2.66797H2.66671C1.93033 2.66797 1.33337 3.26492 1.33337 4.0013V12.0013C1.33337 12.7377 1.93033 13.3346 2.66671 13.3346H13.3334C14.0698 13.3346 14.6667 12.7377 14.6667 12.0013V4.0013C14.6667 3.26492 14.0698 2.66797 13.3334 2.66797Z" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon15() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8.388 10.212C8.52568 10.2752 8.6808 10.2897 8.82779 10.253C8.97479 10.2162 9.10489 10.1305 9.19667 10.01L9.43333 9.7C9.55753 9.53441 9.71858 9.4 9.90372 9.30743C10.0889 9.21486 10.293 9.16667 10.5 9.16667H12.5C12.8536 9.16667 13.1928 9.30714 13.4428 9.55719C13.6929 9.80724 13.8333 10.1464 13.8333 10.5V12.5C13.8333 12.8536 13.6929 13.1928 13.4428 13.4428C13.1928 13.6929 12.8536 13.8333 12.5 13.8333C9.3174 13.8333 6.26516 12.5691 4.01472 10.3186C1.76428 8.06818 0.5 5.01593 0.5 1.83333C0.5 1.47971 0.640476 1.14057 0.890524 0.890524C1.14057 0.640476 1.47971 0.5 1.83333 0.5H3.83333C4.18696 0.5 4.52609 0.640476 4.77614 0.890524C5.02619 1.14057 5.16667 1.47971 5.16667 1.83333V3.83333C5.16667 4.04033 5.11847 4.24448 5.0259 4.42962C4.93333 4.61476 4.79893 4.7758 4.63333 4.9L4.32133 5.134C4.19894 5.22745 4.11268 5.36039 4.07719 5.51023C4.04171 5.66008 4.05919 5.81758 4.12667 5.956C5.03779 7.80658 6.53628 9.3032 8.388 10.212Z" stroke="#AAAFB5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EquipmentIcon28() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.667 17.5H16.3337" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.2869 12.8256L16.154 11.1339L17.3604 9.69661C17.6847 9.31922 17.8799 8.84802 17.9175 8.35181C17.9551 7.8556 17.833 7.36037 17.5692 6.93846C17.3053 6.51654 16.9135 6.19003 16.4509 6.00661C15.9883 5.8232 15.4791 5.79248 14.9979 5.91894L12.8745 6.34361L11.562 4.53061C11.3035 4.14648 10.9366 3.84794 10.5079 3.67298C10.0792 3.49803 9.60814 3.45457 9.15467 3.54814C8.70121 3.64171 8.28584 3.86808 7.96142 4.19843C7.63699 4.52879 7.41819 4.94819 7.33285 5.40328L7.16485 7.63978L5.15235 8.13678C4.69391 8.2771 4.28982 8.55524 3.99506 8.93336C3.70029 9.31148 3.52916 9.77122 3.50493 10.25C3.48071 10.7289 3.60458 11.2035 3.85968 11.6095C4.11479 12.0154 4.48874 12.3329 4.93069 12.5188L5.69719 12.8338" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21.9589 12.8288L24.5955 6.55214C24.6557 6.40873 24.6866 6.25472 24.6864 6.09919C24.6863 5.94365 24.655 5.78973 24.5944 5.64646C24.5339 5.5032 24.4453 5.37348 24.3339 5.26495C24.2225 5.15641 24.0905 5.07125 23.9457 5.01447L19.7795 3.38464C19.4984 3.27482 19.1856 3.27825 18.9069 3.39421C18.6282 3.51016 18.4053 3.72962 18.285 4.00647L17.207 6.48214" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.66701 14.0057C4.66609 13.8525 4.69536 13.7006 4.75314 13.5587C4.81092 13.4168 4.89608 13.2877 5.00377 13.1787C5.11145 13.0697 5.23955 12.983 5.38075 12.9235C5.52194 12.864 5.67347 12.8329 5.82668 12.832H22.167C22.4764 12.832 22.7732 12.9549 22.992 13.1737C23.2108 13.3925 23.3337 13.6893 23.3337 13.9987V22.1654C23.3337 22.7842 23.0878 23.3777 22.6503 23.8153C22.2127 24.2529 21.6192 24.4987 21.0003 24.4987H7.00035C6.38151 24.4987 5.78802 24.2529 5.35043 23.8153C4.91285 23.3777 4.66701 22.7842 4.66701 22.1654V14.0057Z" stroke="#353E49" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PdfIcon40() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 4C4 1.79086 5.79086 0 8 0H24L36 12V36C36 38.2091 34.2091 40 32 40H8C5.79086 40 4 38.2091 4 36V4Z" fill="#D92D20" />
      <path opacity="0.3" d="M24 0L36 12H28C25.7909 12 24 10.2091 24 8V0Z" fill="white" />
      <path d="M11.7491 32V25.4545H14.3315C14.8279 25.4545 15.2508 25.5494 15.6003 25.739C15.9497 25.9265 16.216 26.1875 16.3993 26.522C16.5847 26.8544 16.6773 27.2379 16.6773 27.6726C16.6773 28.1072 16.5836 28.4908 16.3961 28.8232C16.2086 29.1555 15.9369 29.4144 15.5811 29.5998C15.2274 29.7852 14.7991 29.8778 14.2963 29.8778H12.6503V28.7688H14.0726C14.3389 28.7688 14.5584 28.723 14.731 28.6314C14.9057 28.5376 15.0356 28.4087 15.1209 28.2447C15.2082 28.0785 15.2519 27.8878 15.2519 27.6726C15.2519 27.4553 15.2082 27.2656 15.1209 27.1037C15.0356 26.9396 14.9057 26.8129 14.731 26.7234C14.5562 26.6317 14.3347 26.5859 14.0662 26.5859H13.1329V32H11.7491ZM19.8965 32H17.5762V25.4545H19.9157C20.5741 25.4545 21.1408 25.5856 21.616 25.8477C22.0911 26.1076 22.4565 26.4815 22.7122 26.9695C22.97 27.4574 23.0989 28.0412 23.0989 28.7209C23.0989 29.4027 22.97 29.9886 22.7122 30.4787C22.4565 30.9687 22.089 31.3448 21.6096 31.6069C21.1323 31.869 20.5613 32 19.8965 32ZM18.9601 30.8143H19.839C20.2481 30.8143 20.5922 30.7418 20.8713 30.5969C21.1526 30.4499 21.3635 30.223 21.5041 29.9162C21.6469 29.6072 21.7183 29.2088 21.7183 28.7209C21.7183 28.2372 21.6469 27.842 21.5041 27.5352C21.3635 27.2283 21.1536 27.0025 20.8745 26.8576C20.5954 26.7127 20.2513 26.6403 19.8422 26.6403H18.9601V30.8143ZM24.1241 32V25.4545H28.4579V26.5955H25.5079V28.1552H28.1702V29.2962H25.5079V32H24.1241Z" fill="white" />
    </svg>
  );
}

function UserPlaceholder24() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="#84888C" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#84888C" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TickBadge16() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="#34C759" />
      <path d="M12 5L6.5 10.5L4 8" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MasonryIcon16() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M8.00016 2.66797H4.00016C3.63197 2.66797 3.3335 2.96645 3.3335 3.33464V6.0013C3.3335 6.36949 3.63197 6.66797 4.00016 6.66797H8.00016C8.36835 6.66797 8.66683 6.36949 8.66683 6.0013V3.33464C8.66683 2.96645 8.36835 2.66797 8.00016 2.66797Z" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.0002 9.33203H8.00016C7.63197 9.33203 7.3335 9.63051 7.3335 9.9987V12.6654C7.3335 13.0336 7.63197 13.332 8.00016 13.332H12.0002C12.3684 13.332 12.6668 13.0336 12.6668 12.6654V9.9987C12.6668 9.63051 12.3684 9.33203 12.0002 9.33203Z" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DataStructuresIcon16() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M1.98016 8.61333C1.78333 8.73159 1.62038 8.89867 1.50709 9.09839C1.39379 9.29812 1.334 9.52371 1.3335 9.75333V11.9133C1.334 12.143 1.39379 12.3686 1.50709 12.5683C1.62038 12.768 1.78333 12.9351 1.98016 13.0533L3.98016 14.2533C4.18754 14.3779 4.4249 14.4437 4.66683 14.4437C4.90875 14.4437 5.14612 14.3779 5.3535 14.2533L8.00016 12.6667V9L4.66683 7L1.98016 8.61333Z" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.66684 11.0016L1.50684 9.10156" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.6665 11L7.99984 9" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.6665 11V14.4467" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 9V12.6667L10.6467 14.2533C10.854 14.3779 11.0914 14.4437 11.3333 14.4437C11.5753 14.4437 11.8126 14.3779 12.02 14.2533L14.02 13.0533C14.2168 12.9351 14.3798 12.768 14.4931 12.5683C14.6064 12.3686 14.6662 12.143 14.6667 11.9133V9.75333C14.6662 9.52371 14.6064 9.29812 14.4931 9.09839C14.3798 8.89867 14.2168 8.73159 14.02 8.61333L11.3333 7L8 9Z" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3333 11L8 9" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3335 11.0016L14.4935 9.10156" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.3335 11V14.4467" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.31317 2.9451C5.11634 3.06335 4.95339 3.23044 4.8401 3.43016C4.7268 3.62988 4.66701 3.85548 4.6665 4.0851V6.99843L7.99984 8.99843L11.3332 6.99843V4.0851C11.3327 3.85548 11.2729 3.62988 11.1596 3.43016C11.0463 3.23044 10.8833 3.06335 10.6865 2.9451L8.6865 1.7451C8.47913 1.62051 8.24176 1.55469 7.99984 1.55469C7.75791 1.55469 7.52055 1.62051 7.31317 1.7451L5.31317 2.9451Z" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.99984 5.33359L4.83984 3.43359" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 5.33359L11.16 3.43359" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 8.9987V5.33203" stroke="#0088FF" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ApplicationDetailsPage() {
  const [horizontalStep, setHorizontalStep] = useState<HorizontalStep>("Initial Review");
  const [verticalStep, setVerticalStep] = useState<VerticalStep>("Institution Details");
  const [instTab, setInstTab] = useState<InstitutionTab>("General");

  const horizontalProgressIndex = horizontalSteps.indexOf(horizontalStep);

  return (
    <div className="application-details-page min-h-screen bg-[#F9FAFB]/30">
      {/* Top Header / Breadcrumbs */}
      <header className="bg-white border-b border-[#EAECF0] px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <nav className="flex items-center gap-2 text-[12px]">
            <Link href="/evaluator/evaluations" className="text-[#353E49] hover:text-[#0A77FF] transition-colors">Evaluations</Link>
            <ChevronRight className="w-3 h-3 text-[#D0D5DD]" />
            <Link href="/evaluator/evaluations/applications" className="text-[#0A77FF] hover:underline">Application</Link>
            <ChevronRight className="w-3 h-3 text-[#D0D5DD]" />
            <span className="text-[#475467] font-medium">XYZ Ltd JavaScript</span>
          </nav>
          
          <div className="flex items-center gap-4 ml-auto">
            <div className="relative">
              <button className="p-2 border border-[#E5E5E7] rounded-md bg-white hover:bg-slate-50 transition-colors shadow-sm">
                <MessageIconSvg />
              </button>
              <span className="absolute -top-2 -right-2 z-10 inline-flex h-5 min-w-5 items-center justify-center rounded-full border border-[#FECDCA] bg-[#FEF3F2] px-1 text-[10px] leading-none text-[#FF383C] shadow-sm">2</span>
            </div>
            <button className="p-2 border border-[#E5E5E7] rounded-md bg-white hover:bg-slate-50 transition-colors shadow-sm">
              <Bell className="w-5 h-5 text-[#667085]" />
            </button>
            <button className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 hover:ring-2 hover:ring-[#0A77FF]/20 transition-all">
              <Image src={avatar} alt="User" fill className="object-cover" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-[18px] font-bold text-[#101828]">XYZ Ltd JavaScript Accreditation Application</h1>
            <p className="text-[13px] text-[#475467] mt-0.5 font-medium opacity-80 leading-relaxed">Create and manage your accreditation applications for the selected trades.</p>
          </div>
          <button className="flex items-center gap-2 bg-[#0A77FF] text-white px-5 py-2.5 rounded-lg text-[14px] font-bold hover:bg-[#0862D1] transition-all shadow-[0px_1px_2px_rgba(16,24,40,0.05)] active:scale-95 whitespace-nowrap">
            <span>New Application</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </header>

      <main className="p-4 lg:p-8">
        <div className="bg-white rounded-2xl border border-[#EAECF0] shadow-xl shadow-slate-200/5 overflow-hidden min-h-[700px] flex flex-col">
          
          {/* Horizontal Stepper */}
          <div className="px-6 lg:px-12 py-10 border-b border-[#EAECF0] bg-white">
            <div className="grid grid-cols-4 gap-4 relative max-w-5xl mx-auto">
              <div className="absolute top-[11px] left-[20px] right-[20px] h-[2px] bg-[#EAECF0]" />
              <div 
                className="absolute top-[11px] left-[20px] h-[2px] bg-[#0A77FF] transition-all duration-500" 
                style={{ width: `${(horizontalProgressIndex / 3) * 100}%` }}
              />
              
              <StepItem 
                title="Initial Review" 
                subtitle="Documents Review" 
                active={horizontalProgressIndex >= 0} 
                onClick={() => setHorizontalStep("Initial Review")}
              />
              <StepItem 
                title="Perform Due Diligence" 
                subtitle="Start collaborating" 
                active={horizontalProgressIndex >= 1} 
                onClick={() => setHorizontalStep("Due Diligence")}
              />
              <StepItem 
                title="Final Review" 
                subtitle="Start collaborating" 
                active={horizontalProgressIndex >= 2} 
                onClick={() => setHorizontalStep("Final Review")}
              />
              <StepItem 
                title="Decision Making" 
                subtitle="Automatic sharing" 
                active={horizontalProgressIndex >= 3} 
                onClick={() => setHorizontalStep("Decision")}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row flex-1">
            {/* Vertical Navigation Sidebar */}
            <aside className="w-full lg:w-[338px] bg-[#F9FAFB] border-b lg:border-b-0 lg:border-r border-[#EAECF0] p-6 lg:p-10 flex flex-col gap-8 lg:gap-12">
              <div className="space-y-4 lg:space-y-6">
                <p className="text-sm font-medium text-[#101828] tracking-tight">Application Details</p>
                <Link href="/evaluator/evaluations/applications" className="flex items-center gap-2 text-[#0A77FF] cursor-pointer hover:translate-x-[-4px] transition-transform text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Exit</span>
                </Link>
              </div>

              <div className="space-y-0 relative">
                <div className="hidden lg:block absolute left-[24px] top-[24px] bottom-[24px] w-[2px] bg-[#EAECF0]" />
                
                <VerticalNavStep 
                  title="Institution Details" 
                  description="Review the institution details as submitted" 
                  icon={<Building2 className="w-5 h-5 shadow-sm" />}
                  active={verticalStep === "Institution Details"}
                  onClick={() => setVerticalStep("Institution Details")}
                />
                <VerticalNavStep 
                  title="Trade & Competency" 
                  description="Select the trade(s) you are applying for" 
                  icon={<Ungroup className="w-5 h-5 shadow-sm" />}
                  active={verticalStep === "Trade & Competency"}
                  onClick={() => setVerticalStep("Trade & Competency")}
                />
                <VerticalNavStep 
                  title="Equipment and Facilities" 
                  description="List available equipment and upload proof" 
                  icon={<Briefcase className="w-5 h-5 shadow-sm" />}
                  active={verticalStep === "Equipment & Facilities"}
                  onClick={() => setVerticalStep("Equipment & Facilities")}
                />
                <VerticalNavStep 
                  title="Curriculum Documents" 
                  description="Upload curriculum and training materials" 
                  icon={<Files className="w-5 h-5 shadow-sm" />}
                  active={verticalStep === "Curriculum"}
                  onClick={() => setVerticalStep("Curriculum")}
                />
                <VerticalNavStep 
                  title="Staff Allocation" 
                  description="Indicate staff availability for the selected trade" 
                  icon={<Users className="w-5 h-5 shadow-sm" />}
                  active={verticalStep === "Staff"}
                  onClick={() => setVerticalStep("Staff")}
                />
                <VerticalNavStep
                  title="Decision Making"
                  description="Complete the initial review decision"
                  icon={<CheckCircle2 className="w-5 h-5 shadow-sm" />}
                  active={verticalStep === "Decision Making"}
                  onClick={() => setVerticalStep("Decision Making")}
                />
              </div>
            </aside>

            {/* Content Area */}
            <section className="flex-1 p-6 lg:p-12 overflow-y-auto bg-white">
              <div className="max-w-[800px] mx-auto">
                
                {/* Section Header Controls */}
                <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-6 border-b border-[#EAECF0] ${verticalStep === 'Institution Details' ? '' : 'sm:flex-row-reverse'}`}>
                  <div className="flex gap-4 lg:gap-8 order-2 sm:order-1">
                    {verticalStep === "Institution Details" && (
                      <>
                        <TabButton label="General" active={instTab === "General"} onClick={() => setInstTab("General")} />
                        <TabButton label="Address" active={instTab === "Address"} onClick={() => setInstTab("Address")} />
                        <TabButton label="Personnel" active={instTab === "Personnel"} onClick={() => setInstTab("Personnel")} />
                        <TabButton label="About" active={instTab === "About"} onClick={() => setInstTab("About")} />
                      </>
                    )}
                  </div>
                  <div className="flex gap-3 order-1 sm:order-2">
                    <button className="flex-1 sm:flex-none px-6 lg:px-10 py-2.5 border border-[#D0D5DD] text-[#344054] text-[14px] font-bold rounded-lg hover:bg-slate-50 transition-all shadow-sm">Back</button>
                    <button className="flex-1 sm:flex-none px-6 lg:px-10 py-2.5 bg-[#0A77FF] text-white text-[14px] font-bold rounded-lg hover:bg-[#0862D1] transition-all shadow-sm active:scale-95">Continue</button>
                  </div>
                </div>

                {/* --- Step: Institution Details --- */}
                {verticalStep === "Institution Details" && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-400">
                    {instTab === "General" && (
                      <div className="space-y-6">
                        <Field label="Name of Institution">
                          <div className="relative">
                            <input className="w-full h-11 px-4 pr-10 border border-[#D0D5DD] rounded-xl text-[#101828] bg-[#F9FAFB] font-medium shadow-sm transition-all focus:ring-2 focus:ring-[#0A77FF]/10" value="Sina Gerard Rwanda" disabled />
                            <Building2 className="absolute right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#667085] opacity-60" />
                          </div>
                        </Field>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Field label="Institution Type">
                            <div className="relative">
                              <select className="w-full h-11 px-4 appearance-none border border-[#D0D5DD] rounded-xl text-[#101828] bg-[#F9FAFB] font-medium shadow-sm" disabled>
                                <option>Select type</option>
                              </select>
                              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#667085]" />
                            </div>
                          </Field>
                          <Field label="P.O Box">
                            <div className="relative">
                              <input className="w-full h-11 px-4 pr-10 border border-[#D0D5DD] rounded-xl text-[#101828] bg-[#F9FAFB] font-medium shadow-sm" value="P.O. Box 1234, Kigali" disabled />
                              <div className="absolute right-3.5 top-1/2 -translate-y-1/2"><PackageIcon16 /></div>
                            </div>
                          </Field>
                        </div>
                        <Field label="Email">
                          <div className="relative">
                            <input className="w-full h-11 px-4 pr-10 border border-[#D0D5DD] rounded-xl text-[#101828] bg-[#F9FAFB] font-medium shadow-sm" value="company@example.com" disabled />
                            <div className="absolute right-3.5 top-1/2 -translate-y-1/2"><MailIcon16 /></div>
                          </div>
                        </Field>
                        <Field label="Phone Number">
                          <div className="flex h-11 border border-[#D0D5DD] rounded-xl overflow-hidden bg-[#F9FAFB] shadow-sm">
                            <div className="px-4 border-r flex items-center gap-1 text-[14px] text-[#101828] font-bold bg-[#F9FAFB]">+250</div>
                            <input className="flex-1 px-4 bg-transparent outline-none font-medium" value="791-234-567" disabled />
                            <div className="px-3 flex items-center"><PhoneIcon15 /></div>
                          </div>
                        </Field>
                      </div>
                    )}

                    {instTab === "Address" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
                        <Field label="Province"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Western" disabled /></Field>
                        <Field label="District"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Nyabihu" disabled /></Field>
                        <Field label="Sector"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Mukamira" disabled /></Field>
                        <Field label="Cell"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Mukamira" disabled /></Field>
                        <Field label="Village"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Mukamira" disabled /></Field>
                        <Field label="City"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Mukamira" disabled /></Field>
                        <div className="col-span-1 md:col-span-2">
                          <Field label="Address Line"><input className="w-full h-11 px-4 border border-[#D0D5DD] rounded-xl bg-[#F9FAFB] font-medium shadow-sm" value="Mukamira Road" disabled /></Field>
                        </div>
                      </div>
                    )}

                    {instTab === "Personnel" && (
                      <div className="animate-in fade-in duration-300 border border-[#EAECF0] rounded-xl overflow-hidden bg-white shadow-sm overflow-x-auto">
                        <table className="w-full text-left text-[14px] min-w-[600px]">
                          <thead className="bg-[#F9FAFB] border-b border-[#EAECF0] text-[#475467] font-bold text-[11px] uppercase tracking-wider">
                            <tr>
                              <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                              <th className="px-4 py-4">Name</th>
                              <th className="px-4 py-4">Position</th>
                              <th className="px-4 py-4">Contact</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAECF0]">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-4"><input type="checkbox" className="rounded transition-all" /></td>
                                <td className="px-4 py-4">
                                  <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white shadow-sm transition-all group-hover:scale-110">
                                      <Image src={personnelAvatars[i % personnelAvatars.length]} alt="Personnel avatar" fill className="object-cover" />
                                    </div>
                                    <div>
                                      <p className="font-bold text-[#101828] text-[14px]">{i % 2 === 0 ? "Drew Cano" : "Natali Craig"}</p>
                                      <p className="text-[12px] text-slate-400 font-bold tracking-tight">{i % 2 === 0 ? "Male" : "Female"}</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-4">
                                  <p className="font-bold text-[#475467] text-[13px]">Deputy Director</p>
                                  <p className="text-[12px] text-slate-400 font-bold">Qualification</p>
                                </td>
                                <td className="px-4 py-4">
                                  <p className="font-bold text-[#475467] text-[13px]">natali@example.com</p>
                                  <p className="text-[12px] text-slate-400 font-bold tracking-tight">+250-791-234-567</p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {instTab === "About" && (
                      <div className="space-y-6 animate-in fade-in duration-300">
                        <Field label="Mission">
                          <textarea 
                            className="w-full h-32 px-5 py-4 border border-[#D0D5DD] rounded-2xl bg-[#F9FAFB] text-[#101828] font-bold resize-none leading-relaxed shadow-sm opacity-90" 
                            disabled
                            defaultValue="I am a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                          />
                        </Field>
                        <Field label="Vision">
                          <textarea 
                            className="w-full h-32 px-5 py-4 border border-[#D0D5DD] rounded-2xl bg-[#F9FAFB] text-[#101828] font-bold resize-none leading-relaxed shadow-sm opacity-90" 
                            disabled
                            defaultValue="I am a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                          />
                        </Field>
                        <Field label="Objects">
                          <textarea 
                            className="w-full h-32 px-5 py-4 border border-[#D0D5DD] rounded-2xl bg-[#F9FAFB] text-[#101828] font-bold resize-none leading-relaxed shadow-sm opacity-90" 
                            disabled
                            defaultValue="I am a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
                          />
                        </Field>
                      </div>
                    )}
                  </div>
                )}

                {/* --- Step: Trade & Competency --- */}
                {verticalStep === "Trade & Competency" && (
                  <div className="flex flex-col items-center justify-center py-12 animate-in zoom-in-95 duration-400">
                    <div className="w-16 h-16 rounded-2xl border border-[#EAECF0] bg-white shadow-xl flex items-center justify-center mb-6">
                      <Ungroup className="w-8 h-8 text-[#0A77FF]" />
                    </div>
                    <h2 className="text-[20px] font-bold text-[#101828] mb-2 tracking-tight">Trade & Module Selected</h2>
                    <p className="text-[14px] text-[#475467] mb-10 text-center font-medium">Select the trade you are applying for accreditation in.</p>
                    
                    <div className="flex items-center gap-4 mb-12">
                      <button
                        type="button"
                        className="box-border flex h-[42px] w-[126px] items-start gap-[10px] rounded-[8px] border border-[#0A77FF] bg-white px-[12px] py-[12px]"
                      >
                        <span className="h-4 w-4 shrink-0">
                          <MasonryIcon16 />
                        </span>
                        <span className="flex h-[18px] w-[50px] items-start text-left text-[12px] font-light leading-[18px] text-[#414141]">
                          Masonry
                        </span>
                        <span className="h-4 w-4 shrink-0">
                          <TickBadge16 />
                        </span>
                      </button>
                      <ChevronRight className="w-5 h-5 text-slate-300" />
                      <button
                        type="button"
                        className="box-border flex h-[42px] items-start gap-[10px] rounded-[8px] border border-[#0A77FF] bg-white px-[12px] py-[12px]"
                      >
                        <span className="h-4 w-4 shrink-0">
                          <DataStructuresIcon16 />
                        </span>
                        <span className="flex h-[18px] items-start text-left text-[12px] font-light leading-[18px] text-[#414141]">
                          Data Structures
                        </span>
                        <span className="h-4 w-4 shrink-0">
                          <TickBadge16 />
                        </span>
                      </button>
                    </div>

                    <div className="w-full max-w-md space-y-4">
                      <Field label="Add Comment (Optional)">
                         <textarea className="w-full h-32 px-4 py-3 border border-slate-200 rounded-2xl bg-white shadow-sm resize-none placeholder:text-slate-300 font-bold" placeholder="Text..." />
                         <p className="text-[12px] text-slate-400 font-bold tracking-tight">275 characters left</p>
                      </Field>
                      <button className="flex items-center gap-2 bg-[#0A77FF] text-white px-5 py-2.5 rounded-lg text-[14px] font-bold hover:bg-[#0862D1] transition-all shadow-lg active:scale-95">
                        <span>Add Comment</span>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* --- Step: Equipment & Facilities --- */}
                {verticalStep === "Equipment & Facilities" && (
                  <div className="flex flex-col animate-in slide-in-from-right-4 duration-400">
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className="w-16 h-16 rounded-2xl border border-[#EAECF0] bg-white shadow-xl flex items-center justify-center mb-6">
                        <EquipmentIcon28 />
                      </div>
                      <h2 className="text-[20px] font-bold text-[#101828] mb-2 tracking-tight">Equipment & Facilities</h2>
                      <p className="text-[14px] text-[#475467] font-medium max-w-[400px]">Specify the competencies offered under the selected trade.</p>
                    </div>

                    <div className="flex flex-col gap-8">
                       <div className="flex self-center items-center gap-3 px-5 py-3 border border-[#0A77FF] rounded-xl bg-white shadow-md">
                          <span className="text-[14px] text-[#0A77FF] font-bold flex items-center gap-2">
                             <Ungroup className="w-4 h-4" /> Masonry
                          </span>
                          <CheckCircle2 className="w-5 h-5 text-[#34C759]" />
                       </div>

                       <div className="space-y-4">
                         <div className="flex items-center justify-between px-1">
                           <p className="text-[14px] font-bold text-[#101828]">24 equipment</p>
                         </div>
                         <div className="relative group">
                           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-[#0A77FF]" />
                           <input className="w-full h-12 pl-12 pr-4 border border-slate-200 rounded-2xl bg-white shadow-sm font-bold placeholder:text-slate-300 focus:ring-2 focus:ring-[#0A77FF]/5 focus:border-[#0A77FF] transition-all" placeholder="Search" />
                         </div>
                       </div>

                       <div className="space-y-4">
                         {[1, 2].map((i) => (
                           <div key={i} className="group p-4 border border-[#EAECF0] rounded-2xl flex items-center gap-4 bg-white transition-all hover:border-[#0A77FF]/30 hover:shadow-lg hover:shadow-slate-100">
                              <div className="w-24 h-16 rounded-xl bg-slate-100 shrink-0 border border-[#EAECF0] flex items-center justify-center">
                                <EquipmentIcon28 />
                             </div>
                             <div className="flex-1">
                               <p className="text-[15px] font-bold text-[#101828]">Server</p>
                               <p className="text-[12px] text-slate-400 font-bold mt-1">Quantity: 2 Pieces</p>
                             </div>
                             <button className="p-3 text-slate-300 hover:text-[#0A77FF] hover:bg-blue-50 rounded-xl transition-all active:scale-90">
                               <Eye className="w-5 h-5" />
                             </button>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                )}

                {/* --- Step: Curriculum --- */}
                {verticalStep === "Curriculum" && (
                  <div className="animate-in slide-in-from-right-4 duration-400">
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className="w-16 h-16 rounded-2xl border border-[#EAECF0] bg-white shadow-xl flex items-center justify-center mb-6">
                        <Files className="w-7 h-7 text-[#0A77FF]" />
                      </div>
                      <h2 className="text-[20px] font-bold text-[#101828] mb-2 tracking-tight">Curriculum Documents</h2>
                      <p className="text-[14px] text-[#475467] font-medium">Upload curriculum and training materials.</p>
                    </div>

                    <div className="border border-[#EAECF0] rounded-2xl bg-white shadow-md overflow-hidden">
                      <div className="p-5 border-b border-[#EAECF0] flex items-center justify-between bg-white">
                        <div className="space-y-1">
                          <h3 className="text-[15px] font-bold text-[#101828]">Curriculum Documents</h3>
                          <p className="text-[12px] text-slate-400 font-bold">Files and assets that have been attached to this project.</p>
                        </div>
                        <button className="p-2.5 text-slate-400 hover:bg-slate-50 rounded-lg transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-[14px] min-w-[500px]">
                          <thead className="bg-[#F9FAFB] border-b border-[#EAECF0] text-[#475467] font-bold text-[11px] uppercase tracking-wider">
                            <tr>
                              <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                              <th className="px-4 py-4">File name</th>
                              <th className="px-4 py-4 text-center">Action</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#EAECF0]">
                            {[1, 2, 3, 4].map((i) => (
                              <tr key={i} className="hover:bg-slate-50 transition-colors group">
                                <td className="px-6 py-5"><input type="checkbox" className="rounded transition-all" /></td>
                                <td className="px-4 py-5 font-bold">
                                  <div className="flex items-center gap-4">
                                     <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm">
                                        <PdfIcon40 />
                                     </div>
                                    <div>
                                      <p className="text-[#101828] text-[14px]">Evaluation Criteria One</p>
                                      <p className="text-[11px] text-slate-400 font-bold mt-0.5">200 KB</p>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-4 py-5">
                                  <div className="flex items-center justify-center gap-4 text-[#0A77FF] font-bold text-[13px]">
                                    <button className="hover:underline flex items-center gap-1.5 active:scale-95 transition-transform"><Download className="w-4 h-4" /> Download</button>
                                    <button className="hover:underline flex items-center gap-1.5 active:scale-95 transition-transform"><ExternalLink className="w-4 h-4" /> Open</button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* --- Step: Staff --- */}
                {verticalStep === "Staff" && (
                  <div className="animate-in slide-in-from-right-4 duration-400">
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className="w-16 h-16 rounded-2xl border border-[#EAECF0] bg-white shadow-xl flex items-center justify-center mb-6">
                        <Users className="w-7 h-7 text-[#0A77FF]" />
                      </div>
                      <h2 className="text-[20px] font-bold text-[#101828] mb-2 tracking-tight">Staff Allocation</h2>
                      <p className="text-[14px] text-[#475467] font-medium">Upload curriculum and training materials.</p>
                    </div>

                    <div className="border border-[#EAECF0] rounded-2xl bg-white shadow-md overflow-hidden overflow-x-auto">
                      <table className="w-full text-left text-[14px] min-w-[600px]">
                        <thead className="bg-[#F9FAFB] border-b border-[#EAECF0] text-[#475467] font-bold text-[11px] uppercase tracking-wider">
                          <tr>
                            <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded" /></th>
                            <th className="px-4 py-4">Position & Qualification</th>
                            <th className="px-4 py-4">Count</th>
                            <th className="px-4 py-4 text-center">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#EAECF0]">
                          {[
                            { pos: "Position", status: "Rejected" },
                            { pos: "Position", status: "Pending" },
                            { pos: "Position", status: "Rejected" },
                            { pos: "Position", status: "Approved" },
                            { pos: "Position", status: "Pending" },
                          ].map((item, i) => (
                            <tr key={i} className="hover:bg-slate-50 transition-colors group">
                               <td className="px-6 py-5"><input type="checkbox" className="rounded transition-all" /></td>
                               <td className="px-4 py-5 font-bold">
                                  <div className="flex items-center gap-4">
                                     <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center shadow-sm ring-2 ring-white">
                                        <UserPlaceholder24 />
                                     </div>
                                     <div>
                                        <p className="text-[#101828] text-[14px]">{item.pos}</p>
                                        <p className="text-[11px] text-slate-400 font-bold mt-0.5 uppercase tracking-tighter opacity-80">Qualification</p>
                                     </div>
                                  </div>
                               </td>
                               <td className="px-4 py-5 text-[#101828] font-bold text-[14px] px-8">2</td>
                               <td className="px-4 py-5 text-center">
                                  <div className="flex justify-center">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-sm ring-1 ring-inset transition-all ${
                                      item.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 ring-emerald-200/50' : 
                                      item.status === 'Rejected' ? 'bg-rose-50 text-rose-600 ring-rose-200/50' : 
                                      'bg-blue-50 text-blue-600 ring-blue-200/50'
                                    }`}>
                                      {item.status}
                                      {item.status === 'Approved' && <CheckCircle2 className="w-3 h-3" />}
                                      {item.status === 'Rejected' && <AlertCircle className="w-3 h-3 rotate-180" />}
                                      {item.status === 'Pending' && <Clock className="w-3 h-3" />}
                                    </span>
                                  </div>
                               </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* --- Step: Decision Making --- */}
                {verticalStep === "Decision Making" && (
                  <div className="animate-in slide-in-from-right-4 duration-400">
                    <div className="flex flex-col items-center text-center mb-10">
                      <div className="w-16 h-16 rounded-2xl border border-[#EAECF0] bg-white shadow-xl flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-7 h-7 text-[#0A77FF]" />
                      </div>
                      <h2 className="text-[20px] font-bold text-[#101828] mb-2 tracking-tight">Decision Making</h2>
                      <p className="text-[14px] text-[#475467] font-medium">Capture the final initial-review decision for this application.</p>
                    </div>

                    <div className="border border-[#EAECF0] rounded-2xl bg-white shadow-md p-6 sm:p-8">
                      <div className="space-y-6">
                        <Field label="Decision Summary">
                          <textarea
                            className="w-full h-32 px-4 py-3 border border-slate-200 rounded-2xl bg-white shadow-sm resize-none placeholder:text-slate-300"
                            placeholder="Add a brief decision summary..."
                          />
                        </Field>
                        <div className="flex flex-wrap items-center gap-3">
                          <button className="px-6 py-2.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-all shadow-sm active:scale-95">
                            Approve
                          </button>
                          <button className="px-6 py-2.5 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition-all shadow-sm active:scale-95">
                            Reject
                          </button>
                          <button className="px-6 py-2.5 rounded-lg border border-[#D0D5DD] text-[#344054] hover:bg-slate-50 transition-all shadow-sm">
                            Request Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function StepItem({ title, subtitle, active, onClick }: { title: string; subtitle: string; active: boolean; onClick: () => void }) {
  return (
    <div className="flex flex-col gap-3 relative z-10 cursor-pointer group" onClick={onClick}>
      <div className={`w-6 h-6 rounded-full flex items-center justify-center border-[2px] transition-all duration-300 shadow-sm ${
        active 
          ? "bg-[#0A77FF] border-[#0A77FF] scale-110" 
          : "bg-white border-[#EAECF0] hover:border-[#D0D5DD]"
      }`}>
        <div className={`w-2 h-2 rounded-full ${active ? "bg-white" : "bg-[#D0D5DD]"}`} />
      </div>
      <div>
        <p className={`text-sm font-medium leading-tight transition-colors ${active ? "text-[#101828]" : "text-slate-400 group-hover:text-[#353E49]"}`}>{title}</p>
        <p className={`text-xs font-medium leading-tight mt-1 transition-opacity ${active ? "text-[#353E49] opacity-80" : "text-[#475467] opacity-60 group-hover:opacity-100"}`}>{subtitle}</p>
      </div>
    </div>
  );
}

function VerticalNavStep({ title, description, icon, active, onClick }: { title: string; description: string; icon: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <div className={`flex gap-4 relative z-10 cursor-pointer transition-all duration-300 group ${active ? "opacity-100" : "opacity-40 hover:opacity-100"}`} onClick={onClick}>
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-2xl border transition-all duration-300 flex items-center justify-center shadow-md ${
          active 
            ? "bg-white border-[#EAECF0] text-[#0A77FF] scale-110 ring-4 ring-[#0A77FF]/5" 
            : "bg-white border-[#EAECF0] text-[#353E49]"
        }`}>
          {icon}
        </div>
      </div>
      <div className="pt-1 pb-10">
        <p className={`text-sm font-medium transition-colors ${active ? "text-[#101828]" : "text-[#101828] opacity-80"}`}>{title}</p>
        <p className="text-xs text-[#353E49] opacity-60 leading-tight max-w-[200px] mt-1.5 font-medium tracking-tight">{description}</p>
      </div>
    </div>
  );
}

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`text-sm font-medium transition-all pb-3 border-b-2 tracking-tight ${
        active ? "text-[#0A77FF] border-[#0A77FF]" : "text-[#667085] border-transparent hover:text-[#353E49] hover:border-slate-300"
      }`}
    >
      {label}
    </button>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2.5 w-full">
      <label className="text-sm font-medium text-[#344054] tracking-tight ml-0.5">{label}</label>
      {children}
    </div>
  );
}

