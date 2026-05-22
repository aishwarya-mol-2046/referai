from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "ReferAI Backend Running 🚀"})

@app.route("/api/parse-job", methods=["POST"])
def parse_job():
    data = request.json

    job_data = {
        "company": "Google",
        "role": "Software Engineer",
        "skills": ["Python", "React", "ML"]
    }

    return jsonify(job_data)

@app.route("/api/match", methods=["POST"])
def match():
    results = [
        {
            "name": "Rahul",
            "company": "Google",
            "match_score": 92,
            "skills": ["Python", "ML"],
            "reason": {
                "skill_match": "85%",
                "company_match": "Yes",
                "alumni": "Yes"
            }
        },
        {
            "name": "Anita",
            "company": "Google",
            "match_score": 85,
            "skills": ["React", "JS"],
            "reason": {
                "skill_match": "75%",
                "company_match": "Yes",
                "alumni": "No"
            }
        }
    ]

    return jsonify(results)

@app.route("/api/recruiter-dashboard", methods=["GET"])
def recruiter_dashboard():
    data = {
        "top_candidates": [
            {"name": "Rahul", "score": 92, "role": "ML Engineer"},
            {"name": "Anita", "score": 85, "role": "Frontend Dev"},
            {"name": "Kiran", "score": 78, "role": "Backend Dev"}
        ],
        "analytics": {
            "average_score": 85,
            "total_candidates": 3
        }
    }

    return jsonify(data)

@app.route("/api/generate-message", methods=["POST"])
def generate_message():
    data = request.json
    name = data.get("name")
    company = data.get("company")
    role = data.get("role")

    message = f"""
Hi {name},

I came across a {role} opportunity at {company} and noticed your experience there.

I would really appreciate it if you could refer me for this role. 
Please let me know if you need any additional details from my side.

Thanks in advance!
"""

    return jsonify({"message": message})

if __name__ == "__main__":
    app.run(debug=True)