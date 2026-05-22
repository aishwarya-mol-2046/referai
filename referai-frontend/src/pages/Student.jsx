import { useState } from "react";
import seedData from "../data/seedData.json";
import NetworkGraph from "../components/NetworkGraph";

const Student = () => {
  const [jobUrl, setJobUrl] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // 🔥 STATES
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [trustScore, setTrustScore] = useState(8.9);

  // 🔥 SEARCH (SIMULATION)
  const handleSearch = () => {
    setLoading(true);

    setTimeout(() => {
      setResults(seedData);

      const missingSkill = seedData[0].skills_matrix.find(
        (s) => s.status === "MISSING"
      );

      setChallenge(
        missingSkill?.proof_of_work || "No challenge found"
      );

      setSubmitted(false);
      setLoading(false);
    }, 1200);
  };

  // 🔥 TRUST SCORE ANIMATION
  const handleSubmitProof = () => {
    setSubmitted(true);

    let current = trustScore;

    const interval = setInterval(() => {
      current += 0.05;
      setTrustScore(Number(current.toFixed(2)));

      if (current >= trustScore + 0.3) {
        clearInterval(interval);
      }
    }, 80);
  };

  // 🔥 MESSAGE
  const handleRequest = (person) => {
    const message = `Hi ${person.full_name},

I came across your work at ${person.target_company} and found your background in ${person.current_role} really inspiring.

I’ve recently worked on similar systems and would love to connect and learn from your experience.

Would you be open to a quick chat?

Thanks,
Aishwarya`;

    setSelectedMessage(message);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">

      {/* TITLE */}
      <h1 className="text-3xl font-semibold mb-8">
        Network Equity Engine 🚀
      </h1>

      {/* INPUT */}
      <div className="bg-card p-6 rounded-xl border border-border mb-8">
        <input
          className="w-full p-3 rounded-lg bg-[#0B0F19] border border-border mb-4"
          placeholder="Paste job link (demo input)"
          value={jobUrl}
          onChange={(e) => setJobUrl(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-all"
        >
          Analyze Opportunity
        </button>
      </div>

      {/* 🔥 LOADING SKELETON */}
      {loading && (
        <div className="bg-card p-6 rounded-xl border border-border mb-6 animate-pulse">
          <p className="text-gray-500 text-sm mb-2">
            [computing] analyzing network graph affinity...
          </p>
          <p className="text-gray-500 text-sm mb-4">
            [hashing] compiling trust signatures...
          </p>

          <div className="h-4 bg-gray-800 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-800 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-800 rounded w-2/3"></div>
        </div>
      )}

      {/* RESULTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results.map((r, i) => (
          <div
            key={r.id}
            className={`p-6 rounded-xl border ${
              i === 0
                ? "bg-card border-primary shadow-lg shadow-purple-500/10"
                : "bg-card border-border"
            }`}
          >
            {i === 0 && (
              <p className="text-xs text-primary mb-2">
                Highest Trust Candidate
              </p>
            )}

            <h2 className="text-xl font-semibold">
              {r.full_name}
            </h2>

            <p className="text-gray-400">
              {r.current_role}
            </p>

            {/* TRUST SCORE */}
            <div className="flex justify-between mt-3">
              <span className="text-sm text-gray-400">
                Network Trust
              </span>
              <span className="text-lg font-semibold text-purple-400">
                {r.network_trust_coefficient}
              </span>
            </div>

            {/* SKILLS */}
            <div className="mt-4 text-sm text-gray-400">
              {r.skills_matrix.slice(0, 2).map((s, idx) => (
                <p key={idx}>
                  {s.name}: {s.status}
                </p>
              ))}
            </div>

            <button
              onClick={() => handleRequest(r)}
              className="mt-5 w-full py-2 rounded-lg bg-gradient-to-r from-primary to-accent"
            >
              Request Vouch
            </button>
          </div>
        ))}
      </div>

      {/* 🔥 NETWORK GRAPH */}
      {results.length > 0 && (
        <NetworkGraph candidate={results[0]} />
      )}

      {/* 🔥 PROOF OF WORK */}
      {challenge && !submitted && (
        <div className="mt-10 bg-card p-6 rounded-xl border border-border">
          <h2 className="text-lg font-semibold mb-3">
            Proof-of-Work Challenge 🧠
          </h2>

          <p className="text-gray-400 mb-4">
            {challenge}
          </p>

          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            placeholder="Write your solution..."
            className="w-full h-32 p-3 bg-[#0B0F19] border border-border rounded-lg"
          />

          <button
            onClick={handleSubmitProof}
            className="mt-4 px-6 py-2 bg-gradient-to-r from-primary to-accent rounded-lg"
          >
            Submit Proof
          </button>
        </div>
      )}

      {/* 🔥 AFTER SUBMIT */}
      {submitted && (
        <div className="mt-10">
          <p className="text-green-400 font-semibold">
            ✅ Proof Verified
          </p>

          <p className="text-purple-400 text-lg font-bold mt-2">
            Trust Score: {trustScore}
          </p>
        </div>
      )}

      {/* MESSAGE */}
      {selectedMessage && (
        <div className="mt-10 bg-card p-6 rounded-xl border border-border">
          <h2 className="text-lg font-semibold mb-3">
            Warm Intro Message
          </h2>

          <p className="text-gray-300 whitespace-pre-line">
            {selectedMessage}
          </p>

          <button
            onClick={handleCopy}
            className="mt-4 px-4 py-1 rounded bg-primary text-sm"
          >
            {copied ? "Copied!" : "Copy Message"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Student;