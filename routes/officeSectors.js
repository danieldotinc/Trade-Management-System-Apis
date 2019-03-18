const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { OfficeSector } = require("../models/officeSector");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const officeSectores = await OfficeSector.find();
  res.send(officeSectores);
});

router.post("/", auth, async (req, res) => {
  const officeSector = new OfficeSector(req.body);
  await officeSector.save();
  res.send(officeSector);
});

router.put("/:id", auth, async (req, res) => {
  const officeSector = await OfficeSector.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(officeSector);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const officeSector = await OfficeSector.findByIdAndRemove(req.params.id);
  if (!officeSector)
    return res.status(404).send("The officeSector with given id not found!");
  res.send(officeSector);
});

router.get("/:id", async (req, res) => {
  const officeSector = await OfficeSector.findById(req.params.id);
  if (!officeSector)
    return res.status(404).send("The officeSector with given id not found!");
  res.send(officeSector);
});

module.exports = router;
