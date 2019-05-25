const Joi = require("joi");
const mongoose = require("mongoose");

const accountTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  }
});

const AccountType = mongoose.model("AccountType", accountTypeSchema);

function validateAccountType(accountType) {
  const schema = {
    name: Joi.string()
      .min(2)
      .max(50)
      .required()
  };
  return Joi.validate(accountType, schema);
}

exports.AccountType = AccountType;
exports.validate = validateAccountType;
