import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/category/:category", (req, res) => {
  const category = req.params.category;
  const products = [
    {
      id: 1,
      name: "product1",
      price: 100,
      image: "/images/men_fashion.jpg",
    },
    {
      id: 2,
      name: "product1",
      price: 100,
      image: "/images/men_fashion.jpg",
    },
    {
      id: 3,
      name: "product1",
      price: 100,
      image: "/images/men_fashion.jpg",
    },
    {
      id: 4,
      name: "product1",
      price: 100,
      image: "/images/men_fashion.jpg",
    },
  ];
  res.render("category", {
    category,
    products,
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
