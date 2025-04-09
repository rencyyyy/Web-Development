import express from "express";
import { dirname } from "path"; // bundled from node module
import { fileURLToPath } from "url"; // bundled from node module
const __dirname = dirname(fileURLToPath(import.meta.url)); // conversion of directory | file name into a path

// Challenge | Console log the information that the client inputted in the form using body-parse middle ware and post route
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html"); // respond sendFile method ( directory name + name of the path)
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
}); 
