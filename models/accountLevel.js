const Joi = require("joi");
const mongoose = require("mongoose");

const accountLevelSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  }
});

const AccountLevel = mongoose.model("AccountLevel", accountLevelSchema);

function validateAccountLevel(accountLevel) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required()
  };
  return Joi.validate(accountLevel, schema);
}

exports.AccountLevel = AccountLevel;
exports.validate = validateAccountLevel;
