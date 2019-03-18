const Joi = require("joi");
const mongoose = require("mongoose");

const officeSectorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  }
});

const OfficeSector = mongoose.model("OfficeSector", officeSectorSchema);

function validateOfficeSector(officeSector) {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate(officeSector, schema);
}

exports.OfficeSector = OfficeSector;
exports.validate = validateOfficeSector;
