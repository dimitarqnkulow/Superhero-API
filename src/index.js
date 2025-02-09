const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handelbarsConfig");

const app = express();

const PORT = 3000;

expressConfig(app);
handlebarsConfig(app);

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
