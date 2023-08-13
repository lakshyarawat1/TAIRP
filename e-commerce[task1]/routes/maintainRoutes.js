import express from "express";
import Product from "../models/productModel.js";
import fs from "fs";
import { __dirname } from "../index.js";
import User from "../models/userModel.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Maintain page");
});

router.post("/add_product", (req, res) => {
  const { name, description, price, discounted_price, image, category } =
    req.body;

  const product = {
    name,
    description,
    price,
    discounted_price,
    image,
    category,
  };
  const newProduct = new Product(product);
  newProduct
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.status(502).json({
        message: "Your product could not be added to TrendBreeze !",
        error: err.message,
      });
    });
});

router.post("/add_to_cart", async (req, res) => {
  const { product_id, user_id } = req.body;

  await User.findById(user_id)
    .then(async (user) => {
      await Product.findById(product_id)
        .then(async (product) => {
          user.cart.push(product);
          await user.save();

          res.status(200).json({message : "Success"})
        })
        .catch((err) => {
          res.status(503).json({
            message: "Oops! Something went wrong !",
            error: err.message,
          });
        });
    })
    .catch((err) => {
      res.status(502).json({
        message: "Oops! Something went wrong !",
        error: err.message,
      });
    });
});

export default router;
