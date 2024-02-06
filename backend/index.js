const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const collection = require("./config");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
  try {
    console.log("Data received from frontend:", req.body);
    const { username, password } = req.body;

    // Find user by username
    const user = await collection.findOne({ name: username });

    if (!user) {
      return res.send("User not found");
    }

    // Compare passwords
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      return res.send("Login successful");
    } else {
      return res.send("Incorrect password");
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Internal server error");
  }
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await collection.findOne({ name: username });
    if (existingUser) {
      return res.send("User already exists. Please try another username.");
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      name: username,
      password: hashedPassword,
    };

    const result = await collection.insertMany(newUser);
    console.log("User created:", result);

    return res.send("User created successfully.");
  } catch (error) {
    console.error("Signup error:", error);
    return res.send("Internal server error");
  }
});

const port = 5000;
app.listen(port, () => {
  console.log("Server running on port:", port);
});
