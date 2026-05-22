import { useState } from "react";
import seedData from "../data/seedData.json";
import IntakeEngine from "../components/IntakeEngine";
import CandidateMatch from "../components/CandidateMatch";
import ProofOfWorkChallenge from "../components/ProofOfWorkChallenge";
import DEIToggle from "../components/DEIToggle";
import RankElevationNotification from "../components/RankElevationNotification";
import NetworkGraph from "../components/NetworkGraph";
import WarmIntroModule from "../components/WarmIntroModule";
import AIValidationSummary from "../components/AIValidationSummary";
import AnimatedScoreUpdate from "../components/AnimatedScoreUpdate";
import SkillGapDiff from "../components/SkillGapDiff";
import EquityScorePanel from "../components/EquityScorePanel";
import ReferralUnlockSystem from "../components/ReferralUnlockSystem";

const Recruiter = () => {
  // Pipeline state machine
  const [pipelineStep, setPipelineStep] = useState(0); // 0: Intake, 1: Matching, 2: PoW, 3: Judge, 4: Graph, 5: Vouch
  const [isDeiActive, setIsDeiActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isJudgeActive, setIsJudgeActive] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [updateTrustScore, setUpdateTrustScore] = useState(false);
  const [isProofCompleted, setIsProofCompleted] = useState(false);

  // candidate data
  const topCandidate = seedData[0]; // Aishwarya Mol S
  const primaryAlumnus = topCandidate.alumni_referral_paths[0];
  const [trustScore, setTrustScore] = useState(topCandidate.network_trust_coefficient);

  // Job requirements for skill matching
  const jobSkills = [
    "Distributed Systems Design",
    "FastAPI & Async IO",
    "Redis Caching",
    "Idempotent API Architecture",
    "Load Balancing",
    "API Security",
    "PostgreSQL",
    "Docker & Kubernetes"
  ];

  const candidateSkills = topCandidate.technical_skills || [
    "Distributed Systems",
    "FastAPI",
    "Redis",
    "API Design",
    "Python",
    "Docker",
    "Cloud Infrastructure"
  ];

  // Phase 1: Intake analysis
  const handleAnalyze = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPipelineStep(1);
    }, 1200);
  };

  // Phase 3: Submit proof of work
  const handleProofSubmit = () => {
    setIsJudgeActive(true);
    setIsProofCompleted(true);

    // 400ms loading flicker
    setTimeout(() => {
      // 600ms score animation
      setUpdateTrustScore(true);
      
      // Update trust score
      setTimeout(() => {
        setTrustScore(9.2);
      }, 100);

      // Show rank elevation notification
      setTimeout(() => {
        setShowNotification(true);
      }, 300);

      // Progress to graph
      setTimeout(() => {
        setIsJudgeActive(false);
        setPipelineStep(4); // Skip to graph
      }, 600);

      // Show validation summary
      setTimeout(() => {
        setPipelineStep(5);
      }, 1200);
    }, 400);
  };

  return (
    <div className="w-full min-h-screen bg-canvas" style={{ backgroundColor: "#090D16" }}>
      {/* DEI Toggle - Sticky Header */}
      <DEIToggle isDeiActive={isDeiActive} onToggle={() => setIsDeiActive(!isDeiActive)} />

      {/* Main Content Container */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* System Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Network Equity Engine</h1>
          <p className="text-muted-secondary">Institutional Talent Intelligence Pipeline</p>
          
          {/* System Stats */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
              <p className="text-xs text-muted-secondary mb-2">Pipeline Step</p>
              <p className="text-lg font-bold text-brand-blue">{pipelineStep + 1} / 6</p>
            </div>
            
            <div className="bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
              <p className="text-xs text-muted-secondary mb-2">Candidates</p>
              <p className="text-lg font-bold text-white">{seedData.length}</p>
            </div>
            
            <div className="bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
              <p className="text-xs text-muted-secondary mb-2">Top Candidate Trust</p>
              <p className="text-lg font-bold text-white">
                {updateTrustScore ? (
                  <AnimatedScoreUpdate 
                    initialScore={topCandidate.network_trust_coefficient} 
                    finalScore={9.2} 
                    duration={600} 
                  />
                ) : (
                  topCandidate.network_trust_coefficient
                )}
              </p>
            </div>
            
            <div className="bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-4" style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}>
              <p className="text-xs text-muted-secondary mb-2">DEI Mode</p>
              <p className={`text-lg font-bold ${isDeiActive ? "text-purple-400" : "text-muted-secondary"}`}>
                {isDeiActive ? "ACTIVE" : "OFF"}
              </p>
            </div>
          </div>
        </div>

        {/* PHASE 1: Intake Engine */}
        {pipelineStep >= 0 && (
          <IntakeEngine 
            onAnalyze={handleAnalyze} 
            isProcessing={isProcessing} 
          />
        )}

        {/* PHASE 2: Candidate Matching */}
        {pipelineStep >= 1 && (
          <div className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Phase 2: Pipeline Manifestation & Core Matches</h2>
              <p className="text-muted-secondary text-sm">Top candidate identified from alumni network</p>
            </div>

            <CandidateMatch 
              candidate={topCandidate} 
              isTopCandidate={true} 
              isDeiActive={isDeiActive}
            />

            {/* Secondary candidates grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {seedData.slice(1, 3).map((candidate, idx) => (
                <CandidateMatch
                  key={idx}
                  candidate={candidate}
                  isTopCandidate={false}
                  isDeiActive={isDeiActive}
                />
              ))}
            </div>

            {/* Skill Gap Analysis */}
            <div className="mt-12 mb-8">
              <h3 className="text-xl font-semibold tracking-tight text-white mb-4">Skill Alignment Analysis</h3>
              <SkillGapDiff
                jobSkills={jobSkills}
                candidateSkills={candidateSkills}
                jobTitle="Backend Performance Engineer @ Stripe"
              />
            </div>

            <button
              onClick={() => setPipelineStep(2)}
              className="w-full mt-8 py-3 px-4 bg-card-surface bg-opacity-70 backdrop-blur-md text-white rounded-lg font-semibold text-sm hover:bg-opacity-100 transition-all"
              style={{ border: "1px solid rgba(226, 232, 240, 0.06)" }}
            >
              Proceed to Proof-of-Work Challenge →
            </button>
          </div>
        )}

        {/* PHASE 3: Proof of Work */}
        {pipelineStep >= 2 && (
          <ProofOfWorkChallenge 
            candidate={topCandidate} 
            onSubmit={handleProofSubmit}
            isJudgeActive={isJudgeActive}
          />
        )}

        {/* PHASE 4 & 5: Judge Execution & Results */}
        {pipelineStep >= 4 && (
          <>
            {/* Rank Elevation Notification */}
            <RankElevationNotification 
              isVisible={showNotification} 
              fromRank={4} 
              toRank={1}
            />

            {/* Network Graph */}
            <NetworkGraph 
              candidate={topCandidate} 
              alumnus={primaryAlumnus}
              isVisible={pipelineStep >= 4}
            />

            {/* Equity Score Panel */}
            <div className="mb-8">
              <EquityScorePanel
                trustScore={trustScore}
                skillMatch={75}
                networkScore={88}
                isDeiActive={isDeiActive}
              />
            </div>

            {/* Referral Unlock System - Wraps WarmIntroModule */}
            <ReferralUnlockSystem
              isProofCompleted={isProofCompleted}
              candidate={topCandidate}
              alumnus={primaryAlumnus}
              trustScore={trustScore}
              isDeiActive={isDeiActive}
            />

            {/* AI Validation Summary */}
            <AIValidationSummary 
              isVisible={pipelineStep >= 5}
              trustScore={trustScore}
            />

            {/* Final CTA */}
            <div className="mt-12 bg-card-surface bg-opacity-70 backdrop-blur-md rounded-lg p-8 text-center" style={{ border: "1px solid rgba(79, 70, 229, 0.2)" }}>
              <h3 className="text-xl font-semibold text-white mb-2">Pipeline Execution Complete</h3>
              <p className="text-muted-secondary text-sm mb-6">
                Candidate has been verified and is ready for warm introduction
              </p>
              <button 
                onClick={() => alert("Referral initiated! Candidate will receive introduction email.")} 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-all cursor-pointer"
              >
                Initiate Referral Process
              </button>

              <button
                onClick={() => {
                  setPipelineStep(0);
                  setShowNotification(false);
                  setUpdateTrustScore(false);
                  setIsProofCompleted(false);
                  setTrustScore(topCandidate.network_trust_coefficient);
                }}
                className="ml-3 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold text-sm hover:bg-slate-600 transition-all"
              >
                Reset Pipeline
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Recruiter;