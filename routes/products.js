const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Product, validate } = require("../models/product");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const product = new Product(req.body);
  await product.save();
  res.send(product);
});

router.put("/:id", [auth, validateObjectId], async (req, res) => {
  const product = await Product.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(product);
});

router.delete("/:id", [auth, admin, validateObjectId], async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product)
    return res.status(404).send("The product with given id not found!");
  res.send(product);
});

router.get("/:id", [auth, validateObjectId], async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product)
    return res.status(404).send("The product with given id not found!");
  res.send(product);
});

module.exports = router;
