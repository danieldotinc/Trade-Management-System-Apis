const Joi = require("joi");
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
  person: "",
  personId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person"
  }
});

const Payment = mongoose.model("Payment", paymentSchema);

function validatePayment(payment) {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate(payment, schema);
}

exports.Payment = Payment;
exports.validate = validatePayment;
