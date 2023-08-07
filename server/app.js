const express = require("express");
const morgan = require("morgan");
const app = express();

// MIDDLEWEAR
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

// ROUTES

module.exports = app;
