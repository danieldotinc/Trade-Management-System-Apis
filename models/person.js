const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  identity: String,
  identityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "identities"
  },
  name: String,
  company: String,
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies"
  },
  officeSector: String,
  officeSectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "office-sectors"
  },
  marketSector: String,
  marketSectorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "market-sectors"
  },
  telephone: Number,
  telExtention: Number,
  mobile: Number,
  postalCode: String,
  state: String,
  city: String,
  address: String,
  credit: Number,
  explanation: String
});

const Person = mongoose.model("Person", personSchema);

function validatePerson(person) {
  const schema = {
    name: Joi.string()
      .max(255)
      .required(),
    identityId: Joi.objectId().required()
  };
  return Joi.validate(person, schema);
}

exports.Person = Person;
exports.validate = validatePerson;
