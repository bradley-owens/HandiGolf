const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");

/// DUMMY API DATA

app.get("/api", (req, res) => {
  res.json({
    users: ["u1", "u2", "u3"],
  });
});
////////// SERVER -----------

const port = process.env.port || 5500;
app.listen(port, () => {
  console.log("Server started on port 5500");
});
