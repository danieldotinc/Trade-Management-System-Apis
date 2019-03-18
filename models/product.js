const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: String,
  imgs: [String],
  category: "",
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories"
  },
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
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required(),
    categoryId: Joi.objectId().required()
  };
  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
