import { useEffect } from 'react';

type StepType = 'equipment' | 'curriculum' | 'staff' | 'due-diligence';

interface KeyboardNavigationProps {
  currentStep: StepType;
  onNavigate: (step: StepType) => void;
  onNext: () => void;
  onBack: () => void;
}

export function useKeyboardNavigation({
  currentStep,
  onNavigate,
  onNext,
  onBack,
}: KeyboardNavigationProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case '1':
            event.preventDefault();
            onNavigate('equipment');
            break;
          case '2':
            event.preventDefault();
            onNavigate('curriculum');
            break;
          case '3':
            event.preventDefault();
            onNavigate('staff');
            break;
          case '4':
            event.preventDefault();
            onNavigate('due-diligence');
            break;
        }
      } else {
        switch (event.key) {
          case 'ArrowRight':
            if (!event.shiftKey) {
              event.preventDefault();
              onNext();
            }
            break;
          case 'ArrowLeft':
            if (!event.shiftKey) {
              event.preventDefault();
              onBack();
            }
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentStep, onNavigate, onNext, onBack]);
}

export function KeyboardShortcutsInfo() {
  return (
    <div className="fixed bottom-4 left-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 hidden xl:block max-w-xs">
      <h3 className="text-sm font-semibold text-[#182230] mb-3 flex items-center gap-2">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
        Keyboard Shortcuts
      </h3>
      <div className="space-y-2 text-xs text-[#667085]">
        <div className="flex items-center justify-between">
          <span>Next Step</span>
          <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">→</kbd>
        </div>
        <div className="flex items-center justify-between">
          <span>Previous Step</span>
          <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">←</kbd>
        </div>
        <div className="flex items-center justify-between">
          <span>Go to Step 1-4</span>
          <div className="flex gap-1">
            <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">Ctrl</kbd>
            <span>+</span>
            <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">1-4</kbd>
          </div>
        </div>
      </div>
    </div>
  );
}
