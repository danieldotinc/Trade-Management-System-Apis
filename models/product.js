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
  proCode: String,
  diverseCode: String,
  taminMallCode: String,
  nikradCode: String,
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
