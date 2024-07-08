import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function countLetters (req, res, next) {
  let countOfLetters = req.body["fName"].length + req.body["lName"].length
  req.countOfLetters = countOfLetters
  next()
}


app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", countLetters, (req, res) => {
  res.render("index.ejs", {numberOfLetters: req.countOfLetters})
  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
