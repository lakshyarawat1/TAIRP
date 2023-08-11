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
  Product.findOne({ _id: id })
    .lean()
    .then((product) => {
      const discount_percentage =
        ((product.price - product.discounted_price) * 100) / product.price;
      const discount = Math.round(discount_percentage);
      res.render("product", {
        id,
        product,
        discount,
      });
    })
    .catch((err) => {
      res
        .status(502)
        .json({ message: "Oops! Something went wrong !", error: err.message });
    });
});

router.get("/add_product", (req, res) => {
  res.render("add_product");
});

export default router;
