import svgPaths from "./icon-paths";
import _imgAvatar from '../assets/avatar.png';
const imgAvatar = typeof _imgAvatar === "string" ? _imgAvatar : _imgAvatar.src;
import _imgRectangle4407 from '../assets/site-image.png';
const imgRectangle4407 = typeof _imgRectangle4407 === "string" ? _imgRectangle4407 : _imgRectangle4407.src;
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

function Lines() {
  return (
    <div className="absolute h-[2px] left-[18px] right-[202px] top-[11px]" data-name="Lines">
      <div className="absolute bg-[#0a77ff] h-[2px] left-0 right-[235px] top-0" data-name="Line" />
      <div className="absolute bg-[#eaecf0] h-[2px] left-[450px] right-[256px] top-0" data-name="Line" />
      <div className="absolute bg-[#eaecf0] h-[2px] left-[512px] right-[46px] top-0" data-name="Line" />
    </div>
  );
}

function Content3() {
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

function Content4() {
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

function Content5() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-center relative shrink-0 w-full" data-name="Content">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#353e49] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Perform Due Diligence
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#7f56d9] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Start collaborating
      </p>
    </div>
  );
}

function Content6() {
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

function Content7() {
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

function Content8() {
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

function Content9() {
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
        <div className="bg-[#f9f5ff] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="_Step icon base">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
            <g id="Content">
              <path d={svgPaths.p1d7768c0} fill="var(--fill-0, #0A77FF)" />
              <path d={svgPaths.p1d7768c0} stroke="var(--stroke-0, #0A77FF)" strokeWidth="1.5" />
              <path clipRule="evenodd" d={svgPaths.p6d9be70} fill="var(--fill-0, white)" fillRule="evenodd" id="Tick" />
            </g>
          </svg>
        </div>
        <Content3 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9f5ff] overflow-clip relative rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(158,119,237,0.24)] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content4 />
        </div>
        <Content5 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9fafb] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content6 />
        </div>
        <Content7 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="_Step base">
        <div className="bg-[#f9fafb] overflow-clip relative rounded-[9999px] shrink-0 size-[24px]" data-name="_Step icon base">
          <Content8 />
        </div>
        <Content9 />
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
    <button className="bg-white cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="Buttons/Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
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
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </button>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[224px]">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Date Selection
      </p>
      <ButtonsButton />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[12px] text-ellipsis text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Western
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative size-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function InputWithLabel() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[70px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Visit Hour
      </p>
      <Input />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <Frame11 />
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative" data-name="Input field">
        <InputWithLabel />
      </button>
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-full overflow-hidden relative shrink-0 text-[#101828] text-[14px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Assign Evaluator `}</p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Click to select evaluator
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[14px] py-[12px] relative size-full">
          <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light h-full leading-[18px] min-h-px min-w-px relative text-[#667085] text-[12px] text-left" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Text....
          </p>
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
        Addition Evaluation Note?
      </p>
      <Input1 />
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Add Note
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[202px] items-start relative shrink-0 w-full" data-name="Form">
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative w-full" data-name="Textarea input field">
        <InputWithLabel1 />
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] text-left w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          275 characters left
        </p>
      </button>
      <div className="bg-[#0a77ff] relative rounded-[8px] shrink-0" data-name="Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit]">
          <TextPadding2 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="message-square-plus">
            <div className="absolute inset-[12.5%_8.33%_8.35%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-3.16%_-3%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6667 16.8299">
                  <path d={svgPaths.p2b8bb380} id="Vector" stroke="var(--stroke-0, #F0F7FF)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[41.67%] left-1/2 right-1/2 top-[33.33%]" data-name="Vector">
              <div className="absolute inset-[-10%_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
                  <path d="M0.5 0.5V5.5" id="Vector" stroke="var(--stroke-0, #F0F7FF)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[45.83%_37.5%_54.17%_37.5%]" data-name="Vector">
              <div className="absolute inset-[-0.5px_-10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 1">
                  <path d="M0.5 0.5H5.5" id="Vector" stroke="var(--stroke-0, #F0F7FF)" strokeLinecap="round" strokeLinejoin="round" />
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

function TextPadding3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Cancel
      </p>
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Schedule Due Diligence
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
            <TextPadding3 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-[#0a77ff] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[14px] py-[10px] relative w-full">
            <TextPadding4 />
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#0a77ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Actions2 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[480px]" data-name="Content">
      <Content12 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] h-[392px] items-start min-h-px min-w-px relative">
      <Frame13 />
      <div className="content-stretch flex gap-[12px] items-center p-[24px] relative rounded-[12px] shrink-0 w-[518px]" data-name="Action Center">
        <div aria-hidden="true" className="absolute border border-[#dae1e8] border-dashed inset-0 pointer-events-none rounded-[12px]" />
        <div className="bg-[#f2f4f7] relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
          <ContrastBorder1 />
          <div className="absolute inset-[20%] overflow-clip" data-name="user-plus">
            <div className="absolute inset-[62.5%_33.33%_12.5%_8.33%]" data-name="Vector">
              <div className="absolute inset-[-8.33%_-3.57%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
                  <path d={svgPaths.p2349cb97} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="absolute inset-[33.33%_20.83%_41.67%_79.17%]" data-name="Vector">
              <div className="absolute inset-[-8.33%_-0.5px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 7">
                  <path d="M0.5 0.5V6.5" id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
            <div className="absolute inset-[45.83%_8.33%_54.17%_66.67%]" data-name="Vector">
              <div className="absolute inset-[-0.5px_-8.33%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 1">
                  <path d="M6.5 0.5H0.5" id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <TextAndSupportingText1 />
      </div>
      <Form />
      <Content11 />
    </div>
  );
}

function Content13() {
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
      <p className="flex-[1_0_0] font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#667085] text-[12px] text-ellipsis text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Search
      </p>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[14px] py-[10px] relative w-full">
          <Content13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function InputWithLabel2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Input with label">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#344054] text-[12px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        24 equipment
      </p>
      <Input2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex font-['Nunito_Sans:Regular',sans-serif] font-light gap-[4px] items-start relative shrink-0 text-[#475467] text-[10px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Quantity:
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2 Pieces
      </p>
    </div>
  );
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[18px] min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#344054] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Server
      </p>
      <Frame7 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Found at Site
      </p>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
        <div className="bg-[#34c759] overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
          <div className="absolute inset-[12.5%] overflow-clip" data-name="check">
            <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
              <div className="absolute inset-[-15.15%_-10.42%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6666 7.1666">
                  <path d={svgPaths.p38f57cf0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6666" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <TextAndSupportingText2 />
      <Frame14 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table cell">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="eye">
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
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Actions">
      <TableCell />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative" data-name="Content">
      <Container1 />
      <Actions3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[4px] self-stretch shrink-0 w-[103px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle4407} />
      </div>
      <Content14 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex font-['Nunito_Sans:Regular',sans-serif] font-light gap-[4px] items-start relative shrink-0 text-[#475467] text-[10px] w-full whitespace-nowrap">
      <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Quantity:
      </p>
      <p className="relative shrink-0" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        2 Pieces
      </p>
    </div>
  );
}

function TextAndSupportingText3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[18px] min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#344054] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Server
      </p>
      <Frame9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#344054] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Found at Site
      </p>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Checkbox">
        <div className="bg-[#34c759] overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="_Checkbox base">
          <div className="absolute inset-[12.5%] overflow-clip" data-name="check">
            <div className="absolute bottom-[29.17%] left-[16.67%] right-[16.67%] top-1/4" data-name="Icon">
              <div className="absolute inset-[-15.15%_-10.42%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.6666 7.1666">
                  <path d={svgPaths.p38f57cf0} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6666" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <TextAndSupportingText3 />
      <Frame15 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Table cell">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="eye">
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
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Actions">
      <TableCell1 />
    </div>
  );
}

