import { CronJob } from "cron";
import { Birthday } from "../models/birthday.model.js";
import { birthdayWishesTemplate } from "../emails/emailTemplates.js";
import { transporter } from "../config/nodemailer.js";

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

const sendBirthdayEmails = async () => {
  try {
    console.log("Running birthday cron job...");
    const peopleWithBirthdaysToday = await findTodayBirthdays();

    if (peopleWithBirthdaysToday.length === 0) {
      console.log("No birthdays today.");
      return;
    }

    console.log(`Found ${peopleWithBirthdaysToday.length} birthday(s) today.`);

    for (const person of peopleWithBirthdaysToday) {
      const mailOptions = {
        from: process.env.FROM_EMAIL || process.env.SMTP_USER,
        to: person.email,
        subject: `🎉 Happy Birthday, ${person.name}!`,
        html: birthdayWishesTemplate(person.name),
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(`Birthday email sent to ${person.name} (${person.email})`);
      } catch (err) {
        console.error(
          `Failed to send birthday email to ${person.email}:`,
          err.message
        );
      }
    }
  } catch (error) {
    console.error("Error in birthday cron job:", error);
  }
};

export const startBirthdayCron = () => {
  const job = new CronJob(
    "0 7 * * *", // Every day at 7 AM
    sendBirthdayEmails,
    null,
    true,
    process.env.CRON_TZ || undefined
  );

  console.log("Birthday cron job scheduled to run daily at 7 AM");
  return job;
};
