const express = require("express");

const expressConfig = require("./config/expressConfig");
const handlebarsConfig = require("./config/handelbarsConfig");
const homeController = require("./controllers/controller");

const app = express();

const PORT = 3000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));
