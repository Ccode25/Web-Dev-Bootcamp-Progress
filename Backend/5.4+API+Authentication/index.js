import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "Aeron25";
const yourPassword = "12345";
const yourAPIKey = "cd733a26-a53d-4525-b9c1-de720d45f31f";
const yourBearerToken = "a38214fc-87f3-49c2-bd47-b520c77935b7";


app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
 try {
  const response = await axios.get(API_URL + "random");
  const result = JSON.stringify(response.data);
  res.render("index.ejs", {content: result});
 }
 catch(error) {
  res.status(404).send(error.message);
 }
});

  



app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "all?page=2", {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
  });
  const result = JSON.stringify(response.data);
  res.render("index.ejs", {content: result})
}
catch(error) {
  res.status(404).send(error.message);
}
    
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(API_URL + 'filter', {
      params: {score: 5, apiKey: yourAPIKey},
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content: result});
  }
  catch(error) {
    res.status(404).send(error.message);
  }
 
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "secrets/2", {
      headers: {Authorization: `Bearer ${yourBearerToken}`},
    });
    const result = JSON.stringify(response.data);
    res.render("index.ejs", {content: result});
  }
  catch(error) {
    res.status(404).send(error.message);
  }
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