function Content15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative" data-name="Content">
      <Container2 />
      <Actions4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="relative rounded-[4px] self-stretch shrink-0 w-[103px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4px] size-full" src={imgRectangle4407} />
      </div>
      <Content15 />
    </div>
  );
}

function Drafted() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Drafted">
      <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Draft">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Frame6 />
        </div>
      </div>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Draft">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
        <div className="content-stretch flex flex-col items-start p-[16px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative">
      <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start min-w-[200px] relative shrink-0 w-full" data-name="Input dropdown">
        <InputWithLabel2 />
      </button>
      <Drafted />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[96px] items-start relative shrink-0 w-full">
      <Frame12 />
      <Frame5 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1024px] items-start p-[32px] right-0 top-0 w-[1196px]">
      <Container />
      <ProgressStepsProgressIconsCentered />
      <Frame10 />
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
        Super Admin Portal
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

function Content17() {
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

function Content18() {
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

function Content19() {
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

function Content20() {
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
            <Content17 />
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content18 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content19 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content20 />
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

function Content21() {
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

function Content22() {
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
    </div>
  );
}

function ContrastBorder2() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText4() {
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
            <ContrastBorder2 />
          </div>
          <TextAndSupportingText4 />
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

function Content16() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Content">
      <Navigation />
      <Footer />
    </div>
  );
}

export default function DueDiligence() {
  return (
    <div className="bg-white relative size-full" data-name="DUE_DILIGENCE">
      <Frame4 />
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[244px]" data-name="Admin Nav">
        <div className="content-stretch flex items-start overflow-clip px-[24px] relative rounded-[inherit] size-full">
          <Content16 />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
