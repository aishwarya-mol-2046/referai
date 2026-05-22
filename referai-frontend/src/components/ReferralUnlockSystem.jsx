import { useState, useEffect } from "react";
import WarmIntroModule from "./WarmIntroModule";

const ReferralUnlockSystem = ({ isProofCompleted, candidate, alumnus, trustScore, isDeiActive }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);

  // Trigger unlock animation when proof is completed
  useEffect(() => {
    if (isProofCompleted && !isUnlocked) {
      setShowUnlockAnimation(true);
      setTimeout(() => {
        setIsUnlocked(true);
      }, 300);
    }
  }, [isProofCompleted, isUnlocked]);

  return (
    <div className="relative w-full">
      {/* Locked Overlay */}
      {!isUnlocked && (
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl flex flex-col items-center justify-center z-50 transition-all duration-300"
          style={{
            opacity: isProofCompleted ? 0 : 1,
            pointerEvents: isProofCompleted ? "none" : "auto",
          }}
        >
          {/* Lock Icon with Animation */}
          <div
            className={`mb-4 transition-all duration-500 ${
              showUnlockAnimation ? "scale-125 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <div className="relative w-16 h-16">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-light-card/60" />

              {/* Lock icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-light-card"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1C6.48 1 2 5.48 2 11v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V11c0-5.52-4.48-10-10-10zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-light-card mb-2">Referral Locked</h3>
            <p className="text-sm text-light-card/80">
              Unlock this referral after submitting verified proof-of-work
            </p>
          </div>
        </div>
      )}

      {/* Content - WarmIntroModule */}
      <div
        className={`transition-all duration-500 ${
          isUnlocked ? "opacity-100 blur-none" : "opacity-40 blur-md"
        }`}
        style={{
          pointerEvents: isUnlocked ? "auto" : "none",
        }}
      >
        <WarmIntroModule 
          candidate={candidate} 
          alumnus={alumnus} 
          trustScore={trustScore} 
          isDeiActive={isDeiActive}
        />
      </div>

      {/* Unlock Success Indicator */}
      {isUnlocked && (
        <div
          className="absolute top-4 right-4 inline-flex items-center px-3 py-2 rounded-lg bg-green-50 border border-green-200 animate-pulse"
          style={{
            animation: "fadeInScale 0.5s ease-out forwards",
          }}
        >
          <span className="text-xs font-semibold text-green-700">
            ✓ Referral Unlocked
          </span>
        </div>
      )}

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ReferralUnlockSystem;
