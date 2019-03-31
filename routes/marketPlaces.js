const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { MarketPlace } = require("../models/marketPlace");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  const marketPlaces = await MarketPlace.find();
  res.send(marketPlaces);
});

router.post("/", auth, async (req, res) => {
  const marketPlace = new MarketPlace(req.body);
  await marketPlace.save();
  res.send(marketPlace);
});

router.put("/:id", auth, async (req, res) => {
  const marketPlace = await MarketPlace.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(marketPlace);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const marketPlace = await MarketPlace.findByIdAndRemove(req.params.id);
  if (!marketPlace)
    return res.status(404).send("The marketPlace with given id not found!");
  res.send(marketPlace);
});

router.get("/:id", async (req, res) => {
  const marketPlace = await MarketPlace.findById(req.params.id);
  if (!marketPlace)
    return res.status(404).send("The marketPlace with given id not found!");
  res.send(marketPlace);
});

module.exports = router;
