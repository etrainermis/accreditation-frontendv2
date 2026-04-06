import { useState } from 'react';

interface InteractiveWrapperProps {
  children: React.ReactNode;
  title: string;
}

export function InteractiveWrapper({ children, title }: InteractiveWrapperProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-full transition-all duration-300">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h2 className="text-lg font-semibold text-[#182230]">{title}</h2>
          <svg
            className={`w-5 h-5 text-[#667085] transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-6 pt-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
