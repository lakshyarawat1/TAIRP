import express from "express";
import Product from "../models/productModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/category/:category", (req, res) => {
  const category = req.params.category;
  Product.find({ category: category })
    .lean()
    .then((products) => {
      res.render("category", {
        category,
        products,
      });
    })
    .catch((err) => {
      res
        .status(502)
        .json({ message: "Oops! Something went wrong !", error: err.message });
    });
});

router.get("/product/:id", (req, res) => {
  const id = req.params.id;
  res.render("product", {
    id,
  });
});

router.get("/add_product", (req, res) => {
  res.render("add_product");
});

export default router;
