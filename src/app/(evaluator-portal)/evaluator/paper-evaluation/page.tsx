"use client";

import { useState } from 'react';
import EquipmentFacilities from '@/components/evaluator/equipment-facilities/EquipmentFacilities';
import CurriculumDoc from '@/components/evaluator/curriculum-document/CurriculumDoc';
import StaffAllocation from '@/components/evaluator/staff-allocation/StaffAllocation';
import DueDiligence from '@/components/evaluator/due-diligence/DueDiligence';
import { ProgressIndicator } from '@/components/evaluator/interactive-components/ProgressIndicator';
import { useKeyboardNavigation, KeyboardShortcutsInfo } from '@/components/evaluator/interactive-components/KeyboardNavigation';
import { WelcomeSplash, useWelcomeSplash } from '@/components/evaluator/interactive-components/WelcomeSplash';
import { Toast, useToast } from '@/components/evaluator/interactive-components/Toast';
import { HelpButton } from '@/components/evaluator/interactive-components/HelpButton';

type StepType = 'equipment' | 'curriculum' | 'staff' | 'due-diligence';

export default function PaperEvaluationPage() {
  const [currentStep, setCurrentStep] = useState<StepType>('equipment');
  const [fadeIn, setFadeIn] = useState(true);
  const { showSplash, handleComplete } = useWelcomeSplash();
  const { toasts, showToast, removeToast } = useToast();

  const stepToIndex: Record<StepType, number> = {
    'equipment': 0,
    'curriculum': 1,
    'staff': 2,
    'due-diligence': 3,
  };

  const handleNavigate = (step: StepType) => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentStep(step);
      setFadeIn(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const stepNames: Record<StepType, string> = {
        'equipment': 'Equipment & Facilities',
        'curriculum': 'Curriculum Documents',
        'staff': 'Staff Allocation',
        'due-diligence': 'Due Diligence',
      };
      showToast(`Navigated to ${stepNames[step]}`, 'info');
    }, 150);
  };

  const handleNext = () => {
    const steps: StepType[] = ['equipment', 'curriculum', 'staff', 'due-diligence'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      handleNavigate(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: StepType[] = ['equipment', 'curriculum', 'staff', 'due-diligence'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      handleNavigate(steps[currentIndex - 1]);
    }
  };

  useKeyboardNavigation({
    currentStep,
    onNavigate: handleNavigate,
    onNext: handleNext,
    onBack: handleBack,
  });

  return (
    <>
      {showSplash && <WelcomeSplash onComplete={handleComplete} />}

      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => removeToast(toast.id)}
        />
      ))}

      <div className="size-full flex flex-col bg-[#f9fafb] overflow-auto relative">
        <ProgressIndicator currentStep={stepToIndex[currentStep]} />

        <KeyboardShortcutsInfo />
        <HelpButton />

        <div className={`w-full flex-1 transition-opacity duration-300 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
          {currentStep === 'equipment' && <EquipmentFacilities />}
          {currentStep === 'curriculum' && <CurriculumDoc />}
          {currentStep === 'staff' && <StaffAllocation />}
          {currentStep === 'due-diligence' && <DueDiligence />}
        </div>

        {/* Navigation Buttons */}
        <div className="sticky bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
            <button
              onClick={handleBack}
              disabled={currentStep === 'equipment'}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 'equipment'
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-[#344054] border border-gray-300 hover:bg-gray-50 hover:shadow-sm'
              }`}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="hidden sm:inline">Back</span>
              </span>
            </button>

            <div className="flex-1 flex justify-center gap-2">
              {['equipment', 'curriculum', 'staff', 'due-diligence'].map((step) => (
                <button
                  key={step}
                  onClick={() => handleNavigate(step as StepType)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentStep === step
                      ? 'bg-[#0a77ff] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to ${step}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentStep === 'due-diligence'}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 'due-diligence'
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-[#0a77ff] text-white hover:bg-[#0862d1] hover:shadow-lg'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="hidden sm:inline">
                  {currentStep === 'due-diligence' ? 'Complete' : 'Next'}
                </span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Quick Navigation - Desktop Only */}
        <div className="hidden lg:block fixed bottom-24 right-8 z-50">
          <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
            {(['equipment', 'curriculum', 'staff', 'due-diligence'] as const).map((step, index) => (
              <button
                key={step}
                onClick={() => handleNavigate(step)}
                className={`w-full px-4 py-3 text-left text-sm transition-all border-l-4 ${
                  currentStep === step
                    ? 'bg-[#e0f2fe] border-[#0a77ff] text-[#0a77ff] font-semibold'
                    : 'bg-white border-transparent text-[#667085] hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex items-center justify-center w-6 h-6 rounded-full text-xs ${
                      currentStep === step
                        ? 'bg-[#0a77ff] text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span className="capitalize">{step.replace('-', ' ')}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
