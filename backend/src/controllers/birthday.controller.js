import { Birthday } from "../models/birthday.model.js";

export const createBirthday = async (req, res) => {
  try {
    const { name, email, dateOfBirth } = req.body;

    // Check if email already exists
    const existing = await Birthday.findOne({ email });
    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    // Create birthday entry
    const birthday = await Birthday.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      dateOfBirth: new Date(dateOfBirth),
    });

    return res.status(201).json({
      success: true,
      data: birthday,
      message: "Birthday saved successfully!",
    });
  } catch (error) {
    console.error("Create birthday error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while saving birthday",
    });
  }
};

export const listBirthdays = async (_req, res) => {
  try {
    const people = await Birthday.find({}).sort({ createdAt: -1 }).limit(100);
    return res.json({ success: true, data: people });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteBirthday = async (req, res) => {
  try {
    const { id } = req.params;
    const birthday = await Birthday.findByIdAndDelete(id);

    if (!birthday) {
      return res
        .status(404)
        .json({ success: false, message: "Birthday not found" });
    }

    return res.json({
      success: true,
      message: "Birthday deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getStatistics = async (_req, res) => {
  try {
    const total = await Birthday.countDocuments();

    // Get birthdays this month
    const today = new Date();
    const currentMonth = today.getMonth() + 1;

    const thisMonth = await Birthday.countDocuments({
      $expr: {
        $eq: [{ $month: "$dateOfBirth" }, currentMonth],
      },
    });

    return res.json({
      success: true,
      data: {
        total,
        thisMonth,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getUpcomingBirthdays = async (_req, res) => {
  try {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;

    // Get birthdays in the next 30 days
    const upcoming = await Birthday.find({
      $expr: {
        $or: [
          // Same month, upcoming days
          {
            $and: [
              { $eq: [{ $month: "$dateOfBirth" }, currentMonth] },
              { $gte: [{ $dayOfMonth: "$dateOfBirth" }, currentDay] },
            ],
          },
          // Next month
          {
            $eq: [
              { $month: "$dateOfBirth" },
              currentMonth === 12 ? 1 : currentMonth + 1,
            ],
          },
        ],
      },
    })
      .sort({ dateOfBirth: 1 })
      .limit(10);

    return res.json({ success: true, data: upcoming });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
