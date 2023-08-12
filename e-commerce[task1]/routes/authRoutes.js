import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { createSecretToken } from "../utils/createSecretToken.js";

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(404).json({ message: "All Fields are required !" });
  }
  User.findOne({ email })
    .lean()
    .then(async (user) => {
      await bcrypt
        .compare(password, user.password)
        .then((match) => {
          const token = createSecretToken(user);
          res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
          });
          res.redirect("/");
        })
        .catch((err) => {
          res
            .status(404)
            .json({ message: "Invalid Credentials !", error: err.message });
        });
    })
    .catch((err) => {
      res.status(404).json({ message: "User not found !", error: err.message });
    });
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
    const hashed_password = await bcrypt.genSalt(10).then((salt) => {
      return bcrypt.hash(password, salt);
    });
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashed_password,
    });
    user
      .save()
      .then(() => {
        const token = createSecretToken(user);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
        });
        res.status(201).json({ message: "User created successfully" });
      })
      .catch((err) => {
        res
          .status(502)
          .json({ message: "User already Exists !", error: err.message });
      });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

export default router;
