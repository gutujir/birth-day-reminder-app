# Birthday Reminder App

Automated birthday reminder platform with authenticated dashboards, daily cron emails, and a modern React UI. The deployed demo is live at https://birth-day-reminder-app-frontend.onrender.com. Note: email sending is disabled on the deployed demo because Nodemailer’s free tier SMTP is blocked for outbound mail in that environment; local runs with your own SMTP work normally.

## Features

- Collect and manage birthdays (name, email, DOB)
- Automated 7 AM cron job to send scheduled birthday emails
- Email templates for verification, reset, and birthday wishes
- Auth: signup/login, email verification, password reset by code
- Dashboard, stats, upcoming birthdays view, protected routes
- Responsive React + Tailwind UI

## Tech Stack

- Frontend: React, Vite, React Router, Tailwind CSS, Axios, React Hot Toast
- Backend: Node.js, Express, MongoDB with Mongoose, Nodemailer, cron, JWT
- DevOps: Dockerfiles per app; Render used for the demo frontend

## Project Structure

```
├── backend/           Express API, cron, email, Mongo
└── frontend/          React SPA with auth flows and dashboards
```

## Live Demo Walkthrough

1. Open https://birth-day-reminder-app-frontend.onrender.com
2. Signup and log in; browse dashboard and birthdays
3. Password reset flow works for code capture UI, but emails will not arrive on the hosted demo (SMTP blocked on free tier). Test email flows locally to see messages.

## Run Locally (Quick Start)

1. Clone and install

```
git clone https://github.com/gutujir/birth-day-reminder-app.git
cd birth-day-remider-app
```

2. Backend

```
cd backend
npm install
cp .env   # create and fill if .env not present, see vars below
npm run dev
```

3. Frontend (in a new terminal)

```
cd frontend
npm install
cp .env.example .env   # or create manually; see vars below
npm run dev
```

4. Open http://localhost:5173 and sign up; API runs at http://localhost:4000 by default.

## Environment Variables

Backend (.env)

- MONGO_URI=your mongo db connection string
- PORT=4000
- JWT_SECRET=your-secret
- SMTP_HOST=smtp.gmail.com
- SMTP_PORT=587
- SMTP_USER=your-email@gmail.com
- SMTP_PASS=your-16-digit-app-password
- FROM_EMAIL=your-email@gmail.com
- CLIENT_URL=http://localhost:5173

Frontend (.env)

- VITE_API_URL=http://localhost:4000

## Key Workflows

- Email verification: user receives a code; verify via `/api/auth/verify-email`
- Password reset: request code via `/api/auth/forgot-password`, reset via `/api/auth/reset-password-by-code`
- Birthday emails: cron job triggers daily at 7 AM server time

## API Surface (summary)

- Auth: signup, login, logout, verify email, resend verification, forgot-password, reset-password-by-code, check-auth
- Birthdays: list, create, delete, stats, upcoming

## Notes

- Hosted demo cannot send emails due to Nodemailer SMTP restrictions on the free tier; run locally with your SMTP settings to test email delivery.

## Owner / Project Creator

- Gutu Jirata Imana
