import { CronJob } from "cron";
import nodemailer from "nodemailer";
import { Birthday } from "../models/birthday.model.js";
import { birthdayWishesTemplate } from "../emails/emailTemplates.js";

const createTransporter = () => {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error(
      "SMTP credentials are missing. Set SMTP_USER and SMTP_PASS."
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
};

const findTodayBirthdays = async () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1; // months are 1-based in Mongo $month

  return Birthday.find({
    $expr: {
      $and: [
        { $eq: [{ $dayOfMonth: "$dateOfBirth" }, day] },
        { $eq: [{ $month: "$dateOfBirth" }, month] },
      ],
    },
  });
};

const sendBirthdayEmail = async (transporter, person) => {
  const from = process.env.FROM_EMAIL || process.env.SMTP_USER;
  await transporter.sendMail({
    from,
    to: person.email,
    subject: "Happy Birthday!",
    html: birthdayWishesTemplate(person.name),
  });
};

export const scheduleBirthdayCron = () => {
  const job = new CronJob(
    "0 7 * * *",
    async () => {
      try {
        const transporter = createTransporter();
        const celebrants = await findTodayBirthdays();

        for (const person of celebrants) {
          await sendBirthdayEmail(transporter, person);
        }

        if (celebrants.length) {
          console.log(
            `Sent birthday emails to ${celebrants.length} recipient(s).`
          );
        }
      } catch (error) {
        console.error("Birthday cron failed", error.message);
      }
    },
    null,
    true,
    process.env.CRON_TZ || undefined // Optional timezone
  );

  job.start();
  return job;
};
