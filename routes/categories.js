const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { Category } = require("../models/category");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

router.post("/", auth, async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.send(category);
});

router.put("/:id", auth, async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(category);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  if (!category)
    return res.status(404).send("The category with given id not found!");
  res.send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category)
    return res.status(404).send("The category with given id not found!");
  res.send(category);
});

module.exports = router;
