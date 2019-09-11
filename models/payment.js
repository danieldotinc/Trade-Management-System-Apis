const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  accountType: "",
  accountTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AccountType"
  },
  account: "",
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },
  document: Number,
  invoice: String,
  invoiceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Invoice"
  },
  person: String,
  personId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person"
  },
  price: Number,
  type: String,
  status: String,
  date: String,
  update: String
});

const Payment = mongoose.model("Payment", paymentSchema);

function validatePayment(payment) {
  const schema = {
    accountType: Joi.string(),
    accountTypeId: Joi.objectId(),
    account: Joi.string().required(),
    accountId: Joi.objectId().required(),
    name: Joi.string(),
    price: Joi.number().required(),
    document: Joi.number(),
    type: Joi.string().required(),
    status: Joi.string().required(),
    person: Joi.string().required(),
    personId: Joi.objectId().required(),
    date: Joi.string(),
    update: Joi.string()
  };
  return Joi.validate(payment, schema);
}

exports.Payment = Payment;
exports.validate = validatePayment;
