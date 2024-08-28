// const app = require("express")();

// or

const express = require("express");
const app = express();

require("dotenv").config();

// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// app.get("/qw", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// api creating way...
// app.get("/oi", (req, res) => {
//   res.json({
//     message: "asefa",
//   });
// });

// app.get("/about", (req, res) => {
//   // /about is api
//   res.send("This is about page");
// });

app.set("view engine", "ejs"); //npm i ejs -> templating engine like blade in laravel

// use render if send through file
// app.get("/", (req, res) => {
//   res.render("home.ejs");
// });

require("./model/index");

app.get("/", (req, res) => {
  const data = {
    name: "Rakesh Joshi",
    age: 13,
    location: "ktm",
  };
  const nepal = {
    continent: "asia",
  };
  res.render("home.ejs", {
    haha: data,
    hehe: nepal,
  });
});

app.get("/about", (req, res) => {
  res.render("./about.ejs");
});

app.use(express.static("public/css/"));

app.listen(4000, () => {
  console.log("Hello project started");
});
