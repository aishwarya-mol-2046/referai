# ReferIn Frontend

Frontend application for ReferIn.

Built with React 19, Vite, and Tailwind CSS.

---

## Overview

The ReferIn frontend provides a modern interface for:

- Job analysis
- Employee discovery
- Resume management
- Referral requests
- AI career guidance

The frontend communicates with the Flask backend through REST APIs.

---

## Features

### Authentication

- Login
- Signup
- Session persistence
- User onboarding

---

### Job Analysis

Users can:

- Paste job descriptions
- Review extracted details
- Edit parsed information
- Submit jobs for matching

---

### Employee Discovery

Displays:

- Ranked employee recommendations
- Match scores
- Profile summaries
- Contact information
- Source labels

Sources:

- Live from GitHub
- AI Suggested
- From Database

---

### Profile Management

Users can manage:

- Skills
- Education
- Experience
- Resume uploads

Supported formats:

- PDF
- DOCX

---

### AI Career Companion

Provides:

- Skill gap analysis
- Career recommendations
- Personalized guidance
- Learning suggestions

Powered by Ollama when available.

---

### Referral Workflow

Users can:

- Generate outreach messages
- Send referral requests
- Monitor request status
- Manage referral history

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI Development |
| Vite | Development & Build Tool |
| Tailwind CSS | Styling |
| ESLint | Code Quality |
| PostCSS | CSS Processing |

---

## Installation

```bash
npm install
```

---

## Running Development Server

```bash
npm run dev
```

Application URL:

```text
http://localhost:5173
```

---

## Available Scripts

Start development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

---

## Environment Variables

Optional:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
```

If not provided, the default backend URL is used.

---

## Project Structure

```text
referin-frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
├── eslint.config.js
├── postcss.config.js
└── README.md
```

---

## Build for Production

```bash
npm run build
```

Output directory:

```text
dist/
```

---

## Browser Support

Supported browsers:

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

Modern browsers with ES Module support are recommended.

---

## Backend Dependency

The frontend requires the ReferIn backend to be running:

```text
http://127.0.0.1:5000
```

before features such as:

- Job parsing
- Employee search
- Resume analysis
- Referral management

can function correctly.
