import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../Actions";
import SearchBar from "../SearchBar/SearchBar";
import Paginate from "../Paginate";
import Loading from "../Loading/Loading";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  //paginado//

  // const [page, setPage] = useState(1);
  // const [pokemonsPage, setPokemonsPage] = useState(12);
  // const lastPokemon = page * pokemonsPage;
  // const firstPokemon = lastPokemon - pokemonsPage;
  // // const currentPokemons = allPokemons.slice(firstPokemon, lastPokemon);
  // const paginated = (pageNumber) => {
  //   setPage(pageNumber);
  // };

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      {allPokemons?.length > 0 ? (
        <div className="body">
          <SearchBar />
          {allPokemons?.map((el) => {
            return (
              <div className="card" key={el.id}>
                <img
                  className="img"
                  src={el.image? el.image : <img src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"/>}
                  alt="Pokemon"
                  width="150px"
                  height="150px"
                />
                <h2 className="pokename">{el.name}</h2>
                <h4 className="type">{el.types?.map((el) => el.name)} </h4>
                <h6> {el.attack}</h6>
              </div>
            );
          })}
          <div>
            <Paginate
            // pokemonsPage={pokemonsPage}
            // allPokemons={allPokemons.length}
            // paginated={paginated}
            />
          </div>
        </div>
      ) : (
        <h4>esperando</h4>
      )}
    </div>
  );
};

export default Home;
