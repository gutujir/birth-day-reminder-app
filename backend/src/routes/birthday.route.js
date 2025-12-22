import express from "express";
import {
  createBirthday,
  listBirthdays,
  deleteBirthday,
  getStatistics,
  getUpcomingBirthdays,
} from "../controllers/birthday.controller.js";
import { validateBirthdayInput } from "../middlewares/birthday.validation.js";

const router = express.Router();

router.post("/", validateBirthdayInput, createBirthday);
router.get("/", listBirthdays);
router.delete("/:id", deleteBirthday);
router.get("/statistics", getStatistics);
router.get("/upcoming", getUpcomingBirthdays);

export default router;
