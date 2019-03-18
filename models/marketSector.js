const Joi = require("joi");
const mongoose = require("mongoose");

const marketSectorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  }
});

const MarketSector = mongoose.model("MarketSector", marketSectorSchema);

function validateMarketSector(marketSector) {
  const schema = {
    name: Joi.string().required()
  };
  return Joi.validate(marketSector, schema);
}

exports.MarketSector = MarketSector;
exports.validate = validateMarketSector;
