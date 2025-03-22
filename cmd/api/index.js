const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allows frontend to send requests
app.use(bodyParser.json()); // Parses JSON requests

// Route to receive and log data
app.post("/data", (req, res) => {
  console.log("Received data:", req.body);
  res.status(200).json("Data received successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
