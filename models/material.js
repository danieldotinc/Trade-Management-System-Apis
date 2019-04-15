const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
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

const Material = mongoose.model("Material", materialSchema);

function validateMaterial(material) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    category: Joi.objectId().required()
  };
  return Joi.validate(material, schema);
}

exports.Material = Material;
exports.validate = validateMaterial;
