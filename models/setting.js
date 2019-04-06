const Joi = require("joi");
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  name: String,
  set: String
});

const Setting = mongoose.model("Setting", settingSchema);

exports.Setting = Setting;
