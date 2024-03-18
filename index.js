import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

// app.get

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/aboutMe", (req, res) => {
  res.render("aboutMe.ejs");
});

app.get("/marylandFlag", (req, res) => {
  res.render("marylandFlag.ejs");
});

app.get("/nomaiWriting", (req, res) => {
  res.render("nomaiWriting.ejs");
});

app.get("/simon", (req, res) => {
  res.render("simon.ejs");
});

app.get("/slitherlinkSolver", (req, res) => {
  res.render("slitherlinkSolver.ejs");
});

app.get("/website", (req, res) => {
  res.render("website.ejs");
});

// start server

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});