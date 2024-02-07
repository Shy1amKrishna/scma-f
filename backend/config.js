const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/login");

// Check connection
connect
  .then(() => {
    console.log("Database successfully connected.");
  })
  .catch(() => {
    console.log("Database cannot be connected.");
  });

// Create schemas
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

const complaintSchema = new mongoose.Schema({
  systemName: {
    type: String,
    required: true,
  },
  complaint: {
    type: String,
    required: true,
  },
});

// Create models
const UserModel = mongoose.model("users", loginSchema);
const ComplaintModel = mongoose.model("complaints", complaintSchema);

// Export models
module.exports = {
  UserModel: UserModel,
  ComplaintModel: ComplaintModel,
};
