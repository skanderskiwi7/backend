const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://skander7:Skander1990@cluster0.d1v5fd6.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("you are connacted to the db");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectdb;
