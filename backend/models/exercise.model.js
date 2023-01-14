const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
  {
    companyName: { type: String, required: true },
    country: { type: String, required: true },
    companyNumber: { type: Number, required: true },
    companyWebsite: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
