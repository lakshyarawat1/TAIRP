import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/login", (req, res) => {
  console.log("working");
});

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, conf_password } = req.body;
  if (firstName == "" || email == "" || password == "" || conf_password == "") {
    res.status(400).json({ message: "All fields are required" });
  } else if (password !== conf_password) {
    res.status(400).json({ message: "Passwords do not match" });
  } else if (password.length < 6) {
    res.status(400).json({ message: "Password must be at least 6 characters" });
  } else {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });
    const newUser = await user.save();
    if (newUser) {
      res.status(200).json({ message: "User created successfully" });
    }
  }
});

export default router;
