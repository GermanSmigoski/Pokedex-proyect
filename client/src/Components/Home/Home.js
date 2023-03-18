import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../Actions";
import Paginate from "../Paginate";
import Loading from "../Loading/Loading";
import "./Home.css";
import Filters from "../Filters/Filter";
import IconButton from "@mui/material/IconButton";
import Refresh from "@mui/icons-material/Refresh";
import Card from "../Card/Card";
const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [open, setOpen] = useState(false);

  //modal//

  const handleOpen = (e) => {
    e.preventDefault(e);
    setOpen(true);
  };
  const handleClose = (e) => {
    e.preventDefault(e);
    setOpen(false);
  };

  //paginado//

  const [page, setPage] = useState(1);
  const [pokemonsPage, setPokemonsPage] = useState(8);
  const lastPokemon = page * pokemonsPage;
  const firstPokemon = lastPokemon - pokemonsPage;
  const currentPokemons = allPokemons?.slice(firstPokemon, lastPokemon);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };
  console.log(allPokemons);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getPokemons(e));
  }

  return (
    <div className="body">
      <Filters></Filters>
      <div>
        <IconButton
          style={{ minWidth: "50px", minHeight: "50px" }}
          onClick={(e) => handleClick(e)}
        >
          {" "}
          <Refresh />{" "}
        </IconButton>
        {allPokemons?.length ? (
          allPokemons[0].msg === "Pokemon not found" ? (
            <div>
              <h1>pokemon not found</h1>
              <button onClick={(e) => handleClick(e)}>Back to page</button>
            </div>
          ) : (
            <div className="pokemonContainer">
              {currentPokemons?.map((el) => {
                return (
                  <div className="cardContainer" key={el.id}>
                    <Card
                      image={el.image}
                      name={el.name}
                      types={el.types}
                      attack={el.attack}
                      defense={el.defense}
                      hp={el.hp}
                    />
                  </div>
                );
              })}
            </div>
          )
        ) : (
          <Loading />
        )}
      </div>
      <div className="paginate">
        <Paginate
          pokemonsPage={pokemonsPage}
          allPokemons={allPokemons?.length}
          paginated={paginated}
          page={page}
        />
      </div>
    </div>
  );
};

export default Home;
