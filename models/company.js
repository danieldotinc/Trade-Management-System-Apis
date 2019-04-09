const Joi = require("joi");
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true
  },
  city: String,
  marketSector: "",
  marketSectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "marketsector"
  },
  telephone1: Number,
  telephone2: Number,
  address: String,
  postalCode: Number,
  explanation: String
});

const Company = mongoose.model("Company", companySchema);

function validateCompany(company) {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate(company, schema);
}

exports.Company = Company;
exports.validate = validateCompany;
