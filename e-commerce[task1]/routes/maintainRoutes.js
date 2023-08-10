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

  fs.readFile(imageFilePath, (err, data) => {
    if (err) {
      res.status(402).json({
        message: "Error processing Image !, Please Try Again",
        error: err.message,
      });
    } else {
      const imageFile = data;
      const product = {
        name,
        description,
        price,
        discounted_price,
        image: imageFile,
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
    }
  });
});

export default router;
