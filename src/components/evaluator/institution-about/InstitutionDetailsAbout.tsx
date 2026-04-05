import svgPaths from "./icon-paths";
import _imgAvatar from '../assets/avatar.png';
const imgAvatar = typeof _imgAvatar === "string" ? _imgAvatar : _imgAvatar.src;
import _imgRtbLogo from '../assets/rtb-logo.png';
const imgRtbLogo = typeof _imgRtbLogo === "string" ? _imgRtbLogo : _imgRtbLogo.src;

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Tabs">
      <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#353e49] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Evaluations
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
      <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#0a77ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Application
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
      <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          XYZ Ltd JavaScript
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

function Frame2() {
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
        XYZ Ltd JavaScript Accreditation Application
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Create and manage your accreditation applications for the selected trades.
      </p>
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
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap">New Application</p>
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
      <Frame2 />
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

function Lines() {
  return (
    <div className="absolute h-[2px] left-[18px] right-[202px] top-[11px]" data-name="Lines">
      <div className="absolute bg-[#0a77ff] h-[2px] left-0 right-[512px] top-0" data-name="Line" />
      <div className="absolute bg-[#eaecf0] h-[2px] left-[4px] right-[256px] top-0" data-name="Line" />
      <div className="absolute bg-[#eaecf0] h-[2px] left-[512px] right-[47px] top-0" data-name="Line" />
    </div>
  );
}

function Content3() {
  return (
    <div className="absolute bg-[#0a77ff] border-[#0a77ff] border-[1.5px] border-solid inset-0 rounded-[12px]" data-name="Content">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="Dot">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Dot" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-[#353e49] w-full" data-name="Content">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Initial Review
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Documents Review
      </p>
    </div>
  );
}

function Content5() {
  return (
    <div className="absolute border-[#eaecf0] border-[1.5px] border-solid inset-0 rounded-[12px]" data-name="Content">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="Dot">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D0D5DD)" id="Dot" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Perform Due Diligence
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Start collaborating
      </p>
    </div>
  );
}

function Content7() {
  return (
    <div className="absolute border-[#eaecf0] border-[1.5px] border-solid inset-0 rounded-[12px]" data-name="Content">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="Dot">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D0D5DD)" id="Dot" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Final Review
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Start collaborating
      </p>
    </div>
  );
}

function Content9() {
  return (
    <div className="absolute border-[#eaecf0] border-[1.5px] border-solid inset-0 rounded-[12px]" data-name="Content">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[8px] top-1/2" data-name="Dot">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #D0D5DD)" id="Dot" r="4" />
        </svg>
      </div>
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Decision Making `}</p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Automatic sharing
      </p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Content">
      <Lines />
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9f5ff] overflow-clip relative rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(158,119,237,0.24)] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content3 />
        </div>
        <Content4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9fafb] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content5 />
        </div>
        <Content6 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9fafb] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content7 />
        </div>
        <Content8 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9fafb] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content9 />
        </div>
        <Content10 />
      </div>
    </div>
  );
}

function ProgressStepsProgressIconsCentered() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Progress steps / Progress icons centered">
      <Content2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] min-h-px min-w-px relative text-[#353e49] text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Application Details
      </p>
    </div>
  );
}

function DropdownButton() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[10px] relative rounded-[6px] shrink-0" data-name=".Dropdown button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="si:arrow-left-fill">
        <div className="absolute inset-[29.22%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6665 8.31285">
            <path d={svgPaths.p21805f00} fill="var(--fill-0, #0A77FF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0" data-name="Dropdown">
      <DropdownButton />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Dropdown />
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Exit
      </p>
    </div>
  );
}

function ConnectorWrap() {
  return (
    <div className="h-full relative shrink-0" data-name="Connector wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="building-2">
              <div className="absolute bottom-1/2 left-[41.67%] right-[41.67%] top-1/2" data-name="Vector">
                <div className="absolute inset-[-0.5px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
                    <path d="M0.5 0.5H4.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[33.33%_41.67%_66.67%_41.67%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
                    <path d="M0.5 0.5H4.5" id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[66.67%_41.67%_12.5%_41.67%]" data-name="Vector">
                <div className="absolute inset-[-10%_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
                    <path d={svgPaths.p2f97c400} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_8.33%_12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-3.57%_-2.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
                    <path d={svgPaths.p191c64a0} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-[12.5%] left-1/4 right-1/4 top-[12.5%]" data-name="Vector">
                <div className="absolute inset-[-2.78%_-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 19">
                    <path d={svgPaths.p1bfba100} id="Vector" stroke="var(--stroke-0, #353E49)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px pb-[32px] relative text-[#353e49]" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Institution Details
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Review the institution details as submitted `}</p>
    </div>
  );
}

