import express from "express";

const router = express.Router();

router.get("/login", (req, res) => {
  console.log("working");
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
