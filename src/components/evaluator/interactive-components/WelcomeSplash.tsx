import { useState, useEffect } from 'react';

interface WelcomeSplashProps {
  onComplete: () => void;
}

export function WelcomeSplash({ onComplete }: WelcomeSplashProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-[#0a77ff] to-[#0862d1] flex items-center justify-center transition-opacity duration-500 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="text-center animate-fadeIn">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-white rounded-2xl shadow-2xl flex items-center justify-center mb-6 animate-pulse">
            <svg
              className="w-16 h-16 text-[#0a77ff]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-4xl font-semibold text-white mb-3 tracking-tight">RTB Accreditation Portal</h1>
          <p className="text-xl text-white/90 mb-8">XYZ Ltd JavaScript Application</p>
          <div className="flex items-center justify-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function useWelcomeSplash() {
  const [hasShown, setHasShown] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return sessionStorage.getItem("hasSeenWelcomeSplash") === "true";
  });
  const [showSplash, setShowSplash] = useState(!hasShown);

  const handleComplete = () => {
    sessionStorage.setItem('hasSeenWelcomeSplash', 'true');
    setShowSplash(false);
    setHasShown(true);
  };

  return { showSplash: showSplash && !hasShown, handleComplete };
}
