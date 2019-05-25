const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { SubCategory, validate } = require("../models/subCategory");
const router = express.Router();

router.get("/", async (req, res) => {
  const subCategories = await SubCategory.find();
  res.send(subCategories);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const subCategory = new SubCategory(req.body);
  await subCategory.save();

  res.send(subCategory);
});

router.put("/:id", async (req, res) => {
  const subCategory = await SubCategory.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(subCategory);
});

router.delete("/:id", async (req, res) => {
  const subCategory = await SubCategory.findByIdAndRemove(req.params.id);
  if (!subCategory)
    return res.status(404).send("The subCategory with given id not found!");
  res.send(subCategory);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const subCategory = await SubCategory.findById(req.params.id);
  if (!subCategory)
    return res.status(404).send("The subCategory with given id not found!");
  res.send(subCategory);
});

module.exports = router;
