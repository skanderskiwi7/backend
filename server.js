const express = require("express");
const mongoose = require("mongoose");
const connectdb = require("./config/connecdb");
const ContactRouter = require("./routes/contact");
const app = express();

// middleware
var cors = require("cors");
var bodyParser = require("body-parser");

const port = 5001;

// cors
app.use(cors());
// create application/json parser
var jsonParser = bodyParser.json();

// default value for mongoose 7
mongoose.set("strictQuery", true);

// link bil db
connectdb();

app.use("/api/user", jsonParser, ContactRouter);

app.use(express.json);
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`you did it go to server: ${port}`);
});
