const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/login");

//check connection
connect
  .then(() => {
    console.log("Database successfully connected.");
  })

  .catch(() => {
    console.log("Database cannot be connected.");
  });

//create a schema

const loginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("users", loginSchema);
module.exports = collection;
