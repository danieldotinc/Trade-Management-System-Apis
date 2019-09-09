const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  invoiceType: String,
  sellerName: String,
  sellerAddress: String,
  sellerPhoneNumber: String,
  buyerName: String,
  buyerAddress: String,
  buyerPhoneNumber: String,
  products: Array,
  totalPrice: Number,
  date: String,
  update: String
});

const Invoice = mongoose.model("Invoice", invoiceSchema);

function validateInvoice(invoice) {
  const schema = {
    invoiceType: Joi.string(),
    sellerName: Joi.string().required(),
    sellerAddress: Joi.string(),
    sellerPhoneNumber: Joi.string(),
    buyerName: Joi.string().required(),
    buyerAddress: Joi.string(),
    buyerPhoneNumber: Joi.string(),
    products: Joi.array(),
    totalPrice: Joi.number(),
    date: Joi.string(),
    update: Joi.string()
  };
  return Joi.validate(invoice, schema);
}

exports.Invoice = Invoice;
exports.validate = validateInvoice;
