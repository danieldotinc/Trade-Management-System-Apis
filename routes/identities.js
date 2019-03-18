const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { Identity } = require("../models/identity");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const identities = await Identity.find();
  res.send(identities);
});

router.post("/", auth, async (req, res) => {
  const identity = new Identity(req.body);
  await identity.save();
  res.send(identity);
});

router.put("/:id", auth, async (req, res) => {
  const identity = await Identity.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(identity);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const identity = await Identity.findByIdAndRemove(req.params.id);
  if (!identity)
    return res.status(404).send("The identity with given id not found!");
  res.send(identity);
});

router.get("/:id", async (req, res) => {
  const identity = await Identity.findById(req.params.id);
  if (!identity)
    return res.status(404).send("The identity with given id not found!");
  res.send(identity);
});

module.exports = router;
