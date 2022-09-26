const axios = require("axios");
const { Tipo } = require("../db");

const getTypes = async () => {
  const apiCall = await axios("https://pokeapi.co/api/v2/type");

  const types = apiCall.data.results.map((el) => el.name);
  types.forEach((el) => {
    Tipo.findOrCreate({
      where: { name: el },
    });
  });

  // Tipo.bulkCreate(types);

  const allTypes = Tipo.findAll();
  return allTypes;
};

module.exports = {
  getTypes,
};
