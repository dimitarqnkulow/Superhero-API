const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handelbarsConfig");
const controller = require("./controllers/controller");
const superheroController = require("./controllers/superheroController");

const app = express();

const PORT = 3000;

expressConfig(app);
handlebarsConfig(app);

app.use(controller);
app.use("/superhero", superheroController);
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
