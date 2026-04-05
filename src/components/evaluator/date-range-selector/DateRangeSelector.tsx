import svgPaths from "./icon-paths";

function BackgroundOverlay() {
  return <div className="absolute bg-[#0c111d] inset-0 opacity-70" data-name="Background overlay" />;
}

function TextPadding() {
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
        <TextPadding />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05),0px_0px_0px_4px_rgba(152,162,179,0.14)]" />
    </button>
  );
}

function LeadingContent() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Leading content">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] h-full items-start px-[16px] py-[12px] relative">
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Today
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Yesterday
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            This week
          </p>
        </div>
        <div className="bg-[#f9fafb] content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#182230] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Last week
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            This month
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Last month
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            This year
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Last year
          </p>
        </div>
        <div className="content-stretch flex h-[40px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[6px] shrink-0 w-[160px]" data-name="_Date picker list item">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            All time
          </p>
        </div>
      </div>
    </div>
  );
}

function Month() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[280px]" data-name="Month">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-left">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-8.33%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
                <path d={svgPaths.p3a0d2780} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#344054] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        January 2024
      </p>
      <div className="content-stretch flex items-center justify-center overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Buttons/Button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Icon">
            <div className="absolute inset-[-8.33%_-16.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.66667 11.6667">
                <path d={svgPaths.p324d0480} id="Icon" stroke="var(--stroke-0, #344054)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dates() {
  return (
    <div className="content-start flex flex-wrap gap-[4px_0px] items-start relative shrink-0 w-full" data-name="Dates">
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">Mo</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">Tu</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">We</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">Th</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">Fr</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">Sat</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">Su</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">26</p>
        <div className="-translate-x-1/2 absolute bottom-[4px] left-1/2 size-[5px]" data-name="Dot">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <circle cx="2.5" cy="2.5" fill="var(--fill-0, #98A2B3)" id="Dot" r="2.5" />
          </svg>
        </div>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">27</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">28</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">29</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">30</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">31</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">1</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">2</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">3</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">4</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">5</p>
      </div>
      <div className="bg-[#0a77ff] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[14px] text-center text-white top-[calc(50%-10px)] w-[24px]">6</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <div className="absolute h-[40px] left-[-20px] top-0 w-[80px]" data-name="Connection">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 40">
            <path clipRule="evenodd" d={svgPaths.p3ac0b600} fill="var(--fill-0, #F9FAFB)" fillRule="evenodd" id="Connection" />
          </svg>
        </div>
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">7</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">8</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">9</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <div className="absolute h-[40px] left-[-20px] top-0 w-[80px]" data-name="Connection">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 40">
            <path clipRule="evenodd" d={svgPaths.p3ac0b600} fill="var(--fill-0, #F9FAFB)" fillRule="evenodd" id="Connection" />
          </svg>
        </div>
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">10</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <div className="absolute h-[40px] left-[-20px] top-0 w-[80px]" data-name="Connection">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 40">
            <path clipRule="evenodd" d={svgPaths.p3ac0b600} fill="var(--fill-0, #F9FAFB)" fillRule="evenodd" id="Connection" />
          </svg>
        </div>
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">11</p>
        <div className="-translate-x-1/2 absolute bottom-[4px] left-1/2 size-[5px]" data-name="Dot">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <circle cx="2.5" cy="2.5" fill="var(--fill-0, #0A77FF)" id="Dot" r="2.5" />
          </svg>
        </div>
      </div>
      <div className="bg-[#0a77ff] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[14px] text-center text-white top-[calc(50%-10px)] w-[24px]">12</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">13</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">14</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">15</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">16</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">17</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">18</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">19</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">20</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">21</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">22</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">23</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">24</p>
        <div className="-translate-x-1/2 absolute bottom-[4px] left-1/2 size-[5px]" data-name="Dot">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
            <circle cx="2.5" cy="2.5" fill="var(--fill-0, #0A77FF)" id="Dot" r="2.5" />
          </svg>
        </div>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">25</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">26</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">27</p>
      </div>
      <div className="bg-[#f9fafb] relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-1/2 not-italic text-[#182230] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">28</p>
        <div className="absolute bottom-0 left-[60%] right-[-10%] top-1/2" data-name="Cursor">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[16px] left-[calc(50%-1px)] top-1/2 w-[14px]" data-name="Shape">
            <div className="absolute inset-[-8.59%_-16.96%_-21.09%_-16.96%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7499 20.75">
                <g filter="url(#filter0_d_1_29981)" id="Shape">
                  <path clipRule="evenodd" d={svgPaths.pd15ef00} fill="var(--fill-0, white)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pd15ef00} fillRule="evenodd" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.75" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.75" id="filter0_d_1_29981" width="18.7499" x="0" y="-5.96046e-08">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_29981" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_29981" mode="normal" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-[calc(50%+0.5px)] top-[calc(50%+3px)] w-[5px]" data-name="Lines">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 4">
              <path d={svgPaths.p2cc24780} fill="var(--fill-0, black)" id="Lines" />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">29</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">30</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#344054] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">31</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">1</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">2</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">3</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">4</p>
      </div>
      <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="_Calendar cell">
        <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-1/2 not-italic text-[#667085] text-[14px] text-center top-[calc(50%-10px)] w-[24px]">5</p>
      </div>
    </div>
  );
}

