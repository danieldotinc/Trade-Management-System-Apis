const auth = require("../middleware/auth");
const persianDate = require("persian-date");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Invoice, validate } = require("../models/invoice");
const router = express.Router();

router.get("/", async (req, res) => {
  const invoices = await Invoice.find();
  res.send(invoices);
});

router.post("/", auth, async (req, res) => {
  const now = new persianDate().format("YYYY-MM-DD HH:mm:ss");
  let reqBody = { ...req.body, date: now.toString(), update: now.toString() };
  // const { error } = validate(reqBody);
  // if (error) return res.status(400).send(error.details[0].message);

  const invoice = new Invoice(reqBody);
  await invoice.save();

  res.send(invoice);
});

router.put("/:id", async (req, res) => {
  const now = new persianDate().format("YYYY-MM-DD HH:mm:ss");
  let reqBody = { ...req.body, update: now.toString() };
  const invoice = await Invoice.findByIdAndUpdate(
    { _id: req.params.id },
    reqBody,
    { new: true }
  );
  res.send(invoice);
});

router.delete("/:id", async (req, res) => {
  const invoice = await Invoice.findByIdAndRemove(req.params.id);
  if (!invoice)
    return res.status(404).send("The invoice with given id not found!");
  res.send(invoice);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);
  if (!invoice)
    return res.status(404).send("The invoice with given id not found!");
  res.send(invoice);
});

module.exports = router;
