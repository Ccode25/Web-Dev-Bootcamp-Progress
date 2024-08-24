import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Route to render main page
app.get("/", async (req, res) => {
  const response = await axios.get(`${API_URL}/posts`);
  res.render("index.ejs", {posts : response.data});
});

//Route to render new post
app.get("/new", async (req, res) => {
  res.render("modify.ejs", {heading : "New Post", submit : "Create Post"});
})

//Create a new post
app.post("/api/posts", async (req, res) => {
  try {
    await axios.post(`${API_URL}/posts`, req.body);
    res.redirect("/");
  }
  catch (error) {
    res.status(500).json({message: "Error creating post"});

  }
})

//Route to handle edit post
app.get("/edit/:id", async (req, res) => {
  try {
  const id = parseInt(req.params.id);
  const response = await axios.patch(`${API_URL}/posts/${id}`);
  res.render("modify.ejs", {posts : response.data, heading : "Edit Post", submit : "Update Post"});
  }
  catch(error) {
    res.status(500).json({message : "Error fetching post"})
  }
})

//Route to update blog
app.post("/api/posts/:id", async (req, res) => {
  try {
  const id = parseInt(req.params.id);
  const response = await axios.patch(`${API_URL}/posts/${id}`, req.body);
  res.redirect("/")
  }
  catch (error) {
    res.status(500).json({error : "Error updating post"});
  }
});

//Route to delete blog
app.get("/api/posts/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await axios.delete(`${API_URL}/posts/${id}`)
    res.redirect("/");
  }
  catch(error) {
    res.status(404).json({message : "No data was deleted"});
  }
})

app.listen(port, () => {
  console.log(`Router is running on port: ${port}`);
})


