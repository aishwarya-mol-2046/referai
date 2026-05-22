export const parseJob = async (jobUrl) => {
  const res = await fetch("http://127.0.0.1:5000/api/parse-job", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ job_url: jobUrl }),
  });

  return res.json();
};

export const getMatches = async (jobData) => {
  const res = await fetch("http://127.0.0.1:5000/api/match", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });

  return res.json();
};

export const getRecruiterData = async () => {
  const res = await fetch("http://127.0.0.1:5000/api/recruiter-dashboard");
  return res.json();
};

export const generateMessage = async (data) => {
  const res = await fetch("http://127.0.0.1:5000/api/generate-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};