const express = require("express");
const morgan = require("morgan");
const app = express();

const courseRouter = require("./routes/coursesRouter");

// MIDDLEWEAR ----------
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

// ROUTES -----------

app.use("/api/v1/courses", courseRouter);

module.exports = app;
