import { useState } from "react";

const WarmIntroModule = ({ candidate, alumnus, trustScore, isDeiActive }) => {
  const [introText, setIntroText] = useState(
    `Hi ${alumnus.alumnus_name},

I wanted to connect you with an exceptional backend engineer candidate from our network:

**Candidate Profile:**
- Identity: ${isDeiActive ? candidate.anonymous_id : candidate.full_name}
- Current Role: ${candidate.current_role}
- Target Position: ${candidate.target_role} at ${candidate.target_company}

**Qualification Metrics:**
- Trust Coefficient: ${trustScore}
- Growth Velocity: ${candidate.growth_velocity_score}%
- Cultural Fit: ${candidate.culture_alignment_score}%

**Verified Technical Strengths:**
- Distributed Systems Architecture
- High-Performance Backend Optimization
- Production-Grade System Design

They've demonstrated exceptional capability through verifiable proof-of-work and would be an outstanding addition to your team. 

Would you be open to a brief conversation?

Best regards`
  );

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Section Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">Double-Blind Escrow Vouch Module</h3>
        <p className="text-xs text-muted-secondary">Editable warm introduction template</p>
      </div>

      {/* Warm Intro Card */}
      <div className="bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-6" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
        <div className="mb-4 flex items-center justify-between">
          <label className="text-sm font-medium text-white">Referral Summary</label>
          <span className="text-xs text-muted-secondary px-2.5 py-1 rounded-full bg-blue-900 bg-opacity-30">Ready to Send</span>
        </div>

        <textarea
          value={introText}
          onChange={(e) => setIntroText(e.target.value)}
          className="w-full h-64 bg-canvas text-muted-primary rounded-lg p-4 text-sm leading-relaxed resize-none outline-none focus:ring-2 focus:ring-brand-blue transition-all font-mono"
          style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}
        />

        {/* Character Count */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-muted-secondary">{introText.length} characters</span>
          
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-all">
            Copy & Send
          </button>
        </div>
      </div>

      {/* Referral Context */}
      <div className="mt-4 bg-canvas rounded-lg p-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
        <p className="text-xs text-muted-primary leading-relaxed">
          <span className="text-white font-semibold">Shared Context:</span> {alumnus.shared_affinity_context}
        </p>
      </div>
    </div>
  );
};

export default WarmIntroModule;
