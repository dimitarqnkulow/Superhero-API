const router = require("express").Router();
const superheroManager = require("../managers/superheroManager");

router.get("/create", (req, res) => {
  console.log(superheroManager.getAll());
  res.render("create");
});
router.get("/details/:superheroId", (req, res) => {
  const superhero = superheroManager.getOne(req.params.superheroId);
  res.render("details", { ...superhero });
});
router.post("/create", (req, res) => {
  try {
    const superheroData = req.body;
    superheroManager.create({
      name: superheroData.name,
      superPower: superheroData.superPower,
      imageUrl: superheroData.imageUrl,
      humilityScore: Number(superheroData.humilityScore)
        ? Number(superheroData.humilityScore)
        : superheroData.humilityScore,
    });
    res.redirect("/");
    res.status(302);
  } catch (error) {
    res.render("create", { error: error.message });
    res.status(400);
  }
});
module.exports = router;
