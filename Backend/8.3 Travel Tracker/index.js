import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
import axios from "axios";

const { Pool } = pkg;
const app = express();
const port = 3000;

// Create a connection pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "superuser",
  port: 5433
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET home page
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT country_code FROM visited_countries");
    // const countries = result.rows.map(country => country.country_code);
    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });

    // console.log(result.rows);
    res.render("index.ejs", { countries: countries, total: countries.length });
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add", async (req, res) => {
  try {
    const InputCountry = req.body.country.trim().toLowerCase(); // Normalize input
    console.log(InputCountry);
    
    const result = await pool.query("SELECT * FROM countries");
    let countries = result.rows;
    const searchCountry = countries.find((c) => c.country_name.toLowerCase() === InputCountry); // Normalize database values
    console.log(searchCountry);

    const input_country_code = searchCountry.country_code;
    console.log(input_country_code);
    
    try {
    await pool.query("INSERT INTO visited_countries (country_code) VALUES ($1)",
      [input_country_code]);
    res.redirect("/")
    }
    catch(err) {
      console.log({error : "Country already exist"});
      const result = await pool.query("SELECT country_code FROM visited_countries");
      // const countries = result.rows.map(country => country.country_code);
      let countries = [];
      result.rows.forEach((country) => {
      countries.push(country.country_code);
    });

    console.log(result.rows);
    res.render("index.ejs", { countries: countries, total: countries.length, error : "Country already exist"  });
    
    }

  
    }
  catch (err) {
    console.log({error : "Country does not exist"});
    const result = await pool.query("SELECT country_code FROM visited_countries");
    // const countries = result.rows.map(country => country.country_code);
    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });

    console.log(result.rows);
    res.render("index.ejs", { countries: countries, total: countries.length, error : "Country does not exist"  });
    
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});