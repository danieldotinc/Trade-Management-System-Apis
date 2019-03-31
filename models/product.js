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
  proCode: String,
  diverseCode: String,
  myKitchenCode: String,
  myKitchenPlusCode: String,
  nikradCode: String,
  nikradText: String,
  name: String,
  brand: String,
  tradeListPrice: String,
  tradeBuyingPrice: String,
  buyingPriceHistory: String,
  valueAdded: String,
  commission: String,
  shippingCosts: String,
  refPrice: String,
  breakEvenPrice: String,
  wholePrice: String,
  retailPrice: String,
  marketPlacePrice: String,
  retailStoreStock: String,
  wholeStoreStock: String,
  virtualStoreStock: String,
  boxQuantity: String,
  width: String,
  length: String,
  height: String,
  weight: String
});

const Product = mongoose.model("Product", productSchema);

function validateProduct(product) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(255)
      .required()
  };
  return Joi.validate(product, schema);
}

exports.Product = Product;
exports.validate = validateProduct;
