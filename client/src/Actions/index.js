import axios from "axios";

export const getPokemons = () => async (dispatch) => {
  let res = await axios("http://localhost:3001/pokemons");
  dispatch({
    type: "GET_POKEMONS",
    payload: res.data,
  });
};

export const getTypes = () => async (dispatch) => {
  let res = await axios("http://localhost:3001/types");
  dispatch({
    type: "GET_TYPES",
    payload: res.data,
  });
};

export const createPokemon = (payload) => async () => {
  let res = await axios.post("http://localhost:3001/pokemons", payload);
  return {
    type: "POST_POKEMON",
    payload,
  };
};

export const searchName = (name) => async (dispatch) => {
  try {
    let res = await axios("http://localhost:3001/pokemons?name=" + name);
    dispatch({
      type: "SEARCH_NAME",
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const DbFilter = (payload) => {
  return {
    type: "DB_FILTER",
    payload,
  };
};

export const AtkFilter = (payload) => {
  return {
    type: "ATK_FILTER",
    payload,
  };
};

export const NameFilter = (payload) => {
  return {
    type: "NAME_FILTER",
    payload,
  };
};

export const TypeFilter = (payload) => {
  return {
    type: "TYPE_FILTER",
    payload,
  };
};
