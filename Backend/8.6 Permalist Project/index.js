import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;
let users = [{
  id: 1, name: "Aeron"
}]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "superuser",
  port: 5433
});

db.connect()

async function itemData() {
  const result = await db.query("SELECT * FROM items ORDER BY id ASC");
  return result.rows;
}


app.get("/", async (req, res) => {
  items = await itemData()
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
    users: users
  });
  

});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  await db.query("INSERT INTO items (title) VALUES ($1);", [item]);
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const title = (req.body.updatedItemTitle);
  console.log(typeof title)
  const id = req.body.updatedItemId
  await db.query("UPDATE items SET title = ($1) WHERE id = $2;", [title, id]);
  res.redirect("/");
});
  
app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId
  await db.query("DELETE FROM items WHERE id = $1;", [id]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});