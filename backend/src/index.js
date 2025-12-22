import app from "./app.js";
import { connectDB } from "./config/connectDB.js";
import { scheduleBirthdayCron } from "./jobs/birthdayCron.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    scheduleBirthdayCron();
    app.listen(PORT, () => {
      console.log("Server is running on port: ", PORT);
    });
  } catch (error) {
    console.error("Failed to start server", error.message);
    process.exit(1);
  }
};

start();
