const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const validateObjectId = require("../middleware/validateObjectId");
const express = require("express");
const { Setting } = require("../models/setting");
const router = express.Router();

router.get("/", async (req, res) => {
  const settings = await Setting.find();
  res.send(settings);
});

router.post("/", auth, async (req, res) => {
  const setting = new Setting(req.body);
  await setting.save();

  res.send(setting);
});

router.put("/:id", async (req, res) => {
  const setting = await Setting.findByIdAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.send(setting);
});

router.delete("/:id", async (req, res) => {
  const setting = await Setting.findByIdAndRemove(req.params.id);
  if (!setting)
    return res.status(404).send("The setting with given id not found!");
  res.send(setting);
});

router.get("/:id", validateObjectId, async (req, res) => {
  const setting = await Setting.findById(req.params.id);
  if (!setting)
    return res.status(404).send("The setting with given id not found!");
  res.send(setting);
});

module.exports = router;
