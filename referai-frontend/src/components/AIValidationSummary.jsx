import { useState, useEffect } from "react";

const AIValidationSummary = ({ isVisible, trustScore }) => {
  const [revealedSections, setRevealedSections] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const timings = [100, 400, 800];
      timings.forEach((timing, idx) => {
        setTimeout(() => {
          setRevealedSections(prev => [...prev, idx]);
        }, timing);
      });
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Section Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">AI Validation Summary</h3>
        <p className="text-xs text-muted-secondary">Computed intelligence assessment</p>
      </div>

      {/* Summary Cards */}
      <div className="space-y-3">
        {/* Strength Section */}
        <div
          className={`bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4 transition-all duration-500 transform ${
            revealedSections.includes(0)
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
          style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0">✓</span>
            <div>
              <h4 className="text-sm font-semibold text-green-400 mb-1">Strength</h4>
              <p className="text-xs text-muted-secondary">
                Concurrency-safe architecture thinking with demonstrated mastery of distributed consensus models
              </p>
            </div>
          </div>
        </div>

        {/* Gap Section */}
        <div
          className={`bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4 transition-all duration-500 transform ${
            revealedSections.includes(1)
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
          style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}
        >
          <div className="flex items-start gap-3">
            <span className="text-lg flex-shrink-0">⚠</span>
            <div>
              <h4 className="text-sm font-semibold text-yellow-400 mb-1">Development Area</h4>
              <p className="text-xs text-muted-secondary">
                Edge-case handling strategies under distributed failure scenarios require deeper exploration
              </p>
            </div>
          </div>
        </div>

        {/* Confidence Score Section */}
        <div
          className={`bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4 transition-all duration-500 transform ${
            revealedSections.includes(2)
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4"
          }`}
          style={{ border: "1px solid rgba(79, 70, 229, 0.2)" }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-brand-blue mb-1">Confidence Score</h4>
              <p className="text-xs text-muted-secondary">
                Dynamically calculated from trust vector
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-mono font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                {(trustScore * 10.2).toFixed(1)}%
              </p>
              <p className="text-xs text-muted-secondary font-semibold">High Conviction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIValidationSummary;
