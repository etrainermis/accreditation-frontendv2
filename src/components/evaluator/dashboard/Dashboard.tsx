import svgPaths from "./icon-paths";
import _imgAvatar from '../assets/avatar.png';
const imgAvatar = typeof _imgAvatar === "string" ? _imgAvatar : _imgAvatar.src;
import _imgAvatar1 from '../assets/hero.png';
const imgAvatar1 = typeof _imgAvatar1 === "string" ? _imgAvatar1 : _imgAvatar1.src;
import _imgAvatar2 from '../assets/rtb-icon.png';
const imgAvatar2 = typeof _imgAvatar2 === "string" ? _imgAvatar2 : _imgAvatar2.src;
import _imgRtbLogo from '../assets/rtb-logo.png';
const imgRtbLogo = typeof _imgRtbLogo === "string" ? _imgRtbLogo : _imgRtbLogo.src;

function Tabs() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Tabs">
      <div className="content-stretch flex items-center justify-center p-[4px] relative rounded-[6px] shrink-0" data-name="_Breadcrumb button base">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#0a77ff] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Dashboard
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
        Welcome, John 👋
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

function NumberAndBadge() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">2,203</p>
    </div>
  );
}

function HeadingAndNumber() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full">Assigned</p>
      <NumberAndBadge />
    </div>
  );
}

function NumberAndBadge1() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">1,003</p>
    </div>
  );
}

function HeadingAndNumber1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full">Pending</p>
      <NumberAndBadge1 />
    </div>
  );
}

function NumberAndBadge2() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">1,190</p>
    </div>
  );
}

function HeadingAndNumber2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full">{`Evaluated `}</p>
      <NumberAndBadge2 />
    </div>
  );
}

function NumberAndBadge3() {
  return (
    <div className="content-center flex flex-wrap gap-[12px_16px] items-center relative shrink-0 w-full" data-name="Number and badge">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] whitespace-nowrap">10</p>
    </div>
  );
}

function HeadingAndNumber3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Heading and number">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full">Overdue</p>
      <NumberAndBadge3 />
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

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col items-start pr-[28px] relative w-full">
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#323539] text-[14px] w-full">Your Evaluation Trend</p>
      </div>
    </div>
  );
}

function DropdownButton() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name=".Dropdown button">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Menus/dot menu">
        <div className="absolute inset-[45.83%_16.67%]" data-name="Icon">
          <div className="absolute inset-[-50%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 4">
              <path d={svgPaths.pf7486f0} id="Icon" stroke="var(--stroke-0, #858C95)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[18px] h-[40px] items-center justify-center overflow-clip relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)] shrink-0" data-name="Button group">
      <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name=".Button group base">
        <div aria-hidden="true" className="absolute border border-[#e5e5e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#323539] text-[12px] whitespace-nowrap">12 Months</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name=".Button group base">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#323539] text-[12px] whitespace-nowrap">30 Days</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name=".Button group base">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#323539] text-[12px] whitespace-nowrap">7 Days</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[10px] relative shrink-0" data-name=".Button group base">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#323539] text-[12px] whitespace-nowrap">24 Hours</p>
      </div>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name=".Card header">
      <div aria-hidden="true" className="absolute border-[#e5e5e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-center px-[20px] py-[16px] relative w-full">
          <Text />
          <div className="absolute content-stretch flex flex-col items-start justify-center right-[20px] top-[16px]" data-name="Dropdown">
            <DropdownButton />
          </div>
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

