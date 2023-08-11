import express from "express";
import Product from "../models/productModel.js";
import fs from "fs";
import { __dirname } from "../index.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Maintain page");
});

router.post("/add_product", (req, res) => {
  const { name, description, price, discounted_price, image, category } =
    req.body;

  const imageFilePath = __dirname + "/static/images/" + image;

  const product = {
    name,
    description,
    price,
    discounted_price,
    image: imageFilePath,
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

export default router;
