const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Color, validate } = require("../models/color");
const router = express.Router();

router.get("/", async (req, res) => {
  const colors = await Color.find();
  res.send(colors);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const color = new Color(req.body);
  await color.save();

  res.send(color);
});

router.put("/:id", async (req, res) => {
  const color = await Color.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(color);
});

router.delete("/:id", async (req, res) => {
  const color = await Color.findByIdAndRemove(req.params.id);
  if (!color) return res.status(404).send("The color with given id not found!");
  res.send(color);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const color = await Color.findById(req.params.id);
  if (!color) return res.status(404).send("The color with given id not found!");
  res.send(color);
});

module.exports = router;
