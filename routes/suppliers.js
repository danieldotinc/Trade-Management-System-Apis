const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Supplier, validate } = require("../models/supplier");
const router = express.Router();

router.get("/", async (req, res) => {
  const suppliers = await Supplier.find();
  res.send(suppliers);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const supplier = new Supplier(req.body);
  await supplier.save();

  res.send(supplier);
});

router.put("/:id", async (req, res) => {
  const supplier = await Supplier.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(supplier);
});

router.delete("/:id", async (req, res) => {
  const supplier = await Supplier.findByIdAndRemove(req.params.id);
  if (!supplier)
    return res.status(404).send("The supplier with given id not found!");
  res.send(supplier);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  if (!supplier)
    return res.status(404).send("The supplier with given id not found!");
  res.send(supplier);
});

module.exports = router;