function LegendSeries() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend series">
      <div className="relative shrink-0 size-[8px]" data-name="Color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #E7F1FF)" id="Color" r="4" />
        </svg>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Pending `}</p>
    </div>
  );
}

function LegendSeries1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend series">
      <div className="relative shrink-0 size-[8px]" data-name="Color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #5BA4FF)" id="Color" r="4" />
        </svg>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Approved
      </p>
    </div>
  );
}

function LegendSeries2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Legend series">
      <div className="relative shrink-0 size-[8px]" data-name="Color">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #0A77FF)" id="Color" r="4" />
        </svg>
      </div>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#475467] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Rejected
      </p>
    </div>
  );
}

function Divider() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1062 1">
            <line id="Divider" stroke="var(--stroke-0, #E7F1FF)" strokeLinecap="round" x1="0.5" x2="1061.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider1() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1062 1">
            <line id="Divider" stroke="var(--stroke-0, #E7F1FF)" strokeLinecap="round" x1="0.5" x2="1061.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider2() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1062 1">
            <line id="Divider" stroke="var(--stroke-0, #E7F1FF)" strokeLinecap="round" x1="0.5" x2="1061.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider3() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1062 1">
            <line id="Divider" stroke="var(--stroke-0, #E7F1FF)" strokeLinecap="round" x1="0.5" x2="1061.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider4() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1062 1">
            <line id="Divider" stroke="var(--stroke-0, #E7F1FF)" strokeLinecap="round" x1="0.5" x2="1061.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Divider5() {
  return (
    <div className="flex-[1_0_0] h-px min-h-px min-w-px relative" data-name="Divider">
      <div className="absolute bottom-0 left-0 right-0 top-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1062 1">
            <line id="Divider" stroke="var(--stroke-0, #E7F1FF)" strokeLinecap="round" x1="0.5" x2="1061.5" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function XAxis() {
  return (
    <div className="relative shrink-0 w-full" data-name="X-axis">
      <div className="content-stretch flex flex-col items-start pl-[48px] relative w-full">
        <div className="relative shrink-0 w-full" data-name="_X-axis">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center justify-between leading-[18px] not-italic px-[24px] relative text-[#475467] text-[12px] text-center w-full whitespace-nowrap">
              <p className="relative shrink-0">Jan</p>
              <p className="relative shrink-0">Feb</p>
              <p className="relative shrink-0">Mar</p>
              <p className="relative shrink-0">Apr</p>
              <p className="relative shrink-0">May</p>
              <p className="relative shrink-0">Jun</p>
              <p className="relative shrink-0">Jul</p>
              <p className="relative shrink-0">Aug</p>
              <p className="relative shrink-0">Sep</p>
              <p className="relative shrink-0">Oct</p>
              <p className="relative shrink-0">Nov</p>
              <p className="relative shrink-0">Dec</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartBar() {
  return (
    <div className="absolute inset-[48px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 120">
        <g id="Chart bar">
          <path d={svgPaths.p3a33c600} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p3fedcd00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p2efb6860} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar />
    </div>
  );
}

function ChartBar1() {
  return (
    <div className="absolute inset-[16px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 152">
        <g id="Chart bar">
          <path d={svgPaths.p320a9400} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p3403fa00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p3327c900} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar1() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar1 />
    </div>
  );
}

function ChartBar2() {
  return (
    <div className="absolute inset-[80px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 88">
        <g id="Chart bar">
          <path d={svgPaths.p10dc66c0} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p385c0c00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p5019500} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar2() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar2 />
    </div>
  );
}

function ChartBar3() {
  return (
    <div className="absolute inset-[40px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 128">
        <g id="Chart bar">
          <path d={svgPaths.p1664aa00} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p338e8400} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p337d7500} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar3() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar3 />
    </div>
  );
}

function ChartBar4() {
  return (
    <div className="absolute inset-[80px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 88">
        <g id="Chart bar">
          <path d={svgPaths.p10dc66c0} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p385c0c00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p5019500} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar4() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar4 />
    </div>
  );
}

function ChartBar5() {
  return (
    <div className="absolute inset-[24px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 144">
        <g id="Chart bar">
          <path d={svgPaths.p35cd8860} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p38393180} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p2872e900} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar5() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar5 />
    </div>
  );
}

function ChartBar6() {
  return (
    <div className="absolute inset-[48px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 120">
        <g id="Chart bar">
          <path d={svgPaths.p3a33c600} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p3fedcd00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p2efb6860} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar6() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar6 />
    </div>
  );
}

function ChartBar7() {
  return (
    <div className="absolute inset-[40px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 128">
        <g id="Chart bar">
          <path d={svgPaths.p1664aa00} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p338e8400} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p337d7500} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar7() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar7 />
    </div>
  );
}

function ChartBar8() {
  return (
    <div className="absolute inset-[48px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 120">
        <g id="Chart bar">
          <path d={svgPaths.p3a33c600} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p3fedcd00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p2efb6860} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar8() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar8 />
    </div>
  );
}

function ChartBar9() {
  return (
    <div className="absolute inset-[32px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 136">
        <g id="Chart bar">
          <path d={svgPaths.p1cd6f900} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p11808b00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p31753680} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar9() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar9 />
    </div>
  );
}

function ChartBar10() {
  return (
    <div className="absolute inset-[16px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 152">
        <g id="Chart bar">
          <path d={svgPaths.p320a9400} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p3403fa00} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p3327c900} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar10() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar10 />
    </div>
  );
}

function ChartBar11() {
  return (
    <div className="absolute inset-[56px_0_0_0]" data-name="Chart bar">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 112">
        <g id="Chart bar">
          <path d={svgPaths.p2a8ebf80} fill="var(--fill-0, #E7F1FF)" id="Series 1" />
          <path d={svgPaths.p35e6170} fill="var(--fill-0, #5BA4FF)" id="Series 2" />
          <path d={svgPaths.p32972c80} fill="var(--fill-0, #0A77FF)" id="Series 3" />
        </g>
      </svg>
    </div>
  );
}

function Bar11() {
  return (
    <div className="h-full relative shrink-0 w-[32px]" data-name="Bar">
      <ChartBar11 />
    </div>
  );
}

function Chart() {
  return (
    <div className="absolute content-stretch flex inset-0 items-end justify-between overflow-clip px-[20px]" data-name="Chart">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
      <Bar8 />
      <Bar9 />
      <Bar10 />
      <Bar11 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-end min-h-px min-w-px relative" data-name="Content">
      <div className="relative shrink-0 w-full" data-name="_Legend">
        <div className="flex flex-row justify-end size-full">
          <div className="content-stretch flex gap-[12px] items-start justify-end px-[32px] relative w-full">
            <LegendSeries />
            <LegendSeries1 />
            <LegendSeries2 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full" data-name="_Y-axis">
        <div className="content-stretch flex gap-[8px] h-[22px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-right w-[40px]">20</p>
          <Divider />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-right w-[40px]">16</p>
          <Divider1 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-right w-[40px]">12</p>
          <Divider2 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-right w-[40px]">8</p>
          <Divider3 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-right w-[40px]">4</p>
          <Divider4 />
        </div>
        <div className="content-stretch flex gap-[8px] h-[17px] items-center relative shrink-0 w-full" data-name="_Y-axis line">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] not-italic relative shrink-0 text-[#475467] text-[12px] text-right w-[40px]">0</p>
          <Divider5 />
        </div>
      </div>
      <XAxis />
      <div className="content-stretch flex items-start justify-center pt-[8px] relative shrink-0 w-full" data-name="_X-axis label">
        <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#475467] text-[12px] text-center whitespace-nowrap">Month</p>
      </div>
      <div className="absolute inset-[20px_0_52px_48px] overflow-clip" data-name="_Chart data">
        <Chart />
      </div>
    </div>
  );
}

function Axis() {
  return (
    <div className="absolute content-stretch flex gap-[4px] inset-0 items-start" data-name="Axis">
      <div className="h-full relative shrink-0" data-name="_Y-axis label">
        <div className="flex flex-col justify-center size-full">
          <div className="content-stretch flex flex-col h-full items-start justify-center pb-[24px] relative">
            <div className="flex h-[72px] items-center justify-center relative shrink-0 w-[18px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "21" } as React.CSSProperties}>
              <div className="-rotate-90 flex-none">
                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[18px] relative text-[#475467] text-[12px] text-center whitespace-nowrap">Tasks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Content2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative" data-name="Text">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pr-[28px] relative size-full">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#858c95] text-[14px] w-full">Data graph</p>
        </div>
      </div>
    </div>
  );
}

function CardChartLightBarChart() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Card (Chart)/Light/Bar Chart/100%">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <CardHeader />
        <div className="h-[240px] min-w-[560px] relative shrink-0 w-full" data-name="Line and bar chart">
          <Axis />
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name=".Card footer">
          <div aria-hidden="true" className="absolute border-[#e5e5e7] border-solid border-t inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[16px] relative w-full">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                <Text1 />
              </div>
              <div className="content-stretch flex gap-[6px] items-center justify-center overflow-clip relative rounded-[5px] shrink-0" data-name="Button/Light/Primary/Link/Medium/Default/False/Round">
                <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#7f56d9] text-[14px] whitespace-nowrap">Open</p>
                <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Essentials/external link">
                  <div className="absolute inset-[12.5%]" data-name="Icon">
                    <div className="absolute inset-[-6.19%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.17 15.17">
                        <path d={svgPaths.p217f5d00} fill="var(--stroke-0, #7F56D9)" id="Icon" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e7] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04)]" />
    </div>
  );
}

function Graph() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Graph">
      <CardChartLightBarChart />
    </div>
  );
}

function TextAndSupportingText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Text and supporting text">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        All Applications
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
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

function Content4() {
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
          <Content4 />
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

function Content3() {
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
      <Content3 />
    </div>
  );
}

function ContrastBorder1() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Nunito_Sans:Regular',sans-serif] items-start min-h-px min-w-px relative whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Jane Smith
      </p>
      <p className="font-light leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
        Jane Smith
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Jane Smith
      </p>
      <p className="font-light leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
        Jane Smith
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Jane Smith
      </p>
      <p className="font-light leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
        Jane Smith
      </p>
      <p className="font-light leading-[18px] overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Jane Smith
      </p>
      <p className="font-light leading-[18px] min-w-full overflow-hidden relative shrink-0 text-[#475467] text-[12px] text-ellipsis w-[min-content]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        janesmith@example.com
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
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Applicant `}</p>
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

