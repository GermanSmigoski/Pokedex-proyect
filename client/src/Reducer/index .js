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
      return {
        ...state,
        types: action.payload,
      };
    case "POST_POKEMON":
      return {
        ...state,
      };

    case "SEARCH_NAME":
      return {
        ...state,
        pokemons: action.payload,
      };
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
      let atkFilter;
      if (action.payload === "Default") {
        if (state.allPokemons.length) atkFilter = [...state.allPokemons];
        else atkFilter = [...state.pokemons];
      } else {
        atkFilter =
          action.payload === "Min"
            ? [...state.allPokemons].sort((a, b) => {
                if (a.attack > b.attack) return 1;
                if (b.attack > a.attack) return -1;
                return 0;
              })
            : [...state.allPokemons].sort((a, b) => {
                if (a.attack > b.attack) return -1;
                if (b.attack > a.attack) return 1;
                return 0;
              });
        return {
          ...state,
          pokemons: [...atkFilter],
        };
      }
    case "NAME_FILTER":
      let nameFiltered =
        action.payload === "A-Z"
          ? state.allPokemons.sort((a, b) => a.name.localeCompare(b.name))
          : state.allPokemons.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        pokemons: [...nameFiltered],
      };
    case "TYPE_FILTER":
      let pokemonsAll1 = state.allPokemons;
      let typeFiltered = pokemonsAll1.filter(el => el.types.map(el=>el.name).includes(action.payload))
      let otroFilter = action.payload === 'All' ? pokemonsAll1 : typeFiltered
      if(!otroFilter.length){
        otroFilter = [{msg:'Pokemon not found'}]
      } 
      return {
        ...state,
        pokemons: otroFilter

      };
    default:
      return {
        state,
      };
  }
};

export default rootReducer;
