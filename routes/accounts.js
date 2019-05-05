const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Account, validate } = require("../models/account");
const router = express.Router();

router.get("/", async (req, res) => {
  const accounts = await Account.find().sort({ _id: 1 });
  res.send(accounts);
});

router.post("/", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const account = new Account(req.body);
  await account.save();

  res.send(account);
});

router.put("/:id", async (req, res) => {
  const account = await Account.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(account);
});

router.delete("/:id", async (req, res) => {
  const account = await Account.findByIdAndRemove(req.params.id);
  if (!account)
    return res.status(404).send("The account with given id not found!");
  res.send(account);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const account = await Account.findById(req.params.id);
  if (!account)
    return res.status(404).send("The account with given id not found!");
  res.send(account);
});

module.exports = router;
