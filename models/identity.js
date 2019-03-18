const Joi = require("joi");
const mongoose = require("mongoose");

const identitySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 50,
    required: true
  }
});

const Identity = mongoose.model("Identity", identitySchema);

function validateIdentity(identity) {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate(identity, schema);
}

exports.Identity = Identity;
exports.validate = validateIdentity;
