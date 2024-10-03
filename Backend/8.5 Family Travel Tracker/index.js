import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "superuser",
  port: 5433,
});

let currentUserId = 1;
let users = [];

async function checkVisited() {
  const result = await db.query(
    "SELECT country_code FROM visited_countries JOIN users ON users.id = user_id WHERE user_id = $1;",
    [currentUserId]
  );
  return result.rows.map((country) => country.country_code);
}

async function getCurrentUser() {
  const result = await db.query("SELECT * FROM users");
  users = result.rows;
  return users.find((user) => user.id === currentUserId);
}

db.connect();

app.get("/", async (req, res) => {
  try {
    const countries = await checkVisited();
    const currentUser = await getCurrentUser();

    res.render("index.ejs", {
      countries: countries || [],
      total: countries.length || 0,
      users: users || [],
      color: currentUser ? currentUser.color : "teal", // Use the color from the database or "teal" if undefined
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/user", (req, res) => {
  if (req.body.add === "new") {
    res.render("new.ejs");
  } else {
    currentUserId = req.body.user;
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  const { name, color } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO users (name, color) VALUES($1, $2) RETURNING *;",
      [name, color]
    );

    currentUserId = result.rows[0].id;

    res.redirect("/");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.post("/add", async (req, res) => {
  const input = req.body.country.toLowerCase();

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input]
    );

    if (result.rows.length === 0) {
      throw new Error("Country does not exist");
    }

    const country_code = result.rows[0].country_code;
    const checkResult = await db.query(
      "SELECT * FROM visited_countries WHERE country_code = $1 AND user_id = $2;",
      [country_code, currentUserId]
    );

    if (checkResult.rows.length > 0) {
      throw new Error("Country already exists");
    }

    await db.query(
      "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2);",
      [country_code, currentUserId]
    );

    res.redirect("/");
  } catch (err) {
    console.error(err.message);
    const countries = await checkVisited();
    const currentUser = await getCurrentUser();

    res.render("index.ejs", {
      countries: countries || [],
      total: countries.length || 0,
      users: users || [],
      color: currentUser ? currentUser.color : "teal", // Default color
      error: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
