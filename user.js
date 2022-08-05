const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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
    collection: "Test",
  }
);

const User = mongoose.model("Test", UserSchema);

module.exports = UserSchema;