function Calendar() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Calendar">
      <Month />
      <Dates />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col items-start px-[24px] py-[20px] relative w-full">
        <Calendar />
      </div>
    </div>
  );
}

function LeftPicker() {
  return (
    <div className="relative shrink-0 w-[328px]" data-name="Left picker">
      <div className="content-stretch flex flex-col items-center overflow-clip relative rounded-[inherit] w-full">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function DatePickers() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Date pickers">
      <LeftPicker />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative" data-name="Content">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px not-italic overflow-hidden relative text-[#101828] text-[16px] text-ellipsis text-left whitespace-nowrap">Jan 6, 2024</p>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[14px] py-[10px] relative w-full">
          <Content1 />
        </div>
      </div>
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

function InputFields() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Input fields">
      <button className="content-stretch cursor-pointer flex flex-col gap-[6px] items-start relative shrink-0 w-[136px]" data-name="Input field">
        <InputWithLabel />
      </button>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#344054] text-[14px] text-left whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Cancel
      </p>
    </div>
  );
}

function TextPadding2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
      <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Apply
      </p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch cursor-pointer flex gap-[12px] items-start relative shrink-0" data-name="Actions">
      <button className="bg-white h-[44px] relative rounded-[8px] shrink-0 w-[97px]" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
          <TextPadding1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </button>
      <button className="bg-[#0a77ff] h-[44px] relative rounded-[8px] shrink-0 w-[97px]" data-name="Buttons/Button">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[10px] relative rounded-[inherit] size-full">
          <TextPadding2 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0a77ff] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
      </button>
    </div>
  );
}

function BottomPanel() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom panel">
      <div aria-hidden="true" className="absolute border-[#eaecf0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[16px] relative w-full">
          <InputFields />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function TrailingContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Trailing content">
      <DatePickers />
      <BottomPanel />
    </div>
  );
}

function DatePickerMenu() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0" data-name="_Date picker menu">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit]">
        <LeadingContent />
        <TrailingContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaecf0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_20px_24px_-4px_rgba(16,24,40,0.08),0px_8px_8px_-4px_rgba(16,24,40,0.03)]" />
    </div>
  );
}

function DatePickerDropdown() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Date picker dropdown">
      <ButtonsButton />
      <DatePickerMenu />
    </div>
  );
}

export default function DateRangeSelector() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative size-full" data-name="DATE-RANGE SELECTOR">
      <div className="absolute backdrop-blur-[8px] inset-0" data-name="Background overlay">
        <BackgroundOverlay />
      </div>
      <DatePickerDropdown />
    </div>
  );
}