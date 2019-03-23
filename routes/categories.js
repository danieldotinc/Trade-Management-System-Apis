const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Category, validate } = require("../models/category");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const category = new Category(req.body);
  await category.save();

  res.send(category);
});

router.put("/:id", async (req, res) => {
  const category = await Category.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(category);
});

router.delete("/:id", async (req, res) => {
  const category = await Category.findByIdAndRemove(req.params.id);
  if (!category)
    return res.status(404).send("The category with given id not found!");
  res.send(category);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category)
    return res.status(404).send("The category with given id not found!");
  res.send(category);
});

module.exports = router;
