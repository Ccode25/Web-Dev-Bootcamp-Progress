import express from "express";
import bodyParser from "body-parser";
import pg from "pg"
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secret",
  password: "superuser",
  port: 5433
});

db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  await db.query("INSERT INTO users (email, password) VALUES ($1, $2);", [email, password]);
  res.redirect("/");
});

app.post("/login", async (req, res) => {
  const userEmail = req.body.username;
  const userPassword = req.body.password;
  try {
  const result = await db.query("SELECT email, password FROM users WHERE email = $1 AND password = $2;", [userEmail, userPassword])
  if (result.rows > 0) {
      const data = result.rows[0];
      console.log(data.email);
      if ((userEmail == data.email) && (userPassword == data.password)) {
        res.render("secrets.ejs");
      }
}
}
  catch (err) {
    console.log({err: "Error"});
    res.redirect("/login")
  }
  

});
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
