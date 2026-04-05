interface Step {
  id: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface ProgressIndicatorProps {
  currentStep: number;
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps: Step[] = [
    {
      id: 'equipment',
      title: 'Equipment & Facilities',
      status: currentStep === 0 ? 'current' : currentStep > 0 ? 'completed' : 'upcoming',
    },
    {
      id: 'curriculum',
      title: 'Curriculum Documents',
      status: currentStep === 1 ? 'current' : currentStep > 1 ? 'completed' : 'upcoming',
    },
    {
      id: 'staff',
      title: 'Staff Allocation',
      status: currentStep === 2 ? 'current' : currentStep > 2 ? 'completed' : 'upcoming',
    },
    {
      id: 'due-diligence',
      title: 'Due Diligence',
      status: currentStep === 3 ? 'current' : currentStep > 3 ? 'completed' : 'upcoming',
    },
  ];

  return (
    <div className="w-full py-8 px-4 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step.status === 'completed'
                      ? 'bg-[#0a77ff] text-white'
                      : step.status === 'current'
                      ? 'bg-[#0a77ff] text-white ring-4 ring-[#e0f2fe]'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {step.status === 'completed' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-sm font-semibold">{index + 1}</span>
                  )}
                </div>
                <div className="mt-2 text-center hidden sm:block">
                  <p
                    className={`text-xs font-medium ${
                      step.status === 'current'
                        ? 'text-[#0a77ff]'
                        : step.status === 'completed'
                        ? 'text-[#344054]'
                        : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    step.status === 'completed' ? 'bg-[#0a77ff]' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
