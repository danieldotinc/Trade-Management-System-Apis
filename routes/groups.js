const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Group, validate } = require("../models/group");
const router = express.Router();

router.get("/", async (req, res) => {
  const groups = await Group.find();
  res.send(groups);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const group = new Group(req.body);
  await group.save();

  res.send(group);
});

router.put("/:id", async (req, res) => {
  const group = await Group.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(group);
});

router.delete("/:id", async (req, res) => {
  const group = await Group.findByIdAndRemove(req.params.id);
  if (!group) return res.status(404).send("The group with given id not found!");
  res.send(group);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) return res.status(404).send("The group with given id not found!");
  res.send(group);
});

module.exports = router;
