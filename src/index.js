const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

const PORT = 3000;

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");
app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
