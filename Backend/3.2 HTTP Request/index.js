import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello World<h1>");
})

app.get("/contact", (req, res) => {
  res.send("<h1>You are in the contact page<h1>");
})

app.get("/about", (req, res) => {
  res.send("<h1>You are in my about me page<h1>");
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})