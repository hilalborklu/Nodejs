const mongoose = require("mongoose");

const Threshold = new mongoose.Schema(
  {
    date: {
      type: String,
      required: true,
    },
    storeId: {
      type: Number,
      required: true,
    },
    hour: {
      type: Number,
      required: true,
    },
    imwh: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    collection: "Threshold",
  }
);

const User = mongoose.model("Threshold", Threshold);

module.exports = Threshold;
