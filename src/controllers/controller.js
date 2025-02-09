const router = require("express").Router();
const superheroManager = require("../managers/superheroManager");
router.get("/", (req, res) => {
  const superheros = superheroManager.getAll();
  res.render("index", { superheros });
});
router.get("/create", (req, res) => {
  res.render("create");
});

module.exports = router;
