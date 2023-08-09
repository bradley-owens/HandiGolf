const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const app = require("./app");
const coursesRouter = require("./routes/coursesRouter");

////////// DB CONNECTION -----------

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful!!");
  });

////////// SERVER -----------

const port = process.env.port || 5500;
app.listen(port, () => {
  console.log("Server started on port 5500");
});
