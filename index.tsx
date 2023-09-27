const express = require("express");
const app = express();
const cors = require("cors");
const country = require("./country.json");

app.use(cors());

const port = process?.env?.PORT || 4000;

app.get("/", (req, res) => {
  res?.send("hello boom");
});

app.get("/services", (req, res) => {
  res?.send(JSON.stringify(country));
});

app.listen(port, () => {
  console.log("server started");
});
