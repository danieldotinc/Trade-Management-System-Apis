const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: String,
  imgs: [String],
  category: String,
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  },
  subCategory: String,
  subCategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory"
  },
  webLink: String,
  itemNumber: String,
  proCode: Number,
  diverseCode: Number,
  taminMallCode: String,
  marketCode: String,
  name: String,
  brand: String,
  color: String,
  colorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Color"
  },
  material: String,
  materialId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Material"
  },
  supplier: String,
  supplierId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier"
  },
  tradeListPrice: Number,
  tradeBuyingPrice: Number,
  buyingPriceHistory: String,
  valueAdded: String,
  commission: String,
  shippingCosts: String,
  refPrice: String,
  breakEvenPrice: String,
  wholePrice: Number,
  retailPrice: Number,
  marketPlacePrice: Number,
  retailStoreStock: Number,
  wholeStoreStock: Number,
  virtualStoreStock: Number,
  boxQuantity: Number,
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
