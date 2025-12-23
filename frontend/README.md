# Frontend - Birthday Reminder UI

React SPA for authentication, birthdays CRUD, stats, and password-reset by code. Live demo: https://birth-day-reminder-app-frontend.onrender.com (emails will not be delivered on the demo because SMTP is blocked on the free tier; test email flows locally).

## Stack

- React, Vite
- React Router
- Tailwind CSS
- Axios
- React Hot Toast

## Getting Started

```
cd frontend
npm install
```

Create `.env`:

```
VITE_API_URL=http://localhost:4000
```

Run dev server:

```
npm run dev
```

Open http://localhost:5173.

## App Flows

- Auth: signup, login, logout
- Email verification prompt and code entry
- Forgot/reset password by code (enter email, receive code, set new password)
- Birthdays: list, create, delete
- Dashboard stats and upcoming birthdays view

## Build

```
npm run build
npm run preview
```

## Environment

- `VITE_API_URL` points to the backend (default http://localhost:4000)

## Notes

- Hosted demo UI is fully functional, but emails (verification/reset) will not be sent from the demo due to Nodemailer SMTP restrictions on the free tier. Run locally with your SMTP creds to see email flows.

## Owner / Project Creator

- Gutu Jirata Imana
