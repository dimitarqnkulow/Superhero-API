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
    humilityScore: Number(humilityScore),
  });
  res.redirect("/");
});
module.exports = router;
