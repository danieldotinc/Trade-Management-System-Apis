const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: String,
  count: Number
});

const Counter = mongoose.model("Counter", counterSchema);

exports.Counter = Counter;
