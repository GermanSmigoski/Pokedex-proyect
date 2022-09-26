const intialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case "GET_TYPES":
      return{
        ...state,
        types: action.payload
      }
    case "POST_POKEMON":
      return{
        ...state
      }

    case "SEARCH_NAME":
      return{
        ...state,
        pokemons: action.payload
      }
    case "DB_FILTER":
      let allPokemons = state.allPokemons;
      let dbFilter =
        action.payload === "created"
          ? allPokemons.filter((el) => el.createdInDb)
          : allPokemons.filter((el) => !el.createdInDb);
      return {
        ...state,
        pokemons: action.payload === "All" ? state.allPokemons : dbFilter,
      };
    case "ATK_FILTER":
      let pokemonsAll = state.allPokemons
      let atkFiltered = action.payload = 'Min' ?  pokemonsAll.sort((a,b) => (a.attack - b.attack)) :
      pokemonsAll.sort((a,b) => (b.attack - a.attack))
      return {
        ...state,
        pokemons: [...atkFiltered,]
      };
    case "NAME_FILTER":
      let nameFiltered = action.payload === 'A-Z' ? state.allPokemons.sort((a, b) => a.name.localeCompare(b.name)) :
      state.allPokemons.sort((a, b) => b.name.localeCompare(a.name)) 
      return {
        ...state,
        pokemons: [...nameFiltered,]
      };
      case "TYPE_FILTER":
      let pokemonsAll1 = state.allPokemons
      let typeFiltered =  pokemonsAll1.filter((el) => el.types?.map((el) => el.includes(action.payload)))
      return{
        state,
        pokemons: action.payload = 'All' ? [...allPokemons] : [...typeFiltered]
      }
    default:
      return {
        state,
      };
  }
};

export default rootReducer;
