const router = require("express").Router();
const superheroManager = require("../managers/superheroManager");

router.get("/create", (req, res) => {
  console.log(superheroManager.getAll());
  res.render("create");
});
router.post("/create", (req, res) => {
  const { name, superPower, imageUrl, humilityScore } = req.body;
  superheroManager.create({
    name,
    superPower,
    imageUrl,
    humilityScore: humilityScore,
  });
  res.sendStatus(200);
  res.redirect("/");
});
router.get("/details/:superheroId", (req, res) => {
  const superhero = superheroManager.getOne(req.params.superheroId);
  res.render("details", { ...superhero });
});
module.exports = router;
