const Joi = require("joi");
const mongoose = require("mongoose");

const settingSchema = new mongoose.Schema({
  valueAdded: String,
  shippingCosts: String,
  wholeProfit: String,
  retailProfit: String,
  marketPlaceProfit: String,
  addAction: Boolean,
  editAction: Boolean,
  deleteAction: Boolean,
  processAccess: Boolean,
  personsAccess: Boolean,
  companiesAccess: Boolean
});

const Setting = mongoose.model("Setting", settingSchema);

exports.Setting = Setting;
