const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { AccountType, validate } = require("../models/accountType");
const router = express.Router();

router.get("/", async (req, res) => {
  const accountTypes = await AccountType.find();
  res.send(accountTypes);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const accountType = new AccountType(req.body);
  await accountType.save();

  res.send(accountType);
});

router.put("/:id", async (req, res) => {
  const accountType = await AccountType.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(accountType);
});

router.delete("/:id", async (req, res) => {
  const accountType = await AccountType.findByIdAndRemove(req.params.id);
  if (!accountType)
    return res.status(404).send("The accountType with given id not found!");
  res.send(accountType);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const accountType = await AccountType.findById(req.params.id);
  if (!accountType)
    return res.status(404).send("The accountType with given id not found!");
  res.send(accountType);
});

module.exports = router;
