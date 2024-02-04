const express = require("express");
const bcrypt = require("bcrypt");
const path = require("path");
const collection = require("./config");

const app = express();

//getting data from signup page
app.post("/signup", async (req, res) => {
  const data = {
    name: req.body.username,
    password: req.body.password,
  };
  //check if user already exists
  const existingUser = await collection.findOne({ name: data.name });
  if (existingUser) {
    res.send("User already exists.Plz try another username.");
  } else {
    //hash the password
    const saltRound = 10; // saltRound for bcrypt
    const hashedPassword = await bcrypt.hash(data.password, saltRound);

    data.password = hashedPassword; //replace hashed password with original password

    const userdata = await collection.insertMany(data);
    console.log(userdata);
  }
});

//getting data from login page
app.post("/login", async (req, res) => {
  try {
    const check = await collection.findOne({ name: req.body.username });
    if (!check) {
      res.send("User cannot found.");
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      check.password
    );
    if (isPasswordMatch) {
      res.send("passed");
    } else {
      res.send("Wrong password");
    }
  } catch {
    res.send("Wrong Details");
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("Server running on port:", port);
});
