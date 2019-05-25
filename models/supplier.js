const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});

const Supplier = mongoose.model("Supplier", supplierSchema);

function validateSupplier(supplier) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    category: Joi.objectId().required()
  };
  return Joi.validate(supplier, schema);
}

exports.Supplier = Supplier;
exports.validate = validateSupplier;
