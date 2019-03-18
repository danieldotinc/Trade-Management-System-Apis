const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { MarketSector } = require("../models/marketSector");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const marketSectors = await MarketSector.find();
  res.send(marketSectors);
});

router.post("/", auth, async (req, res) => {
  const marketSector = new MarketSector(req.body);
  await marketSector.save();
  res.send(marketSector);
});

router.put("/:id", auth, async (req, res) => {
  const marketSector = await MarketSector.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(marketSector);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const marketSector = await MarketSector.findByIdAndRemove(req.params.id);
  if (!marketSector)
    return res.status(404).send("The marketSector with given id not found!");
  res.send(marketSector);
});

router.get("/:id", async (req, res) => {
  const marketSector = await MarketSector.findById(req.params.id);
  if (!marketSector)
    return res.status(404).send("The marketSector with given id not found!");
  res.send(marketSector);
});

module.exports = router;
