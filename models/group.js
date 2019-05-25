const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory"
  }
});

const Group = mongoose.model("Group", groupSchema);

function validateGroup(group) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    subCategory: Joi.objectId().required()
  };
  return Joi.validate(group, schema);
}

exports.Group = Group;
exports.validate = validateGroup;
