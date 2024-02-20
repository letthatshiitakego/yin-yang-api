const mongoose = require('mongoose');
const validator = require('validator');

const urlSchema = mongoose.Schema(
  {
    shorten: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
urlSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;