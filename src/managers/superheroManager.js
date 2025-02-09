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
  const newSuperhero = {
    id: uniqid(),
    ...superheroData,
  };
  superheroes.push(newSuperhero);

  return newSuperhero;
};
