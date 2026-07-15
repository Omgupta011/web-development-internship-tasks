const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let users = [];

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {

    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.send("All fields are required");
    }

    if (password !== confirmPassword) {
        return res.send("Passwords do not match");
    }

    users.push(req.body);

    console.log(users);

    res.send("Form Submitted Successfully!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});