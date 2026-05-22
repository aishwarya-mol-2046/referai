import { useState } from "react";

const Employee = () => {
  const [decision, setDecision] = useState(null);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const candidate = {
    name: "Candidate Alpha",
    role: "Backend Engineer",
    proof: `Fix a race condition in a distributed queue system.

Context:
Multiple workers are consuming jobs simultaneously,
causing duplicate execution under high load.

Task:
- Identify root cause
- Suggest fix`
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">

      <h1 className="text-2xl font-bold mb-6">
        Alumni Verification Console 🧠
      </h1>

      <div className="bg-card border border-border rounded-xl p-6">

        {/* HEADER */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            {candidate.name}
          </h2>
          <p className="text-gray-400">{candidate.role}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* LEFT */}
          <div>
            <p className="text-sm text-gray-400 mb-2">
              Verified Proof Submission
            </p>

            <pre className="bg-black p-4 rounded-lg text-green-400 text-sm whitespace-pre-wrap">
              {candidate.proof}
            </pre>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-sm text-gray-400 mb-2">
              Competency Evaluation
            </p>

            {!submitted ? (
              <>
                {/* DECISION BUTTONS */}
                <div className="flex gap-3 mb-4">
                  <button
                    onClick={() => setDecision("strong")}
                    className={`px-4 py-2 rounded ${
                      decision === "strong"
                        ? "bg-green-600"
                        : "bg-gray-700"
                    }`}
                  >
                    Strong Vouch
                  </button>

                  <button
                    onClick={() => setDecision("moderate")}
                    className={`px-4 py-2 rounded ${
                      decision === "moderate"
                        ? "bg-yellow-600"
                        : "bg-gray-700"
                    }`}
                  >
                    Moderate
                  </button>

                  <button
                    onClick={() => setDecision("reject")}
                    className={`px-4 py-2 rounded ${
                      decision === "reject"
                        ? "bg-red-600"
                        : "bg-gray-700"
                    }`}
                  >
                    Not Ready
                  </button>
                </div>

                {/* NOTES */}
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add technical reasoning (optional but recommended)"
                  className="w-full h-24 p-3 bg-black border border-border rounded-lg"
                />

                {/* SUBMIT */}
                <button
                  disabled={!decision}
                  onClick={() => setSubmitted(true)}
                  className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-primary to-accent disabled:opacity-40"
                >
                  Submit Evaluation
                </button>
              </>
            ) : (
              <div>
                <p className="text-green-400 text-lg font-semibold">
                  ✅ Vouch Recorded
                </p>

                <p className="text-gray-400 mt-2 text-sm">
                  Your evaluation has been weighted into the candidate’s
                  Network Trust Score.
                </p>

                <p className="mt-3 text-sm text-cyan-400">
                  Decision: {decision}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;