import { useState } from 'react';

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-20 right-8 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105"
        aria-label="Help"
      >
        <svg className="w-6 h-6 text-[#0a77ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 bg-white rounded-lg shadow-xl border border-gray-200 p-6 w-80 animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <h3 className="text-lg font-semibold text-[#182230] mb-4">Quick Help</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-[#344054] mb-2">Navigation</h4>
              <ul className="text-sm text-[#667085] space-y-1">
                <li>• Use arrow buttons or dots to navigate</li>
                <li>• Click sidebar menu items on desktop</li>
                <li>• Use keyboard arrows (← →) to move</li>
                <li>• Press Ctrl + 1-4 to jump to specific steps</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-[#344054] mb-2">Application Steps</h4>
              <ol className="text-sm text-[#667085] space-y-1">
                <li>1. Equipment & Facilities - List equipment</li>
                <li>2. Curriculum Documents - Upload materials</li>
                <li>3. Staff Allocation - Assign staff</li>
                <li>4. Due Diligence - Schedule evaluation</li>
              </ol>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-[#667085]">
                Need more help? Contact support at{' '}
                <a href="mailto:support@example.com" className="text-[#0a77ff] hover:underline">
                  support@example.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
