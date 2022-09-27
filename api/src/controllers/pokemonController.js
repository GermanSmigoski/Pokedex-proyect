const axios = require("axios");
const { Pokemon, Tipo } = require("../db");

const getApiPokemons = async () => {
  const apiCall = await axios("https://pokeapi.co/api/v2/pokemon?limit=12");

  const moreInfo = apiCall.data.results.map((el) => {
    return el.url;
  });
  let arrayPokemons = [];
  for (var i = 0; i < moreInfo.length; i++) {
    const info = await axios(moreInfo[i]);
    arrayPokemons.push({
      id: info.data.id,
      weight: info.data.weight,
      height: info.data.height,
      name: info.data.name,
      hp: info.data.stats.find((e) => e.stat.name === "hp").base_stat,
      attack: info.data.stats.find((e) => e.stat.name === "attack").base_stat,
      defense: info.data.stats.find((e) => e.stat.name === "defense").base_stat,
      speed: info.data.stats.find((e) => e.stat.name === "speed").base_stat,
      types: info.data.types.map((e) => (e = { name: e.type.name })),
      image: info.data.sprites.other.dream_world.front_default,
    });
  }

  return arrayPokemons;
};

const getDbPokemons = async () => {
  return await Pokemon.findAll({
    include: {
      model: Tipo,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokemons = async () => {
  const apiInfo = await getApiPokemons();
  const dbInfo = await getDbPokemons();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};

module.exports = {
  getAllPokemons,
};
