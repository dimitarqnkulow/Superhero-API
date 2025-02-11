const uniqid = require("uniqid");
const superheroes = [
  {
    id: "i78icswm6xoyg5n",
    name: "Batman",
    superPower: "Fight Skills",
    imageUrl: "/images/BATMAN.svg",
    humilityScore: 7,
  },
  {
    id: "c8kichvkm6xoyg5n",
    name: "Captain America",
    superPower: "Shield Defence",
    imageUrl: "/images/CAPTAIN-AMERICA.svg",
    humilityScore: 8,
  },
  {
    id: "c8kicswm6xopg5n",
    name: "Superman",
    superPower: "Flying",
    imageUrl: "/images/SUPERMAN.svg",
    humilityScore: 9,
  },
  {
    id: "c8kicswm6xoyb7o",
    name: "The Flash",
    superPower: "Speed",
    imageUrl: "/images/THE-FLASH.svg",
    humilityScore: 6,
  },
];
exports.getAll = () => superheroes.slice();
exports.getOne = (superheroId) => superheroes.find((x) => x.id == superheroId);
exports.create = (superheroData) => {
  const { name, superPower, imageUrl, humilityScore } = superheroData;
  if (!name || !superPower || !imageUrl || !humilityScore) {
    throw new Error(
      `Request body must include ${!name ? "name" : ""}, ${
        !superPower ? "superPower" : ""
      }, ${!imageUrl ? "imageUrl" : ""}, ${
        !humilityScore ? "humilityScore" : ""
      }!`
    );
  }
  if (
    typeof humilityScore !== "number" ||
    humilityScore < 1 ||
    humilityScore > 10
  ) {
    throw new Error("Humility score must be a number between 1 and 10!");
  }
  const newSuperhero = {
    id: uniqid(),
    name,
    superPower,
    imageUrl,
    humilityScore,
  };
  superheroes.push(newSuperhero);

  return newSuperhero;
};
