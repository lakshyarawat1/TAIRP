import express from "express";
import Product from "../models/productModel.js";
import { authenticate } from "../utils/authenticate.js";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  const user = authenticate(req);
  if (!user) {
    res.render("index");
  } else {
    res.render("index", { user });
  }
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/category/:category", (req, res) => {
  const user = authenticate(req);
  const category = req.params.category;
  Product.find({ category: category })
    .lean()
    .then((products) => {
      if (!user) {
        res.render("category", {
          category,
          products,
        });
      } else {
        res.render("category", {
          category,
          products,
          user,
        });
      }
    })
    .catch((err) => {
      res.status(502).json({
        message: "Oops! Something went wrong !",
        error: err.message,
      });
    });
});

router.get("/product/:id", (req, res) => {
  const user = authenticate(req);
  const id = req.params.id;
  Product.findOne({ _id: id })
    .lean()
    .then((product) => {
      const discount_percentage =
        ((product.price - product.discounted_price) * 100) / product.price;
      const discount = Math.round(discount_percentage);
      if (!user) {
        res.render("product", {
          product,
          discount,
        });
      } else {
        res.render("product", {
          product,
          discount,
          user,
        });
      }
    })
    .catch((err) => {
      res.status(502).json({
        message: "Oops! Something went wrong !",
        error: err.message,
      });
    });
});

router.get("/cart/:id", async (req, res) => {
  const user = authenticate(req);
  if (!user) {
    res.redirect("/");
  } else {
    await User.findOne({ _id: req.params.id })
      .populate("cart")
      .lean()
      .then((user) => {
        res.render("cart", {user});
      })
      .catch((err) => {
        res.status(502).json({
          message: "Oops! Something went wrong !",
          error: err.message,
        });
      });
  }
});

router.get("/add_product", (req, res) => {
  res.render("add_product");
});

export default router;
