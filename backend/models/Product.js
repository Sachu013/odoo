const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String }, // URL or filename of product image
  category: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  // Add more fields if needed (e.g., sizes, colors, tags)
});

module.exports = mongoose.model("Product", ProductSchema);
