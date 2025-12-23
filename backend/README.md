# Backend - Birthday Reminder API

Express + MongoDB API for auth, birthdays, cron-based greetings, and email flows. Email sending works locally with your SMTP credentials; the hosted demo cannot send mail because Nodemailer SMTP is blocked on the free tier.

## Stack

- Node.js, Express
- MongoDB, Mongoose
- Nodemailer (SMTP)
- Cron (node-cron)
- JWT auth

## Getting Started

```
cd backend
npm install
```

Create `.env` (see below) and then run:

```
npm run dev
```

## Environment Variables (.env)

```
MONGO_URI=mongodb://localhost:27017/birth-day-reminder-app
PORT=4000
JWT_SECRET=your-secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
FROM_EMAIL=your-email@gmail.com
CLIENT_URL=http://localhost:5173
```

## Key Endpoints

- POST /api/auth/signup
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/verify-email
- POST /api/auth/resend-verification
- POST /api/auth/forgot-password
- POST /api/auth/reset-password-by-code
- GET /api/auth/check-auth
- GET /api/birthdays
- POST /api/birthdays
- DELETE /api/birthdays/:id
- GET /api/birthdays/statistics
- GET /api/birthdays/upcoming

## Email + Cron

- Verification and reset codes are emailed via Nodemailer using your SMTP settings.
- Birthday greetings send daily at 7 AM server time via cron.
- Hosted demo note: outbound SMTP is disabled on the free tier; test email delivery locally.

## Run with Docker (optional)

```
docker build -t birthday-backend .
docker run -p 4000:4000 --env-file .env birthday-backend
```

## Development Notes

- Uses `verifyToken` middleware for protected routes.
- Passwords are hashed with bcryptjs.
- Codes are short-lived and stored with expirations on the user document.

## Owner / Project Creator

- Gutu Jirata Imana
