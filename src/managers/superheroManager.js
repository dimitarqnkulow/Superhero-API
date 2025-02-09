const uniqid = require("uniqid");
const superheroes = [];
exports.getAll = () => superheroes.slice();
exports.create = (superheroData) => {
  const newSuperhero = {
    id: uniqid(),
    ...superheroData,
  };
  superheroes.push(newSuperhero);

  return newSuperhero;
};
