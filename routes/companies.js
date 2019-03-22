const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { Company } = require("../models/company");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const companies = await Company.find();
  res.send(companies);
});

router.post("/", auth, async (req, res) => {
  const company = new Company(req.body);
  await company.save();
  res.send(company);
});

router.put("/:id", auth, async (req, res) => {
  const company = await Company.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(company);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const company = await Company.findByIdAndRemove(req.params.id);
  if (!company)
    return res.status(404).send("The company with given id not found!");
  res.send(company);
});

router.get("/:id", async (req, res) => {
  const company = await Company.findById(req.params.id);
  if (!company)
    return res.status(404).send("The company with given id not found!");
  res.send(company);
});

module.exports = router;
