const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Material, validate } = require("../models/material");
const router = express.Router();

router.get("/", async (req, res) => {
  const materials = await Material.find();
  res.send(materials);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const material = new Material(req.body);
  await material.save();

  res.send(material);
});

router.put("/:id", async (req, res) => {
  const material = await Material.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(material);
});

router.delete("/:id", async (req, res) => {
  const material = await Material.findByIdAndRemove(req.params.id);
  if (!material)
    return res.status(404).send("The material with given id not found!");
  res.send(material);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const material = await Material.findById(req.params.id);
  if (!material)
    return res.status(404).send("The material with given id not found!");
  res.send(material);
});

module.exports = router;
