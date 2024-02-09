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

const systemSchema = new mongoose.Schema({
  index: {
    type: Number, // Changed from Int to Number
    required: [true, "Index is required"], // Custom error message for required field
  },
  name: {
    type: String,
    required: [true, "Name is required"], // Custom error message for required field
  },
});

// Create models
const UserModel = mongoose.model("users", loginSchema);
const ComplaintModel = mongoose.model("complaints", complaintSchema);
const SystemModel = mongoose.model("systems", systemSchema);

// Export models
module.exports = {
  UserModel: UserModel,
  ComplaintModel: ComplaintModel,
  SystemModel: SystemModel,
};
