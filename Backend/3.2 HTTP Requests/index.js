import express from "express";
const app = express();

app.get("/", (req,res) => {
    res.send("Hello HTTP Requests!");
});

app.get("/home", (req,res) => {
    res.send("<h1>This is a Home Page</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1>About Page</h1>");
});

app.get("/contact", (req,res) => {
    res.send("<h1>This is a Contact Page</h1></fr><p>Smart: 09813082969</p><p>Globe: 09dikoalamnakalimutanko</p>");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});