const Joi = require("joi");
const mongoose = require("mongoose");

const marketPlaceSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 255,
    required: true
  },
  valueAdded: String,
  commission: String
});

const MarketPlace = mongoose.model("MarketPlace", marketPlaceSchema);

function validateMarketPlace(marketPlace) {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate(marketPlace, schema);
}

exports.MarketPlace = MarketPlace;
exports.validate = validateMarketPlace;