function ConnectorWrap1() {
  return (
    <div className="h-full relative shrink-0" data-name="Connector wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="ungroup">
              <div className="absolute inset-[16.67%_45.83%_58.33%_20.83%]" data-name="Vector">
                <div className="absolute inset-[-8.33%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
                    <path d={svgPaths.p3c77fa00} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[58.33%_20.83%_16.67%_45.83%]" data-name="Vector">
                <div className="absolute inset-[-8.33%_-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 7">
                    <path d={svgPaths.p3c77fa00} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px pb-[32px] relative text-[#84888c]" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Trade & Competency`}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Select the trade(s) you are applying for
      </p>
    </div>
  );
}

function ConnectorWrap2() {
  return (
    <div className="h-full relative shrink-0" data-name="Connector wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="tool-case">
              <div className="absolute inset-[62.5%_41.67%_37.5%_41.67%]" data-name="Vector">
                <div className="absolute inset-[-0.5px_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 1">
                    <path d="M0.5 0.5H4.5" id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.51%_35.99%_54.16%_12.51%]" data-name="Vector">
                <div className="absolute inset-[-6.25%_-4.04%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3619 9.00051">
                    <path d={svgPaths.p25909550} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[11.8%_11.83%_54.19%_61.45%]" data-name="Vector">
                <div className="absolute inset-[-6.12%_-7.8%_-6.13%_-7.8%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.41106 9.16366">
                    <path d={svgPaths.p2f7da900} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[45.83%_16.67%_12.5%_16.67%]" data-name="Vector">
                <div className="absolute inset-[-5%_-3.12%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 11">
                    <path d={svgPaths.p1bdd09f0} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px pb-[32px] relative text-[#84888c]" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Equipment and Facilities
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        List available equipment and upload proof
      </p>
    </div>
  );
}

function ConnectorWrap3() {
  return (
    <div className="h-full relative shrink-0" data-name="Connector wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="files">
              <div className="absolute inset-[8.33%_12.5%_29.17%_37.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%_-4.17%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
                    <path d={svgPaths.p3a02a500} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[8.33%_12.5%_66.67%_62.5%]" data-name="Vector">
                <div className="absolute inset-[-8.33%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.00001 7.00001">
                    <path d={svgPaths.p1edeb400} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[29.17%_38.62%_8.33%_12.5%]" data-name="Vector">
                <div className="absolute inset-[-3.33%_-4.26%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7321 16">
                    <path d={svgPaths.p2ad86d80} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px pb-[32px] relative text-[#84888c]" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Curriculum Documents
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Upload curriculum and training materials
      </p>
    </div>
  );
}

function ConnectorWrap4() {
  return (
    <div className="h-full relative shrink-0" data-name="Connector wrap">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] h-full items-center pb-[4px] relative">
          <div className="relative rounded-[10px] shrink-0 size-[48px]" data-name="Featured icon">
            <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
            <div className="absolute left-[12px] overflow-clip size-[24px] top-[12px]" data-name="users">
              <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
                <div className="absolute inset-[-8.33%_-3.57%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
                    <path d={svgPaths.p2349cb97} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[13.03%_20.85%_54.7%_66.67%]" data-name="Vector">
                <div className="absolute inset-[-6.46%_-16.69%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.99632 8.74424">
                    <path d={svgPaths.p32a1c800} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[63.04%_8.33%_12.5%_79.17%]" data-name="Vector">
                <div className="absolute inset-[-8.52%_-16.67%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.00012 6.87012">
                    <path d={svgPaths.p32fac0c0} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[12.5%_45.83%_54.17%_20.83%]" data-name="Vector">
                <div className="absolute inset-[-6.25%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                    <path d={svgPaths.p2a600700} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eaecf0] flex-[1_0_0] min-h-px min-w-px rounded-[2px] w-[2px]" data-name="Connector" />
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px pb-[32px] relative text-[#84888c]" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{` Staff Allocation`}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Indicate staff availability for the selected trade
      </p>
    </div>
  );
}

function ProgressStepsProgressIconsWithText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Progress steps / Progress icons with text">
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px relative w-full" data-name="_Step base">
        <ConnectorWrap />
        <TextAndSupportingText1 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px opacity-60 relative w-full" data-name="_Step base">
        <ConnectorWrap1 />
        <TextAndSupportingText2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px opacity-60 relative w-full" data-name="_Step base">
        <ConnectorWrap2 />
        <TextAndSupportingText3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px opacity-60 relative w-full" data-name="_Step base">
        <ConnectorWrap3 />
        <TextAndSupportingText4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px opacity-60 relative w-full" data-name="_Step base">
        <ConnectorWrap4 />
        <TextAndSupportingText5 />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Content">
      <ProgressStepsProgressIconsWithText />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Content">
      <Content12 />
    </div>
  );
}

