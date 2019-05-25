const Joi = require("joi");
Joi.ObjectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  code: Number,
  name: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true
  },
  description: String,
  accountLevel: String,
  accountLevelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountLevel"
  },
  accountType: String,
  accountTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountType"
  }
});

const Account = mongoose.model("Account", accountSchema);

function validateAccount(account) {
  const schema = {
    code: Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string(),
    accountLevel: Joi.string(),
    accountLevelId: Joi.ObjectId(),
    accountType: Joi.string(),
    accountTypeId: Joi.ObjectId()
  };
  return Joi.validate(account, schema);
}

exports.Account = Account;
exports.validate = validateAccount;