function ContrastBorder8() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText9() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function ContrastBorder9() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText10() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function ContrastBorder10() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText11() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function ContrastBorder11() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText12() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function ContrastBorder12() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText13() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function ContrastBorder13() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText14() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function ContrastBorder14() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText15() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito_Sans:Regular',sans-serif] items-start relative shrink-0 whitespace-nowrap" data-name="Text and supporting text">
      <p className="font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Command+R
      </p>
      <p className="font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        cmdr.ai
      </p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Institution
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder8 />
            </div>
            <TextAndSupportingText9 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder9 />
            </div>
            <TextAndSupportingText10 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder10 />
            </div>
            <TextAndSupportingText11 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder11 />
            </div>
            <TextAndSupportingText12 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder12 />
            </div>
            <TextAndSupportingText13 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder13 />
            </div>
            <TextAndSupportingText14 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[16px] relative size-full">
            <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Avatar">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[9999px] size-full" src={imgAvatar2} />
              <ContrastBorder14 />
            </div>
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
        JavaScript
      </p>
      <p className="relative shrink-0 text-[#475467] text-[10px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        SPE
      </p>
    </div>
  );
}

function TextAndSupportingText17() {
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

function TextAndSupportingText18() {
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

function TextAndSupportingText19() {
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

function TextAndSupportingText20() {
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

function TextAndSupportingText21() {
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

function TextAndSupportingText22() {
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

function Column2() {
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
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Status `}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-check">
                <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                  <div className="absolute inset-[-9.09%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                      <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-13.33%_-11.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 4.75">
                      <path d="M5 0.5L1.25 4.25L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-check">
                <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                  <div className="absolute inset-[-9.09%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                      <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-13.33%_-11.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 4.75">
                      <path d="M5 0.5L1.25 4.25L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
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
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-check">
                <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                  <div className="absolute inset-[-9.09%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                      <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-13.33%_-11.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 4.75">
                      <path d="M5 0.5L1.25 4.25L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
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
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
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
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#34c759] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Approved
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
            <div className="bg-[#fafdff] content-stretch flex gap-[4px] items-center pl-[6px] pr-[4px] py-[2px] relative rounded-[6px] shrink-0" data-name="Badge">
              <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#6155f5] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Pending
              </p>
              <div className="overflow-clip relative shrink-0 size-[12px]" data-name="check-check">
                <div className="absolute bottom-[29.17%] left-[8.33%] right-1/4 top-1/4" data-name="Vector">
                  <div className="absolute inset-[-9.09%_-6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6.5">
                      <path d="M8.5 0.5L3 6L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[41.67%_8.33%_27.08%_54.17%]" data-name="Vector">
                  <div className="absolute inset-[-13.33%_-11.11%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5 4.75">
                      <path d="M5 0.5L1.25 4.25L0.5 3.5" id="Vector" stroke="var(--stroke-0, #6155F5)" strokeLinecap="round" strokeLinejoin="round" />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Evaluation Stage
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Initial Review
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Due Diligence Scheduled
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>{`Due Diligence Completed `}</p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Final Review
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Rejected
            </p>
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Certified
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <p className="font-['Nunito_Sans:Regular',sans-serif] font-light leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Initial Review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TextAndSupportingText23() {
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

function TextAndSupportingText24() {
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

function TextAndSupportingText25() {
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

function TextAndSupportingText26() {
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

function TextAndSupportingText27() {
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

function TextAndSupportingText28() {
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

function TextAndSupportingText29() {
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

function Column5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[48px]" data-name="Column">
      <div className="bg-white h-[52px] relative shrink-0 w-full" data-name="Table header cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0" data-name="Table header">
              <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#475467] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Submitted On
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText23 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText24 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText25 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText26 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText27 />
          </div>
        </div>
      </div>
      <div className="h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText28 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafdff] h-[72px] relative shrink-0 w-full" data-name="Table cell">
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[24px] py-[16px] relative size-full">
            <TextAndSupportingText29 />
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

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[116px]" data-name="Column">
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

function Content5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
      <Column3 />
      <Column4 />
      <Column5 />
      <Column6 />
    </div>
  );
}

function TextPadding4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap">Previous</p>
    </div>
  );
}

function TextPadding5() {
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
          <TextPadding4 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </div>
      <div className="bg-white relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
          <TextPadding5 />
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
        <Content5 />
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

function Container1() {
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
      <Container1 />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center overflow-clip relative shrink-0 w-full" data-name="Main">
      <Container />
      <MetricGroup />
      <Graph />
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

function Content7() {
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

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="badge-check">
        <div className="absolute inset-[8.35%_8.35%_8.32%_8.29%]" data-name="Vector">
          <div className="absolute inset-[-2.5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.0061 20.9983">
              <path d={svgPaths.pa015e00} id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[41.67%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-12.5%_-8.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
              <path d="M0.5 2.5L2.5 4.5L6.5 0.5" id="Vector" stroke="var(--stroke-0, #84888C)" strokeLinecap="round" strokeLinejoin="round" />
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

function Content9() {
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

function Content10() {
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
      <div className="bg-[#f9fafb] relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content7 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content8 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content9 />
          </div>
        </div>
      </div>
      <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="_Nav item base">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
            <Content10 />
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

function Content11() {
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

function Content12() {
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

function ContrastBorder15() {
  return <div className="absolute border-[0.75px] border-[rgba(0,0,0,0.08)] border-solid inset-0 rounded-[9999px]" data-name="Contrast border" />;
}

function TextAndSupportingText30() {
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
            <ContrastBorder15 />
          </div>
          <TextAndSupportingText30 />
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

function Content6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-between relative shrink-0" data-name="Content">
      <Navigation />
      <Footer />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-white relative size-full" data-name="DASHBOARD">
      <Frame4 />
      <div className="absolute bg-white h-[1024px] left-0 top-0 w-[244px]" data-name="Evaluator Nav">
        <div className="content-stretch flex items-start overflow-clip px-[24px] relative rounded-[inherit] size-full">
          <Content6 />
        </div>
        <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}
