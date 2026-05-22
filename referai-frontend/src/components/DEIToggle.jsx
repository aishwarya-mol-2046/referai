const DEIToggle = ({ isDeiActive, onToggle }) => {
  return (
    <div className="w-full mb-8 sticky top-20 z-40">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-4 bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
        <div className="flex items-center gap-3 flex-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: isDeiActive ? "linear-gradient(135deg, #4F46E5, #7C3AED)" : "#374151" }}>
            <span className="text-xs font-bold text-white">{isDeiActive ? "✓" : "○"}</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Enable Bias-Free Competency Governance Mode</h3>
            <p className="text-xs text-muted-secondary">[DEI Compliant] — Anonymizes personal attributes</p>
          </div>
        </div>

        <button
          onClick={onToggle}
          className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-500 flex-shrink-0 ${
            isDeiActive
              ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-glow-purple"
              : "bg-slate-700 text-slate-300 hover:bg-slate-600"
          }`}
        >
          {isDeiActive ? "DEI Mode ON" : "DEI Mode OFF"}
        </button>
      </div>
    </div>
  );
};

export default DEIToggle;
