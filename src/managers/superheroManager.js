const superheroes = [];
exports.getAll = () => superheroes.slice();
exports.create = (superheroData) => {
  const newSuperhero = {
    id: superheroes.length + 1,
    ...superheroData,
  };
  superheroes.push(newSuperhero);

  return newSuperhero;
};
