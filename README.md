# Birthday Reminder App

Automated birthday reminder system that sends personalized birthday wishes via email at 7 AM daily.

## Features

- 🎂 Collect birthdays (name, email, date of birth)
- ⏰ Automated daily cron job at 7 AM
- ✉️ Beautiful HTML email templates
- 🔐 Full authentication system
- 📊 Dashboard with statistics
- 🎨 Modern, responsive UI

## Tech Stack

### Backend

- Node.js + Express
- MongoDB + Mongoose
- Nodemailer (Gmail SMTP)
- Cron jobs
- JWT authentication

### Frontend

- React + Vite
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Gmail account with App Password

### Backend Setup

1. Navigate to backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
MONGO_URI=mongodb://localhost:27017/birth-day-reminder-app
PORT=4000
JWT_SECRET=your-secret-key-here

# Gmail SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-digit-app-password
FROM_EMAIL=your-email@gmail.com

# Optional
CLIENT_URL=http://localhost:5173
```

4. Start the server:

```bash
npm run dev
```

### Frontend Setup

1. Navigate to frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
VITE_API_URL=http://localhost:4000
```

4. Start the development server:

```bash
npm run dev
```

### Gmail App Password Setup

1. Go to your Google Account
2. Enable 2-Factor Authentication
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-digit password to `SMTP_PASS` in backend `.env`

## Usage

1. Visit `http://localhost:5173`
2. Sign up for an account
3. Navigate to Birthdays page
4. Add birthdays (name, email, date of birth)
5. The cron job will automatically send birthday wishes at 7 AM daily

## Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Request handlers
│   │   ├── emails/          # Email templates
│   │   ├── jobs/            # Cron jobs
│   │   ├── middlewares/     # Validation, auth
│   │   ├── models/          # MongoDB schemas
│   │   └── routes/          # API routes
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/             # API client
│   │   ├── components/      # React components
│   │   ├── context/         # React context
│   │   └── pages/           # Page components
│   └── package.json
│
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `POST /api/auth/verify-email` - Verify email
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password-by-code` - Reset password
- `GET /api/auth/check-auth` - Check authentication status

### Birthdays

- `GET /api/birthdays` - List all birthdays
- `POST /api/birthdays` - Add new birthday
- `DELETE /api/birthdays/:id` - Delete birthday
- `GET /api/birthdays/statistics` - Get statistics
- `GET /api/birthdays/upcoming` - Get upcoming birthdays

## Environment Variables

### Backend

- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default: 4000)
- `JWT_SECRET` - Secret for JWT tokens
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP server port
- `SMTP_USER` - Gmail email address
- `SMTP_PASS` - Gmail app password
- `FROM_EMAIL` - Sender email address

### Frontend

- `VITE_API_URL` - Backend API URL

## License

MIT

## Author

Built for AltSchool Africa
