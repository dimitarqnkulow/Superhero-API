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
      humilityScore: Number(superheroData.humilityScore),
    });
    res.redirect("/");
    res.sendStatus(200);
    return res.json(superheroData);
  } catch (error) {
    console.log(error);

    res.render("create", { error: error.message });
    // res.sendStatus(400);
    // res.json({ error: error.message });
  }
});
module.exports = router;
