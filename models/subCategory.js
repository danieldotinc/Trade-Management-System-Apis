const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
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

const SubCategory = mongoose.model("SubCategory", subCategorySchema);

function validateSubCategory(subCategory) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    category: Joi.objectId().required()
  };
  return Joi.validate(subCategory, schema);
}

exports.SubCategory = SubCategory;
exports.validate = validateSubCategory;
