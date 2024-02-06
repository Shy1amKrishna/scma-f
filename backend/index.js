const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.post("/login", (req, res) => {
  console.log("Received 'data' from frontend");
  // Send 'hi' back to the frontend
  res.send("hello how are you");
});

app.listen(5000, () => console.log("App is running"));
