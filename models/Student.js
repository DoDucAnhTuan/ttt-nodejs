const mongoose = require("mongoose");

let StudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: { type: String, default: "other" },
  className: { type: String, required: true },
  address: String,
  email: String,
  image: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Student", StudentSchema);
