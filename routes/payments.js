const auth = require("../middleware/auth");
const persianDate = require("persian-date");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Payment, validate } = require("../models/payment");
const router = express.Router();

router.get("/", async (req, res) => {
  const payments = await Payment.find();
  res.send(payments);
});

router.post("/", auth, async (req, res) => {
  const now = new persianDate().format("YYYY-MM-DD HH:mm:ss");
  let reqBody = { ...req.body, date: now.toString(), update: now.toString() };
  // const { error } = validate(reqBody);
  // if (error) return res.status(400).send(error.details[0].message);

  const payment = new Payment(reqBody);
  await payment.save();

  res.send(payment);
});

router.put("/:id", async (req, res) => {
  const now = new persianDate().format("YYYY-MM-DD HH:mm:ss");
  let reqBody = { ...req.body, update: now.toString() };
  const payment = await Payment.findByIdAndUpdate(
    { _id: req.params.id },
    reqBody,
    { new: true }
  );
  res.send(payment);
});

router.delete("/:id", async (req, res) => {
  const payment = await Payment.findByIdAndRemove(req.params.id);
  if (!payment)
    return res.status(404).send("The payment with given id not found!");
  res.send(payment);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const payment = await Payment.findById(req.params.id);
  if (!payment)
    return res.status(404).send("The payment with given id not found!");
  res.send(payment);
});

module.exports = router;
