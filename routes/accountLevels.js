const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { AccountLevel, validate } = require("../models/accountLevel");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountLevels = await AccountLevel.find();
  res.send(accountLevels);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const accountLevel = new AccountLevel(req.body);
  await accountLevel.save();

  res.send(accountLevel);
});

router.put("/:id", async (req, res) => {
  const accountLevel = await AccountLevel.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(accountLevel);
});

router.delete("/:id", async (req, res) => {
  const accountLevel = await AccountLevel.findByIdAndRemove(req.params.id);
  if (!accountLevel)
    return res.status(404).send("The accountLevel with given id not found!");
  res.send(accountLevel);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const accountLevel = await AccountLevel.findById(req.params.id);
  if (!accountLevel)
    return res.status(404).send("The accountLevel with given id not found!");
  res.send(accountLevel);
});

module.exports = router;
