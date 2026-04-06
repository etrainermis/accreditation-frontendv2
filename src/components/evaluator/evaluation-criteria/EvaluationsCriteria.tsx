import svgPaths from "./icon-paths";
import _imgAvatar from '../assets/avatar.png';
const imgAvatar = typeof _imgAvatar === "string" ? _imgAvatar : _imgAvatar.src;
import _imgAvatar1 from '../assets/avatar-4.png';
const imgAvatar1 = typeof _imgAvatar1 === "string" ? _imgAvatar1 : _imgAvatar1.src;
import _imgAvatar2 from '../assets/avatar-2.png';
const imgAvatar2 = typeof _imgAvatar2 === "string" ? _imgAvatar2 : _imgAvatar2.src;
import _imgAvatar3 from '../assets/avatar-6.png';
const imgAvatar3 = typeof _imgAvatar3 === "string" ? _imgAvatar3 : _imgAvatar3.src;
import _imgAvatar4 from '../assets/avatar-7.png';
const imgAvatar4 = typeof _imgAvatar4 === "string" ? _imgAvatar4 : _imgAvatar4.src;
import _imgAvatar5 from '../assets/avatar-5.png';
const imgAvatar5 = typeof _imgAvatar5 === "string" ? _imgAvatar5 : _imgAvatar5.src;
import _imgAvatar6 from '../assets/avatar-3.png';
const imgAvatar6 = typeof _imgAvatar6 === "string" ? _imgAvatar6 : _imgAvatar6.src;
import _imgRtbLogo from '../assets/rtb-logo.png';
const imgRtbLogo = typeof _imgRtbLogo === "string" ? _imgRtbLogo : _imgRtbLogo.src;

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
          Evaluation Criteria
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
              <path d={svgPaths.p2f0f29c0} id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a77ff] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
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
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p24377f80} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <path d="M0.5 0.5H18.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[8.33%] left-[66.67%] right-[8.33%] top-3/4" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
              <path d="M0.5 2.5L2.5 4.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#353e49] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
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
      <div className="bg-[#f9fafb] flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content3 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content4 />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#101828] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria Attachments
      </p>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[52px] items-start justify-center min-h-px min-w-px relative" data-name="Text and supporting text">
      <TextAndBadge />
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Files and assets that have been attached to this project.
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="relative shrink-0 w-full z-[2]" data-name="Content">
      <div className="content-stretch flex gap-[16px] items-start pt-[20px] px-[24px] relative w-full">
        <TextAndSupportingText1 />
        <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0" data-name="Dropdown">
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
    </div>
  );
}

function Content7() {
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
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#667085] text-[16px] text-ellipsis text-left whitespace-nowrap">Search for trades</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content7 />
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

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        All time
      </p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Pending
      </p>
    </div>
  );
}

function TextPadding3() {
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
          <TextPadding1 />
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
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="filter-lines">
            <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Icon">
              <div className="absolute inset-[-8.33%_-5.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 11.6667">
                  <path d={svgPaths.p132a37e0} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </svg>
              </div>
            </div>
          </div>
          <TextPadding3 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-center min-h-px min-w-px relative" data-name="Actions">
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Input dropdown">
        <InputWithLabel />
      </button>
      <Dropdowns />
    </div>
  );
}

function Content6() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <div className="content-start flex flex-wrap gap-y-[16px] items-start justify-between px-[16px] py-[12px] relative w-full">
        <Actions2 />
      </div>
    </div>
  );
}

function FiltersBar() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Filters bar">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
      <Content6 />
    </div>
  );
}

function Page() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Page1() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Page3() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Page4() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Page5() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Page6() {
  return (
    <div className="absolute inset-[0_10%]" data-name="Page">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 40">
        <g id="Page">
          <path d={svgPaths.p21659600} fill="var(--fill-0, #D92D20)" id="Page background" />
          <path d={svgPaths.p2fedbcc0} fill="var(--fill-0, white)" id="Earmark" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function TextAndSupportingText8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluation Criteria One
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        200 KB
      </p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="bg-[#f9fafb] h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
              <div className="relative rounded-[6px] shrink-0 size-[20px]" data-name="_Checkbox base">
                <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </div>
            </div>
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">File name</p>
            </div>
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page1 />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
            </div>
            <TextAndSupportingText3 />
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page2 />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page3 />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
            </div>
            <TextAndSupportingText5 />
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page4 />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page5 />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
            </div>
            <TextAndSupportingText7 />
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
            <div className="relative shrink-0 size-[40px]" data-name="File type icon">
              <Page6 />
              <p className="absolute font-['Inter:Bold',sans-serif] font-bold inset-[57.5%_10%_15%_10%] leading-[normal] not-italic text-[9px] text-center text-white">PDF</p>
            </div>
            <TextAndSupportingText8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-[#f9fafb] h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">File size</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">200 KB</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">720 KB</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">16 MB</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">4.2 MB</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">400 KB</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">12 MB</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">800 KB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-[#f9fafb] h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Date uploaded</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 2, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 6, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 8, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 6, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-[#f9fafb] h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Last updated</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 4, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 2, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 6, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 8, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 6, 2022</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Jan 4, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Olivia Rhye
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        olivia@untitledui.com
      </p>
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Phoenix Baker</p>
      <p className="relative shrink-0 text-[#475467]">phoenix@untitledui.com</p>
    </div>
  );
}

function ContrastBorder3() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Lana Steiner</p>
      <p className="relative shrink-0 text-[#475467]">lana@untitledui.com</p>
    </div>
  );
}

