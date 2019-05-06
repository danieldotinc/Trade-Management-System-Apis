const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  account: "",
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account"
  },
  document: Number,
  name: String,
  price: Number,
  type: Boolean,
  status: String,
  person: String,
  personId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person"
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

function validatePayment(payment) {
  const schema = {
    account: Joi.string().required(),
    accountId: Joi.objectId().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    document: Joi.number().required(),
    type: Joi.boolean().required(),
    status: Joi.string().required(),
    person: Joi.string().required(),
    personId: Joi.objectId().required()
  };
  return Joi.validate(payment, schema);
}

exports.Payment = Payment;
exports.validate = validatePayment;