function Header() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Header">
      <div className="content-stretch flex flex-col gap-[42px] items-start pl-[48px] pr-[32px] pt-[48px] relative size-full">
        <Frame />
        <Frame4 />
        <Content11 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-full items-start justify-between max-w-[440px] relative shrink-0 w-[338px]" data-name="Section">
      <Header />
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Back
      </p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Start Evaluation
      </p>
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Actions">
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
            <TextPadding1 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#0a77ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
            <TextPadding2 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0a77ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Actions2 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[480px]" data-name="Content">
      <Content14 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        General
      </p>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Address
      </p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Personnel
      </p>
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Content">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        About
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
            <Content15 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content16 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content17 />
          </div>
        </div>
      </div>
      <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[6px]" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content18 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[14px] py-[12px] relative size-full">
          <div className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light h-full leading-[0] min-h-px min-w-px relative text-[#101828] text-[12px] text-left" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[18px] mb-[12px]">{`I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.`}</p>
            <p className="leading-[18px]">&nbsp;</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Input with label">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Mission
      </p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[14px] py-[12px] relative size-full">
          <div className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light h-full leading-[0] min-h-px min-w-px relative text-[#101828] text-[12px] text-left" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[18px] mb-[12px]">{`I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.`}</p>
            <p className="leading-[18px]">&nbsp;</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Input with label">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Vision
      </p>
      <Input1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[14px] py-[12px] relative size-full">
          <div className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light h-full leading-[0] min-h-px min-w-px relative text-[#101828] text-[12px] text-left" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            <p className="leading-[18px] mb-[12px]">{`I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development.`}</p>
            <p className="leading-[18px]">&nbsp;</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Input with label">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Objects
      </p>
      <Input2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative w-full">
      <SubNavigation />
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Textarea input field">
        <InputWithLabel />
      </button>
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Textarea input field">
        <InputWithLabel1 />
      </button>
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Textarea input field">
        <InputWithLabel2 />
      </button>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-h-px min-w-px relative">
      <Content13 />
      <Frame9 />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[32px] py-[24px] relative size-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px relative w-full">
      <Section />
      <Container1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1024px] items-start p-[32px] right-0 top-0 w-[1196px]">
      <Container />
      <ProgressStepsProgressIconsCentered />
      <Frame7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-end justify-center relative shrink-0">
      <div className="h-[31px] relative shrink-0 w-[50px]" data-name="rtb-logo">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRtbLogo} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#353e49] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        RTB Accreditation
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#0a77ff] text-[10px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Applicant Portal
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function Content20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="house">
        <div className="absolute bottom-[12.5%] left-[37.5%] right-[37.5%] top-1/2" data-name="Vector">
          <div className="absolute inset-[-5.56%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 10">
              <path d={svgPaths.p2a6eea00} id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_12.5%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-2.63%_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20.0005">
              <path d={svgPaths.p231d8ac0} id="Vector" stroke="var(--stroke-0, #0A77FF)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a77ff] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="users">
        <div className="absolute bottom-[12.5%] left-[8.33%] right-1/4 top-[54.17%]" data-name="Vector">
          <div className="absolute inset-[-6.25%_-3.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 9">
              <path d={svgPaths.p3813c680} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_37.5%_45.83%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
              <path d={svgPaths.p16fbdc80} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[15.42%_8.33%_16.67%_73.12%]" data-name="Vector">
          <div className="absolute inset-[-3.07%_-11.24%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.45008 17.3001">
              <path d={svgPaths.p3d82d50} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Applications
      </p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar-fold">
        <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
              <path d={svgPaths.p13b06c00} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[66.67%_12.5%_8.33%_62.5%]" data-name="Vector">
          <div className="absolute inset-[-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <path d={svgPaths.p11c23600} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 5">
              <path d="M0.5 0.5V4.5" id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-0.5px_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <path d="M0.5 0.5H18.5" id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Evaluations
      </p>
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="user">
        <div className="absolute inset-[62.5%_20.83%_12.5%_20.83%]" data-name="Vector">
          <div className="absolute inset-[-8.33%_-3.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
              <path d={svgPaths.p2349cb97} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[12.5%_33.33%_54.17%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
              <path d={svgPaths.p2a600700} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
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

function Content24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="bell">
        <div className="absolute inset-[87.5%_42.78%_8.33%_42.78%]" data-name="Vector">
          <div className="absolute inset-[-50.01%_-14.44%_-50%_-14.44%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.46417 2">
              <path d={svgPaths.p1c6a3f80} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_12.5%_29.17%_12.5%]" data-name="Vector">
          <div className="absolute inset-[-3.33%_-2.78%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9996 16">
              <path d={svgPaths.p3d2da200} id="Vector" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content20 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content21 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content22 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content23 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content24 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start pt-[32px] relative shrink-0 w-full" data-name="Navigation">
      <Frame1 />
      <Navigation1 />
    </div>
  );
}

function Content25() {
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

function Content26() {
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
            <Content25 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content26 />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText6() {
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
            <ContrastBorder1 />
          </div>
          <TextAndSupportingText6 />
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

function Content19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Content">
      <Navigation />
      <Footer />
    </div>
  );
}

function SidebarNavigation() {
  return (
    <div className="absolute bg-white h-[1024px] left-0 top-0" data-name="Sidebar navigation">
      <div className="content-stretch flex h-full items-start overflow-clip px-[24px] relative rounded-[inherit]">
        <Content19 />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

export default function InstitutionDetailsAbout() {
  return (
    <div className="bg-white relative size-full" data-name="INSTITUTION_DETAILS [ABOUT]">
      <Frame6 />
      <SidebarNavigation />
    </div>
  );
}
