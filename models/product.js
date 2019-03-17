const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: String,
  imgs: [String],
  category: String,
  proCode: Number,
  diverseCode: Number,
  name: String,
  brand: String,
  buyPrice: Number,
  refPrice: Number,
  breakEvenPrice: Number,
  wholePrice: Number,
  retailPrice: Number,
  marketPlacePrice: Number,
  retailStoreStock: Number,
  wholeStoreStock: Number,
  virtualStoreStock: Number,
  boxQuantity: Number
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  // checkErrorType = err => {
  //   switch (err.type) {
  //     case "any.empty":
  //       err.message = "Value should not be empty!";
  //       break;
  //     case "string.min":
  //       err.message = `Value should have at least ${
  //         err.context.limit
  //       } characters!`;
  //       break;
  //     case "string.max":
  //       err.message = `Value should have at most ${
  //         err.context.limit
  //       } characters!`;
  //       break;
  //     default:
  //       break;
  //   }
  // };
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required(),
    category: Joi.objectId().required()
  };
  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
