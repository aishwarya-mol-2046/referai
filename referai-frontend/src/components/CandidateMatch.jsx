const CandidateMatch = ({ candidate, isTopCandidate, isDeiActive }) => {
  const topMissingSkill = candidate.skills_matrix.find(s => s.status === "MISSING");
  const verifiedSkills = candidate.skills_matrix.filter(s => s.status === "VERIFIED");

  return (
    <div className={`relative bg-card-surface bg-opacity-70 backdrop-blur-md rounded-xl p-6 transition-all duration-500 ${
      isTopCandidate ? "ring-2 ring-brand-blue shadow-glow-active" : ""
    }`} style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
      
      {/* Top Candidate Badge */}
      {isTopCandidate && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white text-xs font-semibold">
          ★ TOP MATCH
        </div>
      )}

      {/* Header Section */}
      <div className="mb-6">
        <div className="flex items-start justify-between mb-3">
          <div className={`transition-all duration-500 ${isDeiActive ? "blur-md" : ""}`}>
            <h3 className="text-lg font-semibold text-white">{isDeiActive ? candidate.anonymous_id : candidate.full_name}</h3>
            <p className={`text-sm transition-all ${isDeiActive ? "text-muted-secondary" : "text-muted-secondary"}`}>
              {isDeiActive ? "Hidden Profile" : candidate.current_role}
            </p>
          </div>
        </div>

        {/* Signal Badges */}
        <div className="flex gap-2 flex-wrap">
          <div className="px-2.5 py-1 rounded-md text-xs font-medium bg-red-900 bg-opacity-30 text-red-300" style={{ border: "1px solid rgba(248, 113, 113, 0.3)" }}>
            Signal Strength: Critical
          </div>
          <div className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-900 bg-opacity-30 text-blue-300" style={{ border: "1px solid rgba(59, 130, 246, 0.3)" }}>
            Skill-Overlap: 94%
          </div>
          <div className="px-2.5 py-1 rounded-md text-xs font-medium bg-green-900 bg-opacity-30 text-green-300" style={{ border: "1px solid rgba(34, 197, 94, 0.3)" }}>
            Alumni Intersection: Verified
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6 py-4 px-4 rounded-lg bg-canvas bg-opacity-40">
        <div>
          <p className="text-xs text-muted-secondary mb-1">Growth Velocity</p>
          <p className={`text-lg font-semibold text-gradient whitespace-nowrap transition-all ${isDeiActive ? "text-brand-blue" : ""}`}>
            {candidate.growth_velocity_score}%
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-secondary mb-1">Culture Alignment</p>
          <p className={`text-lg font-semibold transition-all ${isDeiActive ? "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" : "text-white"}`}>
            {candidate.culture_alignment_score}%
          </p>
        </div>
        <div>
          <p className="text-xs text-muted-secondary mb-1">Trust Coefficient</p>
          <p className={`text-lg font-semibold transition-all ${isDeiActive ? "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent" : "text-white"}`}>
            {candidate.network_trust_coefficient}
          </p>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-3">Skills Architecture</h4>
        <div className="space-y-2">
          {verifiedSkills.map((skill, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-muted-primary flex-1">{skill.name}</span>
              <span className="text-xs text-green-400 font-medium">VERIFIED</span>
            </div>
          ))}
          {topMissingSkill && (
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></span>
              <span className="text-muted-primary flex-1">{topMissingSkill.name}</span>
              <span className="text-xs text-yellow-400 font-medium">PENDING</span>
            </div>
          )}
        </div>
      </div>

      {/* Reasoning Expandable */}
      <details className="group cursor-pointer">
        <summary className="text-sm font-medium text-brand-blue hover:text-blue-400 transition-all flex items-center gap-2 outline-none">
          <span className="text-xs">Why this candidate ranked #1</span>
          <span className="text-xs group-open:rotate-180 transition-transform duration-300">↓</span>
        </summary>
        
        <div className="mt-3 pt-3 border-t border-slate-800" style={{ borderColor: "rgba(226, 232, 240, 0.06)" }}>
          <ul className="space-y-2 text-xs text-muted-secondary">
            <li className="flex gap-2"><span className="text-brand-blue flex-shrink-0">→</span> Strong overlap in distributed systems and backend optimization</li>
            <li className="flex gap-2"><span className="text-brand-blue flex-shrink-0">→</span> Demonstrated real-world system design through proof-of-work</li>
            <li className="flex gap-2"><span className="text-brand-blue flex-shrink-0">→</span> High-confidence alumni referral pathway available</li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default CandidateMatch;
