import { useState, useEffect } from "react";

const RankElevationNotification = ({ isVisible, fromRank, toRank }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-20 right-8 transform transition-all duration-500 ease-out ${
        isAnimating ? "translate-x-0 opacity-100" : "translate-x-96 opacity-0"
      }`}
    >
      {/* Notification Card */}
      <div className="bg-card-surface bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-glow-verify max-w-sm" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
        {/* Icon */}
        <div className="mb-3 text-2xl">🚀</div>

        {/* Content */}
        <h4 className="text-sm font-semibold text-white mb-2">Network Verification Vector Applied</h4>
        
        <p className="text-xs text-muted-secondary mb-3 leading-relaxed">
          Candidate identity advanced from <span className="font-mono bg-red-900 bg-opacity-30 px-2 py-0.5 rounded text-red-300">Rank #{fromRank}</span> → <span className="font-mono bg-green-900 bg-opacity-30 px-2 py-0.5 rounded text-green-300">Rank #{toRank}</span>
        </p>

        <p className="text-xs text-brand-blue font-medium">
          ✓ Based on verified code block injection
        </p>

        {/* Progress Bar */}
        <div className="mt-4 w-full h-1 bg-canvas rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
            style={{
              width: '100%',
              animation: isAnimating ? 'slideIn 1200ms ease-out' : 'none'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default RankElevationNotification;
