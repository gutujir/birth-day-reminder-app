# Dockerized Frontend and Backend

## Backend (`./backend`)

- Build image: `docker build -t birthday-backend ./backend`
- Run container (uses port 5000): `docker run --env-file ./backend/.env -p 5000:5000 birthday-backend`
- Environment needed: `MONGO_URI` for MongoDB, optional `PORT` (defaults to 5000), `CLIENT_URL` for allowed CORS origins, and SMTP creds for birthday emails: `SMTP_USER`, `SMTP_PASS`, optional `SMTP_HOST`/`SMTP_PORT` (defaults to Gmail 587), `FROM_EMAIL` (falls back to `SMTP_USER`), and optional `CRON_TZ` if you want the 7am job in a specific timezone.

## Frontend (`./frontend`)

- Build image: `docker build -t birthday-frontend ./frontend`
- Run container (nginx serves on 80): `docker run -p 5173:80 birthday-frontend`
- Vite reads `VITE_*` variables at build time. Set them in `frontend/.env.production` (or pass `--build-arg`-style `VITE_*` envs) before building if the app needs API URLs.

## Notes

- Images are independent; build/run them separately as needed.
- Update host ports in `docker run -p <host>:<container>` if 5000 or 5173 are taken.
