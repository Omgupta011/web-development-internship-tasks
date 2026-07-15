const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let submittedData = "";

app.get("/", (req, res) => {
  res.render("index", { data: submittedData });
});

app.post("/submit", (req, res) => {
  submittedData = req.body.name;
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});