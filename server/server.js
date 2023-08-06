const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    users: ["u1", "u2", "u3"],
  });
});

app.listen(5500, () => {
  console.log("Server started on port 5500");
});
