const { Router } = require("express");
const { getAllPokemons } = require("../controllers/pokemonController");
const { getTypes } = require("../controllers/tipoController");
const { Pokemon, Tipo } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/pokemons", async (req, res) => {
  const name = req.query.name;
  const allPokemon = await getAllPokemons();

  if (name) {
    let pokemonsReq = await allPokemon.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    pokemonsReq
      ? res.status(200).send(pokemonsReq)
      : res.status(404).send("Pokemon not found");
  } else {
    res.status(202).send(allPokemon);
  }
});

router.get("/pokemons/:id", async (req, res) => {
  const id = req.params.id;
  const allPokemon = await getAllPokemons();
  if (id) {
    let pokemonFiltered = await allPokemon.filter((el) => el.id == id);
    pokemonFiltered
      ? res.status(200).send(pokemonFiltered)
      : res.status(404).send("Pokemon not found");
  }
});

router.get("/types", async (req, res) => {
  const apiTypes = await getTypes();

  res.status(200).send(apiTypes);
});

router.post("/pokemons", async (req, res) => {
  let {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    image,
    createdInDb,
    type,
  } = req.body;

  let pokemonCreated = await Pokemon.create({
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    createdInDb,
    image,
  });

  let DbTypes = Tipo.findAll({
    where: { name: type },
  });

  pokemonCreated.addTipo(DbTypes);

  res.send("Pokemon created correctly");
});

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
