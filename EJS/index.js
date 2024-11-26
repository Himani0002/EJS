// const express = require("express");
// const path = require("path");
// const app = express();

// // Set EJS as the view engine
// app.set("view engine", "ejs");

// // Set the views directory
// app.set("views", path.join(__dirname, "views"));

// // Define a route to render the home page
// app.get("/", (req, res) => {
//   res.render("home"); // Make sure 'home.ejs' exists in the views directory
// });

// app.set("views", path.join(__dirname, "views")); // Adjust the path if the folder is in a different location
// app.set("view engine", "ejs");

// // Start the server
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

// const express = require("express");
// const path = require("path");
// const app = express();

// // Set the view engine to EJS
// app.set("view engine", "ejs");

// // Set the views directory
// app.set("views", path.join(__dirname, "views"));

// // app.get("/", (req, res) => {
// //   let DiceVal = Math.floor(Math.random() * 6) + 1;
// //   res.render("home", { DiceVal }); // This will look for home.ejs in the views folder
// // });

// app.get("/ig:username", (req, res) => {
//   let { username } = req.params;
//   const instaData = require("data.json");
//   res.render("instagram", { data: instaData[username] });
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });

const express = require("express");
const path = require("path");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the views directory
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
// Route for Instagram profile
app.get("/:username", (req, res) => {
  const { username } = req.params;
  console.log("Requested username:", username); // Debug log
  const instaData = require("./data.json");

  const userData = instaData[username];
  if (!userData) {
    console.log("User not found:", username); // Debug log
    return res.status(404).send("User not found");
  }

  res.render("instagram", { data: userData });
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
