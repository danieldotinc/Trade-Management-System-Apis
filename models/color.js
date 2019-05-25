const Joi = require("joi");
const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  }
});

const Color = mongoose.model("Color", colorSchema);

function validateColor(color) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required()
  };
  return Joi.validate(color, schema);
}

exports.Color = Color;
exports.validate = validateColor;
