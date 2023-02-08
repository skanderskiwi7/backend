const mongoose = require("mongoose");

//  creation de notre schema
const contactSchema = mongoose.Schema({
  name: String,
  age: Number,
  tel: Number,
  email: { type: String, required: true, unique: true },
  descrition: { type: String, default: "rien à signaler" },
});

module.exports = mongoose.model("contact", contactSchema);
