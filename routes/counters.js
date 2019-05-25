const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const { Counter } = require("../models/counter");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    { name: "counter1" },
    { $inc: { count: 1 } },
    { upsert: true, multi: true, new: true }
  );

  res.send(counter);
});

module.exports = router;
