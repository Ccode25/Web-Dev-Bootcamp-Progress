import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath} from "url";
import path from "path"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

function checkDay (req, res, next) {
  const today = new Date();
  let day = today.getDay();
  let message1= "";
  let message2= "";
  if (day === 0 || day === 6) {
    message1 = 'weekend today';
    message2 = 'have fun!';
  }
  else {
    message1 = 'weekday today';
    message2 = 'work hard!';
  }
  req.message1 = message1;
  req.message2 = message2;
  next();

}

// app.get("/", checkDay, (req, res) => {
//   res.render("/view/index.ejs", {day: req.message1, action: req.message2});
// });

app.get('/', checkDay, (req, res) => {
  res.render('index.ejs', { day: req.message1, action: req.message2 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



