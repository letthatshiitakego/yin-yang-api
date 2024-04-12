const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON } = require('./plugins');

const urlSchema = mongoose.Schema(
  {
    shortened: {
      type: String,
      required: true,
      index: true,
    },
    url: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isLength(value, 1, 2048)) {
          throw new Error('Invalid length url');
        }
        if (!validator.isUrl(value)) {
          throw new Error('Invalid url');
        }
      },
    },
    expires: {
      type: Date,
      required: true,
    },
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
