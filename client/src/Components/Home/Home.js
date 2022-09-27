import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../Actions";
import SearchBar from "../SearchBar/SearchBar";
import Paginate from "../Paginate";
import Loading from "../Loading/Loading";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  //paginado//

  const [page, setPage] = useState(1);
  const [pokemonsPage, setPokemonsPage] = useState(12);
  const lastPokemon = page * pokemonsPage;
  const firstPokemon = lastPokemon - pokemonsPage;
  const currentPokemons = allPokemons?.slice(firstPokemon, lastPokemon);
  const paginated = (pageNumber) => {
    setPage(pageNumber);
  };
  console.log(allPokemons)

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes())
  }, []);

  function handleClick(e){
    e.preventDefault()
    dispatch(getPokemons(e))
  }

  return (
    <div className="body">
        <SearchBar className="searchbar" />
      <div>
      {allPokemons?.length ? 
        allPokemons[0].msg === 'Pokemon not found' ?
        <div>
          <h1>pokemon not found</h1>
          <button onClick={(e) => handleClick(e)}>Back to page</button>
        </div>
       : (
         <div >
          {currentPokemons?.map((el) => {
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
          
        </div>

      ) : (
        <Loading/>
      )}      
      </div>
      <div>
            <Paginate
            pokemonsPage={pokemonsPage}
            allPokemons={allPokemons?.length}
            paginated={paginated}
            />        
      </div>
    </div>
  );
};

export default Home;
