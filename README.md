# ReferIn

ReferIn helps job seekers find the right internal referrer at their target company. Simply paste a job description, discover employees whose profiles align with the role, generate personalized outreach messages, and manage referral requests — all in one platform.

---

## Overview

Applying online is easy. Getting noticed is hard.

ReferIn bridges the gap between candidates and potential internal referrers by using AI-powered job analysis, employee discovery, profile matching, and outreach assistance.

Whether you're targeting Google, Microsoft, Amazon, Stripe, or startups, ReferIn helps identify employees most likely to provide valuable referrals.

---

## Key Features

### AI Job Description Parsing

Paste job descriptions from:

- LinkedIn
- Greenhouse
- Lever
- Workday
- Company career portals

ReferIn automatically extracts:

- Company name
- Role title
- Required skills
- Tech stack
- Experience requirements
- Location
- Keywords

Powered by DeepSeek AI.

---

### Smart Employee Discovery

ReferIn searches for relevant employees using:

- GitHub Organization APIs
- GitHub User Search
- AI-generated employee recommendations
- Internal database fallback

This ensures results are available even when companies have limited public GitHub presence.

---

### Match Scoring Engine

Employees are ranked using:

- Skill overlap
- Resume alignment
- Education similarity
- Experience relevance
- TF-IDF similarity scoring
- Skill synonym mapping

This helps surface the most relevant referrers first.

---

### Source Transparency

Every recommendation includes a source label:

- Live from GitHub
- AI Suggested
- From Database

Users always know where recommendations came from.

---

### Resume & Profile Enrichment

Candidates can:

- Upload PDF resumes
- Upload DOCX resumes
- Add skills manually
- Update education details
- Add professional experience

Match scores refresh automatically whenever profile information changes.

---

### Contact Information Discovery

Employee cards may include:

- GitHub profile links
- LinkedIn profile links
- Public email addresses

When available from public sources.

---

### AI Career Companion

Optional AI assistant powered by Ollama.

Provides:

- Skill gap analysis
- Career guidance
- Learning recommendations
- Resume improvement suggestions
- Interview preparation insights

---

### Referral Request Management

Users can:

- Generate referral messages
- Send referral requests
- Track request status
- Manage outreach history
- Monitor referral rewards

---

## Tech Stack

| Layer | Technology |
|---------|------------|
| Frontend | React 19, Vite, Tailwind CSS |
| Backend | Python 3.10+, Flask |
| Database | SQLite |
| Job Parsing | DeepSeek |
| Resume Extraction | DeepSeek |
| Employee Discovery | GitHub REST API + DeepSeek |
| AI Coaching | Ollama |
| Matching Engine | TF-IDF + Skill Similarity |

---

## Project Structure

```text
referin/
│
├── referin-backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── .env.example
│   └── referin.db
│
├── referin-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── how-to-run.md
├── to-do.md
└── README.md
```

---

## Seed Data

The application automatically generates demo data on first startup.

### Seed Users

15 student profiles from:

- IITs
- NITs
- IIITs
- BITS
- DTU

### Seed Employees

500 employees distributed across:

- Google
- Microsoft
- Amazon
- Stripe
- Netflix
- Razorpay
- Flipkart
- Zepto
- Meesho
- Swiggy

Departments include:

- Backend Engineering
- Frontend Engineering
- Full Stack
- Data Science
- Machine Learning
- DevOps
- Security
- Product

---

## Quick Start

### Backend

```bash
cd referin-backend

cp .env.example .env

python -m venv venv

source venv/bin/activate
# Windows:
# venv\Scripts\activate

pip install -r requirements.txt

python app.py
```

Backend URL:

```text
http://127.0.0.1:5000
```

---

### Frontend

```bash
cd referin-frontend

npm install

npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

## Environment Variables

Create:

```text
referin-backend/.env
```

| Variable | Required | Description |
|-----------|-----------|-------------|
| DEEPSEEK_API_KEY | Yes | Job parsing and AI recommendations |
| GITHUB_PAT | Yes | GitHub employee discovery |
| OLLAMA_BASE_URL | No | Ollama endpoint |
| OLLAMA_MODEL | No | Ollama model name |
| VITE_API_BASE_URL | No | Frontend API URL override |

---

## Demo Credentials

All seed users use:

```text
Password: referin123
```

Example:

```text
arjun.sharma@seed.referin
referin123
```

You can also create a new account through the signup page.

---

## Development Workflow

```bash
git checkout -b feature-name

git add .

git commit -m "Add feature"

git push origin feature-name
```

Create a Pull Request against:

```text
main
```

---

## Future Roadmap

- LinkedIn integrations
- Email outreach automation
- Referral analytics
- Recruiter dashboard
- Team collaboration
- Multi-model ranking engine
- Application tracking
