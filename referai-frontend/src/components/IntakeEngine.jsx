import { useState } from "react";

const IntakeEngine = ({ onAnalyze, isProcessing }) => {
  const [url, setUrl] = useState("https://jobs.stripe.com/v3/backend-performance-094");
  const [logs, setLogs] = useState([]);

  const handleAnalyze = () => {
    setLogs([]);
    const logSequence = [
      { text: "[ingesting] compiling raw markdown structural requirements...", delay: 100 },
      { text: "[matching] executing alignment calculations across skill tensor matrices...", delay: 600 },
      { text: "[routing] establishing secure multi-variant alumni network affinity vectors...", delay: 1100 }
    ];

    logSequence.forEach(log => {
      setTimeout(() => {
        setLogs(prev => [...prev, log.text]);
      }, log.delay);
    });

    setTimeout(() => {
      onAnalyze();
    }, 1200);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Phase Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Phase 1: Ingestion Intake Engine</h2>
        <p className="text-muted-secondary text-sm">Enter career link for analysis</p>
      </div>

      {/* Input Card */}
      <div className="bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-6 mb-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
        <label className="block text-sm text-muted-secondary mb-3 font-medium">Pipeline Target URL</label>
        
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isProcessing}
            className="flex-1 bg-canvas rounded-lg px-4 py-3 text-white text-sm outline-none focus:ring-2 focus:ring-brand-blue transition-all disabled:opacity-60"
            style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}
          />
          
          <button
            onClick={handleAnalyze}
            disabled={isProcessing}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isProcessing ? "Analyzing..." : "Analyze Target Pipeline"}
          </button>
        </div>

        {/* Terminal Logs */}
        {logs.length > 0 && (
          <div className="bg-canvas rounded-lg p-4 font-mono text-xs text-muted-secondary space-y-1 border border-slate-900" style={{ borderColor: "rgba(226, 232, 240, 0.06)" }}>
            {logs.map((log, idx) => (
              <div key={idx} className={`animate-fade-in ${idx === logs.length - 1 && isProcessing ? "animate-pulse" : ""}`}>
                <span className="text-brand-blue">→</span> {log}
              </div>
            ))}
          </div>
        )}

        {/* Loading Indicator */}
        {isProcessing && (
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse"></div>
            <span className="text-sm text-muted-secondary">Processing... {Math.floor(Math.random() * 40 + 60)}%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default IntakeEngine;
