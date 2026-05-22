import { useEffect, useState } from "react";

const SkillGapDiff = ({ jobSkills, candidateSkills, jobTitle }) => {
  const [matchedSkills, setMatchedSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [animateStates, setAnimateStates] = useState({});

  useEffect(() => {
    // Find matched & missing skills
    const matched = jobSkills.filter(skill =>
      candidateSkills.some(candSkill =>
        candSkill.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(candSkill.toLowerCase())
      )
    );

    const missing = jobSkills.filter(
      skill => !matched.includes(skill)
    );

    setMatchedSkills(matched);
    setMissingSkills(missing);

    // Trigger animations
    setTimeout(() => {
      const states = {};
      matched.forEach((_, idx) => {
        setTimeout(() => {
          states[`matched-${idx}`] = true;
          setAnimateStates({ ...states });
        }, idx * 100);
      });

      missing.forEach((_, idx) => {
        setTimeout(() => {
          states[`missing-${idx}`] = true;
          setAnimateStates({ ...states });
        }, idx * 100);
      });
    }, 100);
  }, [jobSkills, candidateSkills]);

  // AI reasoning text
  const reasoningText =
    matchedSkills.length >= jobSkills.length * 0.8
      ? "Candidate demonstrates exceptional alignment with core technical requirements. Strong foundation across distributed systems and high-performance architecture."
      : matchedSkills.length >= jobSkills.length * 0.5
        ? "Candidate shows solid core competency but would benefit from targeted experience in production-scale systems. Gap areas are trainable with guided mentorship."
        : "Candidate has potential but significant growth areas exist. Recommend pairing with senior engineer for hands-on learning in critical skill gaps.";

  const matchPercentage = Math.round(
    (matchedSkills.length / jobSkills.length) * 100
  );

  return (
    <div className="w-full bg-light-card border border-light-border rounded-xl p-8 shadow-light-md mb-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-light-text">Skill Gap Analysis</h3>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50">
            <span className="text-2xl font-bold text-brand-blue">{matchPercentage}%</span>
            <span className="text-xs font-medium text-light-muted">Match</span>
          </div>
        </div>
        <p className="text-sm text-light-muted">
          {jobTitle && `For: ${jobTitle}`}
        </p>
      </div>

      {/* 2-Column Skills Grid */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* Matched Skills - Left */}
        <div>
          <h4 className="text-sm font-semibold text-light-text mb-3">Matched Skills</h4>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.length > 0 ? (
              matchedSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200 transition-all duration-500 transform ${
                    animateStates[`matched-${idx}`]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  ✓ {skill}
                </div>
              ))
            ) : (
              <p className="text-xs text-light-muted italic">No matches yet</p>
            )}
          </div>
        </div>

        {/* Skill Gaps - Right */}
        <div>
          <h4 className="text-sm font-semibold text-light-text mb-3">Skill Gaps</h4>
          <div className="flex flex-wrap gap-2">
            {missingSkills.length > 0 ? (
              missingSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 transition-all duration-500 transform ${
                    animateStates[`missing-${idx}`]
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  ⊗ {skill}
                </div>
              ))
            ) : (
              <p className="text-xs text-light-muted italic">All skills matched!</p>
            )}
          </div>
        </div>
      </div>

      {/* AI Reasoning */}
      <div className="pt-4 border-t border-light-border">
        <p className="text-sm text-light-muted leading-relaxed">
          <span className="font-semibold text-light-text">AI Assessment:</span> {reasoningText}
        </p>
      </div>
    </div>
  );
};

export default SkillGapDiff;
