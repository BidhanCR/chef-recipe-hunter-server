const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const chefs = require("./data/chefs.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef = chefs.find((n) => n.id === id);
  res.send(chef);
});

app.listen(port, () => {
  console.log(`FoodieFrenzy is running on port: ${port}`);
});
