// const app = require("express")();

// or
require("dotenv").config();

const express = require("express");
const { blogs } = require("./model/index");
const app = express();


// app.use(express.json()) // use in client server architecture

app.use(express.urlencoded({ extended: true })); // monolithic architecture ma form dekhi patha ko data expresss lai bhujauna lai

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

// app.get("/", (req, res) => {
//   const data = {
//     name: "Rakesh Joshi",
//     age: 13,
//     location: "ktm",
//   };
//   const nepal = {
//     continent: "asia",
//   };
//   res.render("home.ejs", {
//     haha: data,
//     hehe: nepal,
//   });
// });

// app.get("/about", (req, res) => {
//   res.render("./about.ejs");
// });

app.get("/create", (req, res) => {
  res.render("create.ejs");
});

app.post("/create", async (req, res) => {
  console.log(req.body);

  const { title, subtitle, description } = req.body;
  await blogs.create({
    title: title,
    subtitle, //because left and right are same we can use like this
    description: description,
  });

  res.send("Blog added successfully!");
});

app.use(express.static("public/css/"));

app.listen(4000, () => {
  console.log("Hello project started");
});