function ContrastBorder4() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Demi Wilkinson</p>
      <p className="relative shrink-0 text-[#475467]">demi@untitledui.com</p>
    </div>
  );
}

function ContrastBorder5() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Candice Wu</p>
      <p className="relative shrink-0 text-[#475467]">candice@untitledui.com</p>
    </div>
  );
}

function ContrastBorder6() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Natali Craig</p>
      <p className="relative shrink-0 text-[#475467]">natali@untitledui.com</p>
    </div>
  );
}

function ContrastBorder7() {
  return <div className="absolute border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap" data-name="Text and supporting text">
      <p className="relative shrink-0 text-[#101828]">Drew Cano</p>
      <p className="relative shrink-0 text-[#475467]">drew@untitledui.com</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-[#f9fafb] h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap">Uploaded by</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar} />
              <ContrastBorder1 />
            </div>
            <TextAndSupportingText9 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#d6cfb7] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar1} />
              </div>
              <ContrastBorder2 />
            </div>
            <TextAndSupportingText10 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#cfcbdc] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar2} />
              </div>
              <ContrastBorder3 />
              <p className="-translate-x-1/2 absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[32px]">LS</p>
            </div>
            <TextAndSupportingText11 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#dadcd6] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar3} />
              </div>
              <ContrastBorder4 />
            </div>
            <TextAndSupportingText12 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#d9d0e6] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar4} />
              </div>
              <ContrastBorder5 />
            </div>
            <TextAndSupportingText13 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#e9dcbb] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar5} />
              </div>
              <ContrastBorder6 />
            </div>
            <TextAndSupportingText14 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Avatar">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
                <div className="absolute bg-[#d9e5cc] inset-0 rounded-[9999px]" />
                <img alt="" className="absolute max-w-none object-cover rounded-[9999px] size-full" src={imgAvatar6} />
              </div>
              <ContrastBorder7 />
            </div>
            <TextAndSupportingText15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Column">
      <div className="bg-[#f9fafb] h-[44px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="size-full" />
        </div>
      </div>
      <div className="content-stretch flex gap-[12px] h-[72px] items-center justify-end px-[24px] py-[16px] relative shrink-0" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
        </div>
        <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-center justify-end px-[24px] py-[16px] relative size-full">
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap">Delete</p>
            </div>
            <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative shrink-0" data-name="Buttons/Button">
              <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#6941c6] text-[14px] whitespace-nowrap">Edit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content8() {
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

function Table() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Table">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="bg-white content-stretch flex flex-col gap-[20px] isolate items-start relative shrink-0 w-full" data-name="Card header">
          <Content5 />
          <div className="h-px relative shrink-0 w-full z-[1]" data-name="Divider">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1132 1">
              <path clipRule="evenodd" d="M1132 1H0V0H1132V1Z" fill="var(--fill-0, #EAECF0)" fillRule="evenodd" id="Divider" />
            </svg>
          </div>
        </div>
        <FiltersBar />
        <Content8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Container">
      <Table />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Section">
      <Container1 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-name="Main">
      <Container />
      <SubNavigation />
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

function Content10() {
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

function Content11() {
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

function Content12() {
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

function Content13() {
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
            <Content10 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
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
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content13 />
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

function Content14() {
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

function Content15() {
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
            <Content14 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content15 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder8() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText16() {
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
          <TextAndSupportingText16 />
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

function Content9() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Content">
      <Navigation />
      <Footer />
    </div>
  );
}

export default function EvaluationsCriteria() {
  return (
    <div className="bg-white relative size-full" data-name="EVALUATIONS/CRITERIA">
      <Frame4 />
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[244px]" data-name="Evaluator Nav">
        <div className="content-stretch flex items-start overflow-clip px-[24px] relative rounded-[inherit] size-full">
          <Content9 />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
