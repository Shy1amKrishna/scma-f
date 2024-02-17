const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const collection = require("./config"); // Importing database models and configuration

let userNavbar = ""; //variable to store username for navbar
let userLogged = false; //variable to confirm loggin for navbar
let userSystem = ""; //variable to store selected system name in maintenance.

const app = express(); // Creating an Express application
app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); // Middleware to enable CORS (Cross-Origin Resource Sharing)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await collection.UserModel.findOne({ name: username });

    if (!user) {
      return res.status(404).send("User not found"); // Return error if user not found
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      userNavbar = username; //setting username to show on navbar
      userLogged = true; //setting login confirmation for navbar
      // console.log(userNavbar);
      return res.send("Login successful"); // Return success message if password matches
    } else {
      return res.status(401).send("Incorrect password"); // Return error if password is incorrect
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

// Signup endpoint
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await collection.UserModel.findOne({ name: username });

    if (existingUser) {
      return res
        .status(400)
        .send("User already exists. Please try another username."); // Return error if user already exists
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = {
      name: username,
      password: hashedPassword,
    };

    await collection.UserModel.create(newUser); // Create new user
    return res.send("User created successfully.");
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

// Complaints endpoint
app.post("/complaints", async (req, res) => {
  try {
    const { systemName, complaint } = req.body;
    console.log("Complaint received from frontend:", req.body);

    const newComplaint = {
      systemName: systemName,
      complaint: complaint,
    };

    await collection.ComplaintModel.create(newComplaint); // Create new complaint
    return res.send("Complaint recorded successfully");
  } catch (error) {
    console.error("Complaint handling error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

// Get list of systems endpoint
app.get("/systems", async (req, res) => {
  try {
    const systems = await collection.SystemModel.find(); // Fetch list of systems from database
    return res.json(systems); // Return list of systems as JSON response
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Return error for any server-side error
  }
});

// setting or giving username to navbar
app.get("/userNavbar", async (req, res) => {
  try {
    //console.log("Worked");
    const responseData = {
      userNavbar: userNavbar,
      userLogged: userLogged,
    };
    return res.send(responseData); // Return object containing username and login state to navbar
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Return error for any server-side error
  }
});

//storing systemName in backend
// Complaints endpoint
app.post("/systemName", async (req, res) => {
  try {
    //const { systemName } = req.body;
    //console.log("systemName received from frontend:", req.body.systemName);
    userSystem = req.body.systemName;
  } catch (error) {
    console.error("Complaint handling error:", error);
    return res.status(500).send("Internal server error"); // Return error for any server-side error
  }
});

// giving systemName to maintenance
app.get("/getSystem", async (req, res) => {
  try {
    //console.log("Worked");
    return res.send(userSystem); // Return userSyatem to maintenance
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" }); // Return error for any server-side error
  }
});

const port = process.env.PORT || 5000; // Set port for server
app.listen(port, () => {
  console.log("Server running on port:", port); // Start server and log port number
});
