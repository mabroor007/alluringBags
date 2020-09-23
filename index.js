const express = require("express");

// App initialized
const app = express();

// view engine setup
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("main");
});

// App listening
app.listen(3000, () => {
  console.log("Listening on port 3000...");
});
