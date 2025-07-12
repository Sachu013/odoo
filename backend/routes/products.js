const express = require("express");
const Product = require("../models/product");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get single product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new product (protected)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, price, imageUrl, category, inStock } = req.body;
    const product = new Product({ name, description, price, imageUrl, category, inStock });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a product (protected)
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, description, price, imageUrl, category, inStock } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, imageUrl, category, inStock },
      { new: true }
    );
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a product (protected)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
